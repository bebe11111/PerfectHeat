/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

jQuery(function($){
  "use strict";
    jQuery('.menu > ul').superfish({
      delay:       500,
      animation:   {opacity:'show',height:'show'},
      speed:       'fast'
    });

    /* Top Search */

    jQuery('.search-icon > i').click(function(){
      jQuery(".serach_outer").slideDown(800);
    });

    jQuery('.search-close-icon i').click(function(){
      jQuery(".serach_outer").slideUp(800);
    });

});

/* Mobile responsive Menu*/

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

jQuery(function() {
  //----- OPEN
  jQuery('[data-popup-open]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  //----- CLOSE
  jQuery('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
});

jQuery('document').ready(function(){
    var owl = jQuery('#counter .owl-carousel');
      owl.owlCarousel({
      margin: 25,
      nav:false,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots: false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        900: {
          items: 3
        },
        1000: {
          items: 4
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#service .owl-carousel');
      owl.owlCarousel({
      margin: 0,
      nav:true,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots: false,
      navText : ['<i class="fa-solid fa-arrow-left-long"></i><span>Prev</span>','<span>Next</span><i class="fa-solid fa-arrow-right-long"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        900: {
          items: 3
        },
        1000: {
          items: 4
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });
    var owl = jQuery('#our_shop .owl-carousel');
      owl.owlCarousel({
      margin: 25,
      nav:true,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots: true,
      navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        900: {
          items: 2
        },
        1000: {
          items: 2
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#team .owl-carousel');
      owl.owlCarousel({
      margin: 0,
      nav:false,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: true,
      dots: true,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        900: {
          items: 3
        },
        1000: {
          items: 4
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#latest_news .owl-carousel');
      owl.owlCarousel({
      margin: 30,
      nav:false,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: true,
      dots: true,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        900: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#sponsor .owl-carousel');
      owl.owlCarousel({
      margin: 0,
      nav:false,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: true,
      dots: true,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        800: {
          items: 3
        },
        1000: {
          items: 6
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#our_work .owl-carousel');
      owl.owlCarousel({
      margin: 0,
      nav:true,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: true,
      dots: false,
      center:true,
      navText : ['<i class="fa-solid fa-arrow-left-long"></i><span>Prev</span>','<span>Next</span><i class="fa-solid fa-arrow-right-long"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        900: {
          items: 4
        },
        1000: {
          items: 6
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

});


jQuery('document').ready(function(){

  jQuery('.counter').each(function () {
      jQuery(this).prop('Counter',0).animate({
          Counter: jQuery(this).text()
      }, {
          duration: 8000,
          easing: 'swing',
          step: function (now) {
             jQuery(this).text(Math.ceil(now));
          }
      });
  });

  var footer1=jQuery('#contact-details').outerHeight();
  jQuery('.google-map iframe').height(footer1);

  // ------------ Scroll Top ---------------

  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function() {      // When arrow is clicked
    jQuery('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
    }, 2000);
  });

});
// ------------ Sticky Navbar -------------------
   var stickyon = jQuery('#sticky-onoff').text().trim();
   var a1 = stickyon.length;
   var navbar = document.getElementById("header");

   window.onscroll = function() {
       if (a1 == 3) {
           if (navbar != null) {
               myScrollNav();
           }
       }
   }

   if (navbar != null) {
       var sticky = jQuery(navbar).offset().top;
   }

   function myScrollNav() {
       if (window.pageYOffset > sticky) {

           //alert(window.pageYOffset);
           navbar.classList.add("sticky");
           navbar.classList.add("stickynavbar");
       } else {
           navbar.classList.remove("sticky");
           navbar.classList.remove("stickynavbar");
       }
   }


//Loader
jQuery(window).load(function() {
  jQuery(".preloader").delay(2000).fadeOut("slow");
});

// Accordian
jQuery(function($) {
    $(".collapse").on('show.bs.collapse', function() {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
        $(this).parent().addClass("faq-collapsed");

    }).on('hide.bs.collapse', function() {
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
        $(this).parent().removeClass("faq-collapsed");

    });
});
// ---------Faq Last Word--------------
jQuery(document).ready(function() {
        jQuery('.faq-form-box h3').each(function(index, element) {
            var heading = jQuery(element);
            var word_array, last_word, first_part;

            word_array = heading.html().split(/\s+/); // split on spaces
            last_word = word_array.pop();             // pop the last word
            first_part = word_array.join(' ');        // rejoin the first words together

            heading.html([first_part, ' <span class="last-word">', last_word, '</span>'].join(''));
        });
        // ------------------

        var rev = jQuery('.rev_slider');
        rev.on('init', function(event, slick, currentSlide) {
          var
            cur = jQuery(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
          prev.addClass('slick-sprev');
          next.addClass('slick-snext');
          cur.removeClass('slick-snext').removeClass('slick-sprev');
          slick.$prev = prev;
          slick.$next = next;
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          //console.log('beforeChange');
          var
            cur = jQuery(slick.$slides[nextSlide]);
          //console.log(slick.$prev, slick.$next);
          slick.$prev.removeClass('slick-sprev');
          slick.$next.removeClass('slick-snext');
          next = cur.next(),
            prev = cur.prev();
          prev.prev();
          prev.next();
          prev.addClass('slick-sprev');
          next.addClass('slick-snext');
          slick.$prev = prev;
          slick.$next = next;
          cur.removeClass('slick-next').removeClass('slick-sprev');
        });

        rev.slick({
          speed: 1000,
          arrows: true,
          dots: false,
          focusOnSelect: true,
          prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-arrow-left-long"></i> prev</button>',
          nextArrow: '<button class="next-arrow"> next <i class="fa-solid fa-arrow-right-long"></i></button>',
          infinite: true,
          centerMode: true,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
          swipe: true,
          customPaging: function(slider, i) {
            return '';
          },
          /*infinite: false,*/
      });
});

// let i=0 ;
//
//     jQuery('.workslide').click(function(){
//        jQuery('.workactive').addClass('nonActive')
//         jQuery(this).removeClass('nonActive').addClass('workactive')
//         i= $(this).index()
//     })
//
//     setItner = setInterval(go,4000);
//
//     function go(){
//        jQuery('.workactive').addClass('nonActive')
//         jQuery(jQuery('.workslide')[i%6]).removeClass('nonActive').addClass('workactive')
//         i++;
//     }
// ---------------------------------
