import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { booksTemplate } from './shopping-list';
import { Notify } from 'notiflix';

const listBooksEl = document.querySelector('.shopping-list-selector');

const books = JSON.parse(localStorage.getItem('shopping-list'));
let currPage = 1;
let itemsPerPage = 3;

if (window.innerWidth < 768) {
  itemsPerPage = 2;
}

const options = {
  totalItems: books.length,
  itemsPerPage: itemsPerPage,
  visiblePages: itemsPerPage,
};
let pagination;

export function resetPag(i) {
  if (i <= 3) {
    pagination = null;
    try {
      const p = document.querySelector('#tui-pagination-container');
      p.remove();
    } catch (err) {
      if (i === 1) Notify.info(`There is one book in your shopping cart.`);
      if (i === 2 || i === 3)
        Notify.info(`There are ${i} books in your shopping cart.`);
    }
  } else pagination.setTotalItems(i);
}

export function isPagination() {
  if (books.length > 3) {
    listBooksEl.insertAdjacentHTML(
      'afterend',
      `<div id="tui-pagination-container" class="tui-pagination"></div>`
    );
    pagination = new Pagination('#tui-pagination-container', options);
    document
      .querySelector('#tui-pagination-container')
      .addEventListener('click', () => {
        if (pagination.getCurrentPage() !== currPage) {
          currPage = pagination.getCurrentPage();
          listBooksEl.innerHTML = booksTemplate(getPagArr());
        }
      });
  }
}

function getPagArr() {
  const books = JSON.parse(localStorage.getItem('shopping-list'));
  let page = pagination.getCurrentPage();
  return books.splice(page * 3 - 3, 3);
}
