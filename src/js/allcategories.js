import { BooksAPI } from "./books-api";
import { menuTemplate } from "./allcategories/category_template";
import createBookMarkup from "./bookMarkupLi";

const listEl = document.querySelector('.vertical-menu');

const booksAPI = new BooksAPI();

window.addEventListener("DOMContentLoaded", async () => {
    try{
        const listData =  await booksAPI.getCategoriesList();
        //console.log(listData);
        const markup = menuTemplate(listData);
        listEl.insertAdjacentHTML("beforeend", markup);
    }catch(error) {
        Notiflix.Notify.failure('Oops, something went wrong!');
    }
});

listEl.addEventListener('click', onChangeCategoryPage);

async function onChangeCategoryPage(e){
    e.preventDefault();
    
    if(e.target.nodeName === "A"){
        const booksCategoryData = await booksAPI.getFullCategory(e.target.name);

        const bookLiEl = booksCategoryData.map(book =>{
            const markup = createBookMarkup(book);
            return markup;
        }).join('');

        const bookCategoryElements = `<ul class="top-books-wrapper">
        ${bookLiEl}
        </ul>`;
        document.querySelector('.bestsellers').innerHTML = bookCategoryElements;
    }
}