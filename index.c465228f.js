!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("iNWLi"),o("cqZ6b"),o("cs7FV"),o("i8Q71");var a=o("iNWLi"),c=localStorage.getItem("darkMode"),s=document.querySelector("#dark-mode-toggle"),i=document.querySelector("#dark-mode-toggle-two"),l=document.querySelector(".checkbox"),u=function(){(0,a.setDarkMode)("enable"),document.body.classList.add("darkmode"),localStorage.setItem("darkMode","enabled"),l.checked=!0},d=function(){(0,a.setDarkMode)("null"),document.body.classList.remove("darkmode"),localStorage.setItem("darkMode",null),l.checked=!1};"enabled"===c&&u(),s.addEventListener("click",(function(){"enabled"!==(c=localStorage.getItem("darkMode"))?(u(),i.checked=!0):(d(),i.checked=!1)})),i.addEventListener("click",(function(){"enabled"!==(c=localStorage.getItem("darkMode"))?(u(),s.checked=!0):(d(),s.checked=!1)}));var f=o("bpxeT"),p=o("2TvXO"),m=o("fepPP"),k=o("bcj8o");function v(e,t){var n=e.map((function(e){return(0,k.default)(e)})).join(""),r=t.split(" "),o=r.length-1,a=r[o],c=r.splice(0,o).join(" "),s='\n    <h2 class="main-header">'.concat(c,' \n        <span class="main-header-accent">').concat(a,'</span>\n    </h2>\n    <ul class="category-books-wrapper">').concat(n,"</ul>");document.querySelector(".bestsellers-list").innerHTML=s,document.querySelectorAll(".book-card").forEach((function(e){e.classList.add("show-all")}))}k=o("bcj8o");var g=document.querySelector(".vertical-menu"),h=document.querySelector(".main-header"),y=document.querySelector(".bestsellers-list"),w=g.querySelector("li"),b=new(0,m.BooksAPI);function x(){return(x=e(f)(e(p).mark((function t(n){var r;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"LI"!==n.target.nodeName){e.next=21;break}if(g.querySelectorAll("li").forEach((function(e){e.classList.remove("active")})),n.target.classList.add("active"),!n.target.classList.contains("all_categories")){e.next=18;break}return e.prev=5,e.next=8,b.getBooks();case 8:r=e.sent,(0,k.createListMarkup)(r),h.style.display="block",e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),Notiflix.Notify.failure("Oops, something went wrong!");case 16:e.next=19;break;case 18:h.style.display="none",L(n.target.textContent);case 19:e.next=22;break;case 21:return e.abrupt("return");case 22:case"end":return e.stop()}}),t,null,[[5,13]])})))).apply(this,arguments)}function L(e){return S.apply(this,arguments)}function S(){return(S=e(f)(e(p).mark((function t(n){return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.getFullCategory(n);case 3:v(e.sent,n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Notiflix.Notify.failure("Sorry, there is no books in this category");case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}window.addEventListener("DOMContentLoaded",e(f)(e(p).mark((function t(){var n,r,o;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.classList.add("active"),e.prev=1,e.next=4,b.getCategoriesList();case 4:n=e.sent,r=n.map((function(e){return e.list_name})).sort((function(e,t){return e.localeCompare(t)})),o=r.map((function(e){return"<li class='list_name'>".concat(e,"</li>")})).join(""),g.insertAdjacentHTML("beforeend",o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),Notiflix.Notify.failure("Oops, something went wrong!");case 13:case"end":return e.stop()}}),t,null,[[1,10]])})))),g.addEventListener("click",(function(e){return x.apply(this,arguments)})),y.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&(h.style.display="none",L(e.target.name),g.querySelectorAll("li").forEach((function(t){t.textContent===e.target.name&&(w.classList.remove("active"),t.classList.add("active"))})))})),o("xpKCW");f=o("bpxeT"),p=o("2TvXO");var q=o("6JpON"),N=(m=o("fepPP"),k=o("bcj8o"),document.querySelector(".loader-backdrop"));function M(){N.classList.toggle("is-hidden")}var T=new(0,m.BooksAPI);function E(){return(E=e(f)(e(p).mark((function t(){var n;return e(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M(),t.prev=1,t.next=4,T.getBooks();case 4:0===(n=t.sent).length&&e(q).Notify.warning("Sorry, there are no top books yet"),(0,k.createListMarkup)(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(q).Notify.failure("Oops, something went wrong!");case 12:return t.prev=12,M(),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))).apply(this,arguments)}!function(){E.apply(this,arguments)}();var O=document.querySelector("#button-scroll-up");window.addEventListener("scroll",(function(){window.scrollY>200?O.classList.add("show"):O.classList.remove("show")})),O.addEventListener("click",(function e(){0!=window.scrollY&&setTimeout((function(){window.scrollTo(0,window.scrollY-70),e()}),10)})),o("au5Zf"),o("5xtVg")}();
//# sourceMappingURL=index.c465228f.js.map
