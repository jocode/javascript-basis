class Product {

    // Se ejecuta apenas creemos el objeto
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

// La interfaz es la que modificarpa el HTML
class UI {

    addProduct(product){
        const productList = document.getElementById("product-list");

        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name:</strong> ${product.name}
                    <strong>Product Price:</strong> ${product.price}
                    <strong>Product Year:</strong> ${product.year}

                    <a href="#" name="delete" class="btn btn-danger">Delete</a>
                </div>
            </div>
        `;

        productList.appendChild(element);
    }

    deleteProduct(element){
        if (element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado', 'danger')
        }
    }

    showMessage(messaje, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(messaje));

        // Show in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector("#app");
        container.insertBefore(div, app);

        setTimeout(function(){
            container.querySelector('.alert').remove();
        }, 3000);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

}

// Eventos DOM
document.getElementById("product-form")
    .addEventListener('submit', function(event){
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const year = document.getElementById("year").value;

        const product = new Product(name, price, year);

        // Objeto de la clase UI
        const ui = new UI();

        if (name === '' || price === '' || year == ''){
            return ui.showMessage("Campos vacíos", 'warning');
        }

        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Produco agregado satisfactoriamente', 'success');

        event.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target)
})