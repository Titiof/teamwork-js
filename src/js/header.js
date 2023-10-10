const currentPath = window.location.pathname;


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