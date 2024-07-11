// Initialize AOS (Animate on Scroll) library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
});

// Initialize Masonry grid layout for gallery items
var gallery = document.querySelector('.gallery-container');
var masonry = new Masonry(gallery, {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-item',
    percentPosition: true,
});

// Add JavaScript to toggle burger menu
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});

// Initialize Glide.js
const glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3, // Adjust the number of visible slides as needed
    breakpoints: {
        800: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }
});

glide.mount();