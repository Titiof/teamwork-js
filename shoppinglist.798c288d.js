var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,i.call(d.exports,d,d.exports),d.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);i("hLzQv");const d=document.querySelector("[data-modal]"),o=d.querySelector(".close"),s=d.querySelector(".add-button"),r=d.querySelector(".remove-button"),l=(d.querySelector(".modal-book-card"),[]);let a={};function c(e){if("BUTTON"===e.target.tagName){const e=a._id,t=l.findIndex((t=>t._id===e));-1!==t&&(l.splice(t,1),localStorage.setItem("shopping-list",JSON.stringify(l)),r.classList.add("is-hidden"),s.classList.remove("is-hidden"))}}s.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&a&&(l.push(a),localStorage.setItem("shopping-list",JSON.stringify(l)),s.classList.add("is-hidden"),r.classList.remove("is-hidden"),r.addEventListener("click",c))})),r.addEventListener("click",c),o.addEventListener("click",(function(){d.classList.add("is-hidden")})),window.addEventListener("keydown",(function(e){"Escape"===e.key&&d.classList.add("is-hidden")}));document.querySelectorAll(".shop-link").forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href");window.open(n,"_blank")}))}));
//# sourceMappingURL=shoppinglist.798c288d.js.map