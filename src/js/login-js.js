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
    console.log('hi');
    refs.form.reset();

}

q
