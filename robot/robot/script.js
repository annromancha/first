$(document).ready(function() {
    $(document).keydown(function(key) {
        var max_width = $('.table').width();
        var max_height = $('.table').height();

        switch(parseInt(key.which,10)) {
            // Left arrow key pressed

            case 37:

                if($('.robot').position().left  < max_width) alert('You gotta fade down!!!!!');

                else  $('.robot').animate({left: "-=10px"}, 'fast');

                break;
            // Up Arrow Pressed
            case 38:
                if($('.robot').position().top - 10 < max_height) alert('!!');
                else $('.robot').animate({top: "-=10px"}, 'fast');

                break;
            // Right Arrow Pressed
            case 39:
                if($('.robot').position().left - 40 > max_width) alert('!!');
                else $('.robot').animate({left: "+=10px"}, 'fast');


                break;
            // Down Arrow Pressed
            case 40:
                if($('.robot').position().top -100  > max_height) alert('!!');
                else $('.robot').animate({top: "+=10px"}, 'fast');
                break;

        }

        console.log($('.robot').position());
        console.log();

    });
});


