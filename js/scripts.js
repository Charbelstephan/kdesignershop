/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */

$(document).ready(function () {
  /* HANDLEBARS CODE */

  // Retrieve the template data from the HTML (jQuery is used here).
  var template = $('#portfolio-images-handlebar').html();

  // Compile the template data into a function
  var templateScript = Handlebars.compile(template);

  var context = {
    "products": [
      { "productImage": "1.jpg", "productName": "Test1", "productPrice": "50$" },
      { "productImage": "2.jpg", "productName": "Test2", "productPrice": "100$" },
      { "productImage": "3.jpg", "productName": "Test3", "productPrice": "150$" },
      { "productImage": "4.jpg", "productName": "Test4", "productPrice": "250$" },
      { "productImage": "5.jpg", "productName": "Test5", "productPrice": "300$" },
      { "productImage": "6.jpg", "productName": "Test6", "productPrice": "350$" },
    ]
  };
  // html = 'My name is Ritesh Kumar. I am a developer.'
  var html = templateScript(context);

  // Insert the HTML code into the page
  $("#portfolio-images").append(html);



});

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
