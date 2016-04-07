

var Robbot = (function() {
    function Robbot() {}
    /*Robbot.prototype.x = this.position().left;
    Robbot.prototype.y = this.position().top;*/
    Robbot.prototype.name = "";

    Robbot.prototype.go = function () {
        $(document).ready(function() {
            $(document).keydown(function(key) {
                switch(parseInt(key.which,10)) {
                    case 37:
                        if ($('.robot').position().left < 80) alert('You gotta fade down!!!!!');
                        else  $('.robot').animate({left: "-=10px"}, 'fast');
                        break;
                    case 38:
                        if($('.robot').position().top  < 140) alert('!!');
                        else $('.robot').animate({top: "-=10px"}, 'fast');
                        break;
                    case 39:
                        if($('.robot').position().left  > 540) alert('!!');
                        else $('.robot').animate({left: "+=10px"}, 'fast');
                        break;
                    case 40:
                        if($('.robot').position().top -10  > 420) alert('!!');
                        else $('.robot').animate({top: "+=10px"}, 'fast');
                        break;
                };
                console.log($('.robot').position());
                console.log();
            });
        });
    };

    var Rob = new Robbot();
    Rob.go();
    var LL = new Robot();
    LL.go();
    return Robbot;

})();
