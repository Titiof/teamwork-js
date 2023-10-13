// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeToggleTwo = document.querySelector('#dark-mode-toggle-two');
const darkModeCheckbox = document.querySelector('.checkbox'); // Get the checkbox element

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');

  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', true); // Змінилось на true

  // 3. Check the checkbox
  darkModeCheckbox.checked = true;
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');

  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', false); // Змінилось на false

  // 3. Uncheck the checkbox
  darkModeCheckbox.checked = false;
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'true') {
  // Перевірка на 'true' замість 'enabled'
  enableDarkMode();
}

// When someone clicks the first toggle
darkModeToggle.addEventListener('click', () => {
  // Get the current state of dark mode
  darkMode = localStorage.getItem('darkMode');

  // Toggle the state based on the current value
  if (darkMode !== 'true') {
    // Перевірка на 'true' замість 'enabled'
    enableDarkMode();
    darkModeToggleTwo.checked = true;
  } else {
    disableDarkMode();
    darkModeToggleTwo.checked = false;
  }
});

// When someone clicks the second toggle
darkModeToggleTwo.addEventListener('click', () => {
  // Get the current state of dark mode for the second toggle
  darkMode = localStorage.getItem('darkMode');

  // Toggle the state based on the current value
  if (darkMode !== 'true') {
    // Перевірка на 'true' замість 'enabled'
    enableDarkMode();
    darkModeToggle.checked = true;
  } else {
    disableDarkMode();
    darkModeToggle.checked = false;
  }
});
