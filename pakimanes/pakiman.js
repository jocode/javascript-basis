class Pakiman {

    constructor(nombre, vida, ataque){
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida= vida;
        this.ataque = ataque;
        this.tipo = "Tierra";

        this.imagen.src = imagenes[this.nombre];
    }

    mostrar(){
        document.body.appendChild(this.imagen);
        document.write('<br><strong>'+this.nombre+'</strong><br>');
        document.write(`Vida: ${this.vida} <br/>`);
        document.write(`Ataque: ${this.ataque} <hr/>`);
    }

}
