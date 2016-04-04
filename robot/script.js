$(document).ready(function() {
    $(document).keydown({containment:'#tbl'})(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('.robot').animate({left: "-=10px"}, 'fast');
                break;

            // Up Arrow Pressed
            case 38:
                $('.robot').animate({top: "-=10px"}, 'fast');

                break;
            // Right Arrow Pressed
            case 39:
                $('.robot').animate({left: "+=10px"}, 'fast');


                break;
            // Down Arrow Pressed
            case 40:
                $('.robot').animate({top: "+=10px"}, 'fast');
                break;
        }
    });
});


