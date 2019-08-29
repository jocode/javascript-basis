var jf = require('johnny-five');
var board =  new jf.Board();
var led, servo, celda;
var turno = 0;

board.on("ready", prender);

function prender(){

    var conf_celda = {
        pin: "A=",
        freq = 50
    }
    celda = new jf.Sensor(conf_celda);

    led = new jf.Led();
    led.on();

    servo = new jf.Servo(9);
    servo.to(0);

    ondear();
}

function ondear(){
    console.log("Luz: "+celda.value);
    var luz = celda.value;

    if (luz > 800){
        servo.to(90);
        if (turno == 1){
            turno = 0;
            servo.to(70);
        } else {
            turno = 1;
            servo.to(110);
        }
    } else {
        servo.to(190);
    }

    setTimeout(ondear, 1000); // Timer
}

// Ejecutamos con node banderita.js