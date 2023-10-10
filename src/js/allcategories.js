import {BooksAPI} from "./books-api";
import {menuTemplate} from "./allcategories/category_template";

const listEl = document.querySelector('.vertical-menu');

const booksAPI = new BooksAPI();

async function fetchBookCategoryList(){
    return booksListData = await booksAPI.getCategoriesList(); 
}

window.addEventListener("DOMContentLoaded", async () => {
    const listData =  await fetchBookCategoryList();
    //console.log(listData);
    const markup = menuTemplate(listData);
    
    listEl.insertAdjacentHTML("beforeend", markup);
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


