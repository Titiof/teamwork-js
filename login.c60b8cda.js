var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("gKkQl"),r=o("eyjy7"),a=o("iQIUW");const s=(0,i.initializeApp)({apiKey:"AIzaSyBcETIWRzdvvBXoViQftnTvFFLpHkebOhw",authDomain:"book-bc5e2.firebaseapp.com",projectId:"book-bc5e2",storageBucket:"book-bc5e2.appspot.com",messagingSenderId:"258455649332",appId:"1:258455649332:web:4a54c5fd8564a412d79e61",measurementId:"G-2EMZHHRVM8"}),c=(0,r.getAuth)(s);let d="signup",u="";const l={signinBtn:document.querySelector(".login-sign-in"),signupBtn:document.querySelector(".login-sign-up"),closeModalBtn:document.querySelector(".js-login-btn"),modal:document.querySelector(".js-backdrop"),form:document.querySelector(".js-login-form"),inputName:document.querySelector("#user_name"),email:document.querySelector("#user_email"),password:document.querySelector("#user_password"),loginSubmitBtn:document.querySelector(".login-submit-btn"),containerNameInput:document.querySelector("#login-field-name")};function m(){"signin"===d&&(l.signupBtn.classList.remove("active"),l.signinBtn.classList.add("active"),l.containerNameInput.classList.add("is-hidden"),l.inputName.required=!1,l.loginSubmitBtn.textContent="Sign in"),"signup"===d&&(l.signupBtn.classList.add("active"),l.signinBtn.classList.remove("active"),l.containerNameInput.classList.remove("is-hidden"),l.inputName.required=!0,l.loginSubmitBtn.textContent="Sign up")}l.closeModalBtn.addEventListener("click",(function(){window.history.back()})),l.form.addEventListener("submit",(async function(e){e.preventDefault(),"signup"===d?async function(){try{await(0,r.createUserWithEmailAndPassword)(c,l.email.value,l.password.value)&&c.currentUser&&((0,r.sendEmailVerification)(c.currentUser),(0,r.updateProfile)(c.currentUser,{displayName:l.inputName.value,photoURL:"https://picsum.photos/50/50?random=1"}),a.Notify.success("Registration was successful!"),setTimeout((function(){window.location.href="/teamwork-js/"}),500))}catch(e){"auth/email-already-in-use"===e.code?a.Notify.warning("This email address is already registered. Please go to the tab signin."):a.Notify.error("An error occurred during registration.")}}():async function(){try{const e=(await(0,r.signInWithEmailAndPassword)(c,l.email.value,l.password.value)).user;console.log(e),l.form.reset(),u="",a.Notify.success("Authorization was successful!"),setTimeout((function(){window.location.href="/teamwork-js/"}),500)}catch(e){e.code,e.message;e="Invalid user email or password",a.Notify.failure(e)}}()})),l.signinBtn.addEventListener("click",(function(){l.form.reset(),d="signin",m()})),l.signupBtn.addEventListener("click",(function(){l.form.reset(),d="signup",m()})),c.onAuthStateChanged((function(e){console.log("perevirka",e),e?a.Notify.success("Successful authorized! You will be redirected to the home page"):a.Notify.info("Need authorized")}));let g=localStorage.getItem("darkMode");const p=document.querySelector("#dark-mode-toggle"),f=document.querySelector("#dark-mode-toggle-two"),y=document.querySelector(".checkbox"),h=()=>{document.body.classList.add("darkmode"),localStorage.setItem("darkMode","enabled"),y.checked=!0},k=()=>{document.body.classList.remove("darkmode"),localStorage.setItem("darkMode",null),y.checked=!1};"enabled"===g&&h(),p.addEventListener("click",(()=>{g=localStorage.getItem("darkMode"),"enabled"!==g?(h(),f.checked=!0):(k(),f.checked=!1)})),f.addEventListener("click",(()=>{g=localStorage.getItem("darkMode"),"enabled"!==g?(h(),p.checked=!0):(k(),p.checked=!1)}));
//# sourceMappingURL=login.c60b8cda.js.map