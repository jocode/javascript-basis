// Objeto la etiqueta canvas
var dibujo = document.getElementById('dibujo');

// En Javascript podemos dibujar en 2D o en 3D
console.log(dibujo);

var lienzo = dibujo.getContext("2d");
console.log(lienzo);

/* drawLines('blue',0,0,10,300)
drawLines('blue',0,10,20,300)
drawLines('blue',0,20,30,300)
drawLines('blue',0,30,40,300) */

let width = document.getElementById('size_canvas').value;
console.log(dibujo);
let lineas = 30;
let step =  (width/lineas);

document.getElementById('btn_dibujar').addEventListener('click', (e)=> {
    width = document.getElementById('size_canvas').value;
    dibujo.setAttribute('width', width);
    dibujo.setAttribute('height', width);
    lineas = document.getElementById('lines').value;
    console.log(typeof dibujo)
    step =  (width/lineas);

    for (let line = 0; line < width; line+=step){
        drawLines('blue',0,line,line+step,width);
        drawLines('green',line,0,width,line+step)
        drawLines('red', 0,width-line,line+step, 0)
        drawLines('yellow', line, width,width, width-line )
    }

});


for (let line = 0; line < width; line+=step){
    drawLines('blue',0,line,line+step,width);
    drawLines('green',line,0,width,line+step)
    drawLines('red', 0,width-line,line+step, 0)
    drawLines('yellow', line, width,width, width-line )
}

drawLines('green',1,1,1,299);
drawLines('green',1,299,299,299);


function drawLines(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath(); // Indica que inicia el dibujo
    lienzo.strokeStyle = color; // Define el color del lápiz
    lienzo.moveTo(xInicial,yInicial); // Colocar el punto inicial
    lienzo.lineTo(xFinal,yFinal); // Trazar una línea
    lienzo.stroke(); // Pinta la línea
    lienzo.closePath(); // Indica que termina el dibujo
}
