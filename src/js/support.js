const scrollDownEl = document.querySelector('.scroll-down-btn');
const scrollDownLogo = document.querySelector('.scroll-down');
const UlEl = document.querySelector('.list-support');
let up = null;

scrollDownEl.addEventListener('click', onScrollDownClick);

function onScrollDownClick() {
  if (!up) {
    up = 1;
    scrollDownLogo.classList.add('up');
    scrollDownLogo.classList.remove('down');
    UlEl.children[0].classList.add('is-hidden');
    UlEl.children[1].classList.add('is-hidden');
    UlEl.children[2].classList.add('is-hidden');
    UlEl.children[6].classList.remove('is-hidden');
    UlEl.children[7].classList.remove('is-hidden');
    UlEl.children[8].classList.remove('is-hidden');
  } else {
    up = 0;
    scrollDownLogo.classList.add('down');
    scrollDownLogo.classList.remove('up');
    UlEl.children[0].classList.remove('is-hidden');
    UlEl.children[1].classList.remove('is-hidden');
    UlEl.children[2].classList.remove('is-hidden');
    UlEl.children[6].classList.add('is-hidden');
    UlEl.children[7].classList.add('is-hidden');
    UlEl.children[8].classList.add('is-hidden');
  }
}
