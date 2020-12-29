$(function() {

  $('.burger-menu').on('click', function () {
		$(this).toggleClass('menu-open')
  });
  
  $('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--active')
	});

});

let mySwiper = new Swiper('.hero-slider__container', {
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.hero-slider__pagination',
    type: 'fraction', 
    renderFraction: function (currentClass, totalClass) {
      return '0<span class="' + currentClass + '"></span>' +
              '/' +
              '0<span class="' + totalClass + '"></span>';
  }
  },
  navigation: {
    nextEl: '.hero-slider__button-next',
    prevEl: '.hero-slider__button-prev',
  },
});