# Javascript para principiantes

Javascript es un lenguaje de programación que funciona en el navegador. Su historia se remonta en 1996, donde Mucrosoft y Netscape competían en la web. Javascript fué creado por Netscape, y su propósito era hacer paginas web interactivas. Su flexibilidad ha permitido crear aplicaciones dentro del navegador, como facebook, netflix, youtube, etc.

Javascipt no sólo funciona en el navegador, desde el 2009 se puede ejecutar en el sistema operativo para hacer aplicaciones de escritorio, de backend y móviles, utilizando frameworks como reactJS.


## Javascipr en el Navegador

- Permite colocar elementos en una página web
- Hace sitio web adaptables (Responsives)
- Detectar el navegador del usuario
- Crear cookies
- Validar formularios
- Crear animaciones
- Crear aplicaciones web.


## Herramientas a usar
- Navegador web
    - Chrome
    - Firefox
- Editor de Texto
    - Atom
    - Sublime Text
    - Visual Studio Code


## Iniciando con Javascript

Para usar javacript en el navegador, lo podemos realizar a través de la consola. Para nuestro primer hola mundo usamos la siguiente sentencia

```js
console.log("Hola mundo");
document.write("Hola mundo desde la página");

// Crear errores
console.error("Mi error personalizado.");
```


## Tipo de datos

- **String**

El string o cadenas de caracteres se puede escribir como:
```js
"Hola mundo"
'Hola mundo'
```

- **Números**

```js
10 // Entero (Integer)
2.4 // Número de punto flotante (float)
```

- **Booleanos**
Son tipo de datos lógicos
```js
true
false
```

- **Arrays**
Son un conjunto de elementos con un mismo tipo de dato
```js
['Juan', 'Maria', 'Johan'] // Lista de strings
[1,5,6,7] // Lista de números
```

- **Objetos**
Es un representación abstracta de los objetos en la vida real.

Se representa con el tipo `clave->valor`
```js
{
    "username": "Juan",
    "score": 70.4,
    "hours": 14,
    "proffesional": true
}
```

## Variables 

Son nombres que le damos a los diferentes tipos de datos para almacenarnos en la memoria del computador

Formas de declarar una variables
```js
var nameUser = "Juan";
let lastName = "Perez";

// Constantes 
const PI = 3.1416;
```

Los valores de las **constantes** (`const`) no se puede cambiar.

Las variables no deben empezar con un número o caracteres especiales, los únicos caracteres especiales que permite son *$* y *_*

**Estilos de nombres de variables**

- [ ] **camelCase** CamelCase es un estilo de escritura que se aplica a frases o palabras compuesta
    - [x] **UpperCamelCase** (más conocido como PascalCase), cuando la primera letra de cada una de las palabras es mayúscula.  `Ejemplo: EjemploDeUpperCamelCase.`
    - [x] **lowerCamelCase** (o simplemente CamelCase), igual que la anterior con la excepción de que la primera letra es minúscula. `Ejemplo: ejemploDeLowerCamelCase.`


- **Comentarios**

Los comentarios en Javascript son muy útiles a la hora de documentar el código, para poder entenderlo luego

```js
// Comentario simple

/*
Comentario de varias lineas
Los comentarios son ignorados por el intérprete
*/
```

## Operadores

Los operadores nos permite manipular la información que está almacenada en las variables.

- **Operadores Matemáticos**
    - Suma `+`
    - Resta `-`
    - Multiplicacion `*`
    - Suma `/`
    - Módulo `%`  (Residuo de la aplicación)

- **Operadores de comparación**
    - Mayor `>`
    - Menor `<`
    - Mayor o igual `>=`
    - Menor o igual `<=`
    - Igual `==`
    - Diferente `!=`


## Condicionales

Estas estructuras nos permiten comparar dos valores y realizar una acción dependiendo de ella.

```js
let passwordDB = "perexa1234";
let input = prompt("Ingrese la contraseña");
result = passwordDB == input;
if (result == true){
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta");
}
```

Otra estructura condicional es el swith, donde recibe un tipo de dato y dependiendo de los valores a comparar ejecuta una determinada accion.

```js
let typeCard = 'Debit Card';

switch (typeCard) {
    case 'Credit Card':
        console.log("Es una tarjeta de crédito");
        break;
    case 'Debit Card':
        console.log("Es una tarjeta débito");
        break;
    default:
        console.log("NO hay tarjeta de crédito");
}
```


## Bucles (Ciclos)

- **While**
Ejecuta una sentecia siempre y cuando la condición sea verdadera

```js
let count = 0;
while (count < 50){
    console.log("Hola mundo");
    count++;
}
```

- **for**
Esta estructura tiene tres partes, la declaración y asignación del contador, la condición y la sentencia de incremento.

Los bucles for son muy utilizados al trabajar con listas.
```js
let names = ["ryan", "jow", "Mario"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
```

## Funciones

Son bloques de código que se encargar de realizar una determinada tarea. Las funciones son importantes porque el código se puede reutilizar. Se declaran de la siguiente forma:

```js
// Declaración de la función
function saludo(){
    console.log("¡¡¡Hola desde la función!!!");
}

// LLamar la función
saludo();
```


Funciones con parámetros

```js
function saludo(name){
    console.log(`¡¡¡Hola ${name} desde la función!!!`); // usando backtick
}

saludo("Johan Mosquera");
```