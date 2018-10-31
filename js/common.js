$(function() {

$('.benefit-block-box_list > li').prepend('<i class="fa fa-dot-circle-o"></i>');

 

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
$('.popup-with-form').on('click', function(event) {
  event.preventDefault();
  $('.white-popup-form > .h4').html('заказать звонок');
  $('.white-popup-form > button').html('заказать звонок');
});
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
// Выбор дома
$('ul.homes-select').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.realty-wrapper').find('div.homes-select_room').fadeOut(300).removeClass('active').eq($(this).index()).delay(200).fadeIn(300).addClass('active');
  });
// Выбор помещения Дом7
$('ul.home7-select').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.realty-wrapper').find('div.home7-room').fadeOut(200).removeClass('active').eq($(this).index()).delay(100).fadeIn(200).addClass('active');
  });

$('.home7-room.first').css('display', 'block');
$('.tabs__room.first').css('display', 'block');

$('.realtyinfo-price_btn').on('click', function(event) {
  event.preventDefault();
  $('.white-popup-form > .h4').html('записаться');
  $('.white-popup-form > button').html('записаться');
});
$('.realtyinfo-price_btn').magnificPopup({
   type: 'inline',
   focus: '#name',
    removalDelay: 500,
    mainClass: 'mfp-fade',
});


});
