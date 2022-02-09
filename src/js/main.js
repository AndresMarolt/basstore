document.addEventListener('DOMContentLoaded', function() {
    // mostrarDinamicamente();
    alert("Dirigirse a Productos>Bajos y presionar Agregar al Carrito. Debajo de todo aparecerá la información del producto seleccionado");
    agregarAlCarrito();
});

const carrito = [];

class Producto {
    constructor(nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

const articulosArray = [
    {
        id: 1,
        nombre: "Fender American Standard Jazz Bass(2008)",
        precio: 350000,
        descripcion: "Bajo Jazz Bass de 4 cuerdas made in USA, con cuerpo de fresno, mastil de palorrosa y diapasón de arce. Micrófonos DiMarzio DP149 Ultra Jazz y clavijas Hipshot."
    },
    {
        id: 2,
        nombre: "Eastwood Classic Fretless Bass",
        precio: 70000,
        descripcion: "Bajo 4 cuerdas"
    },
    {
        id: 3,
        nombre: "F Bass AC5 Violin Burst",
        precio: 500000,
        descripcion: "F Bass 5 cuerdas"
    },
    {
        id: 4,
        nombre: "Warwick Rockbass Corvette 5",
        precio: 80000,
        descripcion: "Bajo 5 cuerdas"
    },
    {
        id: 5,
        nombre: "Fender Player JB",
        precio: 120000,
        descripcion: "Jazz Bass con cuerpo de aliso, diapasón de palorrosa y dos micrófonos Player Series de bobina simple"
    },
    {
        id: 6,
        nombre: "Ernie Ball Musicman Stingray 5",
        precio: 320000,
        descripcion: "Mics hambuckers de alnico, previo activo con ecualizador de 3 bandas y cejuela compensada."
    },
    {
        id: 7,
        nombre: "NS Design WAV4c",
        precio: 30000,
        descripcion: "Bajo 4 cuerdas"
    },
    {
        id: 8,
        nombre: "Sire Marcus Miller V5 (Zurdo)",
        precio: 95000,
        descripcion: "Jazz Bass 4 cuerdas zurdo"
    },
    {
        id: 9,
        nombre: "Squier Classic Vibe 60s JB",
        precio: 350000,
        descripcion: "Jazz Bass inspirado en modelos Jazz Bass de los años 60. Cuerpo de álamo con acabado de poliuretano y diapasón de palorrosa"
    }
];

function agregarAlCarrito() {

    const enlaces = document.getElementsByClassName("publicacion");

    console.log(enlaces);

    for(const enlace of enlaces) {
        enlace.addEventListener('click', evento => {
            evento.preventDefault();
        })
    }

    
    const botones = document.getElementsByClassName("submit-carrito");

    for(const boton of botones) {
        boton.addEventListener('click', () => {
            let publicacion = boton.parentElement.parentElement.parentElement.parentElement;
        
            let seleccionado = articulosArray.find(x => x.id == publicacion.id);

            if(seleccionado) {

                // =============== CREACION DEL OBJETO DE TIPO PRODUCTO PARA SUMARLO AL CARRITO ===============
                const productoComprado = new Producto(seleccionado.nombre, seleccionado.precio, seleccionado.descripcion);
                carrito.push(productoComprado);

                // =============== NOMBRE DEL PRODUCTO A MOSTRAR EN PANTALLA ===============
                let nombreHTML = document.createElement("h1");
                nombreHTML.innerText = productoComprado.nombre;

                // =============== PRECIO DEL PRODUCTO A MOSTRAR EN PANTALLA ===============
                let precioHTML = document.createElement("p");
                precioHTML.innerText = "$" + productoComprado.precio;

                // =============== DESCRIPCION DEL PRODUCTO A MOSTRAR EN PANTALLA ===============
                let descHTML = document.createElement("p")
                descHTML.innerText = productoComprado.descripcion;

                // =============== TOTAL DE LA COMPRA HASTA EL MOMENTO DEL CLICK ===============
                let montoCompra = carrito.reduce( (acumulador, elemento) => acumulador + elemento.precio, 0 );
                let totalHTML = document.createElement("p");
                totalHTML.innerText = montoCompra; 
                
                // =============== SELECCION DEL ELEMENTO PADRE AL QUE SE LE ANEXARAN LOS ELEMENTOS CREADOS ===============
                let divPadre = document.getElementById("contenedor-bajos");
                divPadre.appendChild(nombreHTML);
                divPadre.appendChild(precioHTML);
                divPadre.appendChild(descHTML);
            }
        })
    }
}

// function mostrarDinamicamente() {
//     const publicaciones = document.getElementsByClassName("publicacion");

//     for(const prod of publicaciones) {
        
//         prod.addEventListener('click', e => {
//             e.preventDefault();

//             const prodEncontrado = articulosArray.find(x => x.id == prod.id);

//             if(prodEncontrado) {
//                 // =============== NOMBRE DEL PRODUCTO A MOSTRAR EN PANTALLA ===============
//                 let nombreHTML = document.createElement("h1");
//                 nombreHTML.setAttribute("class", "producto__titulo");
//                 nombreHTML.setAttribute("id", "nombre");
//                 nombreHTML.innerText = prodEncontrado.nombre;

//                 // =============== IMAGEN DEL PRODUCTO A MOSTRAR EN PANTALLA ===============
//                 let imagenProdHTML = document.createElement("img");
//                 imagenProdHTML.setAttribute("src", prodEncontrado.imagen);
//                 imagenProdHTML.setAttribute("alt", "producto");
//                 imagenProdHTML.setAttribute("class", "prod__imagen");

//                 // =============== PRECIO DEL PRODUCTO A MOSTRAR EN PANTALLA ===============
//                 let precioHTML = document.createElement("p");
//                 precioHTML.setAttribute("class", "prod__info__precio");
//                 precioHTML.setAttribute("id", "precio");
//                 precioHTML.innerText = prodEncontrado.precio;

//                 // =============== DESCRIPCION DEL PRODUCTO A MOSTRAR EN PANTALLA ===============
//                 let descHTML = document.createElement("p")
//                 descHTML.setAttribute("class", "prod__info__descripcion");
//                 descHTML.setAttribute("id", "descripcion");
//                 descHTML.innerText = prodEncontrado.descripcion;

//                 miLocalStrg = window.localStorage;
//                 miLocalStrg.setItem('nombreHTML', nombreHTML.innerHTML);
//                 miLocalStrg.setItem('imagenProdHTMl', imagenProdHTML.innerHTML);
//                 miLocalStrg.setItem('precioHTML', precioHTML.innerHTML);
//                 miLocalStrg.setItem('descHTML', descHTML.innerHTML);
//             }
//         })
//                  =============== DECLARAMOS LAS VARIABLES QUE CONTIENEN A LOS PADRES RESPECTIVOS ===============            
//              const padreCont = document.querySelector('#contenedor-prod');
//              const padreData = document.querySelector('#prod-data');
//              const padreInfo = document.querySelector('#prod-info');
            
//              // =============== AÑADIMOS LOS ELEMENTOS CREADOS DE MANERA DINAMICA AL DOM ===============
//              padreCont.appendChild(nombreHTML);
//              padreData.appendChild(imagenProdHTML);
//              padreInfo.appendChild(precioHTML);
//              padreInfo.appendChild(descHTML);
//     }
// }























// // VARIABLES
// let interes = 0.08;
// let flag;
// // ARRAY VACIO AL QUE VAMOS A IR AGREGANDOLE OBJETOS
// let carrito = [];

// //FUNCIONES
// function restarGiftcard(gc) {
//     if(gc) {
//         console.log("Gift Card: $" + gc);
//         total -= gc;
//     }
// }
// function calcularCuotas(total, interes, cuotas) {
//     let costoCuotas = (total + total * interes) / cuotas;
//     return costoCuotas;
// }
// function esEntero(n) {
//     if((n - Math.floor(n)) ===0) return true; else return false
// }
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//   }
// function validacion(tipo, variable) {
//     if(variable==="") {
//         return false;
//     } else if(tipo === "number" && !isNumeric(variable)) {
//         return false;
//     } else if (tipo === "number" && variable<0) {
//         return false;
//     }

//     return true;
// }

// // CLASE
// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }

//     total() {
//         this.monto = this.precio * this.cantidad;
//     }
// }

// // INGRESO DE DATOS DE LOS PRODUCTOS COMPRADOS
// do {
//     let nombre = document.getElementById("nombre");

//     let precio = document.getElementById("precio");
//     precio = parseFloat(precio);

//     let cantidad = document.getElementById("cantidad").value;
//     while(!esEntero(cantidad)) {
//         console.log("HOLA");
//         let alertaCantidad = document.createElement("P");
//         alertaCantidad.innerText = "La cantidad no puede ser un número decimal";

//         let padreProd = document.getElementById("producto");
//         padreProd.appendChild(alertaCantidad);
//     }

//     const producto = new Producto(nombre, precio, cantidad);
    
//     producto.total();
//     carrito.push(producto);

//     /* flag = parseInt(prompt("Si desea terminar su compra ingrese 0. Si desea agregar más productos al carrito ingrese 1")); */
// } while(flag);

// let total = carrito.reduce( (acumulador, elemento) => acumulador + elemento.monto, 0 );

// /* let giftcard = prompt("¿Posee una gift card? En ese caso ingrese el monto de la misma. Caso contrario ingrese 0");
// while(!validacion("number", giftcard)) {
//     giftcard = prompt("Debe ingresar el monto de su gift card y 0 si no tiene. Intente nuevamente");
// }
// giftcard = parseFloat(giftcard); */

// /* let cuotas = prompt("¿En cuantas cuotas va a comprar? Puede elegir entre 3, 6 y 12 cuotas. Si va a comprar en un único pago ingrese 0 (A saber: el interés en las compras en cuotas es del 8%)");
// while(!validacion("number", cuotas) || cuotas!=3 && cuotas!=6 && cuotas!=12 && cuotas!=0) {
//     cuotas = prompt("El número de cuotas puede ser 3, 6 o 12. Si desea abonar en un único pago ingrese 0. Intente nuevamente");
// }
// cuotas = parseInt(cuotas); */

// // DECLARA UN OBJETO DATE
// const hoy = new Date()
// const fechayhora = "\nFecha: " + hoy.getDate() + "/" + (hoy.getMonth()+1) + "/" + hoy.getFullYear() + 
//             "\nHora: " + hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();

//  // ORDENA EL ARRAY SEGUN EL PRECIO DE CADA PRODUCTO (DE MENOR A MAYOR)
// carrito.sort((a, b) => {             
//     if(a.precio > b.precio) {
//         return 1;
//     } else if(a.precio < b.precio) {
//         return -1;
//     }

//     return 0;
// })

// // IMPRIME EN CONSOLA CADA UNO DE LOS ELEMENTOS DEL ARRAY PRODUCTOS
// carrito.forEach((prod)=> {
//     console.log("Artículo: " + prod.nombre);
//     console.log("precio: " + prod.precio);
//     console.log("Cantidad: " + prod.cantidad);
//     console.log("Total: $" + prod.monto);
//     console.log("\n\n");
// })

// restarGiftcard(giftcard);

// console.log("MONTO TOTAL EN UN SOLO PAGO: $" + total);

// if(cuotas===3 || cuotas===6 || cuotas===12) {
//     let arancelCuotas = calcularCuotas(total,interes, cuotas);
//     console.log("\nCuotas: " + cuotas +
//     "\nInterés: " + interes*100 + "%" +
//     "\nArancel de la cuota: $" + arancelCuotas);
// }

// console.log(fechayhora);