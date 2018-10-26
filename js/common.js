$(function() {

$('.benefit-block-box_list > li').prepend('<i class="fa fa-dot-circle-o"></i>');

$("* #phone").mask("+7(000)000-00-00", {
    placeholder: "+7(___)___-__-__",
    clearIfNotMatch: true
  });

$(".owl-carousel").owlCarousel({
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
