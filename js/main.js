'use strict';

$(document).ready(function () {
    $('.menu_list_items').on('click', function (e) {
        e.preventDefault();     
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
});

/*ŻEBY POBRAĆ WHEELDELTA TRZEBA UŻYĆ .BIND('MOUSEWHEEL',...*/
$(window).bind('mousewheel', function (e) {
    var position = $(document).scrollTop();
    var menu_bar = $('#menu');
    if (position < 200) {
        menu_bar.css('background-color', 'rgba(255,255,255,1)');
        menu_bar.css('margin-top', '0');
        console.log('scrollowanie niżej 200');
    } else {
        menu_bar.css('background-color', 'rgba(255,255,255,0)');
        console.log(menu_bar.css('margin-top'));
        if (e.originalEvent.wheelDelta == -120) {
            if (parseInt(menu_bar.css('margin-top')) == 0) {
                menu_bar.animate({
                    marginTop: '-50',
                }, 1000, function () {
                    console.log('animacja chowania zakończona')
                });
            } else {
                console.log('schowane');
            }
        } else {
            menu_bar.animate({
                marginTop: '0',
            }, 500);
        }
    }
});