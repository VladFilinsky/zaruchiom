$(function() {
// добавляем иконку в начало элементам li
$('.benefit-block-box_list > li').prepend('<i class="fa fa-dot-circle-o"></i>');
// Маска ввода номера телефона (плагин maskedinput)
  $('[name="Телефон"]').mask("+7(999) 999-99-99");
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
// Смена заголовка и названия кнопки в попап окне
$('.realtyinfo-price_btn').on('click', function(event) {
  event.preventDefault();
  $('.white-popup-form > .h4').html('записаться');
  $('.white-popup-form > button').html('записаться');
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
  /* MODAL "FORM-CALLBACK" */
$('.popup-with-form').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');}},
    midClick: true});
 /* MODAL "FORM-WRITTEN" */
$('.realtyinfo-price_btn').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');}},
    midClick: true});
/* MODAL "VIDEO" */
$('.js-open-video-popup').magnificPopup({
  type: 'iframe',
  iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
  patterns: {
    youtube: {
      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
      id: 'v=', // String that splits URL in a two parts, second part should be %id%
      // Or null - full URL will be returned
      // Or a function that should return %id%, for example:
      // id: function(url) { return 'parsed id'; }
      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    },
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: '//player.vimeo.com/video/%id%?autoplay=1'},
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'}},
  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}
});



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
});
