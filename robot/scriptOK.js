var Table = (function () {
    Table.prototype.w = 5;
    Table.prototype.h = 6;
    function Table(h, w) {
        if(h){
            this.h = h;
        }
        if(w) {
            this.w = w;
        }
    };

    Table.prototype.resize = function(){
        $('#tbl').css('width', 30*this.w);
        $('#tbl').css('height', 30*this.h);
    };

    return Table;
})();

$(document).ready(function() {
    console.log("123");

    var w = prompt('vv w');
    var h = prompt('vv h');
    var t1 = new Table(h, w);
    t1.resize();
    console.log($('#tbl'.width));
});


var Robbot = (function () {
    function Robbot() {}

    Robbot.prototype.go = function () {

        $(document).keydown(function (key) {

            switch (parseInt(key.which, 10)) {
                case 37:
                    // Left Arrow Pressed
                    if ($('.robot').position().left < 79) alert('!!');
                    else  $('.robot').animate({left: "-=10px"}, 'fast');
                    break;
                case 38:
                    // Up Arrow Pressed
                    if ($('.robot').position().top < 80 ) alert('!!');
                    else $('.robot').animate({top: "-=10px"}, 'fast');
                    break;
                case 39:
                    // Right Arrow Pressed
                    if ($('.robot').position().left >$('#tbl').100 ) alert('!!');
                    else $('.robot').animate({left: "+=10px"}, 'fast');
                    break;
                case 40:
                    // Down Arrow Pressed
                    if ($('.robot').position().top  > $('#tbl').100) alert('!!');
                    else $('.robot').animate({top: "+=10px"}, 'fast');
                    break;
            };
            console.log($('.robot').position());
            console.log();
        });
    };
    var Rob = new Robbot();
    Rob.go();

    return Robbot;

})();


