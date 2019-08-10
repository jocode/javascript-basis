let numero = 5
console.log(numero)
console.log(numero + 1)
console.log(numero - 1)
console.log(numero * 2)
console.log(numero / numero)

// Condicionales
if (5 > 2) console.log('Buenas')

// Bloque de código
{
    // Scope de Javascript
    let variable = 12;
    console.log(variable);
}


//let edad = parseInt(prompt("Cuál es tu edad"));
let edad = 21;
console.log(edad);
if (edad >= 18 && edad <= 25){
    console.log("Eres Joven");
} else if (edad >= 12 && edad < 18){
    console.log("Eres adolescente");
} else if (edad < 12) {
    console.log("Eres niñ@");
} else if (edad > 25){
    console.log("Eres un adulto");
}

/* let answer = prompt(`La capital de Colombia es:
a. Bogotá
b. Lima
c. Madrid
d. México
e. La paz`).toLowerCase().trim(); */
let answer = 'a';

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


// ------- Ciclos -----
// Múltiplos de 7 de 1 a 100
for (let i = 1; i<= 100; i++){
    if (i % 2 === 0)  continue;
    //console.log(i);
}

// Imprime los números del 0 al 9
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
};

// Imprime los números del 0 al 10
let a = 0;
do {
    console.log(a);
    a++;
} while (a < 10); 