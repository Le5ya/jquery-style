$('a[href*="#"]').on('click', function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top + "px"
  }, {duration: 1000,
      easing: "linear"
  } );
  return false;
});

ymaps.ready(init);
function init(){
  const kantMap = new ymaps.Map("map", {
      center: [55.724282057522785, 37.5634189101561],
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


const headerBtn = $('.header__button')
const modalClose = $('.modal-order__close');

const hambLine = $('.hamb-line');
const nav = $('.header__nav');
const header = $('.header__container');
const btnWrap = $(`<div>`);
const headerBtnM = headerBtn.clone();

const modalOrder = $('.modal-order');
const modalOrderTitle = $('.modal-order__title');
const modalForm = $('.modal-order__form');


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
// headerBtnM
modalOrder.hide();

headerBtn.on('click', function() {
  modalOrder.show(250);
});
headerBtnM.on('click', function() {
  modalOrder.show(250);
});
modalClose.on('click', function() {
  modalOrder.slideUp(300);
});
$(document).on('click', function(event) {
  if(
    !modalOrder.is(event.target) &&
    !$('.modal-order__wrapper').is(event.target) &&
    !$('.modal-order__title').is(event.target) &&
    !$('.modal-order__form').is(event.target) &&
    $('.modal-order__form').has(event.target).length === 0  &&
    !headerBtn.is(event.target) && !headerBtnM.is(event.target) ) {
    modalOrder.slideUp(300); 
  }
})
// mask
const inputTelMod = document.querySelector('.modal-order__input_tel');
const telMask = new Inputmask('+7(999) 999-99-99');
telMask.mask(inputTelMod);

// Validate

const justValidate = new JustValidate('.modal-order__form');

justValidate
.addField('.modal-order__input', [
  {
    rule: 'required',
    errorMessage: 'Обязательно заполнить'
  }
])
.addField('.modal-order__input_tel', [
  {
    rule: 'required',
    errorMessage: 'Обязательно заполнить',
  },
  {
  validator(value) {
  const phone = inputTelMod.inputmask.unmaskedvalue();
  return !!(Number(phone) && phone.length === 10);
  },
  errorMessage: 'Телефон не корректный'
  }
])

modalForm.submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      modalForm[0].reset();
      modalOrderTitle.text('Спасибо, ваша заявка принята, номер заявки ' + data.id);
      // modalOrder.slideUp(1000);
       
    },
    error() {
      modalOrderTitle.text('Что-то пошло не так, попробуйте позже')
    }
    
  })
    
 });
 




