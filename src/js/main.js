import Notiflix from 'notiflix';
import { BooksAPI } from './books-api';
import { createListMarkup } from './bookMarkupLi';
import { toggleLoader } from './loader';

const booksApi = new BooksAPI();
async function onPageLoad() {
  toggleLoader();
  try {
    const response = await booksApi.getBooks();
    createListMarkup(response);
  } catch (error) {
    Notiflix.Notify.failure('Oops, something went wrong!');
  } finally {
    toggleLoader();
  }
}
onPageLoad();
