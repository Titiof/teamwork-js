!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},a=n.parcelRequired7c6;null==a&&((a=function(n){if(n in e)return e[n].exports;if(n in o){var a=o[n];delete o[n];var t={id:n,exports:{}};return e[n]=t,a.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){o[n]=e},n.parcelRequired7c6=a),a("i8Q71"),a("cqZ6b");var t=localStorage.getItem("darkMode"),s=document.querySelector("#dark-mode-toggle"),i=document.querySelector("#dark-mode-toggle-two"),l=document.querySelector(".checkbox"),c=function(){document.body.classList.add("darkmode"),localStorage.setItem("darkMode","enabled"),l.checked=!0},r=function(){document.body.classList.remove("darkmode"),localStorage.setItem("darkMode",null),l.checked=!1};"enabled"===t&&c(),s.addEventListener("click",(function(){"enabled"!==(t=localStorage.getItem("darkMode"))?(c(),i.checked=!0):(r(),i.checked=!1)})),i.addEventListener("click",(function(){"enabled"!==(t=localStorage.getItem("darkMode"))?(c(),s.checked=!0):(r(),s.checked=!1)})),a("xpKCW"),a("fepPP");var d={shoppingList:document.querySelector(".shopping-list-selector"),header:document.querySelector(".main-header"),container:document.querySelector(".shopping-plug")};function p(n){var e=n.book_image,o=n.title,a=n.list_name,t=n.description,s=n.author,i=n.buy_links;return' <div class="shopping-border">\n  <button class="shopping-button" type="button">\n    <svg class="shopping-delete-icon" width="18" height="18" aria-label="trash">\n      <use href="./images/sprite.svg#trash"></use>\n    </svg>\n  </button>\n  <img class="img-card" src="'.concat(e,'" alt="Book cover" />\n  <div class="inform-box">\n    <h2 class="shopping-title">').concat(o,'</h2>\n    <h3 class="shopping-category">').concat(a,'</h3>\n    <p class="shopping-description">').concat(t,'</p>\n    <p class="shopping-author">').concat(s,'</p>\n  </div>\n  <ul class="shopping-link">\n    <li class="shop">\n      <a href="').concat(i[0].url,'" class="shop-link" target="_blank">\n      <img\n      class="shops-icon-amazon"\n      src="./images/shopping-list/amazon-logo.png"\n      alt="Amazon-logo"\n      srcset="\n        ./images/shopping-list/amazon-logo.webp    1x,\n        ./images/shopping-list/amazon-logo@2x.webp 2x,\n        ./images/shopping-list/amazon-logo.png     1x,\n        ./images/shopping-list/amazon-logo@2x.png  2x\n      "\n      sizes="(max-width: 48px)"\n      loading="lazy"\n    />\n      </a>\n    </li>\n    <li class="shop">\n      <a href="').concat(i[1].url,'" class="shop-link" target="_blank">\n      <img\n      class="shop-icon-book"\n      src="./images/shopping-list/amazon-book.png"\n      alt="Apple-Books-logo"\n      srcset="\n        ./images/shopping-list/amazon-book.webp    1x,\n        ./images/shopping-list/amazon-book@2x.webp 2x,\n        ./images/shopping-list/amazon-book.png     1x,\n        ./images/shopping-list/amazon-book@2x.png  2x\n      "\n      sizes="(max-width: 22px)"\n      loading="lazy"\n    /></a>\n    </li>\n  </ul>\n</div>')}function g(n){var e=function(n){return n.map(p).join("")}(n);d.shoppingList.innerHTML=e}function h(){var n=function(n){var e=localStorage.getItem(n);if(e)try{return JSON.parse(e)}catch(n){return[]}}("shopping-list");n.length>0&&(g(n),d.header.classList.add("is-hidden"),d.container.classList.add("is-hidden"))}document.body.addEventListener("DOMContentLoaded",h),h(),a("au5Zf"),a("5xtVg");Math.round(window.visualViewport.width)}();
//# sourceMappingURL=shoppinglist.140b41f6.js.map