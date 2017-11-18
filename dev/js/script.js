// Hamburger menu
// Select Hamburger elements
const hamburgerButton = document.querySelector('#hamburgerBut');
const dropdownMenu = document.querySelector('.navigation--hamburger');

// The dropdown function
function toggleDropdown() {
  dropdownMenu.classList.toggle('open');
};

// Event listners for Hamburger menu
hamburgerButton.addEventListener('click', toggleDropdown);
// End Hamburger menu.

// Speeches Toggle more text
// Select the elements
const showMoreBut = document.querySelector('#showMore');
const moreText = document.querySelector('.moreText');

// Check if the button excists (to prevent errors)
if (showMoreBut !== null && showMoreBut !== undefined) {
  // Toggle Function
  function toggleShowMore() {
    if (moreText.classList.contains('moreText--Open')) {
      showMoreBut.innerHTML = 'lees verder...';
    }
    else {
      showMoreBut.innerHTML = 'minder weergeven...';
    }
    moreText.classList.toggle('moreText--Open');
  };
  // Add event listeners
  showMoreBut.addEventListener('click', toggleShowMore);
}