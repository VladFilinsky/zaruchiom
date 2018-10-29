$(function() {

$('.benefit-block-box_list > li').prepend('<i class="fa fa-dot-circle-o"></i>');

  if ($(window).width() < 1196) { //1169
    $(".wrapper > .container").removeClass("container").addClass("container-fluid");
 }
 else if($(window).width() > 1196) { // 1169
     $(".wrapper > .container-fluid").removeClass("container-fluid").addClass("container");
 }

$("* #phone").mask("+7(000)000-00-00", {
    placeholder: "+7(___)___-__-__",
    clearIfNotMatch: true
  });

$(".park").owlCarousel({
    nav:true,
    animateOut: 'fadeOut',
    dots: false,
    navText: false,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$(".realtyinfo-slider").owlCarousel({
    dots: false,
    navText : ['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],
    autoHeight: true,
    center: true,
    smartSpeed:500,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// Модальное окно popup
$('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name',
    removalDelay: 500,
    mainClass: 'mfp-fade',
});
$('.popup-msg').magnificPopup({
   type: 'inline',
    removalDelay: 500,
    mainClass: 'mfp-fade',
});
});
