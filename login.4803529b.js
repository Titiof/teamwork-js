!function(){var e={openModalBtn:document.querySelector(".js-login-open"),closeModalBtn:document.querySelector(".js-login-btn"),modal:document.querySelector(".js-backdrop"),form:document.querySelector(".js-login-form")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.user_name.value,n=e.target.elements.user_email.value,o=e.target.elements.user_password.value;console.log(t,n,o),e.target.reset()}))}();
//# sourceMappingURL=login.4803529b.js.map
