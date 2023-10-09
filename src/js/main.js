import Notiflix from 'notiflix';
import { BooksAPI } from './books-api';

const booksList = document.querySelector('.bestsellers-list');
const booksApi = new BooksAPI();

async function renderTopBooks() {
  try {
    const response = await booksApi.getBooks();
    console.log(response);

    // const splicedArray = response[0].books.splice(0, 3);
    // console.log(splicedArray);

    renderBooks(response[0].books);
  } catch (error) {
    Notiflix.Notify.failure('Oops, something went wrong!');
  }
}

renderTopBooks();

function createTopBooksMarkup(book) {
  return `<li>
      <div class="book-container">
        <h2></h2>
        <img src="${book.book_image}" alt="${book.description}" />
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      </div>
      <button type="button">See more</button>
    </li>`;
}

function renderBooks(books) {
  const markup = books.map(book => createTopBooksMarkup(book).join(''));
  booksList.innerHTML = markup;
}
