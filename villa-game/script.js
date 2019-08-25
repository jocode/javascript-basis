let canvas = document.getElementById("canvas");
let lienzo = canvas.getContext("2d");

let xCerdo = 100, yCerdo = 100;

document.getElementById("btn_dibujar").addEventListener('click', (ev)=>{
    dibujar();
});

let fondo = { url: "assets/tile.png", cargaOk: false };
let vaca = { url: "assets/vaca.png", cargaOk: false };
let cerdo = { url: "assets/cerdo.png", cargaOk: false };
let pollo = { url: "assets/pollo.png", cargaOk: false };

// Dibujar el Fonde
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', (e) => {
    fondo.cargaOk = true;
    dibujar();
});

// Dibujar la vaca
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', (e) => {
    vaca.cargaOk = true;
    dibujar();
});

// Dibujar la cerdo
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', (e) => {
    cerdo.cargaOk = true;
    dibujar();
});

// Dibujar la pollo
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', (e) => {
    pollo.cargaOk = true;
    dibujar();
});

function dibujar() {
    if (fondo.cargaOk) {
        lienzo.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOk) {
        let cantidad = aleatorio(2, 10);
        for (let i = 0; i < cantidad; i++) {
            let x = aleatorio(0, 420);
            let y = aleatorio(0, 420);
            lienzo.drawImage(vaca.imagen, x, y);
        }
    }

    if (!cerdo.cargaOk) {
        let cantidad = aleatorio(2, 6);
        for (let i = 0; i < cantidad; i++) {
            xCerdo = aleatorio(0, 420);
            yCerdo = aleatorio(0, 420);
            lienzo.drawImage(cerdo.imagen, xCerdo, yCerdo);
        }
    }

    if (pollo.cargaOk) {
        let cantidad = aleatorio(2, 20);
        for (let i = 0; i < cantidad; i++) {
            let x = aleatorio(0, 420);
            let y = aleatorio(0, 420);
            lienzo.drawImage(pollo.imagen, x, y);
        }
    }

}

function aleatorio(min, max) {
    let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    return aleatorio;
}

var flechas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener('keyup', (e)=>{
    var movimiento = 30;
    if (cerdo.cargaOk) {
    dibujar();
      switch (e.keyCode) {
        case flechas.UP:
                console.log("Arriba")
        lienzo.drawImage(cerdo.imagen, xCerdo, yCerdo - movimiento)
        yCerdo = yCerdo - movimiento;
  
          break;
        case flechas.DOWN:
        lienzo.drawImage(cerdo.imagen, xCerdo, yCerdo + movimiento)
        yCerdo = yCerdo + movimiento;
  
          break;
        case flechas.RIGHT:
        lienzo.drawImage(cerdo.imagen, xCerdo + movimiento, yCerdo)
        xCerdo = xCerdo + movimiento;
  
          break;
        case flechas.LEFT:
        lienzo.drawImage(cerdo.imagen, xCerdo - movimiento, yCerdo)
        xCerdo = xCerdo - movimiento;
  
          break;
      }
    }
}); 
