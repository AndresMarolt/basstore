

document.addEventListener('DOMContentLoaded', () => {
    iniciarCompra();
})



class Compra {
    constructor(obj, cantidad) {
        this.id = obj.id;
        this.nombre = `${obj.marca} ${obj.modelo}`;
        this.imagen = obj.imagen;
        this.precio = obj.precio;
        this.cantidad = cantidad;
        this.total = obj.precio * cantidad;
    }
}

let productosAgregadosHastaAhora = [];
let contenidoLocalStorage;


class Carrito {
    
    async agregarProducto() {
        await visualizarDetallesProd();
        const botonAgregarAlCarrito = document.getElementById('boton-carrito');
        let contenidoCarrito = [];

        botonAgregarAlCarrito.addEventListener('click', () => {

            const productoComprado = JSON.parse(localStorage.getItem('productoEnPantalla'));
            const compra = new Compra(productoComprado, parseInt(document.getElementById('cantidad').value));

            contenidoCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

            if (contenidoCarrito.find(x => x.id === compra.id)) {
                Swal.fire({
                    title: 'Atención!',
                    icon: 'error',
                    text: 'El producto que seleccionó ya se encontraba en el carrito',
                    timer: 1500
                });
                return;
            } else {
                contenidoCarrito.push(compra);
                localStorage.setItem('carrito', JSON.stringify(contenidoCarrito));
                Swal.fire({
                    title: 'Bien!',
                    icon: 'success',
                    text: 'Producto agregado al carrito correctamente',
                    timer: 1500
                });
                let botonesCarrito = document.querySelectorAll(".carrito a");
                botonesCarrito.forEach(bot => bot.style.display = 'inline-block');
            }
        })

            
    
    }

    eliminarProducto() {
        let contenidoCarrito = [];
        let carritoActualizado = [];

        document.addEventListener("click", (e) => {          
            let producto, productoID;
            if(e.target.classList.contains("borrar-producto")) {
                e.target.parentElement.parentElement.remove();
                producto = e.target.parentElement.parentElement;
                productoID = parseInt(producto.querySelector('a').getAttribute('data-id'));

                contenidoCarrito = JSON.parse(localStorage.getItem('carrito'));
                carritoActualizado = contenidoCarrito.filter( x => x.id !== productoID);
                localStorage.setItem('carrito', JSON.stringify(carritoActualizado)); 

                document.getElementById('listado-resumen') && location.reload();   
            }
        })
    }

    insertarCarritoDOM() {
        const iconoCarrito = document.querySelector('#dropdown01');

        iconoCarrito.addEventListener('click', () => {
            const contenidoCarrito = JSON.parse(localStorage.getItem('carrito'));
            const listaProductos = document.querySelector(".lista-carrito tbody");

            listaProductos.innerHTML = '';  
            
            if(!contenidoCarrito || contenidoCarrito.length === 0) {
                const row = document.createElement('tr');
                row.innerHTML = `<td>Carrito Vacío</td>`
                let botonesCarrito = document.querySelectorAll(".carrito a");
                botonesCarrito.forEach(bot => bot.style.display = 'none');
                listaProductos.appendChild(row);
                return;
            } 
            
            contenidoCarrito.forEach(element => {
                const {id, nombre, precio, imagen, cantidad, total} = element;
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <img src="${imagen}" width=100>
                    </td>
                    <td>${nombre}</td>
                    <td>${precio}</td>
                    <td>${cantidad}</td>
                    <td>${total}</td>
                    <td>
                        <a href="#" class="borrar-producto fas fa-times-circle" data-id="${id}"></a>
                    </td>
                `;
                listaProductos.appendChild(row);
            });
        })
    }

    vaciarCarrito() {
        document.addEventListener("click", (e) => {
            if(e.target.id === "vaciar-carrito") {
                Swal.fire({
                    title: "Seguro que quiere vaciar el carrito?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Sí, estoy seguro',
                    cancelButtonText: 'No, no vaciarlo'
                }) .then((result => {
                    if(result.isConfirmed) {
                        localStorage.removeItem('carrito');
                        location.reload();
                    }
                }))
                
            }
            
        })
    }

    abrirCheckout() {
        document.addEventListener("click", e => {
            if(e.target.id === "procesar-pedido") {
                let path = window.location.pathname;
                let pagina = path.split("/").pop();
                pagina === "" ? location.href = "paginas/checkout.html" : location.href = "../paginas/checkout.html";                
            }
        })
    }

    insertarCkeckoutDOM() {
        if(!document.querySelector("#listado-resumen")) return;
        const contenidoCarrito = JSON.parse(localStorage.getItem('carrito'));
        const listaCompra = document.querySelector("#listado-resumen");
        const subtotal = contenidoCarrito.map(item => item.total).reduce((a, b) => a + b);
        
        listaCompra.innerHTML = '';  
        
        contenidoCarrito.forEach(element => {

            const {id, imagen, nombre, precio, cantidad, total} = element;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${imagen}" width=100>
                </td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>${total}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${id}"></a>
                </td>
            `;
            listaCompra.appendChild(row);
        })

        const tablaCompra = document.querySelector("#tabla-resumen");
        tablaCompra.innerHTML = `
                    <tr>
                        <th colspan="6">
                            <label class="form-check-label" for="giftcard">INGRESE EL MONTO DE SU GIFTCARD (SI NO POSEE UNA INGRESE 0)</label>
                            <input type="number" name="gc" id="giftcard">
                        </th>
                    </tr>
    
                    <tr>
                        <th colspan="4" scope="col" class="text-right">SUB TOTAL :</th>
                        <th scope="col">
                            <p id="subtotal"></p>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="4" scope="col" class="text-right">GIFTCARD :</th>
                        <th scope="col">
                            <p id="descuento"></p>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="4" scope="col" class="text-right">TOTAL :</th>
                        <th scope="col">
                            <p id="total-compra"></p>
                        </th>
                    </tr>
        `

        let subtotalParrafo = document.getElementById("subtotal");
        subtotalParrafo.innerText = "$" + subtotal;

        let inputGiftCard = document.getElementById("giftcard");
        inputGiftCard.addEventListener('input', () => {
            let giftcard = inputGiftCard.value;

            let descuentoParrafo = document.getElementById("descuento");
            descuentoParrafo.innerText = "$" + giftcard;

            let totalCompra = document.getElementById("total-compra");
            totalCompra.innerText = "$" + (subtotal - giftcard);
        })
        
    }
}

function iniciarCompra() {
    const carritoDeCompras = new Carrito();

    carritoDeCompras.agregarProducto();
    carritoDeCompras.eliminarProducto();
    carritoDeCompras.insertarCarritoDOM();
    carritoDeCompras.vaciarCarrito();
    carritoDeCompras.abrirCheckout();
    carritoDeCompras.insertarCkeckoutDOM();
}
