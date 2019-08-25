canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");

var flechas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var x = 150;
var y = 150;

drawLines('black', x-1, y-1, x+1, y+1);


document.addEventListener('keydown', dibujarTeclado);

function dibujarTeclado(e) {
    //console.log(e);
    var color = "black";
    var movimiento = 10;
    switch (e.keyCode) {

        case flechas.UP:
            // console.log('Arriba'); 
            drawLines(color, x, y, x, y-movimiento);
            y = y - movimiento;
            break;

        case flechas.DOWN:
            // console.log('Abajo');
            drawLines(color, x, y, x, y+movimiento);
            y = y + movimiento;
            break;

        case flechas.LEFT:
            // console.log('Izquierda');
            drawLines(color, x, y, x-movimiento, y);
            x = x - movimiento;
            break;

        case flechas.RIGHT:
            // console.log('Derecha');
            drawLines(color, x, y, x+movimiento, y);
            x = x + movimiento;
            
            break;
    }
}

function drawLines(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath(); // Indica que inicia el dibujo
    lienzo.strokeStyle = color; // Define el color del lápiz
    lienzo.lineWidth = 3
    lienzo.moveTo(xInicial, yInicial); // Colocar el punto inicial
    lienzo.lineTo(xFinal, yFinal); // Trazar una línea
    lienzo.stroke(); // Pinta la línea
    lienzo.closePath(); // Indica que termina el dibujo
}