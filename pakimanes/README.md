# Pakimanes 

## División, módulo y residuo en JavaScript

El módulo es el residio de la división
- Para calcular el módulo puedes usar %
- Los programas dividen los programas complejos en problemas pequeños
- La operación lógica and (y) se escribe en JavaScript con &&

## Clases y Arrays en JavaScript

Las clases son la definición de los objetos, una clase es la estructura para crear objetos.

`this` es un indicador de la instancia donde estoy.


- **in** Itera en el índice (Posicion o clave valor)
- **of** Itera sobre el objeto

Recorrer objetos usando la estructura

```js
let coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

// Itera los objetos
for (let paki of coleccion){
    paki.mostrar();
}

// Itera los indices
for (let paki in imagenes){
    console.log(paki);
}
```