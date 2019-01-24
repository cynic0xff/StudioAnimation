jQuery(document).ready(function($) {

    let speed = 2;
    let s_top =  3400;
    let scale = 3.5;
    let repeat = -1;
    let repeat_delay = 1;
    const top = -window.innerHeight;
    const bottom = window.innerHeight;

    let animate_letter = ((element, direction, x_direction) => {
        
        var tl = new TimelineMax({ repeat: repeat, repeatDelay: repeat_delay }),
        letter = $(element).toArray();
    
        /* S */
        tl.staggerFrom(letter, speed, {
            y: direction,
            x: x_direction,
            ease: Strong.easeOut,
            scale: scale,
        }, 1);
    });

    //main
    animate_letter(document.querySelector('.icw-s'), top, 0);
    animate_letter(document.querySelector('.icw-t'), bottom, 0);
    animate_letter(document.querySelector('.icw-u'), top, 0);
    animate_letter(document.querySelector('.icw-d'), bottom, 0);
    animate_letter(document.querySelector('.icw-i'), top, 0);
    animate_letter(document.querySelector('.icw-o'), bottom, 0);
});
