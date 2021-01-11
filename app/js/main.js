$(function() {

  $('.burger-menu').on('click', function () {
		$('.header__inner').toggleClass('menu-open')
  });

  $('.drop-list').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });

  $('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--active')
  });
  
  $('.collection-slider__share-btn').on('click', function () {
		$('.collection-slider__share-items').toggleClass('open-share')
  });

  $('.search__button').on('click', function (event) {
    $('.form__search').toggleClass('open-search'),
    event.preventDefault()
  });
  
});

let mySwiper = new Swiper('.hero-slider__container', {
  slidesPerView: 1,
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

let mySwiperSecond = new Swiper('.collection-slider__container', {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.collection-slider__pagination',
    type: 'fraction', 
    renderFraction: function (currentClass, totalClass) {
      return '0<span class="' + currentClass + '"></span>' +
              '/' +
              '0<span class="' + totalClass + '"></span>';
  }
  },
  navigation: {
    nextEl: '.collection-slider__button-next',
    prevEl: '.collection-slider__button-prev',
  },
});

let mySwiperStars = new Swiper('.reviews-content-slider', {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.reviews-content-slider__pagination',
    type: 'fraction', 
    renderFraction: function (currentClass, totalClass) {
      return '0<span class="' + currentClass + '"></span>' +
              '/' +
              '0<span class="' + totalClass + '"></span>';
  }
  },
  navigation: {
    nextEl: '.reviews-content-slider__button-next',
    prevEl: '.reviews-content-slider__button-prev',
  },
});



