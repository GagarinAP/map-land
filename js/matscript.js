$(document).ready(function(){          
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.slider').slider({full_width: true});        
    $('.button-collapse').sideNav({
        menuWidth: 300, 
        edge: 'left', 
        closeOnClick: true
    });        
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.customizer .toggle-btn').on('click', function(event) {
    $('.customizer .interface').animate({
      right: [ "toggle", "swing" ],
    }, 0);    
    });
    $("html").niceScroll({
        mousescrollstep : 50
    });
});