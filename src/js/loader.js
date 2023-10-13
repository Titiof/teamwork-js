const loaderEl = document.querySelector('.loader-backdrop');

export function toggleLoader() {
  loaderEl.classList.toggle('is-hidden');
}
