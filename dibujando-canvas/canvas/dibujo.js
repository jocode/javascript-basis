// Objeto la etiqueta canvas
var dibujo = document.getElementById('dibujo');

// En Javascript podemos dibujar en 2D o en 3D
console.log(dibujo);
var lienzo = dibujo.getContext("2d");
console.log(lienzo);

lienzo.beginPath(); // Indica que inicia el dibujo
lienzo.strokeStyle = "blue"; // Define el color del lápiz
lienzo.moveTo(0,0); // Colocar el punto inicial
lienzo.lineTo(200,200); // Trazar una línea
lienzo.stroke(); // Pinta la línea
lienzo.closePath(); // Indica que termina el dibujo