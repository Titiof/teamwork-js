import { BooksAPI } from "./books-api";
import { menuTemplate } from "./allcategories/category_template";

const listEl = document.querySelector('.vertical-menu');

const booksAPI = new BooksAPI();

window.addEventListener("DOMContentLoaded", async () => {
    try{
        const listData =  await booksAPI.getCategoriesList();
        console.log(listData);
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
        console.log(e.target.name);
        const booksCategoryData = await booksAPI.getFullCategory(e.target.name);
        console.log(booksCategoryData);
    }
}


