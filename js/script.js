const modalBtn = $('.header__button');
const modalClose = $('.modal-order__close');

modalBtn.on('click', function() {
  $('.modal-order').show(500);
});
modalClose.on('click', function() {
  $('.modal-order').hide(500);
});


const hambLine = $('.hamb-line');
const menu = $('.menu');

const header = $('.header__container');
const headerBtn = $('.header__button');

const nav = $('.header__nav');






hambLine.on('click', function() {
  $(this).toggleClass('hamb-line_active');

  if(hambLine.hasClass('hamb-line_active')) {
    nav.slideDown();
    headerBtn.show()
  } else {
    nav.slideUp();
    headerBtn.hide();
  }
  
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




    

    





// hambLine.on('click', function() {
//   hambImg.attr("src","img/menu-close.svg");
//   menu.animate({
 
//   })
// })