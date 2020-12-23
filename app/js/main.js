
$(document).ready(function(){
  $('.burger-menu').click(function(event){
    $('.burger-menu').toggleClass('menu-open');
  });

  $('.product-item__favorite').click(function(event){
    $(this).toggleClass('product-item__favorite--active');
  });

});