let imagenes = {
    Cauchin: "assets/vaca.png",
    Pokacho: "assets/pollo.png",
    Tocinauro: "assets/cerdo.png"
};

/* 
var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
 */
// console.log(cauchin, pokacho, tocinauro);

let coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (let paki of coleccion){
    paki.mostrar();
}

for (let paki in imagenes){
    console.log(paki);
}