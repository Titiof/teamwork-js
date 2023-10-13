import createBookMarkup from './bookMarkupLi';
import { BooksAPI } from './books-api';

import amazon from '../images/modal/amazon.webp'
import apple from '../images/modal/amazon-book.webp'

const modal = document.querySelector('.modal-shown');
const closeButton = document.querySelector('.close');
const addToListButton = document.querySelector('.add-button');
const removeFromListButton = document.querySelector('.remove-button');
const modalBookCard = document.querySelector('.modal-book-card');
const addSuccessMessage = document.querySelector('.add-success-message');

const bookArray = [];
let bookObject = {};
let isModalOpen = false;

function disableBackgroundScroll() {
  document.body.style.overflow = 'hidden';
}

function enableBackgroundScroll() {
  document.body.style.overflow = 'auto';
}

export function openModalFromBookCard(bookId) {
  fetchBookData(bookId);
  disableBackgroundScroll();
}

const bookCards = document.querySelector('.bestsellers-list');

bookCards.addEventListener('click', onCardClick);

async function onCardClick(event) {
  let listItem = event.target.closest('li');
  disableBackgroundScroll()
  if (listItem) {
    const data = await fetchBookData(listItem.id);
  }
}

async function fetchBookData(bookId) {
  try {
    const booksAPI = new BooksAPI();
    const data = await booksAPI.getBookById(bookId);

    addBookMarkup(data);
    // createBookObject(data);
    modal.classList.remove('is-hidden');
    modal.classList.add('show');
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

function addBookMarkup(data) {
  const bookMarkup = createMarkup(data);
 modalBookCard.innerHTML = bookMarkup;
}

function createMarkup(data) {
  const { book_image, title, author, description, buy_links } = data;
  const modalDescription = description || 'Description will be added later';
  return `<div class="book-id">
    <img class="modal-cover" src="${book_image}" alt="Обкладинка книги">
    <div class="book-info">
        <div class="heading">
            <h1 class="modal-title">${title}</h1>
            <h3 class="modal-author">${author}</h3>
        </div>
        <p class="modal-description">${modalDescription}</p>
        <ul class="book-shops">
            <li class="shop"><a href="${buy_links[0].url}" class="shop-link" target="_blank">
                <img
                class="shops-item-icon"
                src="${amazon}"
                alt="Amazon-logo" 
                />
            </a></li>
            <li class="shop"><a href="${buy_links[1].url}" class="shop-link" target="_blank">
                <img
                class="shops-item-icon-book"
                src="${apple}"
                alt="Apple-Books-logo" 
                /></a></li>
        </ul>
    </div>
</div>`;
}

addToListButton.addEventListener('click', () => {
  createBookObject(bookObject);
  disableBackgroundScroll();
  addSuccessMessage.textContent = 'Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
});

function createBookObject(data) {
  const { _id, book_image, title, author, buy_links, description } = data;
  bookObject = {
    _id,
    book_image,
    title,
    author,
    buy_links,
    description,
  };
  addToShoppingList();
}

function addToShoppingList() {
  if (bookObject) {
    bookArray.push(bookObject);
    localStorage.setItem('shopping-list', JSON.stringify(bookArray));
    addToListButton.classList.add('is-hidden'); 
    removeFromListButton.classList.remove('is-hidden');
    removeFromListButton.addEventListener('click', removeFromShoppingList);
  }
}


function removeFromShoppingList() {
  const bookIdToRemove = bookObject._id;
  const indexToRemove = bookArray.findIndex(book => book._id === bookIdToRemove);
  addSuccessMessage.textContent = '';
  if (indexToRemove !== -1) {
    bookArray.splice(indexToRemove, 1);
    localStorage.setItem('shopping-list', JSON.stringify(bookArray));
    addToListButton.classList.remove('is-hidden'); 
    removeFromListButton.classList.add('is-hidden');
  }
}

closeButton.addEventListener('click', () => {
  modal.classList.add('is-hidden');
  modal.classList.remove('show')
  enableBackgroundScroll();
  addToListButton.classList.remove('is-hidden'); 
  removeFromListButton.classList.add('is-hidden');
  addSuccessMessage.textContent = ''
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.classList.add('is-hidden');
    modal.classList.remove('show')
    enableBackgroundScroll();
    addToListButton.classList.remove('is-hidden'); 
    removeFromListButton.classList.add('is-hidden');
    addSuccessMessage.textContent = ''
  }
};

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.add('is-hidden');
    modal.classList.remove('show')
    enableBackgroundScroll();
    addToListButton.classList.remove('is-hidden'); 
    removeFromListButton.classList.add('is-hidden');
    addSuccessMessage.textContent = ''
  }
});

const shopLinks = document.querySelectorAll('.shop-link');

shopLinks.forEach(shopLink => {
  shopLink.addEventListener('click', function (e) {
    e.preventDefault();
    const url = shopLink.getAttribute('href');
    window.open(url, '_blank');
  });
});
