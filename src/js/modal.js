import createBookMarkup from './bookMarkupLi';
import { BooksAPI } from './books-api';

const modal = document.querySelector('.modal-shown');
const closeButton = document.querySelector('.close');
const addToListButton = document.querySelector('.add-button');
const removeFromListButton = document.querySelector('.remove-button');
const modalBookCard = document.querySelector('.modal-book-card');

const bookArray = [];
let bookObject = {};

export function openModalFromBookCard(bookId) {
  fetchBookData(bookId);
}

const bookCards = document.querySelector('.bestsellers-list');

bookCards.addEventListener('click', onCardClick);

async function onCardClick(event) {
  let listItem = event.target.closest('li');
  if (listItem) {
    const data = await fetchBookData(listItem.id);
    console.log(data);
  }
}

async function fetchBookData(bookId) {
  try {
    const booksAPI = new BooksAPI();
    const data = await booksAPI.getBookById(bookId);

    addBookMarkup(data);
    // createBookObject(data);
    modal.classList.remove('is-hidden');
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

function addBookMarkup(data) {
  const bookMarkup = createMarkup(data);

  modalBookCard.innerHTML = bookMarkup;
  console.log(modalBookCard);
}

function createMarkup(data) {
  const { book_image, title, author, description, buy_links } = data;
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
                alt="Amazon-logo" 
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
  addToListButton.classList.add('is-hidden');
  removeFromListButton.classList.remove('is-hidden');
  removeFromListButton.removeEventListener('click', removeFromShoppingList);
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
  const indexToRemove = bookArray.findIndex(
    book => book._id === bookIdToRemove
  );
  if (indexToRemove !== -1) {
    bookArray.splice(indexToRemove, 1);
    localStorage.setItem('shopping-list', JSON.stringify(bookArray));
    removeFromListButton.classList.add('is-hidden');
    addToListButton.classList.remove('is-hidden');
  }
}

closeButton.addEventListener('click', function () {
  modal.classList.add('is-hidden');
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.classList.add('is-hidden');
  }
};

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.add('is-hidden');
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
