// Carousel // Slide Timer //

$(document).ready(function(){
    $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({
    // fullWidth: true,
    indicators: true
});

var carouselTimer=setInterval(function(){
    $('.carousel').carousel('next');  
},5000);
 
        