import { BooksAPI } from './books-api';

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close');
const addToListButton = document.querySelector('.add-button');
const removeFromListButton = document.querySelector('.remove-button');
const bookCard = document.querySelector('.modal-book-card')

async function openModal(bookId) {
  try {
    const data = await getBooks(bookId);
    function addMarkup(bookId){
        bookCard.innerHTML = createMarkup(data);
    }
    addMarkup(data);
    makeBookObjects(data);
  } catch (error) {
    console.error(error.message);
  }
}

function createMarkup(data){
    const {_id, book_image, title, author, description, buy_links} = data;
    return `<div class="book-id">
    <img class="modal-cover" src="${book_image}" alt="book cover">
    <div class="book-info">
        <div class="heading">
            <h1 class="modal-title">${title}</h1>
            <h3 class="modal-author">${author}</h3>
        </div>
        <p class="modal-decription">${description}</p>
        <ul class="book-shops">
            <li class="shop"><a href="${buy_links[0].url}" class="shop-link" target="_blank"></a></li>
            <li class="shop"><a href="${buy_links[1].url}" class="shop-link" target="_blank"></a></li>
        </ul>
    </div>
</div>`
}

const bookArray = [];
let bookObject ={};

function bookObject({ _id, book_image, title, author, buy_links, description }){
    bookObject = {_id, book_image, title, author, buy_links, description}
}

function addToShoppingList(bookId) {
    if(e.target.tagName === 'BUTTON'){
        if(bookObject){
            bookArray.push(bookObject);
            localStorage.setItem('shopping-list', JSON.stringify(bookArray));
            addToListButton.classList.add('is-hidden');
            removeFromListButton.classList.remove(('is-hidden'));
            removeFromListButton.addEventListener('click', removeFromShoppingList)
        }
    }
}

function removeFromShoppingList(bookId) {
    if(e.target.tagName === 'BUTTON'){
        const removeBook = bookObject._id;
        const removeIndex = bookArray.filter(id => id !== bookId);
        if(removeIndex !== -1){
            bookArray.splice(removeIndex, 1);
            localStorage.setItem('shopping-list', JSON.stringify(bookArray));
            removeFromListButton.classList.add('is-hidden');
            addToListButton.classList.remove(('is-hidden'));
        }
    } 
}
addToListButton.addEventListener('click', addToShoppingList);

closeButton.onClick = function(){
  modalContent.classList.remove('active')
  document.body.classList.remove('modal-open')
}

window.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    modalContent.classList.remove('active')
    document.body.classList.remove('modal-open')
  }
});