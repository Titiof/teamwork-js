import axios from 'axios';

export class BooksAPI {
  #BASE_URL = 'https://books-backend.p.goit.global';
  #END_POINT = '/books';
  #TOP_BOOKS = '/top-books';
  #CATEGORY_LIST = '/category-list';
  #CATEGORY = `/category?category=`;

  constructor(bookId, category) {
    this.bookID = bookId;
    this.category = null;
  }

  async getBooks() {
    try {
      const books = await axios.get(
        `${this.#BASE_URL}${this.#END_POINT}${this.#TOP_BOOKS}`
      );
      return books.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getCategoriesList() {
    try {
      const categoryList = await axios.get(
        `${this.#BASE_URL}${this.#END_POINT}${this.#CATEGORY_LIST}`
      );
      return categoryList.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getBookById(id) {
    try {
      const bookById = await axios.get(
        `${this.#BASE_URL}${this.#END_POINT}/${id}`
      );
      return bookById.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFullCategory(categoryName) {
    try {
      const fullCategory = await axios.get(
        `${this.#BASE_URL}${this.#END_POINT}${this.#CATEGORY}${categoryName}`
      );
      return fullCategory.data;
    } catch (error) {
      console.log(error);
    }
  }
}
