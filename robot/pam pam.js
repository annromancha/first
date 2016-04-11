var Cup, cup1;

Cup = (function() {
    function Cup() {}

    Cup.prototype.color = 'green';

    Cup.prototype.size = 'big';

    Cup.prototype.take = function() {
        return console.log('take to hand');
    };

    return Cup;

})();

cup1 = new Cup;

cup1.take;

var Bear, b1, b2;
Bear = (function(){
    function Bear(){}
    Bear.prototype.name = 'Ted';
    Bear.prototype.color = "grey";
    Bear.prototype.class = "grizli";
    Bear.prototype.voice = 'grrrr';
    Bear.prototype.say = function (){
        return console.log ("my name is" + this.name + "and i say" + this.voice);
    };
    Bear.prototype.sleep = function (){
        return console.log ('i sleep');
    }
    Return Bear;
})();
b1 = new Bear;
b1.say;
b2 = new Bear;
b2.say;


var Phone,samsung, color, cell;
Phone = (function() {

    function Phone() {}

    Phone.prototype.color = "gold";

    Phone.prototype.call = 1236;

    Phone.prototype.cell = false;

    Phone.prototype["case"] = function(color) {
        this.color = color;
        return console.log('u have' + color + 'telephone');
    };

    Phone.prototype.phone = function(number) {
        this.call = call;
        return console.log(number + 'calling');
    };

    Phone.prototype.cell = function() {
        if ((this.cell = false)) {
            return console.log('so alone');
        } else {
            return console.log('ok. just take a phone');
        }
    };

    samsung = new Phone;

    samsung.color;

    samsung.call;

    samsung.cell;

    return Phone;

})();
var Pen, color, owner, position;
Pen = (function() {

    function Pen() {}

    position = 'table';

    color = 'blue';

    owner = 'ann';

    Pen.prototype.write = function() {
        return console.log('take your pen and write');
    };

    Pen.prototype.give = function(owner) {
        this.owner = owner;
        return console.log('giv this pen to' + owner);
    };

    Pen.prototype.direction = function(position) {
        this.position = position;
        return console.log('i want to change pens position to' + position);
    };
    var l = new Pen;
    l.write();
    l.give('james');
    l.direction('table');

    return Pen;

})();


var Headphones,music, color, connect;
Headphones = function(){

    function Headphones(){}

    Headphones.prototype.music_status = true;

    Headphones.prototype.color = 'black';

    Headphones.prototype.connect = false;

    Headphones.prototype.music_play = function(music_status){
        if (this.music_status = false)){
            console.log ('turn the music');
        this.music_status = true;
        } else{
            console.log('listen ur music');
        }
    };


    Headphones.prototype.connect = function (connection){
        if (this.connect = false ){
            console.log('u r disconnected');
            this.connect = connection;
        } else {
            console.log('u r connected');
        }
    };
    var m = new Headphones;
    m.music(0);
    m.connect(1);
    return  Headphones;

})();
var Mouse,;
Mouse = function(){
    function Mouse(){}

    button = 'left';
    click = 1;
    color: "green";
    whireless: 1;
    connection: 1;
    hand: "right";
    position: 'hand';

    Mouse.prototype.button = function(){
        if (this.button = 'left'){
            console.log ('taken');
        } else {
            console.log ('properties')
        }
    };

    Mouse.prototype.click = function (quentity){
        @click = quentity;
        if (@click = 1){
            console.log ('u chosen object');
        } else {
            console.log ('open');
        }
    };
    Mouse.prototype.position = function (position){
        this.position = position;
        console.log (this.position);

    };

    var lu = new Mouse;
    lu.click (2);
    lu.button();
    lu.position('table');

    return Mouse;

})();




