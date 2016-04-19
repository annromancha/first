var slideWidth=810;
var sliderTimer;
var currentLink = parseInt($('.slideitem').data('current'));
$(function() {
    sliderTimer = setInterval(nextSlide, 4000);
    $('.viewport').hover(function () {
        clearInterval(sliderTimer);
    }, function () {
        sliderTimer = setInterval(nextSlide, 4000);
    });

});
//  Следующий слайд ..........................................................................................
function nextSlide() {

    var currentSlide=parseInt($('.slidewrapper').data('current'));

    function changeClass() {
        switch (currentSlide) {
            case currentSlide = 7:
                $('#linkFst, #linkTwo, #linkTre, #linkFor, #linkFiv, #linkSix, #linkSev ').css({backgroundColor: "#CCCCCC"});
                $('#linkZer').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 0 :
                $('#linkZer, #linkTwo, #linkTre, #linkFor, #linkFiv, #linkSix, #linkSev ').css({backgroundColor: "#CCCCCC"});
                $('#linkFst').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 1:
                $('#linkFst, #linkTre, #linkFor, #linkFiv, #linkSix, #linkSev, #linkZer').css({backgroundColor: "#CCCCCC"});
                $('#linkTwo ').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 2:
                $('#linkTwo, #linkFor, #linkFiv, #linkSix, #linkSev, #linkFst, #linkZer').css({backgroundColor: "#CCCCCC"});
                $('#linkTre').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 3:
                $('#linkTre, #linkFiv, #linkSix, #linkSev, #linkFst, #linkTwo, #linkZer').css({backgroundColor: "#CCCCCC"});
                $('#linkFor ').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 4:
                $('#linkZer, #linkSix, #linkSev, #linkFst, #linkTwo, #linkTre, #linkFor').css({backgroundColor: "#CCCCCC"});
                $('#linkFiv').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 5:
                $('#linkFiv, #linkSev, #linkFst, #linkTwo, #linkTre, #linkFor,#linkZer ').css({backgroundColor: "#CCCCCC"});
                $('#linkSix').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 6:
                $('#linkSix, #linkZer, #linkTwo, #linkTre, #linkFor, #linkFiv, #linkFst').css({backgroundColor: "#CCCCCC"});
                $('#linkSev').css({backgroundColor: "#A52A2A"});
                break;

        };
    };

    var currentLink = parseInt($('.slideitem').data('current'));
    changeClass();
    currentSlide++;
    if (currentSlide >= $('.slidewrapper').children().size()) {currentSlide = 0;$('#linkZer').css({backgroundColor: "#A52A2A"});}
    $('.slidewrapper').animate({left: -currentSlide * slideWidth}, 300).data('current', currentSlide);
        console.log(currentSlide);


 };




//Предыдущий слайд........................................................................................
function prevSlide(){

    var currentSlide=parseInt($('.slidewrapper').data('current'));
    changeClass();

    function changeClass() {
        switch (currentSlide) {
            case currentSlide = 1:
                $('#linkFst, #linkTwo, #linkTre, #linkFor, #linkFiv, #linkSix, #linkSev ').css({backgroundColor: "#CCCCCC"});
                $('#linkZer').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 2:
                $('#linkZer, #linkTwo, #linkTre, #linkFor, #linkFiv, #linkSix, #linkSev ').css({backgroundColor: "#CCCCCC"});
                $('#linkFst').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 3:
                $('#linkFst, #linkTre, #linkFor, #linkFiv, #linkSix, #linkSev, #linkZer').css({backgroundColor: "#CCCCCC"});
                $('#linkTwo ').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 4:
                $('#linkTwo, #linkFor, #linkFiv, #linkSix, #linkSev, #linkFst, #linkZer').css({backgroundColor: "#CCCCCC"});
                $('#linkTre').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 5:
                $('#linkTre, #linkFiv, #linkSix, #linkSev, #linkFst, #linkTwo, #linkZer').css({backgroundColor: "#CCCCCC"});
                $('#linkFor ').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 6:
                $('#linkZer, #linkSix, #linkSev, #linkFst, #linkTwo, #linkTre, #linkFor').css({backgroundColor: "#CCCCCC"});
                $('#linkFiv').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 7:
                $('#linkFiv, #linkSev, #linkFst, #linkTwo, #linkTre, #linkFor,#linkZer ').css({backgroundColor: "#CCCCCC"});
                $('#linkSix').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 0:
                $('#linkSix, #linkZer, #linkTwo, #linkTre, #linkFor, #linkFiv, #linkFst').css({backgroundColor: "#CCCCCC"});
                $('#linkSev').css({backgroundColor: "#A52A2A"});
                break;

        };
    };
    currentSlide--;
    if(currentSlide<0)
    {
        currentSlide=$('.slidewrapper').children().size()-1;
    }
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
};

$(document).ready(function(){

    $('.butt').hide();
    $('.viewport, .butt').mouseover(function(){
        $('.butt').show();
    });
    $('.viewport, .butt').mouseout(function(){
        $('.butt').hide();
    })
    $('#next').click(function(){
        clearInterval(sliderTimer);
        nextSlide();
    });
    $('#prev').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
    });
    $('.viewport').mouseover(function(){
        clearInterval(sliderTimer);
    });
    $('.itemLinks').mouseover(function(){
        clearInterval(sliderTimer);
    });
    ;


    $('#linkZer').click(function(){
        currentSlide =0;
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
        $('#linkFst, #linkTwo, #linkTre, #linkFor, #linkFiv, #linkSix, #linkSev ').css({backgroundColor: "#CCCCCC"});
        $('#linkZer').css({backgroundColor: "#A52A2A"});
    });

    $('#linkFst').click(function(){
        currentSlide = 1;
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
        $('#linkZer, #linkTwo, #linkTre, #linkFor, #linkFiv, #linkSix, #linkSev ').css({backgroundColor: "#CCCCCC"});
        $('#linkFst').css({backgroundColor: "#A52A2A"});
    });
    $('#linkTwo').click(function(){
        currentSlide = 2;
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
        $('#linkZer, #linkFst, #linkTre, #linkFor, #linkFiv, #linkSix, #linkSev ').css({backgroundColor: "#CCCCCC"});
        $('#linkTwo').css({backgroundColor: "#A52A2A"});
    });
    $('#linkTre').click(function(){
        currentSlide = 3;
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
        $('#linkFst, #linkTwo,  #linkFor, #linkFiv, #linkSix, #linkSev, #linkZer ').css({backgroundColor: "#CCCCCC"});
        $('#linkTre').css({backgroundColor: "#A52A2A"});
    });
    $('#linkFor').click(function(){
        currentSlide = 4;
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
        $('#linkFst,#linkTre, #linkTwo, #linkFiv, #linkSix, #linkSev, #linkZer ').css({backgroundColor: "#CCCCCC"});
        $('#linkFor').css({backgroundColor: "#A52A2A"});
    });
    $('#linkFiv').click(function(){
        currentSlide = 5;
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
        $('#linkFst,#linkTre, #linkTwo, #linkFor, #linkSix, #linkSev, #linkZer ').css({backgroundColor: "#CCCCCC"});
        $('#linkFiv').css({backgroundColor: "#A52A2A"});
    });
    $('#linkSix').click(function(){
        currentSlide = 6;
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
        $('#linkFst,#linkTre, #linkTwo, #linkFor, #linkFiv, #linkSev, #linkZer ').css({backgroundColor: "#CCCCCC"});
        $('#linkSix').css({backgroundColor: "#A52A2A"});
    });
    $('#linkSev').click(function(){
        currentSlide = 7;
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
        $('#linkFst,#linkTre, #linkTwo, #linkFor, #linkFiv, #linkSix, #linkZer ').css({backgroundColor: "#CCCCCC"});
        $('#linkSev').css({backgroundColor: "#A52A2A"});
    });





});


