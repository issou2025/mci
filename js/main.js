/* Minimal JavaScript for navigation toggle and form validation */
(function() {
    const toggle = document.querySelector('.header__toggle');
    const nav = document.querySelector('.nav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('nav--open');
    });

    const form = document.querySelector('.newsletter');
    form.addEventListener('submit', event => {
        const emailInput = document.getElementById('newsletter-email');
        if (!emailInput.value) {
            event.preventDefault();
            alert('Please enter a valid email.');
        }
    });
})();
