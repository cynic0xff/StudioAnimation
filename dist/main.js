"use strict";

jQuery(document).ready(function ($) {
  var DEBUG = true;
  var running = false;
  var speed = 3;
  var s_top = 3400;
  var scale = 3.5;
  var repeat = 0;
  var repeat_delay = 1; //const top = -window.innerHeight;

  var top = -$('#studio-letters').height();
  var bottom = $('#studio-letters').height();

  if (DEBUG) {
    console.log("Top: ".concat(top));
    console.log("Bottom: ".concat(bottom));
  }

  var animate_letter = function animate_letter(element, direction, x_direction) {
    var tl = new TimelineMax({
      repeat: repeat,
      repeatDelay: repeat_delay
    }),
        letter = $(element).toArray();
    /* S */

    tl.staggerFrom(letter, speed, {
      y: direction,
      x: x_direction,
      ease: Strong.easeOut,
      scale: scale
    }, 0);
  }; //animate letters


  function runAnim() {
    animate_letter(document.querySelector('.icw-s'), top, 0);
    animate_letter(document.querySelector('.icw-t'), bottom, 0);
    animate_letter(document.querySelector('.icw-u'), top, 0);
    animate_letter(document.querySelector('.icw-d'), bottom, 0);
    animate_letter(document.querySelector('.icw-i'), top, 0);
    animate_letter(document.querySelector('.icw-o'), bottom, 0);
  } //main
  //startAnim();


  $(window).scroll(function () {
    var triggerHeight = $('#studio-letters').offset().top,
        outerHeight = $('#studio-letters').outerHeight(),
        winHeight = $(window).height(),
        winTop = $(this).scrollTop(); //call anim when trigger is reached

    if (winTop > triggerHeight + outerHeight - winHeight) {
      if (!running) {
        running = true;
        runAnim();
      }
    }
  });
});