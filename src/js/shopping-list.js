import { BooksAPI } from './books-api';

const refs = {
    shoppingList: document.querySelector('.shopping-list-selector'),
    header: document.querySelector('.shopping-header'),
    container: document.querySelector('.shopping-plug')
};

const localStorageKey = 'shopping-list';

document.body.addEventListener('DOMContentLoaded', onLoadPage);

function bookTemplate({book_image, title, list_name, description, author, buy_links }) {
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
  <ul class="shopping-link">
    <li class="shop">
      <a href="${buy_links[0].url}" class="shop-link" target="_blank">
        <picture>
          <source
            srcset="
              ./images/shopping-list/amazon-logo.webp    1x,
              ./images/shopping-list/amazon-logo@2x.webp 2x
            "
            type="image/webp"
          />
          <source
            srcset="
              ./images/shopping-list/amazon-logo.png    1x,
              ./images/shopping-list/amazon-logo@2x.png 2x
            "
            type="image/png"
          />
          <img
            class="shops-icon-amazon"
            src="./images/shopping-list/amazon-logo.png"
            alt="Amazon-logo"
            loading="lazy"
          />
        </picture>
      </a>
    </li>
    <li class="shop">
      <a href="${buy_links[1].url}" class="shop-link" target="_blank">
        <picture>
          <source
            srcset="
              ./images/shopping-list/amazon-book.webp    1x,
              ./images/shopping-list/amazon-book@2x.webp 2x
            "
            type="image/webp"
          />
          <source
            srcset="
              ./images/shopping-list/amazon-book.png    1x,
              ./images/shopping-list/amazon-book@2x.png 2x
            "
            type="image/png"
          />
          <img
            class="shop-icon-book"
            src="./images/shopping-list/amazon-book.png"
            alt="Apple-Books-logo"
            loading="lazy"
          /> </picture
      ></a>
    </li>
  </ul>
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