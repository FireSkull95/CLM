// JavaScript Functions
// Felice js v1.0 by Angelo Mazzilli
// http://themeforest.net/user/AngeloM
// $.noConflict();

/*
 * .addClassSVG(className)
 * Adds the specified class(es) to each of the set of matched SVG elements.
 */
$.fn.addClassSVG = function(className){
    $(this).attr('class', function(index, existingClassNames) {
        return existingClassNames + ' ' + className;
    });
    return this;
};

/*
 * .removeClassSVG(className)
 * Removes the specified class to each of the set of matched SVG elements.
 */
$.fn.removeClassSVG = function(className){
    $(this).attr('class', function(index, existingClassNames) {
        var re = new RegExp(className, 'g');
        return existingClassNames.replace(re, '');
    });
    return this;
};


$( document ).ready(function() {
  $('.carousel').carousel({interval: 50000});
  /* --- NiceScroll --- */
  // $("html").niceScroll({mousescrollstep:55});

  /* --- Sequencejs Slider --- */
  var options = {
    nextButton: true,
    prevButton: true,
    pagination: true,
    animateStartingFrameIn: true,
    autoPlay: true,
    autoPlayDelay: 3000,
    preloader: true,
  };
  var mySequence = $("#sequence").sequence(options).data("sequence");

  /* --- Flex Carousel --- */
  $(".flexslider").flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 300,
    itemMargin: 0,
    prevText: "<i class='icon-angle-left'></i>",
    nextText: "<i class='icon-angle-right'></i>",
  });

  /* --- Flex Carousel Clients --- */
  $(".flexslider-clients").flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 150,
    itemMargin: 0,
    prevText: "<i class='icon-angle-left'></i>",
    nextText: "<i class='icon-angle-right'></i>",
  });

  /* --- Fancybox --- */
  $(".view-fancybox").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
    next: '<i class="icon-smile"></i>',
    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
  });

  /* --- Active Filter Menu --- */
  $(".filter a").click(function (e) {
    $(".filter a").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });

  /* --- Hover Effect --- */
  $('.masonry .item, .thumbnails li').mouseover(function () {
    $(this).siblings().css({opacity: 0.5}, 500)
  })
  .mouseout(function () {
    $(this).siblings().css({opacity: 1}, 500)
  });

  /* --- toTop --- */
  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });


  /* --- Mailer --- */
  var nameError = '<div class="alert-message error">Будь ласка введіть Ваше ім*я.<span class="close" href="#">x</span></div>',
    emailError = '<div class="alert-message error">Будь ласка введіть Вашу e-mail скриньку.<span class="close" href="#">x</span></div>',
    invalidEmailError = '<div class="alert-message error">Будь ласка введіть вірний e-mail.<span class="close" href="#">x</span></div>',    
    messageError = '<div class="alert-message error">Будь ласка введіть своє повідомлення.<span class="close" href="#">x</span></div>', 
    mailSuccess = '<div class="alert-message success"><strong>Ваше повідомлення було надіслано. Дякуємо!</strong><span class="close" href="#">x</span></div>',
    mailResult = $('#contact-form-result');

    $("#contact-form").submit(function()
    {
        var form = $(this);
        var formParams = form.serialize();
        $.ajax(
        {
            url: 'send-message',
            type: 'POST',
            traditional: true,
            data: formParams,
            success: function(data){
                var response = jQuery.parseJSON(data);        
                if(response.success)
                {   $('#contact-form').slideUp().height('0');
                    $('#contact-form-result').append(mailSuccess);
                } else {
                   for(i=0; i<response.errors.length; i++){
                     if(response.errors[i].error == 'empty_name')  {                          
                       mailResult.append(nameError);
                     }
                     if(response.errors[i].error == 'empty_email')  {                          
                       mailResult.append(emailError);
                     }
                     if(response.errors[i].error == 'empty_message')  {                          
                       mailResult.append(messageError);
                     }
                     if(response.errors[i].error == 'invalid'){
                      mailResult.append(invalidEmailError);
                     }
                   }
                }
                $( ".close" ).click(function() {
                  $( this ).closest("div").remove();
                });
            }
        })
        return false;
    });

/* --- Masonry --- */
$(window).load(function () {

  if (jQuery().isotope) {
    $(".masonry").isotope({
      itemSelector: ".item"
    });
    $("#folio-filters a").click(function () {
      var selector = $(this).attr("data-filter");
      $(".masonry").isotope({
        itemSelector: ".item",
        filter: selector
      });
      return false;
    });
  }

});


});