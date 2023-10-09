import {BooksAPI} from "./books-api";

const listEl = document.querySelector('.vertical-menu');

const booksAPI = new BooksAPI();

async function fetchBookCategoryList(){
    return booksListData = await booksAPI.getCategoriesList(); 
}
fetchBookCategoryList();

function menuTemplate(list){
    console.log(list);
    return list.map(el => {
       return `<li class='list_name'>
                <a href="#" name='${el.list_name}'>${el.list_name}</a>
            </li>`;
    }).join('');
}

window.addEventListener("DOMContentLoaded", async (e) => {
    const listData =  await fetchBookCategoryList();
   console.log(listData);
    const markup = menuTemplate(listData);
    
    listEl.insertAdjacentHTML("beforeend", markup);

});

// listEl.addEventListener('click', onChangeCategoryPage);

// function onChangeCategoryPage(e){
//     e.preventDefault();

//     if(e.target.nodeName === "A"){
//         return nameLink = e.target.name;
//     }
// }


