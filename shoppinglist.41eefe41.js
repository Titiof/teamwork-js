!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,i.call(d.exports,d,d.exports),d.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);i("bpxeT"),i("2TvXO"),i("fepPP");var d=document.querySelector("[data-modal]"),o=d.querySelector(".close"),r=d.querySelector(".add-button"),s=d.querySelector(".remove-button"),a=(d.querySelector(".modal-book-card"),[]),l={};function c(e){if("BUTTON"===e.target.tagName){var t=l._id,n=a.findIndex((function(e){return e._id===t}));-1!==n&&(a.splice(n,1),localStorage.setItem("shopping-list",JSON.stringify(a)),s.classList.add("is-hidden"),r.classList.remove("is-hidden"))}}r.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&l&&(a.push(l),localStorage.setItem("shopping-list",JSON.stringify(a)),r.classList.add("is-hidden"),s.classList.remove("is-hidden"),s.addEventListener("click",c))})),s.addEventListener("click",c),o.addEventListener("click",(function(){d.classList.add("is-hidden")})),window.addEventListener("keydown",(function(e){"Escape"===e.key&&d.classList.add("is-hidden")})),document.querySelectorAll(".shop-link").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");window.open(n,"_blank")}))}))}();
//# sourceMappingURL=shoppinglist.41eefe41.js.map