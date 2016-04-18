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


    var currentSlide = parseInt($('.slidewrapper').data('current'));
    changeClass();
    function changeClass() {
        switch (currentSlide) {
            case currentSlide = 2:
                $('#linkZer ').css({backgroundColor: "#A52A2A"});
                $('#linkOne ').css({backgroundColor: "#CCCCCC"});
                $('#linkTwo ').css({backgroundColor: "#CCCCCC"});
                break;
            case currentSlide = 0:
                $('#linkZer ').css({backgroundColor: "#CCCCCC"});
                $('#linkOne ').css({backgroundColor: "#A52A2A"});
                $('#linkTwo ').css({backgroundColor: "#CCCCCC"});
                break;
            case currentSlide = 1:
                $('#linkZer ').css({backgroundColor: "#CCCCCC"});
                $('#linkOne ').css({backgroundColor: "#CCCCCC"});
                $('#linkTwo').css({backgroundColor: "#A52A2A"});
                break;

        };
    };
    currentSlide++;
    if (currentSlide >= $('.slidewrapper').children().size()) {currentSlide = 0;}
    $('.slidewrapper').animate({left: -currentSlide * slideWidth}, 300).data('current', currentSlide);
    console.log(currentSlide);
 };


//Предыдущий слайд........................................................................................
function prevSlide(){

    var currentSlide=parseInt($('.slidewrapper').data('current'));
    changeClass();
    function changeClass() {
        switch (currentSlide) {
            case currentSlide = 2: $('#linkZer ').css({backgroundColor: "#CCCCCC"});
                $('#linkOne ').css({backgroundColor: "#A52A2A"});
                $('#linkTwo ').css({backgroundColor: "#CCCCCC"});

                break;
            case currentSlide = 0:
                $('#linkZer ').css({backgroundColor: "#CCCCCC"});
                $('#linkOne ').css({backgroundColor: "#CCCCCC"});
                $('#linkTwo').css({backgroundColor: "#A52A2A"});
                break;
            case currentSlide = 1:
                $('#linkZer ').css({backgroundColor: "#A52A2A"});
                $('#linkOne ').css({backgroundColor: "#CCCCCC"});
                $('#linkTwo ').css({backgroundColor: "#CCCCCC"});

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
    $('.itemLinks').mouseover(function() {
        clearInterval(sliderTimer);
    });



});


