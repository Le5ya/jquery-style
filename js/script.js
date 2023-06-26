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
       !hambLine.is(event.target) &&
       !nav.is(event.target) &&
       !$('.menu').is(event.target)
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

const elem = $('.acc__item');




 
$('.acc__list').accordion({
  active: true,
  collapsible: true,
  heightStyle: 'content',
  icons: {
    header: 'acc__item:after',
    activeHeader: 'acc__item:after active',
  }
});
elem.on('click', function () {

  if (!$(this).hasClass('active')) {
    elem.removeClass('active')
  }

  $(this).toggleClass('active');
 
   
})


  ymaps.ready(init)
    function init(){
      const kantMap = new ymaps.Map("map", {
          center: [55.72430018418378, 37.563451096625386],
          zoom: 19
      });

      const mark = new ymaps.Placemark([55.72430018418378, 37.563451096625386], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin1.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [0, 30]
      })

      kantMap.geoObjects.add(mark);

      kantMap.controls.remove('zoomControl');
}
    
const cookieAlert = document.querySelector('.alert-cookie');
const cookieButton = document.querySelector('.alert-cookie__button');

cookieButton.addEventListener('click', () => {
  cookieAlert.classList.remove('alert-cookie_no-ready');
  Cookies.set('dom-ready-cookie', 'true', {
    expires: 10,
  }) 
});

if (!Cookies.get('dom-ready-cookie')) {
  cookieAlert.classList.add('alert-cookie_no-ready');
}

