const scrollDownEl = document.querySelector('.scroll-down-btn');
const scrollUpEl = document.querySelector('.scroll-up-btn');
const firstThreeLiEl = document.querySelector('.first-three-el');
const lastThreeLiEl = document.querySelector('.last-three-el');

scrollDownEl.addEventListener('click', onScrollDownClick);
// scrollUpEl.addEventListener('click', onScrollUpClick);

function onScrollDownClick() {
  scrollDownEl.classList.add('is-hidden');
  scrollUpEl.classList.remove('is-hidden');
  firstThreeLiEl.classList.add('is-hidden');
  lastThreeLiEl.classList.remove('is-hidden');
}

function onScrollUpClick() {
  scrollDownEl.classList.remove('is-hidden');
  scrollUpEl.classList.add('is-hidden');
  firstThreeLiEl.classList.remove('is-hidden');
  lastThreeLiEl.classList.add('is-hidden');
}
