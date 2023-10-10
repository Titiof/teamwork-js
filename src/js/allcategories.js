import { BooksAPI } from "./books-api";
import { menuTemplate } from "./allcategories/category_template";

const listEl = document.querySelector('.vertical-menu');
const activeEl = document.querySelector("[name='allcategories']");

const booksAPI = new BooksAPI();

window.addEventListener("DOMContentLoaded", async () => {
<<<<<<< Updated upstream
    try{
        const listData =  await booksAPI.getCategoriesList();
        console.log(listData);
        const markup = menuTemplate(listData);
        listEl.insertAdjacentHTML("beforeend", markup);
    }catch(error) {
        Notiflix.Notify.failure('Oops, something went wrong!');
    }
=======
    const listData =  await fetchBookCategoryList();
    //console.log(listData);
    const markup = menuTemplate(listData);
    
    listEl.insertAdjacentHTML("beforeend", markup);

    activeEl.classList.add('active');

>>>>>>> Stashed changes
});

listEl.addEventListener('click', onChangeCategoryPage);

async function onChangeCategoryPage(e){
    e.preventDefault();

    if(e.target){
        console.log(e.target);
    }
    
    if(e.target.nodeName === "A"){
        console.log(e.target.name);
        const booksCategoryData = await booksAPI.getFullCategory(e.target.name);
        console.log(booksCategoryData);
        if (listEl.firstChild.classList.contains('active')){
            console.log(e.target);
        } else{
            activeEl.classList.remove('active');
            e.target.classList.add('active')
        }
       
    }
}

function changeActiveElMenu(){

}

