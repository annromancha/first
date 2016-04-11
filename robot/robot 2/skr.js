

$(document).ready(function(){
    $(document).keydown(function(key) {
        $('m')= parseInt(key.which)
    });
    return $('m');
});
function Robot (m){
    this.key = m;
}


    $(document).ready(function() {


        switch (new Move().getKey()) {
            // Left arrow key pressed
            case 37:
                if($('this').position().left  < 80) alert('You gotta fade down!!!!!');
                else  $('this').animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                if($('this').position().top  < 140)alert('Good bye, Robbie...');
                else $('this').animate({top: "-=10px"}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                if($('this').position().left -10 > max_width) alert('!!');
                else $('this').animate({left: "+=10px"}, 'fast');
                break;
            // Down Arrow Pressed
            case 40:
                if($('this').position().top +10   > max_height) alert('!!');
                else $('this').animate({top: "+=10px"}, 'fast');
                break;
        };
        console.log($('this').position());
        console.log();
    });



}););