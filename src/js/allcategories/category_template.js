import createBookMarkup from "../bookMarkupLi";


export function menuTemplate(list){
    // console.log(list);
     return list.map(el => {
        return `<li class='list_name'>
                 <a href="#" name='${el.list_name}'>${el.list_name}</a>
             </li>`;
     }).join('');
 }

export function markupCategoryBook(array, category_name){
    //console.log(array);
    const bookLiEl = array.map(book =>{
        const markup = createBookMarkup(book);
        return markup;
    }).join('');

    //console.log(category_name);
    const bookCategoryElements = `
    <h2 class="main-header">${category_name}</h2>
    <ul class="category-books-wrapper">${bookLiEl}</ul>`;
    document.querySelector('.bestsellers-list').innerHTML = bookCategoryElements;
}