"use strict";

jQuery(document).ready(function ($) {
  var speed = 2;
  var s_top = 3400;
  var scale = 3.5;
  var repeat = -1;
  var repeat_delay = 1;
  var top = -window.innerHeight;
  var bottom = window.innerHeight;

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
    }, 1);
  }; //main


  animate_letter(document.querySelector('.icw-s'), top, 0);
  animate_letter(document.querySelector('.icw-t'), bottom, 0);
  animate_letter(document.querySelector('.icw-u'), top, 0);
  animate_letter(document.querySelector('.icw-d'), bottom, 0);
  animate_letter(document.querySelector('.icw-i'), top, 0);
  animate_letter(document.querySelector('.icw-o'), bottom, 0);
});