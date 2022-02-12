// menu hover effect 
$(function() {
    $(".action-button > a").on('mouseenter', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
    $(".action-button > a").on('mouseout', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
  });
     // owl carousell 
     $(document).ready(function(){
        $(".owl-carousel1").owlCarousel({items: 2, margin: 50, loop : true, 
            autoplay: true,
            dots: true,
            dotsEach: true,
            responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        426:{
            items:3,
        },
        769:{
            items:4,
        }
    }
    });
    });
  // wow plugin 
  new WOW().init(); 
  // counter plugin 
  $('.counter').counterUp({
    delay: 10,
    time: 3000
    });

 