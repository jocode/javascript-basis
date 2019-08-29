var jf = require('johnny-five');
var board = new jf.Board();

board.on("ready", prender);

function prender(){
    // Indico el puerto del led
    var led = new jf.Led(13);
    led.blink(500); // Hace parpadear el led
}