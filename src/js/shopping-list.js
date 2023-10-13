import { BooksAPI } from './books-api';

const refs = {
    shoppingList: document.querySelector('.shopping-list'),
    header: document.querySelector('.shopping-header'),
    container: document.querySelector('.shopping-plug')
};

const localStorageKey = 'shopping-list';

document.body.addEventListener('DOMContentLoaded', onLoadPage);

function bookTemplate({book_image, title, list_name, description, author }) {
    return ` <div class="shopping-border">
          <button class="shopping-button" type="button">
            <svg class="shopping-delete-icon" width="18" height="18" aria-label="trash">
              <use href="../images/sprite.svg#trash"></use>
            </svg>
          </button>
          <img class="img-card" src="${book_image}" alt="Book cover" />
          <div class="inform-box">
            <h2 class="shopping-title">${title}</h2>
            <h3 class="shopping-category">${list_name}</h3>
            <p class="shopping-description">${description}</p>
            <p class="shopping-author">${author}</p>
          </div>
          <img src="" alt="" />
        </div>`;
};

function booksTemplate(books) {
    return books.map(bookTemplate).join('');
 };


function renderShoppingList(books) { 
    const markup = booksTemplate(books);
    refs.shoppingList.innerHTML = markup;
};



function loadFromLS(key) {
    const data = localStorage.getItem(key);
    if (data) {
        try {
            return JSON.parse(data);
        } catch {
            return data;
        }
    }
    return null;
};



function onLoadPage() {
    const data = loadFromLS(localStorageKey);
    if (data && Object.keys(data).length > 0) {
        renderShoppingList(BooksAPI.getBookById(data));
        refs.header.classList.add('is-hidden');
        refs.container.classList.add('is-hidden');
    }
};


onLoadPage();