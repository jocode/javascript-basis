# Dibujando con Canvas

**DOM** el document object model es una API integrada en los navegadores que nos permite acceder a los elementos que contienen estos navegadores para dotar de funcionalidad los sitios webs.

En programación existen objetos, estos son como envolturas para código, el navegador tiene algunos nativos cómo:

- **navigator** El objeto que contiene las funciones del navegador, también te permite acceder al sistema operativo a funciones como el gps, guardar datos en el disco duro, etc.

- **windows** El objeto que maneja cada una de las pestañas

- **document** El objeto que contiene todo lo que vemos dentro de nuestra página.


En aplicaciones web tenemos un concepto llamado DOM (Document Object Model) es la forma en que internamente el navegador organiza todo el HTML dentro de una  estructura de árbol.

Los **objetos** contienen
- **Métodos** Funciones dentro de un objeto
- **Atributo o propiedad** Variables internas que almacenan valores

- [x] Las únicas etiquetas que deben ir a la misma altura de la etiqueta html es `head` y `body`
- [x] `window.location` devuelve la ruta de la página
- [x] Para agregar soportes a tildes y letras especiales agregan `<meta charset="utf-8"/>` dentro de head. **charset** significa colección de caracteres.
- [x] Cuando quieras depurar un programa puedes usar `console.log()` para ver mensajes en la consola.


> Cuando las funciones hacen parte de un objeto se les llama métodos.


## Dibujando en el DOM

Para dibujar en HTML usamos la etiqueta `canvas`. Usamos JS para darle las instrucciones y los canvas funcionan con coordenadas.

Sólamente llegando al canvas no podemos dibujar, debemos crear un contexto, luego de crearlo ahora sí se puede dibujar con HTML y JavaScript.

**Para Recordar**

- [x] ID es el identificador con el que podemos encontrar etiquetas con JavaScript, los nombres siguen las mismas reglas que las variables.

- [x] Puedes obtener un elemento con su **id** buscándolo con `document.getElementById('nombre_id');`


El **canvas** funciona con coordenadas `(x,y)` dónde nosotros indicamos los puntos para trazar los dibujos.

El siguiente ejemplo dibuja una línea usando canvas y javascript
```js
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
```
