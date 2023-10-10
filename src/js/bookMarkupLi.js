export default function createBookMarkup(book) {
  return `<li class="book-card">
            <img class="book-card-img" src="${book.book_image}" alt="${book.description}" loading="lazy" width ="180" height ="256" />
            <h3 class="book-card-title">${book.title}</h3>
            <p class="book-card-text">${book.author}</p>
        </li>`;
}
