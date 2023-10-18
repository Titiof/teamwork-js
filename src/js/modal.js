import Notiflix from 'notiflix';
import { BooksAPI } from './books-api';

import apple from '../images/modal/amazon-book.webp';
import amazon from '../images/modal/amazon.webp';

const closeButton = document.querySelector('.close');
const addToListButton = document.querySelector('.add-button');
const removeFromListButton = document.querySelector('.remove-button');
const modalBookCard = document.querySelector('.modal-book-card');
const addSuccessMessage = document.querySelector('.add-success-message');
const backdrop = document.querySelector('.modal-backdrop');
const scrollUpBut = document.querySelector('#button-scroll-up');
const profileContainer = document.querySelector('.profile-container');

let bookArray = JSON.parse(localStorage.getItem('shopping-list')) || [];
let bookObject = {};
let currentId = null;

function disableBackgroundScroll() {
  document.body.style.overflow = 'hidden';
  scrollUpBut.classList.add('is-hidden');
}

function enableBackgroundScroll() {
  document.body.style.overflow = 'auto';
  scrollUpBut.classList.remove('is-hidden');
}

export function openModalFromBookCard(bookId) {
  currentId = bookId;
  fetchBookData(bookId);
  disableBackgroundScroll();
  updateAddButtonState()
  if (isBookInLocalStorage()) {
    addToListButton.classList.add('is-hidden');
    removeFromListButton.classList.remove('is-hidden');
  }
}

const bookCards = document.querySelector('.bestsellers-list');

bookCards.addEventListener('click', onCardClick);

async function onCardClick(event) {
  let listItem = event.target.closest('li');
  if (listItem) {
    currentId = listItem.id;
    await fetchBookData(listItem.id);
    disableBackgroundScroll();
  }
  if (isBookInLocalStorage(currentId)) {
    addToListButton.classList.add('is-hidden');
    removeFromListButton.classList.remove('is-hidden');
    addSuccessMessage.textContent =
      'Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  }
  updateAddButtonState();
}

async function fetchBookData(bookId) {
  try {
    const booksAPI = new BooksAPI();
    const data = await booksAPI.getBookById(bookId);

    addBookMarkup(data);
    backdrop.classList.remove('modal-hidden');
    backdrop.classList.add('show');
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

function isBookInLocalStorage(bookId) {
  const existingBookArray =
    JSON.parse(localStorage.getItem('shopping-list')) || [];
  return existingBookArray.some(book => book._id === bookId);
}

addToListButton.addEventListener('click', async () => {
  try {
    const bookId = currentId;
    if (!isBookInLocalStorage(bookId)) {
      const booksAPI = new BooksAPI();
      const data = await booksAPI.getBookById(bookId);
      createBookObject(data);
      disableBackgroundScroll();
      addSuccessMessage.textContent =
        'Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
      // При додаванні книги в localStorage, змінюйте кнопки "Add" і "Remove"
      addToListButton.classList.add('is-hidden');
      removeFromListButton.classList.remove('is-hidden');
    } else {
      // Книга вже є в localStorage, ви можете вивести повідомлення про це.
      Notiflix.Notify.failure('This book is already in your shopping list.');
    }
  } catch (error) {}
});

removeFromListButton.addEventListener('click', () => {
  // Код для видалення книги з localStorage
  const bookIdToRemove = currentId;
  const indexToRemove = bookArray.findIndex(
    book => book._id === bookIdToRemove
  );
  addSuccessMessage.textContent = '';
  if (indexToRemove !== -1) {
    bookArray.splice(indexToRemove, 1);
    localStorage.setItem('shopping-list', JSON.stringify(bookArray));
    // Оновіть кнопки "Add" і "Remove" після видалення
    addToListButton.classList.remove('is-hidden');
    removeFromListButton.classList.add('is-hidden');
  }
});

window.addEventListener('load', () => {
  const existingBookArray =
    JSON.parse(localStorage.getItem('shopping-list')) || [];
  if (existingBookArray.some(book => book._id === currentId)) {
    addToListButton.classList.add('is-hidden');
    removeFromListButton.classList.remove('is-hidden');
  }
  updateAddButtonState()
});

function createBookObject(data) {
  const { _id, list_name, book_image, title, author, buy_links, description } =
    data;
  bookObject = {
    _id,
    list_name,
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
  }
}

closeButton.addEventListener('click', () => {
  backdrop.classList.add('modal-hidden');
  backdrop.classList.remove('show');
  enableBackgroundScroll();
  addToListButton.classList.remove('is-hidden');
  removeFromListButton.classList.add('is-hidden');
  addSuccessMessage.textContent = '';
});

window.onclick = function (event) {
  if (event.target === backdrop) {
    backdrop.classList.add('modal-hidden');
    backdrop.classList.remove('show');
    enableBackgroundScroll();
    addToListButton.classList.remove('is-hidden');
    removeFromListButton.classList.add('is-hidden');
    addSuccessMessage.textContent = '';
  }
};

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    backdrop.classList.add('modal-hidden');
    backdrop.classList.remove('show');
    enableBackgroundScroll();
    addToListButton.classList.remove('is-hidden');
    removeFromListButton.classList.add('is-hidden');
    addSuccessMessage.textContent = '';
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

// Функція для перевірки стану profileContainer і встановлення стану кнопки add-button
function updateAddButtonState() {
  const isProfileContainerHidden = profileContainer.classList.contains('is-hidden');
  
  if (isProfileContainerHidden) {
  addToListButton.setAttribute('disabled', 'disabled');
    addSuccessMessage.textContent = 'For buying books please log in.';
    removeFromListButton.classList.add('is-hidden');// Hide the "Remove" button
  } else {
    if (!isBookInLocalStorage(currentId)) {
      addToListButton.removeAttribute('disabled');
      addSuccessMessage.textContent = '';
      removeFromListButton.classList.add('is-hidden'); // Hide the "Remove" button
    } else {
      addToListButton.removeAttribute('disabled');
      addSuccessMessage.textContent = 'For buying books please log in.'
      removeFromListButton.classList.remove('is-hidden');
    }
  }
}
// Викликаємо функцію для перевірки стану кнопки після завантаження сторінки
window.addEventListener('DOMContentLoaded', updateAddButtonState);