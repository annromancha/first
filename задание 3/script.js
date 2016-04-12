
    var sec = 0;
    function light (){


        switch (true){

            case   sec< 10:
                $('.redd').css({backgroundColor: "#FF0000"});
                $('.yelloww').css({backgroundColor: "#C0C0C0"});
                $('.greenn').css({backgroundColor: "#C0C0C0"});

                break;
            case  sec >10 && sec <13 :
                console.log('kkk');
                $('.redd ').css({backgroundColor: "#FF0000"});
                $('.yelloww').css({backgroundColor: "#FFFF00"});
                $('.greenn').css({backgroundColor: "#C0C0C0"});
                break;
            case sec>13 && sec<24:
                $('.redd').css({backgroundColor: "#C0C0C0"});
                $('.yelloww').css({backgroundColor: "#C0C0C0"});
                $('.greenn').css({backgroundColor: "#00FF00"});
                var a = $('#timer').html();
                $('#timer').css('display','inline');

                a =  $('#timer').html(a - 1)

                break;
            case sec == 25:
                $('#timer').css('display' , 'inline');

                $('.greenn').css({backgroundColor: "#00FF00"});
                 $('#timer').html("5" - 1);
                break;
            case sec == 26:
                $('.greenn').css({backgroundColor: "#C0C0C0"});
                 $('#timer').html("4" - 1);
                break;
            case sec == 27:
                $('.greenn').css({backgroundColor: "#00FF00"});
                 $('#timer').html("3" - 1);
                break;
            case sec == 28:
                $('.greenn').css({backgroundColor: "#C0C0C0"});
                 $('#timer').html("2" - 1);
                break;
            case sec == 29:
                $('#timer').html("1" - 1);
                 $('#timer').html("15");

                $('#timer').css('display' , 'none');
                $('.greenn').css({backgroundColor: "#00FF00"});

                break;
            case sec >29: sec = 0;
                break;
        };
    };
    $(document).ready(function(){


        setInterval(function(){
            sec = sec+1;
            light();
            console.log(sec);
        }, 500);


    });






