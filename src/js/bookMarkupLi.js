const booksList = document.querySelector('.bestsellers-list');

export default function createBookMarkup(book) {
  return `<li class="book-card" id="${book._id}">
            <div class="book-card-wrapper">
            <img class="book-card-img" src="${book.book_image}" alt="${book.description}" loading="lazy" />
            <p class="book-text-backdrop">Click on card to see more</p>
            </div>
            <h3 class="book-card-title">${book.title}</h3>
            <p class="book-card-text">${book.author}</p>
        </li>`;
}

export function createListMarkup(books) {
  const lists = [];
  for (let i = 0; i < books.length; i += 1) {
    const liMarkup = books[i].books
      .map((book, idx) => {
        if (idx < 5) {
          return createBookMarkup(book);
        }
      })
      .join('');
    const markup = `<h2 class="top-category-title">${books[i].list_name}</h2>
    <ul class="top-category-list">
    ${liMarkup}
    </ul>
    <button class="book-card-btn" name='${books[i].list_name}' type="button">See more</button>`;
    lists.push(markup);
  }
  booksList.innerHTML = lists.join('');
}
