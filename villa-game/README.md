# Juego en Javascript usando Canvas

## Funciones matemáticas y números aleatorios en JavaScript 

Vamos a empezar a crear las bases de lo que podría ser un videojuego

Para esto debemos resolver algunos problemas:

¿Cómo dibujar el mapa del juego?

¿Cómo dibujar los personajes?

¿Cómo definir las posiciones aleatorias de los personajes?

**Recuerda:**

Math.floor() devuelve el número entero por debajo de los decimales.

Math.ceil() devuelve el siguiente número entero arriba de los decimales

Math.random() devuelve un número aleatorio de 0 a 0.999..


La ecuación para definir números **aleatorios** entre un **rango** con *min* y *max* es la siguiente:

- `Math.floor(aleatorio * ( max - min + 1)) + min`

- Con `( max - min + 1)` Defino el rango entre los números, le sumo uno porque el número aleatorio es generado entre valores de **0 a 1** sin incluirlos
- `Math.floor(aleatorio * ( max - min + 1))` Multiplico el rango por el número aleatorio y redondeo el valor al menor. Por esta razón se incluye el 1 de manera que pueda incluir el valor máximo del rango.


## Uso y carga de imágenes en Canvas 

En canvas puedes insertar imágenes

**Recuerda:**

Debemos agregar la imagen en el evento load del objeto.

Debemos usar el método .drawImage del canvas para insertar la imagen.

Canvas dibuja siempre encima del último objeto.