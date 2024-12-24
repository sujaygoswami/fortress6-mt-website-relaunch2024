jQuery(document).ready(function(){








function isAppleDevice(){
return (
(navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
);
}
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
var appStoreURL = "";
if(isAndroid > -1){
jQuery('body').addClass('android-device');
jQuery('html').addClass('android-device');
}
else if( isAppleDevice() ){
jQuery('body').addClass('ios-device');
jQuery('html').addClass('ios-device');

  // jQuery( window ).on( "orientationchange", function( event ) {
  //   location.reload();
  // });


}





//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();





// global vars
var HEADERHEIGHT = jQuery('header.header').height();





// object notation
var site = {}



site.HEADERSCROLLFUNCTION = function () {




  if (jQuery(document).scrollTop() > 10) {
    jQuery('header.header').addClass('header-scrolled');
  }
  else {
    jQuery('header.header').removeClass('header-scrolled');
  }



};






jQuery(window).resize(function(){


});



jQuery( window ).on( "orientationchange", function( event ) {

   
          
});

jQuery(window).scroll(function () {
  site.HEADERSCROLLFUNCTION();
});









// set back

jQuery('.set-back').each(function(){

 var SETBACK = jQuery(this).find('img').attr('src');
  jQuery(this).css('background-image', 'url(' + SETBACK + ')');

});










jQuery('.touch .has-submenu > a').addClass('dual-click');
   
   jQuery(document).on( "click", ".dual-click", function(event) {
        
        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


// go top
 jQuery('.go-top').click(function(){
   jQuery('html, body').animate({scrollTop: 0}, 400);
  
});


// global carousel
jQuery('.global-carousel:not(.counter-hidden)').each(function(){


var $globalCarousel = jQuery(this);


if ($globalCarousel.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).html('<span>'+currentSlide+'</span>'+ '<span>'+'/'+'</span>' +'<span>'+slidesCount+'</span>');
  };

  $globalCarousel.on('init', function(event, slick) {
    $globalCarousel.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $globalCarousel.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
}

});

jQuery('.global-carousel-type-1').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});
jQuery('.global-carousel-type-2').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});
jQuery('.global-carousel-type-3').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
});

jQuery('.type-arrow-pagination-view-1').each(function(){
  jQuery(this).find('.slick-arrow').wrapAll('<div class="slider-arrow-holder"></div>');
  jQuery(this).find('.slider__counter, .slider-arrow-holder').wrapAll('<div class="global-carousel-slider-navigate-wrap"></div>');
  var WRAPPARENT = jQuery(this).find('.global-carousel-slider-navigate-wrap');
  jQuery(this).find('.slider__counter').detach().prependTo(WRAPPARENT);
});

jQuery('.global-carousel-slider-navigate-wrap').each(function(){
  var NAVIGATEPLACE = jQuery(this).parents('section').find('.carousel-navigate-with-header');
  jQuery(this).detach().appendTo(NAVIGATEPLACE);
});






// menu trigger
jQuery('.header-menu .menu-trigger').click(function(){
  jQuery('.header-search, .header-logo-holder').toggle();
  jQuery(this).toggleClass('clicked');
  jQuery('.main-nav.slide-action').show();
  jQuery('.main-nav.slide-action').toggleClass('fadeInDown');
  jQuery('.main-nav.slide-action').toggleClass('fadeOutUp');
});

// fancybox
Fancybox.bind('[data-fancybox]', {
  Html : {
    youtube: {
      controls: 0,
      rel: 0,
      fs: 0
    }
  }
});   

// page anchoring
$(document).on('click', '.anchor-link', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - (HEADERHEIGHT + 40)
  }, 100);
});

// filter navigation slider
jQuery('.filter-navigation-slider .the-slider').each(function(){

  jQuery(this).slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    draggable: false,
    initialSlide: 0
  });

  jQuery(this).find('.slick-arrow').wrapAll('<div class="global-carousel-slider-navigate-wrap"><div class="slider-arrow-holder"></div></div>');

});


// item-with-hidden-check-radio
  jQuery('.item-with-hidden-check-radio input').click(function(){
    jQuery(this).parent().trigger('click');
  });


// player-detail-info-module 
jQuery('.player-detail-info-module .info-table.parent-table table').each(function(){
  var WIDTH = jQuery(this).width();
  jQuery(this).parents('.player-detail-info').find('.info-table.child-table table').width(WIDTH);
});


// primary btn
jQuery('.primary-btn').addClass('site-btn');
jQuery('.content-btn').addClass('site-btn primary-btn no-default-arrow down-arrow-icon-light anchor-link');








});








// load
jQuery(window).load(function(){

  // getMaxChildWidth
  function getMaxChildWidth(sel) {
    max = 0;
    jQuery(sel).children().each(function(){
        c_width = parseInt($(this).width());
        if (c_width > max) {
            max = c_width;
        }
    });
    return max;
  }

// nav max width
jQuery('.nav-items-wrap').each(function(){
  var THIS = jQuery(this);
  var ORIGINALWIDTH = jQuery(this).width();
  var MAXWIDTHNAVSUB = getMaxChildWidth(jQuery(THIS).find('.sub-item'));
  var SUBTRACTWIDTHFORPAD = MAXWIDTHNAVSUB + 107;
  var NAVWRAPHEIGHT = jQuery(this).height();
  // console.log(MAXWIDTHNAVSUB);
  jQuery(this).find('.sub-item').width(MAXWIDTHNAVSUB);
  jQuery(this).find('.sub-item').css('min-height', NAVWRAPHEIGHT);
  jQuery(this).width(MAXWIDTHNAVSUB + ORIGINALWIDTH + 107);
  // jQuery(this).find('.parent-menu').css('padding-right', SUBTRACTWIDTHFORPAD);
});
jQuery('.nav-primary').each(function(){
 var WIDTH = jQuery(this).width();
 var SUBITEMWIDTH = jQuery(this).find('.sub-item').width();
 jQuery('.nav-secondary').width(WIDTH);
 jQuery('.nav-secondary .sub-item').width(SUBITEMWIDTH);
});

// menu slide
jQuery('.main-nav.slide-action').addClass('loaded fadeOutUp');



// match height
  jQuery('.equal-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.element-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.get-grid-main-module-height .the-main-module').matchHeight();

  jQuery('.equal-card-header .the-card-header').matchHeight();

  jQuery('.global-carousel.equal-height-item .item').matchHeight();

  jQuery('.pricing-box-module .pricing-header').matchHeight({byRow: false});

  jQuery('.news-widget-match-height-type-1 .news-title').matchHeight();
  jQuery('.news-widget-match-height-type-1').matchHeight({byRow: false});

  jQuery('.download-module .download-item').matchHeight();
  





// adapt-height-parent-50
jQuery('.adapt-height-parent-50-default-grid').each(function(){
  var HEIGHT = jQuery(this).height();
  jQuery(this).find('.adapt-height').height((HEIGHT/2) - 10);
});

var siteLoad = {}




siteLoad.CAPTIONSLIDERHEIGHT = function() {

  
    

};   




jQuery(window).resize(function(){


});


// teaser module min height
jQuery('.teaser-module.has-min-height').each(function(){
  var HEIGHT = jQuery(this).parents('.the-main-module').height();
  jQuery(this).height(HEIGHT);
});


});

