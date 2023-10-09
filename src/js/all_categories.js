import {BooksAPI} from "./books-api";

const listEl = document.querySelector('.vertical-menu');

const booksAPI = new BooksAPI();

async function fetchBookCategoryList(){
    return booksListData = await booksAPI.getCategoriesList(); 
}

function menuTemplate(list){
   // console.log(list);
    return list.map(el => {
       return `<li class='list_name'>
                <a href="#" name='${el.list_name}'>${el.list_name}</a>
            </li>`;
    }).join('');
}

window.addEventListener("DOMContentLoaded", async () => {
    const listData =  await fetchBookCategoryList();
    //console.log(listData);
    const markup = menuTemplate(listData);
    
    listEl.insertAdjacentHTML("beforeend", markup);
});

listEl.addEventListener('click', onChangeCategoryPage);

function onChangeCategoryPage(e){
    e.preventDefault();
    console.log(e.target.name);
    if(e.target.nodeName === "A"){
        return nameLink = e.target.name;
    }
}


