$(function() {
// добавляем иконку в начало элементам li
$('.benefit-block-box_list > li').prepend('<i class="fa fa-dot-circle-o"></i>');

// Слайдер секции park
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
// Слайдер секции 
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
// Модальное окно popup,с формой
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
//  Окно "спасибо"
// $('.popup-msg').magnificPopup({
//    type: 'inline',
//     removalDelay: 500,
//     mainClass: 'mfp-fade',
// });

// Выбор дома
$('ul.homes-select').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.realty-wrapper').find('div.homes-select_room').fadeOut(300).removeClass('active').eq($(this).index()).delay(200).fadeIn(300).addClass('active');
  });
// Выбор помещения Дом 7
$('ul.home7-select').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.realty-wrapper').find('div.home7-room').fadeOut(200).removeClass('active').eq($(this).index()).delay(100).fadeIn(200).addClass('active');
  });
  // Выбор помещения Дом 6
$('ul.home6-select').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.realty-wrapper').find('div.home6-room').fadeOut(200).removeClass('active').eq($(this).index()).delay(100).fadeIn(200).addClass('active');
  });
  // Выбор помещения Дом 5
$('ul.home5-select').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.realty-wrapper').find('div.home5-room').fadeOut(200).removeClass('active').eq($(this).index()).delay(100).fadeIn(200).addClass('active');
  });// Выбор помещения Другое
$('ul.home-other-select').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.realty-wrapper').find('div.home-other-room').fadeOut(200).removeClass('active').eq($(this).index()).delay(100).fadeIn(200).addClass('active');
  });
// Показать первые карточки в списке помещений
$('.home7-room.js-first').css('display', 'block'); 
$('.home6-room.js-first').css('display', 'block');
$('.home5-room.js-first').css('display', 'block');
$('.home-other-room.js-first').css('display', 'block');
$('.homes-select_room.js-first').css('display', 'block'); 
// Моб.версия 
// Выбор дома
     $(".object").change(function(){
      $(this)
        .closest('div.realty-wrapper').find('div.homes-select-17').hide();
        $(".homes-select-" + $(".object option:selected").val()).show();
    });
     $(".object").change(function(){
      $(this)
        .closest('div.realty-wrapper').find('div.homes-select-16').hide();
        $(".homes-select-" + $(".object option:selected").val()).show();
    });
     $(".object").change(function(){
      $(this)
        .closest('div.realty-wrapper').find('div.homes-select-15').hide();
        $(".homes-select-" + $(".object option:selected").val()).show();
    });
     $(".object").change(function(){
      $(this)
        .closest('div.realty-wrapper').find('div.homes-select-19').hide();
        $(".homes-select-" + $(".object option:selected").val()).show();
    });

 $(".js-select-room-home7").change(function(){
      $(this)
        .closest('div.realty-wrapper').find("div.js-mobile-71").hide();
        $(".js-mobile-" + $(".js-select-room-home7 option:selected").val()).show();
    });
// Смена заголовка и названия кнопки в попап окне
$('.realtyinfo-price_btn').on('click', function(event) {
  event.preventDefault();
  $('.white-popup-form > .h4').html('записаться');
  $('.white-popup-form > button').html('записаться');
});
// фокус на имени при открытии попап окна с формой
$('.realtyinfo-price_btn').magnificPopup({
   type: 'inline',
   focus: '#name',
    removalDelay: 500,
    mainClass: 'mfp-fade',
});

// Закрыть попап «спасибо»
  $('.js-close-thank-you').click(function() { // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
  });
  $(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-thank-you').fadeOut();
    }
  });
// Маска ввода номера телефона (плагин maskedinput)
$(function($){
  $('[name="Телефон"]').mask("+7(999) 999-99-99");
});
});
