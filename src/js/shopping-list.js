
import amazon from '../images/shopping-list/amazon-logo@2x.webp';
import apple from '../images/shopping-list/amazon-book@2x.webp';
import sprite from '../images/sprite.svg';

const refs = {
    shoppingList: document.querySelector('.shopping-list-selector'),
    header: document.querySelector('.main-header'),
    container: document.querySelector('.shopping-plug'),
};

const localStorageKey = 'shopping-list';

function onLoadPage() {
  const loadedData = loadFromLS(localStorageKey);
  if (loadedData.length > 0) {
      renderShoppingList(loadedData);
      refs.header.classList.add('is-hidden');
      refs.container.classList.add('is-hidden');
  }
}

onLoadPage();

function bookTemplate({_id, book_image, title, list_name, description, author, buy_links }) {
   const shopDescription = description || 'Description will be added later';
    return ` <li class="shopping-border">
  <button class="shopping-button" type="button" id="${_id}">
    <svg class="shopping-delete-icon" width="18" height="18" aria-label="trash">
      <use href="${sprite}#trash"><use>
    </svg>
  </button>
  <img class="img-card" src="${book_image}" alt="Book cover" />
  <div class="inform-box">
    <h2 class="shopping-title">${title}</h2>
    <h3 class="shopping-category">${list_name}</h3>
    <p class="shopping-description">${shopDescription}</p>
    <p class="shopping-author">${author}</p>
  </div>
  <ul class="shopping-link">
    <li class="shop">
      <a href="${buy_links[0].url}" class="shop-link" target="_blank">
      <img
      class="shops-icon-amazon shops-item-icon"
      alt="Amazon-logo"
      src="${amazon}"
      loading="lazy"/>
      </a>
    </li>
    <li class="shop">
      <a href="${buy_links[1].url}" class="shop-link" target="_blank">
      <img
      class="shop-icon-book shops-item-icon-book"
      alt="Apple-Books-logo"
      src="${apple}"
      loading="lazy"/>
      </a>
    </li>
  </ul>
</li>`;
};

function booksTemplate(books) {
    return books.map(bookTemplate).join('');
 };

function renderShoppingList(books) { 
    const markup = booksTemplate(books);
    refs.shoppingList.innerHTML = markup;
};


function loadFromLS(key) {
    const savedData = localStorage.getItem(key);
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (error) {
      return [];
    }
  }
};


refs.shoppingList.addEventListener('click', onDeleteFromLS);

function onDeleteFromLS(e) {
  if (e.target.classList.contains('shopping-button') || e.target.classList.contains('shopping-delete-icon')) {
    const bookIdBtn = e.target.closest('button').id;
    const books_data = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const bookIndex = books_data.findIndex(book => book._id === bookIdBtn);

    if (bookIndex !== -1) {
      books_data.splice(bookIndex, 1);
      localStorage.setItem(localStorageKey, JSON.stringify(books_data));

      if (books_data.length === 0) {
        refs.header.classList.remove('is-hidden');
        refs.container.classList.remove('is-hidden');
      }

      renderShoppingList(books_data);
    }
  }
}
