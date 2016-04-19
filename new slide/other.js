//var currentSlide=parseInt($('.slidewrapper').data('current'));
//$('#linkOne').click(function(){
//    switch (currentSlide) {
//
//        case currentSlide = 0:
//            $('#linkOne').addClass('active');
//            break;
//        case currentSlide = 1:
//            prevSlide();
//            $('#linkOne').addClass('active');
//            break;
//        case currentSlide = 2:
//            nextSlide();
//            $('#linkOne').addClass('active');
//            break;
//    }
//});


//var links = document.querySelectorAll(".itemLinks");
//var wrapper = document.querySelector(".viewport");
//var activeLink = 0;
//for (var i = 0; i < links.length; i++) {
//    var link = links[i];
//    link.addEventListener('click', setClickedItem, false);
//    link.itemID = i;
//};
//links[activeLink].classList.add("active");
//function setClickedItem(e) {
//    removeActiveLinks();
//
//    var clickedLink = e.target;
//    activeLink = clickedLink.itemID;
//    //addActiveLinks();
//    nextSlide();
//
//};
//function removeActiveLinks() {
//    for (var i = 0; i < links.length; i++) {
//        links[i].classList.remove("active");
//    }
//};
//function addActiveLinks() {
//    for (var i = 0; i < links.length; i++) {
//        links[i].classList.add("active");
//    }
//};
function clickk(){
    switch(currentSlide){
        case currentSlide=2:
            $('#linkZer').click(function(){ nextSlide});
            $('#linkOne').click(function(){ prevSlide});
            break;
        case currentSlide=1:
            $('#linkZer').click(function(){ prevSlide});
            $('#linkTwo').click(function(){ nextSlide});
            break;
        case currentSlide=0:
            $('#linkOne').click(function(){ nextSlide});
            $('#linkTwo').click(function(){ prevSlide});
            break;

    };


};
clickk();


var currentSlide = parseInt($('.slidewrapper').data('current'));

$('#linkZer ').click(function(){
    if(currentSlide = 1) prevSlide();
    else  if( currentSlide = 2) nextSlide();
});
$('#linkOne ').click(function(){
    if(currentSlide = 0) nextSlide();
    else if (currentSlide = 2) prevSlide();
});
$('#linkTwo ').click(function(){
    if (currentSlide = 1) nextSlide();
    else    if (currentSlide = 0) prevSlide();
});
//var link = new array {('.itemOne'),('.itemTwo'),('.itemThree'),('.itemFour'),('.itemFive'),('.itemSix'),('.itemSeven'),('.itemEight') };
//var slidees = new array {('#linkZer'),('#linkOne'),('#linkTwo'),('#linkTre'),('#linkFor'),('#linkFiv'),('#linkSix'),('#linkSev')};
//var Picture = (function(){
//    function Picture(){};
//    Picture.prototype.currentSlide = parseInt($('.slidewrapper').data('current'));
//    Picture.prototype.changeClass() = function(){
//        switch (this.currrentSlide ){
//            case this.currentSlide = 1:
//        }
//    }
//})