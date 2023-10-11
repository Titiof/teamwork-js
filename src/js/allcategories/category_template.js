import createBookMarkup from "../bookMarkupLi";


export function menuTemplate(list){
     return list.map(el => {
        return `<li class='list_name'>
                 <a href="#" name='${el.list_name}'>${el.list_name}</a>
             </li>`;
     }).join('');
 }

export function markupCategoryBook(array, category_name){
    const bookLiEl = array.map(book =>{
        const markup = createBookMarkup(book);
        return markup;
    }).join('');

    const categoryArray = category_name.split(" ");

    let lastElInd = categoryArray.length - 1;
    let lastEl = categoryArray[lastElInd];
    let firstPart = categoryArray.splice(0, lastElInd).join(" ");
   

    const bookCategoryElements = `
    <h2 class="main-header">${firstPart} 
        <span class="main-header-accent">${lastEl}</span>
    </h2>
    <ul class="category-books-wrapper">${bookLiEl}</ul>`;

    document.querySelector('.bestsellers-list').innerHTML = bookCategoryElements;
}