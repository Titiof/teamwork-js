import Notiflix from 'notiflix';
import { BooksAPI } from './books-api';
import { createListMarkup } from './bookMarkupLi';

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
