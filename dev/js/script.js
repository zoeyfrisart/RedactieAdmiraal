// Hamburger menu
// Select Hamburger elements
const hamburgerButton = document.querySelector('#hamburgerBut');
const dropdownMenu = document.querySelector('.navigation--hamburger');

// The dropdown function
function toggleDropdown() {
  dropdownMenu.classList.toggle('open');
}

// Event listners for Hamburger menu
hamburgerButton.addEventListener('click', toggleDropdown);
// End Hamburger menu.