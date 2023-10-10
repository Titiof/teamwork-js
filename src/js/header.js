const currentPath = window.location.pathname;
// додава авторизацію Владислав
const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

// додати прослуховувача подій для кнопки logout і видаляй свого юсера з локалсторедж (код нижче)
// localStorage.removeItem('user');
// =============================

function setActiveLink(className, currentPath) {
  const links = document.querySelectorAll(`.${className}`);

  links.forEach(link => {
    if (link.href) {
      try {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      } catch (error) {
        console.error(`Invalid URL for link: ${link.href}`);
      }
    }
  });
}

setActiveLink('mob-link', currentPath);
setActiveLink('nav-link', currentPath);
