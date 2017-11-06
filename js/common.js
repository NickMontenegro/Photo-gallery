$(document).ready(function(){

  $('#portfolio_grid').mixItUp();

  $('.section_content li').click(function(){
    $('.section_content li').removeClass('active2');
    $(this).addClass('active2')
  });

  $('.top_text h1').animated('fadeInDown', 'fadeOutUp');
  $('.animated_up').animated('fadeInUp', 'fadeOutDown');
  $('.animated_left').animated('fadeInLeft', 'fadeOutLeft');
  $('.animated_right').animated('fadeInRight', 'fadeOutRight');
});


// SLIDER SECTION 
window.onload = function () {
  sliders ();
}

function sliders () {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 4000);
    }
}

// JQUERY PAGE PRELOADER 

$(window).load(function() { 
  $(".loader_inner").fadeOut(); 
  $(".loader").delay(400).fadeOut("slow"); 
});