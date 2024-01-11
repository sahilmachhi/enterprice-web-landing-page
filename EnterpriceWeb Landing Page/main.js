document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');
    const navLinks = document.querySelector('.nav-links');

    button.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});


