let user = { "username": "Johan" }
console.log(user)
document.write(user.username);

// Variables
var nameUser = "Juan";
let lastName = "Perez";
console.log(nameUser);

const hola = 13;

// Operadores
let numeroUno = 60;
let numeroDos = 100;
console.log(numeroUno + numeroDos);


// Condicionales
let passwordDB = "perexa1234";
let input = "12345";
//let input = prompt("Ingrese la contraseña");
result = passwordDB == input;
if (result == true) {
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta");
}


// Switch
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


// Ciclos
let count = 50;
while (count > 0){
    console.log("Hola mundo");
    count = count - 1;
}

//For
let names = ["ryan", "jow", "Mario"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log("\nforeach");
// Ciclo for each javascript
names.forEach(element => {
    console.log(element)
});

// Funciones

// Declaración de la función
function saludo(name){
    console.log(`¡¡¡Hola ${name} desde la función!!!`); // usando backtick
}

// LLamar la función
saludo("Johan Mosquera");