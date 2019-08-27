class Billete {

    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
    }

}

let div = 0;
let dinero = 210;
let caja = [];
let entregado = [];
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));

let extraer = document.getElementById("extraer");
let resultado = document.getElementById("resultado");
extraer.addEventListener('click', entregarDinero);

function entregarDinero(){
    entregado = [];
    dinero = parseInt(document.getElementById("dinero").value);

    for (let bill of caja){
        if (dinero > 0){
            div = Math.floor(dinero/bill.valor);

            // Si la cantidad de billetes a entregar es mayor a los disponibles,entregue sólo los disponibles, si no, entregue los necesarios
            papeles = (div > bill.cantidad) ? bill.cantidad : div;
            
            entregado.push(new Billete(bill.valor, papeles));
            dinero = dinero - (bill.valor*papeles);
        }
    }

    resultado.innerHTML = "";
    if (dinero > 0){
        let total = 0;
        entregado.forEach((bill) => {
            total += bill.valor*bill.cantidad;
        });
        resultado.innerHTML = "Sólo te puedo entregar: $"+total;
    } else {
        console.log("Entregado",entregado);
        for (let e of entregado){
            resultado.innerHTML += e.cantidad + " billetes de $"+e.valor+"<br/>";
        }
    }
}
