function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);let l=localStorage.getItem("darkMode");const r=document.querySelector("#dark-mode-toggle"),c=document.querySelector("#dark-mode-toggle-two"),s=document.querySelector(".checkbox"),i=()=>{document.body.classList.add("darkmode"),localStorage.setItem("darkMode","enabled"),s.checked=!0},d=()=>{document.body.classList.remove("darkmode"),localStorage.setItem("darkMode",null),s.checked=!1};"enabled"===l&&i(),r.addEventListener("click",(()=>{l=localStorage.getItem("darkMode"),"enabled"!==l?(i(),c.checked=!0):(d(),c.checked=!1)})),c.addEventListener("click",(()=>{l=localStorage.getItem("darkMode"),"enabled"!==l?(i(),r.checked=!0):(d(),r.checked=!1)}));var u=n("hLzQv"),f=n("8La2v");function y(e,t){const o=e.map((e=>(0,f.default)(e))).join(""),a=t.split(" ");let n=a.length-1,l=a[n];const r=`\n    <h2 class="main-header">${a.splice(0,n).join(" ")} \n        <span class="main-header-accent">${l}</span>\n    </h2>\n    <ul class="category-books-wrapper">${o}</ul>`;document.querySelector(".bestsellers-list").innerHTML=r;document.querySelectorAll(".book-card").forEach((e=>{e.classList.add("show-all")}))}f=n("8La2v");const g=document.querySelector(".vertical-menu"),m=document.querySelector(".main-header"),h=document.querySelector(".bestsellers-list"),w=g.querySelector("li"),p=new(0,u.BooksAPI);async function k(e){try{y(await p.getFullCategory(e),e)}catch(e){Notiflix.Notify.failure("Sorry, there is no books in this category")}}window.addEventListener("DOMContentLoaded",(async()=>{w.classList.add("active");try{const e=(await p.getCategoriesList()).map((e=>e.list_name)).sort(((e,t)=>e.localeCompare(t))),t=e.map((e=>`<li class='list_name'>${e}</li>`)).join("");g.insertAdjacentHTML("beforeend",t)}catch(e){Notiflix.Notify.failure("Oops, something went wrong!")}})),g.addEventListener("click",(async function(e){if(e.preventDefault(),"LI"!==e.target.nodeName)return;if(g.querySelectorAll("li").forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active"),e.target.classList.contains("all_categories"))try{const e=await p.getBooks();(0,f.createListMarkup)(e),m.style.display="block"}catch(e){Notiflix.Notify.failure("Oops, something went wrong!")}else{m.style.display="none";k(e.target.textContent)}})),h.addEventListener("click",(e=>{if("BUTTON"===e.target.nodeName){m.style.display="none",k(e.target.name);g.querySelectorAll("li").forEach((t=>{t.textContent===e.target.name&&(w.classList.remove("active"),t.classList.add("active"))}))}})),n("dTazW");var L=n("7Y9D8");u=n("hLzQv"),f=n("8La2v");const v=document.querySelector(".loader-backdrop");function b(){v.classList.toggle("is-hidden")}const S=new(0,u.BooksAPI);!async function(){b();try{const t=await S.getBooks();0===t.length&&e(L).Notify.warning("Sorry, there are no top books yet"),(0,f.createListMarkup)(t)}catch(t){e(L).Notify.failure("Oops, something went wrong!")}finally{b()}}();const q=document.querySelector("#button-scroll-up");window.addEventListener("scroll",(function(){window.scrollY>200?q.classList.add("show"):q.classList.remove("show")})),q.addEventListener("click",(function e(){0!=window.scrollY&&setTimeout((function(){window.scrollTo(0,window.scrollY-70),e()}),10)})),n("7IXaT"),n("bTcpz");
//# sourceMappingURL=index.37f22951.js.map
