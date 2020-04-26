$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: false,
        dotsEach:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
                dotsEach:true
            },
            1000:{
                items:1,
            }
        }
    })

    // scroll top
    var btn = $('#button');
    var menu = $('.header .menu')

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }

        // menu-fixed
      if($(window).scrollTop() > 200){
        menu.addClass('fixed')
      } else {
        menu.removeClass('fixed')
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    }); 
    
    //menu mobile 
    let menuMobile = $('.menu-mobile__item');
    menuMobile.click(function(){
      menuMobile.removeClass('active-2')
      $(this).addClass('active-2')
    })

    $('.menu-toggle label').click(function(){
      $('.overlay').toggleClass('active-overlay')
      $('.menu-mobile').toggleClass('active-menu')
      $(this).toggleClass('active-label')
    })

    $('.overlay').click(function(){
      $(this).removeClass('active-overlay')
      $('.menu-mobile').removeClass('active-menu')
      $('.menu-toggle label').removeClass('active-label')
    })
    
    
});
