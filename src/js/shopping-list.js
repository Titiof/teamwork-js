import { BooksAPI } from './books-api';

const refs = {
    shoppingList: document.querySelector('.shopping-list'),
    header: document.querySelector('.shopping-header'),
    container: document.querySelector('.shopping-plug')
};

const localStorageKey = 'addedBooks';

document.body.addEventListener('DOMContentLoaded', onLoadPage);

function bookTemplate({book_image, title, list_name, description, author }) {
    return `<div class="">
    <button class="" type="button"></button>
    <img class="" src="${book_image}" alt="Обкладинка книги">
    <h2 class="book-card-title">${title}</h2>
    <h3 class="">${list_name}</h3>
    <p class="">${description}</p>
    <p class="">${author}</p>
    <img src="" alt="">
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