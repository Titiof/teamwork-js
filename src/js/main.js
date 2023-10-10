import Notiflix from 'notiflix';
import { BooksAPI } from './books-api';
const booksList = document.querySelector('.bestsellers-list');
const booksApi = new BooksAPI();
async function onPageLoad() {
  try {
    const response = await booksApi.getBooks();
    createListMarkup(response);
  } catch (error) {
    Notiflix.Notify.failure('Oops, something went wrong!');
  }
}
onPageLoad();
function createListMarkup(books) {
  const lists = [];
  for (let i = 0; i < books.length; i += 1) {
    const liMarkup = books[i].books
      .map((book, idx) => {
        if (idx < 5) {
          return createBookMarkup(book);
        }
      })
      .join('');
    const markup = `<ul class="top-category-list">
    <h2 class="top-category-title">${books[i].list_name}</h2>
    <div class="top-books-wrapper">${liMarkup}</div>
  </ul>
  <button class="book-card-btn" type="button">See more</button>`;
    lists.push(markup);
  }
  booksList.innerHTML = lists.join('');
}
