document.addEventListener('DOMContentLoaded', function () {
    // Burger menu toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Initialize Glide.js
    new Glide('.glide', {
        type: 'carousel',
        autoplay: 3000,
        perView: 1
    }).mount();

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Initialize Masonry
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        new Masonry(galleryContainer, {
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-item',
            percentPosition: true
        });
    }
});
