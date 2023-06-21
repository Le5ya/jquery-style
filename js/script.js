const headerBtn = $('.header__button')
const modalClose = $('.modal-order__close');

const hambLine = $('.hamb-line');
const nav = $('.header__nav');
const header = $('.header__container');
const btnWrap = $(`<div>`);
const headerBtnM = headerBtn.clone();
headerBtnM.addClass('header__button_mob');

btnWrap.css({
  'padding-top': '20px',
  'padding-bottom': '20px',
  'display': 'flex',
  'justify-content': 'center'
});


btnWrap.addClass('btn-wrap');

nav.append( btnWrap);
btnWrap.append(headerBtnM);


hambLine.on('click', function() {
  $(this).toggleClass('hamb-line_active');

  if(hambLine.hasClass('hamb-line_active')) {
    nav.show();
  } else {
    nav.hide();
  }

  $(document).on('click', function(event) {
     if(
      !nav.is(event.target) &&
      !$('.menu').is(event.target) &&
      !($('.menu').has(event.target).length === 0)  &&
      !hambLine.is(event.target)
      ) {
      nav.hide();
      hambLine.removeClass('hamb-line_active');
     }
  })
  
});
headerBtnM
$('.modal-order').hide();

headerBtn.on('click', function() {
  $('.modal-order').show(250);
});
headerBtnM.on('click', function() {
  $('.modal-order').show(250);
});
modalClose.on('click', function() {
  $('.modal-order').hide(250);
});
$(document).on('click', function(event) {
  if(
    !$('.modal-order').is(event.target) &&
    !$('.modal-order__wrapper').is(event.target) &&
    !$('.modal-order__title').is(event.target) &&
    !$('.modal-order__form').is(event.target) &&
    $('.modal-order__form').has(event.target).length === 0  &&
    !headerBtn.is(event.target) && !headerBtnM.is(event.target) ) {
    $('.modal-order').hide(250); 
  }
})
// /отправка формы
const modalOrderWrapper = $('.modal-order__wrapper');
const modalOrderTitle = $('.modal-order__title');
const form = $('.modal-order__form');

 form.submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text('Спасибо, ваша заявка принята, номер заявки ' + data.id)
      $('.modal-order__form').slideUp(300);
    },
    error() {
      modalOrderTitle.text('Что-то пошло не так, попробуйте позже')
    }
    
  })
  form.reset;

 });

$('.acc__list').accordion({
  active: true,
  collapsible: true,
  heightStyle: 'content',
  icons: {
    header: 'acc__item:after',
    activeHeader: 'acc__item:after acc__item_active:after'
  }
});






    

    





