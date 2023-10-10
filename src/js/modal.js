import { BooksAPI } from './books-api';

const modal = document.querySelector('[data-modal]');
const closeButton = modal.querySelector('.close');
const addToListButton = modal.querySelector('.add-button');
const removeFromListButton = modal.querySelector('.remove-button');
const bookCard = modal.querySelector('.modal-book-card');

const bookArray = [];
let bookObject = {};

async function openModal(bookId) {
  try {
    const booksAPI = new BooksAPI();
    const data = await booksAPI.getBookById(bookId);
    addMarkup(data);
    makeBookObjects(data);
    modal.classList.remove('is-hidden');
  } catch (error) {
    console.error(error.message);
  }
}

function addMarkup(data) {
  const markup = createMarkup(data);
  bookCard.innerHTML = markup;
}

function createMarkup(data) {
  const { _id, book_image, title, author, description, buy_links } = data;
  return `<div class="book-id">
    <img class="modal-cover" src="${book_image}" alt="Обкладинка книги">
    <div class="book-info">
        <div class="heading">
            <h1 class="modal-title">${title}</h1>
            <h3 class="modal-author">${author}</h3>
        </div>
        <p class="modal-description">${description}</p>
        <ul class="book-shops">
            <li class="shop"><a href="${buy_links[0].url}" class="shop-link" target="_blank">
            <img
            class="shops-item-icon"
             src="./images/modal/amazon.webp"
            alt="Amazone-logo" 
              />
              </a></li>
            <li class="shop"><a href="${buy_links[1].url}" class="shop-link" target="_blank">
            <img
            class="shops-item-icon"
            src="./images/modal/amazon-book.webp"
            alt="Apple-Books-logo" 
              /></a></li>
        </ul>
    </div>
</div>`;
}

function makeBookObjects(data) {
  const { _id, book_image, title, author, buy_links, description } = data;
  bookObject = { _id, book_image, title, author, buy_links, description };
}

function addToShoppingList(e) {
  if (e.target.tagName === 'BUTTON') {
    if (bookObject) {
      bookArray.push(bookObject);
      localStorage.setItem('shopping-list', JSON.stringify(bookArray));
      addToListButton.classList.add('is-hidden');
      removeFromListButton.classList.remove('is-hidden');
      removeFromListButton.addEventListener('click', removeFromShoppingList);
    }
  }
}

function removeFromShoppingList(e) {
  if (e.target.tagName === 'BUTTON') {
    const removeBookId = bookObject._id;
    const removeIndex = bookArray.findIndex((item) => item._id === removeBookId);
    if (removeIndex !== -1) {
      bookArray.splice(removeIndex, 1);
      localStorage.setItem('shopping-list', JSON.stringify(bookArray));
      removeFromListButton.classList.add('is-hidden');
      addToListButton.classList.remove('is-hidden');
    }
  }
}

addToListButton.addEventListener('click', addToShoppingList);
removeFromListButton.addEventListener('click', removeFromShoppingList);

closeButton.addEventListener('click', function () {
  modal.classList.add('is-hidden');
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.add('is-hidden');
  }
});

const shopLinks = document.querySelectorAll('.shop-link');

shopLinks.forEach((shopLink) => {
  shopLink.addEventListener('click', function (e) {
    e.preventDefault();
    const url = shopLink.getAttribute('href');
    window.open(url, '_blank');
  });
});