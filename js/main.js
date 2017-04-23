'use strict';

$(document).ready(function () {
    $('.menu_list_items').on('click', function (e) {
        e.preventDefault();     
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
});

