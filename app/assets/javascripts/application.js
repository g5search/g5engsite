// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require orbit-1.4
//= require_tree .
//= require jquery.ui.accordion

(function($){$.fn.jScroll=function(e){var f=$.extend({},$.fn.jScroll.defaults,e);return this.each(function(){var a=$(this);var b=$(window);var c=new location(a);b.scroll(function(){a.stop().animate(c.getMargin(b),f.speed)})});function location(d){this.min=d.offset().top;this.originalMargin=parseInt(d.css("margin-top"),10)||0;this.getMargin=function(a){var b=d.parent().height()-d.outerHeight();var c=this.originalMargin;if(a.scrollTop()>=this.min)c=c+f.top+a.scrollTop()-this.min;if(c>b)c=b;return({"marginTop":c+'px'})}}};$.fn.jScroll.defaults={speed:"slow",top:10}})(jQuery);

//keep element in view
// (function($)
// {
//   $(document).ready( function()
//   {
//     var elementPosTop = $('#body_content_right').offset().top;
//     $(window).scroll(function()
//     {
//       var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height()
//       //if top of element is in view
//       if (wintop > elementPosTop)
//       {
//         //always in view
//         $('#body_content_right').css({ "position":"relative", "float": "right", "top": (wintop-elementPosTop)+20+'px' })
//       }
//       else
//       {
//         //reset back to normal viewing
//         $('#body_content_right').css({ "position":"absolute", "top": 0})
//       }
//     });
//   });
// })(jQuery);

$(document).ready(function() {

  $("#body_content_right").jScroll();

  $('.about-nav').click(function() {
    div_to_scroll = $(this).attr('href')

    $('html, body').animate({
      scrollTop: $("#"+div_to_scroll).offset().top
    }, 1000)
    return false
  })

  $('.to_the_top').click(function() {
    $('html, body, #page_container').animate({
      scrollTop: 0
    }, 750)
  })

  $('#featured').orbit({
     animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
     animationSpeed: 1000,                // how fast animtions are
     timer: true, 			 // true or false to have the timer
     resetTimerOnClick: false,           // true resets the timer instead of pausing slideshow progress
     advanceSpeed: 4000, 		 // if timer is enabled, time between transitions 
     pauseOnHover: false, 		 // if you hover pauses the slider
     startClockOnMouseOut: false, 	 // if clock should start on MouseOut
     startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
     directionalNav: false, 		 // manual advancing directional navs
     captions: false, 			 // do you want captions?
     captionAnimation: 'fade', 		 // fade, slideOpen, none
     captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
     bullets: true,			 // true or false to activate the bullet navigation
     bulletThumbs: false,		 // thumbnails for the bullets
     bulletThumbLocation: '',		 // location from this file where thumbs will be
     afterSlideChange: function(){}, 	 // empty function 
     fluid: true                         // or set a aspect ratio for content slides (ex: '4x3') 
	})
})
