// Main application JS
import './search.js';
import './forms.js';
import './modal.js';

(function() {
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav--open');
    });
  }
})();
