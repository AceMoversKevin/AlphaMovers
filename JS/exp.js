let currentSlide = 0;
let images = document.querySelectorAll('.carousel-image');

function showSlide(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= images.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }
    showSlide(currentSlide);
}

// Initialize the carousel with the first image displayed
showSlide(0);
