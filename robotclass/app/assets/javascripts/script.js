



//table.............................................................................................................

var Table = (function () {
    Table.prototype.w = 6;
    Table.prototype.h = 5;
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
    $('.button').on('click', function () {
        t1.w = $("#quantity1:text").val();
        t1.h = $("#quantity:text").val();
        t1.resize();
    });
    $('#up').on('click', function () {
        $('.robot').animate({top: "-=10px"}, 'fast');
        if ($('.robot').position().top < 0) {$('.robot').stop(true, true).css('top', 0)};
    });

    $('#left').on('click', function () {
        $('.robot').animate({left: "-=10px"}, 'fast');
        if ($('.robot').position().left < 0) {
            $('.robot').stop(true, true).css('left', 0)};
    });
    $('#down').on('click', function () {
        $('.robot').animate({top: "+=10px"}, 'fast');
        if ($('.robot').position().top >= t1.h * 30 - 30) {
            $('.robot').stop(true, true).css('top', t1.h * 30 - 31)};
    });
    $('#right').on('click', function () {
        $('.robot').animate({left: "+=10px"}, 'fast');
        if ($('.robot').position().left >= t1.w * 30 - 30) {
            $('.robot').stop(true, true).css('left', t1.w * 30 - 31)};
    });
    var t1 = new Table();
    var rob = new Robbot({table: t1});
    rob.go();
    //var h = new Kontroler({table: t1});
    //h.go();
});


//kontroler................................................................................................
//var Kontroler = (function(){
//    console.log('popopop');
//    function Kontroler(options) {
//        this.table = options.table;
//        $(document).on('click', this.go.bind(this));
//    };
//    Kontroler.prototype.go = function(){
//        switch(a){
//            case $('#up'): $('.robot').animate({top: "-=10px"}, 'fast');
//                break;
//            case  $('#left'): $('.robot').animate({left: "-=10px"}, 'fast');
//                break;
//            case $('#down'):$('.robot').animate({top: "+=10px"}, 'fast');
//                break;
//            case $('#right'):$('.robot').animate({left: "+=10px"}, 'fast');
//                break;
//        };
//        if ($('.robot').position().top < 0) {$('.robot').stop(true, true).css('top', 0)};
//        if ($('.robot').position().left < 0) {$('.robot').stop(true, true).css('left', 0)};
//        if ($('.robot').position().top >= this.table.h * 30 - 30) {$('.robot').stop(true, true).css('top', this.table.h * 30 - 31)};
//        if ($('.robot').position().left >= this.table.w * 30 - 30) {$('.robot').stop(true, true).css('left', this.table.w * 30 - 31)};
//
//    };

//    return Kontroler;
//})();


//robot..........................................................................................................

var Robbot = (function () {
    function Robbot (options) {
        this.table = options.table;
        $(document).keydown(this.go.bind(this));
    }
    Robbot.prototype.table = null;

    Robbot.prototype.go = function (key) {


        switch (parseInt(key.which, 10)) {
            case 37:
                // Left Arrow Pressed
                    $('.robot').animate({left: "-=10px"}, 'fast');
                break;
            case 38:
                // Up Arrow Pressed
                    $('.robot').animate({top: "-=10px"}, 'fast');
                break;
            case 39:
                // Right Arrow Pressed
                $('.robot').animate({left: "+=10px"}, 'fast');
                break;
            case 40:
                // Down Arrow Pressed
                $('.robot').animate({top: "+=10px"}, 'fast');
                break;
        };
        if ($('.robot').position().top >= this.table.h * 30-30) {$('.robot').stop(true, true).css('top', this.table.h * 30-31)};
        if ($('.robot').position().left >= this.table.w * 30-30) {$('.robot').stop(true, true).css('left', this.table.w * 30-31 )};
        if ($('.robot').position().top < 0) {$('.robot').stop(true, true).css('top', 0)};
        if ($('.robot').position().left < 0) {$('.robot').stop(true, true).css('left', 0)};
    };

    return Robbot;

})();

