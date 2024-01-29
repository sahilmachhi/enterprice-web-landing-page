const toggleNavIcon = document.querySelector('#toggleNav');
const navItems = document.querySelector('.nav__items');


toggleNavIcon.addEventListener('click', function () {

    navItems.classList.toggle('active');
});


