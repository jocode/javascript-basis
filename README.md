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

Para saber qué tipo de dato es una determinada variable podemos usar la palabra reservada **typeof**

```js
typeof 11 // number
typeof 'Hola mundo' // string
typeof [] // object
typeof {} // object
```

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


## Asignación por valor y referencia

Por defecto los tipos de datos primitivos en JS son  asignaciones por valor

```js
let number1 = 11
let number2 = 20
number2 = 33
console.log(number1) // En este caso el valor de la variable number1 no cambia, por lo que la asignación es por valor
```

La asignación por referencia la observamos en los tipo de datos objetos, como *arrays* y *objetos*, por ejemplo:

```js
let numbers = [1,2,3,4]
let numbers_copy = numbers
numbers_copy.push(5)  // Le agregamos un nuevo elemento a numbers_copy
console.log(numbers) // En este caso la asignación es por referencia, es decir, si cambio un valor de una variable se verá reflejada en la otra

// La salida es [1,2,3,4,5]
```



## Operadores

### Operadores de asignación 

Los operadores de asignación asignan un valor a una variable

* `=`
* `+=`
* `-=`
* `/=`
* `*=`

### Operadores de comparación

* `==`        Compara valor
* `===`       Compara valor y tipo de dato
* `!=`        Diferente de
* `!==`
* `>`
* `<`
* `>=`
* `<=`

### Operadores unarios

Son aquellos que requieren sólo un dato

- **typeof**        Muestra el tipo de dato        
- **!**             Negación


### Operadores aritméticos

- `+`     Suma
- `-`     Resta
- `*`     Multiplicación
- `/`     División
- `%`     Módulo (Residuo de la división)
- `++`    Incremento
- `--`    Decremento


**postincremento / postdecremento** 

```js
let number = 5
number++
// El incremento ocurre después, es decir cuando vuelva a llamarse la variable

++number
// El incremento se hace al momento de llamar la variable

// Lo mismo ocurre para el decremento
```

### Operador ternario

Un operador ternario es un operador que toma tres argumentos. Los argumentos y el resultado puede ser de diferentes tipos.

`expresion ? si es verdadero : si es falso`

```js
let age = prompt('Dime tu edad')

let isAdult = (age >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad'

console.log(isAdult)
```

### Operadores Corto Circuito

```js
let a = null || 'Hola'
console.log(a) // Devuelve 'Hola'
let b = null  && 'Hola'
console.log(b) // Devuelve null
```


## Números

- **toFixed()** Especifica el número de decimales, por ejemplo `number.toFixed(n)`

- **parseInt()** Convierte un valor de texto a entero
- **parseFloat()** Convierte texto a número decimal
- **NaN** (Not a Number) Cualquier operación matemática que no devuelva un número

El uso del objeto **Math** `Math.ceil(10.7)`

- **.floor()** Redondea un número al menor (Piso)

- **.ceil()** Redondea un número al mayor (Techo)
- **.round()** Redondea un número
- **.random()** Devulve un número aleatorio entre 0 y 1


## Strings

Son cadenas de texto

- **.length** Devulve el tamaño del texto, `length` es una propiedad del texto

- **.trim()**           Quita los espacios en blanco al inicio y al final
- **.toUpperCase()**    Convierte todo el texto a mayúsculas
- **.toLowerCase()**    Convierte el texto a minúsculas

- **indexOf(string)**  `variable.indexOf('r')` Con esta función podemos encontrar la posición en un string dada un valor a buscar

- **lastIndexOf(search)** Encuentra el último elemento asociado por el parámetro de búsqueda

**_Métodos incluidos en ES6_**

- **includes(search)**  `variable.includes('Hola')` Este método devuelve un valor booleano si encuentra el valor a buscar

- **startWith(search)** Verifica que el una variable empiece coon el parámetro indicado

- **endWith(search)** Verifica que la cadena de texto finalice con el parámetro indicado


*__Métodos para manipular strings__*

- **replace('search', 'replace')** Reemplaza un string en la cadena de texto

- **split(',')** Separa las cadenas en un arreglo de datos que estén separadas por coma (El valor puede ser el que le indiquemos)

- **substring(start, end)** Devuelve la cadena de texto desde la posición indicada. Si *end* es negativo extrae hacia atrás

- **substr(posicion, cantidad_carateres)** Extrae una cantidad de caracteres indicando la posición inicial y la cantidad de caracteres que quiero retornar

- **slice(start, end)** Extrae una porción de texto indicando la posicion inicial y final del caracter para tomar sólo lo que se encuentre dentro de esos valores.



## Condicionales

Los condicionales son estructuras que ejecutan un bloque de código dependiendo de una condición (Comparación entre dos valores)

```js
let a = 5, b = 2;
if (a > b){
    console.log("El número es mayor");
} else {
    console.log("El número es menor");
}
```

Scope (Alcance) de las variables

```js
// Bloque de código
{
    // Scope de Javascript
    let variable = 12;
    console.log(variable);
}
console.log(variable); // Mostrará error, porque la variable no puede ser accedida
```


Las condiciones puede ser anidadas y operadas con operadores lógicos `&&` *(and)* y `||` *(or)*, por ejemplo

```js
let edad = 18;
if (edad >= 15 && edad < 25){
    console.log("Eres joven");
} else if (edad >= 25 ){
    console.log("Eres adulto");
}
```

### Truthy and Falsy

Son valores que son considerados falsos y verdaderos por Javascript

- Falsy (Se comportan como falsos)
    - 0
    - ""
    - NaN
    - undefined
    - null
- Truthy (Se comportan como verdaderos)
    - String no vacio
    - Números diferentes de cero
    - Arrays
    - Objeto



### Switch

Es una estructura condicional también, que nos permite hacer comparaciones dependiendo del caso escogido. Su estructura es la siguiente.

```js
let answer = prompt(`La capital de Colombia es:
a. Bogotá
b. Lima
c. Madrid
d. México
e. La paz`).toLowerCase().trim();

switch (answer){
    case 'a':
        console.log("Respuesta correcta");
        break;
    case 'b':
        console.log("Incorrecto");
        break;
    default:
        console.log("Estas equivocado");
        break;
}
```

El switch es útil cuando se quiere comprobar cada uno de los valores.



## Ciclos

Los ciclos son elementos que nos permiten repetir el código que esté dentro de los bloques mientras una condición es verdadera.

## Ciclo For

Este ciclo tiene tres sentencias incluidas: 
- La declaración de variable
- El condicional
- La variable de incremento o decremento

```js
// Múltiplos de 7 de 1 a 100
for (let i = 1; i<= 100; i++){
    if (i % 7 === 0)  console.log(i);
}
```


- **break y continue**

La palabra clave `break` permite salir del ciclo, y la sentencia `continue` salta a la siguiente iteracion

A continuación se muestra un ejemplo de mostrar los números impares usando continue

```js
// Números impares del 0 al 100
for (let i = 1; i<= 100; i++){
    if (i % 2 === 0)  continue;
    console.log(i);
}
```

## Ciclo `while` y `do while`

Estos ciclos se ecutan mientras una condición sea verdadera. Con el cicl **while** la condición se evalúa al inicio, por lo que si la condición es falsa, no entrará. Por el contrario con el ciclo **do while** la condición se evalúa al final, de modo que se garantiza que el código se ejecute al menos una vez.

```js
// Imprime los números del 0 al 9
let i = 0;
while (i < 10) {
    console.log(i);
};

// Imprime los números del 0 al 9
let a = 0;
do {
    console.log(a);
} while (a < 10); 
```



## Funciones 

**¿Qué son las funciones?**

Las funciones son un trozo código reutilizable en el que hay un conjunto de intrucciones.

Las entradas se llaman `argumentos` y las salidas se les denominan `valor de retorno`

Las funciones funcionan de la siguiene forma

```js
//Declarción de una función
nombreFuncion(argumento1, argumento2,...){
    //  Bloque de código
}

// Llamada a la funcion
nombreFuncion(miArg1, miArg2, ...);
```

```js
// Declaración de la función
function saludar(persona){
    return `Hola ${persona}`;
}

// Ejecutar la función
console.log(saludar("Juan Magallán"));
```

Cuando las funciones están dentro de un objeto se le denomina **_métodos_**

### Formas de declarar una función

- **Declaración**

```js
function saludar(persona){
    return `Hola ${persona}`;
}
```

- **Expresión**
No recomendado
```js
var nombreFuncion = function(persona){
    return `Hola ${persona}`;
}
```

- **Funciones de flecha (Recomendado desde ES6)**
Recomendado desde ES6 (Ecma Script 6)

```js
const nombreFuncion = (parametros)=>{
    // Instrucciones de la funcion
    return valor;
}
```

Si la función de flecha retorna directamente un valor, sin intrucciones adicionales, la sintaxis se reduce:

```js
const sumar(a,b) => a+b
```


### Parámetros y argumentos

- **Parámetros**
Son variable locales que se definen en la declaración de la función, se pueden asignar valores por defecto a los parámetros

- **Argumentos**
Valores asignados a los parámetros al ejecutar la función.
    - Si ha más argumentos que parámetros, los adicionales se ignoran.
    -Si hay menos argumentos que parámetros
        - Los faltantes son `undefined` a menos que tengan un valor por defecto


### Parámetros rest (spread operator)

En Javascript podemos pasar varios parámetros sin indicar la cantidad utilizando el operador de tres puntos `...parametro`

```js
const sumarNumeros = (...numeros) => {
    console.log(numeros); // Muestra un array
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++){
        resultado += numeros[i];
    }
    return resultado;
}
sumarNumeros(1,2,3,4,5,6,7);
```


### Las funciones son ciudadanos de primera clase
- Pueden ser almacenadas en variables o constantes `función por expresion const c = console.log`
- Puede ser pasadas como argumentos de otra función `callback`
- Pueden ser retornadas por otra función `closures`
- Puesen tener métodos o propiedades `POO`


### Tipos de Funciones

- **Funciones puras**
No causa un efecto secundario, y siempre devuelve los mismos valores para los mismos parámetros

- **Funciones autoinvocada**
Se ejecutan solas

```js
const saludar = ((saludo, persona) => `${saludo} ${persona}`)('Hola', 'Juan');
console.log(saludar)
```

- **Funciones nombradas y anonimas**
Estas funciones no sele especifica nombres y funcionan generalmente como callbacks

```js
setTimeout(() => {
    console.log("Hola funcion anonima")
}, 2000)
```


### Scope

Es el contexto en el que una variable existe.

- `this`
    - Representa al objeto del cual se ejecuta una función
    - Las arrow functions permiten acceder al this superior dentro del closure (lexical this)


```js
// Objeto user
let user = {
    nombre: 'Rick',
    edad: 54,
    getEdad(){
        console.log(this.edad);
    }
}

user.getEdad();
```

### Closure

Son funciones internas a las que podemos llegar a valores externos

```js
function aumentar(){
    let numero = 0;
    return function(){
        numero++;
        console.log(numero);
    }
}

aumentar()();
const incrementar = aumentar();
incrementar();
incrementar();
incrementar();
incrementar();
```

Esto tiene una gran ventaja porque la variable está protegida, no se puede acceder desde fuera por el scope.