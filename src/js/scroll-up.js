// id="home-link" айди кнопки

// функция крутит страницу вверх
function scrollToTop() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для других
}

// скрыть или показывать кнопку в зависимости от положения
window.onscroll = function () {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  const scrollButton = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}
