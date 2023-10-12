// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeCheckbox = document.querySelector('.checkbox'); // Get the checkbox element
// const darkModeToggleTwo = document.querySelector('#dark-mode-toggle-two');
// const darkModeCheckboxTwo = document.querySelector('.checkbox-two'); // Get the checkbox element

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
     // 3. Check the checkbox
  darkModeCheckbox.checked = true;
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
      // 3. Uncheck the checkbox
     darkModeCheckbox.checked = false;
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

