export function menuTemplate(list){
    // console.log(list);
     return list.map(el => {
        return `<li class='list_name'>
                 <a href="#" name='${el.list_name}'>${el.list_name}</a>
             </li>`;
     }).join('');
 }