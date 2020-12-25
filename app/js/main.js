$(function() {

  $('.burger-menu').on('click', function () {
		$(this).toggleClass('menu-open')
  });
  
  $('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--active')
	});
  


});

var mySwiper = new Swiper('.slider-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})