
function calcularTotal(costoProd, giftcard) {
    return costoProd - giftcard;
}

function totalCuotas(total, cuotas, interes) {
    let arancelCuotas;
    arancelCuotas = (total + total * interes) / cuotas;
    return arancelCuotas;
}

let seguir=1;

let precio;
let giftcard;
let total;

let cuotas;
let interes = 0.08;
let arancelCuotas;

while(seguir!=0) {
    precio = parseInt(prompt("Ingrese el precio de su producto: "));
    giftcard = parseInt(prompt("¿Posee una gift card? En ese caso ingrese el monto de la misma. Caso contrario ingrese 0"));
    cuotas = parseInt(prompt("¿En cuantas cuotas va a comprar? Si va a comprar en un único pago ingrese 0 (A saber: el interés en las compras en cuotas es del 8%)"));

    if(giftcard) {
        total = calcularTotal(precio, giftcard);
    } else {
        total = precio;
    }

    if(cuotas>1) {
        arancelCuotas = totalCuotas(total, cuotas, interes);
        alert("Precio: $" + precio +
        "\nGiftcard: $" + giftcard +
        "\nCuotas: " + cuotas +
        "\nInterés: " + interes*100 + "%" +
        "\nArancel de la cuota: $" + arancelCuotas);
    } else {
        alert("Precio: $" + precio +
        "\nGiftcard: $" + giftcard +
        "\nTotal: $" + total);
    }

    seguir = prompt("Si desea salir ingrese 0. Si desea repetir el proceso para otro producto ingrese cualquier otro caracter");
}
