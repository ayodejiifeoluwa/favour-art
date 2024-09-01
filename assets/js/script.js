'use strict';



/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
});



/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});



/**
 * Scroll Reveal 
 */

ScrollReveal({ 
  reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReveal().reveal('.top', { origin: 'top' });
ScrollReveal().reveal('.bot', { origin: 'bottom' });
ScrollReveal().reveal('.lefty',  { origin: 'left' });
ScrollReveal().reveal('.righty', { origin: 'right' });
