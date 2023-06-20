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


nav.hide();

hambLine.on('click', function() {
  $(this).toggleClass('hamb-line_active');

  if(hambLine.hasClass('hamb-line_active')) {
    nav.show();
  } else {
    nav.hide();
  }
  
});
headerBtnM


headerBtn.on('click', function() {
  $('.modal-order').show(500);
});
headerBtnM.on('click', function() {
  $('.modal-order').show(500);
});
modalClose.on('click', function() {
  $('.modal-order').hide(500);
});
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





// if($('max-width_476px')) {
//   const div = $(`<div>`);
//   div.css('display', 'flex')
//   div.css('justify-content', 'center')
//   div.html(`
//   <div class="wrap-btn">
//     <button class="button header__button">Заказать звонок</button>
//   </div>`)
//   $('.header__nav_active').addClass('header__nav_mobile')
//   $('.header__button').detach().appendTo($('header__nav_mobile'));
//   // $('.header__button').css('margin', '0 auto');
  
// }




    

    





