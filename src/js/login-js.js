// open / close modal

const refs = {
  openModalBtn: document.querySelector('.js-login-open'),
  closeModalBtn: document.querySelector('.js-login-btn'),
  modal: document.querySelector('.js-backdrop'),
  form: document.querySelector('.js-login-form'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.form.addEventListener('submit', onFormSubmit)

// change class is-hidden
function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

// form element submit 

function onFormSubmit(e){
    e.preventDefault();
    const userName = e.target.elements['user_name'].value;
    const userEmail = e.target.elements['user_email'].value;
    const userPass = e.target.elements['user_password'].value;
    console.log(userName,userEmail,userPass);


    e.target.reset();
}
