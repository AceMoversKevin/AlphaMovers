var slideIndex = 1; //tracks the current slide
showSlides(slideIndex); // showcases the current slide

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); //changes the slide index
}

// Thumbnail image controls (if you have them)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) { //loop to iterate over the thumbnails
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex-1].className += " active";


   
}
