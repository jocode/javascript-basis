# Javascript

JavaScript es el único lenguaje de programación que funciona en el frontend (navegador) y en el backend (servidor), actualmente tiene mucho auge en ambos campos y aprenderlo, es indispensable

Todos los navegadores tienen un intérprete de javascript. Es el único lenguaje de programación que se interpreta en el navegador

## Historia de Javascript

Brendan Eich en 1995 creó Javascript en una semana (Ver la guerra de los navegadores). Internet Explorer sacó del mapa a NetScape, en ese momento es que se creó javascript.

Luego llega microsoft y crea su versión denominada **JScript**, sin embargo los de NetScape llevan javascript a *ECMA (European Computer Manufactorers Associacion)*,  Ecma Script es el estándar, en el que se definen las reglas para el lenguaje de programación Javascript.

ES6-2015 trae definición de clases y muchos cambios interesantes para javascript. A paritir de ese año se llegó al acuerdo de que cada año se subiría una nueva versión de ES (ECMA Script)

En 2009 Ryan Dahl crea **Node.js**, de esta manera se podría ejecutar Javascript en el servidor

Luego se crearon diferentes librerías que le dieron un auge mayor a Javacript, como fueron:
* 2010 AngulasJS
* 2013 React.JS
* 2014 Vue.js

*Si quieren ser buenos programadores deben leer*

[The deepest reason why modern JavaScript frameworks exist](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445)


## Características

- Dinámicamente tipado
- Interpretado (Es leido en tiempo real por el intérprete)
    - Navegador
    - Servidor (node.js)
- Prototipado
- Multiparadigma (Forma de programar)


## Empezando con Javascript

Javascript se ejecuta en el navegador a través de html, ver [index.html](index.html). El intérprete lee de arriba hacia abajo y de izquierda a derecha

Con la sentencia `console.log('')` mostramos información a través de la consola.


## Variables y Constantes

Son la base de todo lenguaje de programación.
Una **variable** es un contenedor para un dato, un dato que puede cambiar

Las variables es javascript se definen con la palabra reservada **let**

Las constantes son un tipo de contenedor donde el valor no puede cambiar. Las constantes se defienen con la palabra reservada **const**

```js
// Variable
let numero = 5
console.log(numero)

// Constantes
const pi = 3.1416
console.log(pi)
```


## Sintaxis

- **Comentarios**

Son trozos de código que el intérprete ignora. Existen dos tipos de comentarios, de una línea y de varias líneas

```js
// Comentario de una sóla línea

/*
Comentario de
varias 
líneas
*/
```

- **Punto y coma**

Es javascript es opcional colocar el punto y coma

- **Espacios en blanco**

Los espacios en blanco javascript los ignora, de modo que no hay que preocuparse si se deja muchos espacios entre el código

- **Case Sensitive**

Javascript diferencia mayúsculas de minúsculas, de modo que si tiene una variable definida como **miVariable** es diferente a **mivariable**, porque es una la **V** es mayúscula y en la otra **v** es minúscula


## Tipos de Datos

Javascript es un lenguaje dinámicamente tipado, sin embargo en las últimas versiones se puede definir tipos de datos. Por defecto los tipos definidos en el intérprete son:

- **Numeros**

- **Strings**

Son texto, que debe ir en comillas simples `'Mi texto'`, o comillas dobles `"Mi texto"`. Otra forma es usar **backtick** donde se puede pasar variables al strings con backticks no debemos preocuparnos con por los saltos de línea, por ejemplo

Es recomendable aconstumbrarse usar los backtick, ya que tiene muchas ventajas respecto al uso de las comillas 

```js
// Uso de backtick
let anio = 2019
let miTexto = `Estamos en el año ${anio} :)`
console.log(miTexto)
```

- **Boolean** Son tipos de dato que son verdaderos o falsos

- **undefined** Son variables que no tienen valor, existe la variable pero no tiene valor

`undefined` con comillas es string, debe ser **sin** comillas para que el tipo de dato sea el indicado

- **null** Cuando no existe la variable

- **Symbol()**

- **Tipos de datos compuestos** (Son compuestos porque tiene más de un valor)
    - **Arreglos**
    - **Objetos**


La palabra reservada **typeof** devuelve el tipo de dato que tiene asignada una variable.