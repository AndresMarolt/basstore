

document.addEventListener('DOMContentLoaded', () => {
    iniciarCompra();
})



class Compra {
    constructor(obj, cantidad) {
        this.id = obj.id;
        this.nombre = obj.nombre;
        this.tipo = obj.tipo;
        this.imagen = obj.imagen;
        this.precio = obj.precio;
        this.cantidad = cantidad;
        this.total = obj.precio * cantidad;
    }
}

let productosAgregadosHastaAhora = [];
let contenidoLocalStorage;


class Carrito {
    
    agregarProducto() {
        
        if(document.getElementById('boton-carrito')) {

            const botonAgregarAlCarrito = document.getElementById('boton-carrito');
            let contenidoCarrito = [];

            botonAgregarAlCarrito.addEventListener('click', () => {
                            
                const productoComprado = JSON.parse(localStorage.getItem('productoEnPantalla'));
                const compra = new Compra(productoComprado, parseInt(document.getElementById('cantidad').value));
    
                if(localStorage.getItem('carrito')) {                                               // Si ya hay productos en carrito
                    contenidoCarrito = JSON.parse(localStorage.getItem('carrito'));            // Leer todos los productos en carrito (LS)
                }
    
                if (contenidoCarrito.find(x => x.id === compra.id)) {
                    alert("ERROR: El producto que seleccionó ya se encontraba en el carrito");
                    return;
                } else {
                    contenidoCarrito.push(compra);
                    localStorage.setItem('carrito', JSON.stringify(contenidoCarrito));
                    alert("Producto agregado al carrito correctamente");
                }
            })

            
        }
    }

    eliminarProducto() {
        let contenidoCarrito = [];
        let carritoActualizado = [];

        document.addEventListener("click", (e) => {          
            let producto, productoID;
            if(e.target.classList.contains("borrar-producto")) {
                console.log("DISTE CLICK EN BORRAR");
                e.target.parentElement.parentElement.remove();
                /* console.log(e.target.parentElement.parentElement); */
                producto = e.target.parentElement.parentElement;
                console.log(producto);
                productoID = parseInt(producto.querySelector('a').getAttribute('data-id'));
                console.log(productoID);

                // LEER LOCAL STORAGE
                contenidoCarrito = JSON.parse(localStorage.getItem('carrito'));
                console.log(contenidoCarrito);
                // 
                contenidoCarrito.forEach(x => console.log(x.id)) ;
                carritoActualizado = contenidoCarrito.filter( x => x.id !== productoID);
                console.log(carritoActualizado);
                localStorage.setItem('carrito', JSON.stringify(carritoActualizado)); 

                if(document.getElementById('listado-resumen')) {
                    location.reload();
                }
            }
        })
    }

    insertarCarritoDOM() {
        const iconoCarrito = document.querySelector('#dropdown01');

        iconoCarrito.addEventListener('click', () => {
            const contenidoCarrito = JSON.parse(localStorage.getItem('carrito'));
            const listaProductos = document.querySelector(".lista-carrito tbody");

            listaProductos.innerHTML = '';  
            
            
            contenidoCarrito.forEach(element => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <img src="${element.imagen}" width=100>
                    </td>
                    <td>${element.nombre}</td>
                    <td>${element.precio}</td>
                    <td>${element.cantidad}</td>
                    <td>${element.total}</td>
                    <td>
                        <a href="#" class="borrar-producto fas fa-times-circle" data-id="${element.id}"></a>
                    </td>
                `;
                listaProductos.appendChild(row);
            });
        })
    }

    vaciarCarrito() {
        document.addEventListener("click", (e) => {
            if(e.target.id === "vaciar-carrito") {
                localStorage.removeItem('carrito');
                location.reload();
            }
        })
    }

    abrirCheckout() {
        document.addEventListener("click", e => {
            if(e.target.id === "procesar-pedido") {
                let path = window.location.pathname;
                let pagina = path.split("/").pop();

                console.log(pagina);

                if(pagina === "") {
                    location.href = "paginas/checkout.html";
                } else {
                    location.href = "../paginas/checkout.html";
                }                
            }
        })
    }

    insertarCkeckoutDOM() {
        const contenidoCarrito = JSON.parse(localStorage.getItem('carrito'));
        const listaCompra = document.querySelector("#listado-resumen");
        const subtotal = contenidoCarrito.map(item => item.total).reduce((a, b) => a + b);
        
        console.log(subtotal);

        listaCompra.innerHTML = '';  
        
        contenidoCarrito.forEach(element => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${element.imagen}" width=100>
                </td>
                <td>${element.nombre}</td>
                <td>${element.precio}</td>
                <td>${element.cantidad}</td>
                <td>${element.total}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${element.id}"></a>
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
        inputGiftCard.addEventListener('focusout', () => {
            let giftcard = inputGiftCard.value;
            console.log(giftcard);

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
