var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,s){i[e]=s},e.parcelRequired7c6=t),t.register("e1LOh",(function(e,s){var i=t("gKkQl"),n=t("eyjy7"),d=t("iQIUW"),o=t("29jk8");const c=(0,i.initializeApp)({apiKey:"AIzaSyBcETIWRzdvvBXoViQftnTvFFLpHkebOhw",authDomain:"book-bc5e2.firebaseapp.com",projectId:"book-bc5e2",storageBucket:"book-bc5e2.appspot.com",messagingSenderId:"258455649332",appId:"1:258455649332:web:4a54c5fd8564a412d79e61",measurementId:"G-2EMZHHRVM8"}),a=(0,n.getAuth)(c);document.querySelector("#logout-link").addEventListener("click",(async function(){try{await a.currentUser?(await a.signOut(),d.Notify.info("The user has logged out of the account",o.notifyOptions)):d.Notify.info("The user is not authorized",o.notifyOptions)}catch(e){console.log("Error:",e)}})),a.onAuthStateChanged((function(e){e&&d.Notify.success(`Authorized user: ${e.displayName}`,o.notifyOptions)}))})),t.register("8FnLx",(function(e,s){const i=(0,t("eyjy7").getAuth)();(()=>{const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),t=()=>{e.classList.contains("is-open")?(setTimeout((()=>{e.classList.remove("is-open")}),500),setTimeout((()=>{e.classList.add("is-hidden")}),800)):(e.classList.remove("is-hidden"),setTimeout((()=>{e.classList.add("is-open")}),400))};s.addEventListener("click",t),i.addEventListener("click",t);window.matchMedia("(min-width: 768px)").addEventListener("change",(i=>{i.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),e.classList.contains("is-open")?e.classList.remove("is-hidden"):e.classList.add("is-hidden")})(),(()=>{const e=e=>{const s=document.querySelector(".menu");e?s.classList.add("is-hidden"):s.classList.remove("is-hidden")},s=window.matchMedia("(max-width: 767px)");e(s.matches),s.addEventListener("change",(s=>{e(s.matches)}))})(),(()=>{const e=document.querySelector(".profile-container"),s=document.querySelector(".signup-container"),i=window.matchMedia("(max-width: 767px)"),t=()=>{i.matches?(e.classList.add("is-hidden"),s.classList.add("is-hidden")):(e.classList.add("is-hidden"),s.classList.remove("is-hidden"))};t(),i.addEventListener("change",t)})();const n=document.querySelector(".mobile-loginbtn-container"),d=document.querySelector(".mobile-profile-container"),o=document.querySelector(".profile-mob-text"),c=document.querySelector(".mobile-logoutbtn-container"),a=document.querySelector("#userMobImage"),r=document.querySelector(".mobile-menu");i.onAuthStateChanged((e=>{if(e){n.classList.add("is-hidden"),d.classList.remove("is-hidden");const s="";s?(a.src=s,a.classList.remove("is-hidden"),a.nextElementSibling.classList.add("is-hidden")):(a.classList.add("is-hidden"),a.nextElementSibling.classList.remove("is-hidden"));const i=e.displayName||"User";o.textContent=`${i}`,r.classList.remove("is-hidden")}else n.classList.remove("is-hidden"),d.classList.add("is-hidden"),r.classList.add("is-hidden")})),c.addEventListener("click",(()=>{i.signOut().then((()=>{d.classList.add("is-hidden"),c.classList.add("is-hidden")}))}))})),t.register("bUb57",(function(e,s){const i=(0,t("eyjy7").getAuth)(),n=window.location.pathname;JSON.parse(localStorage.getItem("user"));function d(e,s){document.querySelectorAll(`.${e}`).forEach((e=>{if(e.href)try{new URL(e.href).pathname===s?e.classList.add("active"):e.classList.remove("active")}catch(s){console.error(`Invalid URL for link: ${e.href}`)}}))}d("mob-link",n),d("nav-link",n);const o=document.querySelector(".signup-container"),c=document.querySelector(".profile-container"),a=document.querySelector(".profile-text"),r=document.querySelector(".logout-container"),l=document.querySelector("#userImage"),u=document.querySelector(".nav-list");let h;i.onAuthStateChanged((e=>{if(e){o.classList.add("is-hidden"),c.classList.remove("is-hidden");const s="";s?(l.src=s,l.classList.remove("is-hidden"),l.nextElementSibling.classList.add("is-hidden")):(l.classList.add("is-hidden"),l.nextElementSibling.classList.remove("is-hidden"));const i=e.displayName||"User";a.textContent=i,r.classList.add("is-hidden"),c.addEventListener("mouseenter",(()=>{h=setTimeout((()=>{r.classList.remove("is-hidden")}),300)})),c.addEventListener("mouseleave",(()=>{clearTimeout(h),h=setTimeout((()=>{r.classList.add("is-hidden")}),300)})),u.classList.remove("is-hidden")}else o.classList.remove("is-hidden"),c.classList.add("is-hidden"),r.classList.add("is-hidden"),u.classList.add("is-hidden")})),r.addEventListener("click",(()=>{i.signOut().then((()=>{}))}))})),t.register("dTazW",(function(e,s){const i=document.querySelector(".scroll-down-btn"),t=document.querySelector(".scroll-down"),n=document.querySelector(".list-support");let d=null;i.addEventListener("click",(function(){d?(d=0,t.classList.add("down"),t.classList.remove("up"),n.children[0].classList.remove("is-hidden"),n.children[1].classList.remove("is-hidden"),n.children[2].classList.remove("is-hidden"),n.children[6].classList.add("is-hidden"),n.children[7].classList.add("is-hidden"),n.children[8].classList.add("is-hidden")):(d=1,t.classList.add("up"),t.classList.remove("down"),n.children[0].classList.add("is-hidden"),n.children[1].classList.add("is-hidden"),n.children[2].classList.add("is-hidden"),n.children[6].classList.remove("is-hidden"),n.children[7].classList.remove("is-hidden"),n.children[8].classList.remove("is-hidden"))}));const o=document.querySelector(".sidebar");function c(){window.innerWidth<1440&&window.location.pathname.includes("shoppinglist.html")?o.classList.add("is-hidden"):o.classList.remove("is-hidden")}window.addEventListener("resize",c),c()})),t.register("gjiCh",(function(e,s){var i,t,n,d;i=e.exports,t="toggleLoader",n=function(){return c},Object.defineProperty(i,t,{get:n,set:d,enumerable:!0,configurable:!0});const o=document.querySelector(".loader-backdrop");function c(){o.classList.toggle("is-hidden")}})),t.register("7IXaT",(function(e,s){!function e(){let s=new Date,i=s.getHours(),t=s.getMinutes(),n=s.getSeconds(),d="AM";0===i&&(i=12),i>12&&(i-=12,d="PM"),i=i<10?"0"+i:i,t=t<10?"0"+t:t,n=n<10?"0"+n:n;let o=i+":"+t+":"+n+" "+d;document.getElementById("MyClockDisplay").innerText=o,document.getElementById("MyClockDisplay").textContent=o,setTimeout(e,1e3)}()}));
//# sourceMappingURL=shoppinglist.858a8dd9.js.map
