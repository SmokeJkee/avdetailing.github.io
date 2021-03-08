$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});


$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/l_arrow.png"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/r_arrow.png"></img></button>',
    /* responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ] */
  });
});

