$(document).ready(function(){


    $(".menu-btn").click(function(){
        $('.mobile-nav').slideToggle("slow");
    });

    $(".menu-btn").click(function(){
        $(this).css('opacity' , '0.4');
    });

    $('img').zoomify();

    $(".menu-btn-on-prices").click(function(){
        $('.mobile-nav-on-prices').slideToggle("slow");
    });

    
});

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);