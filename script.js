// script.js
let currentIndex = 0;

function updateCarousel() {
    const images = document.querySelectorAll('.carousel-images img');
    const indicators = document.querySelectorAll('.indicator');

    // Update active image
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });

    // Update active indicator
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function changeSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}
