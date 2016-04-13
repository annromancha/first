$(document).ready(function() {

    var width = $('.slidesContainer').width();


    $('.slide>li').width(width);
    $('.slide').width(width * $('.slide>li').length);
    $('.slide').css('left', -width);
    $('.slide>li:last-child').prependTo('.slide');

    //вперед
    function nextSlide() {
        $('.slide').animate({
            'margin-left': -width
        }, 500, function () {
            $('.slide>li:first-child').appendTo('.slide');
            $('.slide').css('margin-left', 0);
        });
    }

    //назад
    function prevSlide() {
        $('.slide').animate({
            'margin-left': width
        }, 500, function () {
            $('.slide>li:last-child').prependTo('.slide');
            $('.slide').css('margin-left', 0);
        });
    }
    function start() {
        for (i = 0; i < 5; i++) {

            $('.slide').animate({
                'margin-left': -width
            }, 5000, function () {
                $('.slide>li:first-child').appendTo('.slide');
                $('.slide').css('margin-left', 0);
            });
        };
    };

    //кнопочки
    $('.next').click(nextSlide);
    $('.last').click(prevSlide);
    $('.start').click(start);




});
