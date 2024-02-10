const toggleNavIcon = document.querySelector('#toggleNav');
const navItems = document.querySelector('.mobile__navbar');


toggleNavIcon.addEventListener('click', function () {

    navItems.classList.toggle('active');
});

let hero = gsap.timeline({ defaults: { ease: "power3.out" } })
hero.fromTo(".navbar", { opacity: 0, scale: 0, }, { opacity: 1, duration: 0.7, scale: 1, y: 0, });
hero.from(".home__container h1, .home__container p", {
    opacity: 0,
    x: -200,
    duration: 0.8,
    // delay: 1,
    stagger: 0.3,

})
hero.from(".home__links .btn__orange, .home__links .btn__white", {
    opacity: 0,
    y: -100,
    stagger: 0.3,
    duration: 0.8,
    // delay: 2,
})

