let total=0;
let flag=1;
let interes = 0.08;

const productos = [];

function calcularTotal(costoProd, giftcard) {
    return costoProd - giftcard;
}

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    total() {
        this.total = this.precio * this.cantidad;
    }
}

for(let i=0; flag; i++) {

    let nombre = prompt("Ingrese el nombre de su producto: ");
    let precio = parseFloat(prompt("Ingrese el precio de su producto: "));
    let cantidad = parseInt(prompt("Ingrese cuantos desea comprar: "));

    productos[i] = new Producto(nombre, precio, cantidad);

    productos[i].total();

    total += productos[i].total;

    flag = parseInt(prompt("Si desea terminar su compra ingrese 0. Si desea agregar más productos al carrito ingrese 1"));
}

let giftcard = parseFloat(prompt("¿Posee una gift card? En ese caso ingrese el monto de la misma. Caso contrario ingrese 0"));
let cuotas = parseInt(prompt("¿En cuantas cuotas va a comprar? Si va a comprar en un único pago ingrese 0 (A saber: el interés en las compras en cuotas es del 8%)"));

for(let j=0; j<productos.length; j++) {
    console.log("Artículo: " + productos[j].nombre);
    console.log("Precio: $" + productos[j].precio);
    console.log("Cantidad: " + productos[j].cantidad);
    console.log("Total: $" + productos[j].total);
    console.log("\n\n");
}

if(giftcard) {
    console.log("Gift Card: $" + giftcard);
    total -= giftcard;
}

console.log("MONTO TOTAL EN UN SOLO PAGO: $" + total);

if(cuotas>1) {
    let arancelCuotas = (total + total * interes) / cuotas;
    console.log("\nCuotas: " + cuotas +
    "\nInterés: " + interes*100 + "%" +
    "\nArancel de la cuota: $" + arancelCuotas);
}

alert("Revise la consola para ver el resúmen de su compra");