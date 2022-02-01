// VARIABLES
let interes = 0.08;
let flag;
// ARRAY VACIO AL QUE VAMOS A IR AGREGANDOLE OBJETOS
let productos = [];

//FUNCIONES
function restarGiftcard(gc) {
    if(gc) {
        console.log("Gift Card: $" + gc);
        total -= gc;
    }
}
function calcularCuotas(total, interes, cuotas) {
    let costoCuotas = (total + total * interes) / cuotas;
    return costoCuotas;
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
function validacion(tipo, variable) {
    if(variable==="") {
        return false;
    } else if(tipo === "number" && !isNumeric(variable)) {
        return false;
    } else if (tipo === "number" && variable<0) {
        return false;
    }

    return true;
}

// CLASE
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    total() {
        this.monto = this.precio * this.cantidad;
    }
}

// INGRESO DE DATOS DE LOS PRODUCTOS COMPRADOS
do {
    let nombre = prompt("Ingrese el nombre de su producto: ");
    while(!validacion("string", nombre)) {
        nombre = prompt("El nombre del producto no puede ir vacío. Intente nuevamente");
    }

    let precio = prompt("Ingrese el precio de su producto: ");
    while(!validacion("number", precio)) {
        precio = prompt("El precio del producto solo debe contener números, no puede ser menor que 0 y no puede ir vacío. Intente nuevamente");
    }
    precio = parseFloat(precio);

    let cantidad = prompt("Ingrese cuantos desea comprar (Si ingresa un número decimal se redondeará su valor hacia abajo): ");
    while(!validacion("number", cantidad)) {
        cantidad = prompt("La cantidad de productos debe ser un número no menor que 0 y no puede ir vacío. Intente nuevamente");
    }
    cantidad = Math.floor(parseInt(cantidad));

    const producto = new Producto(nombre, precio, cantidad);
    
    producto.total();
    productos.push(producto);

    flag = parseInt(prompt("Si desea terminar su compra ingrese 0. Si desea agregar más productos al carrito ingrese 1"));
} while(flag);

let total = productos.reduce( (acumulador, elemento) => acumulador + elemento.monto, 0 );

let giftcard = prompt("¿Posee una gift card? En ese caso ingrese el monto de la misma. Caso contrario ingrese 0");
while(!validacion("number", giftcard)) {
    giftcard = prompt("Debe ingresar el monto de su gift card y 0 si no tiene. Intente nuevamente");
}
giftcard = parseFloat(giftcard);

let cuotas = prompt("¿En cuantas cuotas va a comprar? Puede elegir entre 3, 6 y 12 cuotas. Si va a comprar en un único pago ingrese 0 (A saber: el interés en las compras en cuotas es del 8%)");
while(!validacion("number", cuotas) || cuotas!=3 && cuotas!=6 && cuotas!=12 && cuotas!=0) {
    cuotas = prompt("El número de cuotas puede ser 3, 6 o 12. Si desea abonar en un único pago ingrese 0. Intente nuevamente");
}
cuotas = parseInt(cuotas);

// DECLARA UN OBJETO DATE
const hoy = new Date()
const fechayhora = "\nFecha: " + hoy.getDate() + "/" + (hoy.getMonth()+1) + "/" + hoy.getFullYear() + 
            "\nHora: " + hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();

 // ORDENA EL ARRAY SEGUN EL PRECIO DE CADA PRODUCTO (DE MENOR A MAYOR)
productos.sort((a, b) => {             
    if(a.precio > b.precio) {
        return 1;
    } else if(a.precio < b.precio) {
        return -1;
    }

    return 0;
})

// IMPRIME EN CONSOLA CADA UNO DE LOS ELEMENTOS DEL ARRAY PRODUCTOS
productos.forEach((prod)=> {
    console.log("Artículo: " + prod.nombre);
    console.log("Precio: $" + prod.precio);
    console.log("Cantidad: " + prod.cantidad);
    console.log("Total: $" + prod.monto);
    console.log("\n\n");
})

restarGiftcard(giftcard);

console.log("MONTO TOTAL EN UN SOLO PAGO: $" + total);

if(cuotas===3 || cuotas===6 || cuotas===12) {
    let arancelCuotas = calcularCuotas(total,interes, cuotas);
    console.log("\nCuotas: " + cuotas +
    "\nInterés: " + interes*100 + "%" +
    "\nArancel de la cuota: $" + arancelCuotas);
}

console.log(fechayhora);

alert("Revise la consola para ver el resumen de su compra");