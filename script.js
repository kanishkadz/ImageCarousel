let currentIndex = 0;

function updateCarousel() {
    const images = document.querySelectorAll('.carousel-images img');
    const indicators = document.querySelectorAll('.indicator');

    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });

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
