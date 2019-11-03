

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

// Gallery Button
$(".gallery").on("click", function(){
    $("#carouselID").toggle();
    $("#galleryDiv").toggle()
})

$("#gallery").on("click", function(){
    $("#galleryDiv").toggle()
    $("#carouselID").toggle();
})








