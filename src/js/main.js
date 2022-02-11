document.addEventListener('DOMContentLoaded', function() {
    agregarProdsAlDOM();
});

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
        tipo: "bajos",
        nombre: "Fender American Standard Jazz Bass(2008)",
        precio: 350000,
        descripcion: "Bajo Jazz Bass de 4 cuerdas made in USA, con cuerpo de fresno, mastil de palorrosa y diapasón de arce. Micrófonos DiMarzio DP149 Ultra Jazz y clavijas Hipshot.",
        imagen: "../src/img/bajos/destacado1.jpg"
    },
    {
        id: 2,
        tipo: "bajos",
        nombre: "Eastwood Classic Fretless Bass",
        precio: 70000,
        descripcion: "Bajo 4 cuerdas",
        imagen: "../src/img/bajos/eastwood_classic_fretless.jpg" 
    },
    {
        id: 3,
        tipo: ["bajos", "ofertas"],
        nombre: "F Bass AC5 Violin Burst",
        precio: 500000,
        descripcion: "F Bass 5 cuerdas",
        imagen: "../src/img/bajos/destacado3.jpg"
    },
    {
        id: 4,
        tipo: ["bajos", "ofertas"],
        nombre: "Warwick Rockbass Corvette 5",
        precio: 80000,
        descripcion: "Bajo 5 cuerdas",
        imagen: "../src/img/bajos/destacado4.jpg"
    },
    {
        id: 5,
        tipo: "bajos",
        nombre: "Fender Player JB",
        precio: 120000,
        descripcion: "Jazz Bass con cuerpo de aliso, diapasón de palorrosa y dos micrófonos Player Series de bobina simple",
        imagen: "../src/img/bajos/fender_player_jb.jpg"
    },
    {
        id: 6,
        tipo: "bajos",
        nombre: "Ernie Ball Musicman Stingray 5",
        precio: 320000,
        descripcion: "Mics hambuckers de alnico, previo activo con ecualizador de 3 bandas y cejuela compensada.",
        imagen: "../src/img/bajos/destacado6.jpg"
    },
    {
        id: 7,
        tipo: ["bajos", "ofertas"],
        nombre: "NS Design WAV4c",
        precio: 30000,
        descripcion: "Bajo 4 cuerdas",
        imagen: "../src/img/bajos/NS_Design_WAV4c.jpg"
    },
    {
        id: 8,
        tipo: ["bajos", "ofertas"],
        nombre: "Sire Marcus Miller V5 (Zurdo)",
        precio: 95000,
        descripcion: "Jazz Bass 4 cuerdas zurdo",
        imagen: "../src/img/bajos/sire_marcus_miller.jpg"
    },
    {
        id: 9,
        tipo: ["bajos", "ofertas"],
        nombre: "Squier Classic Vibe 60s JB",
        precio: 350000,
        descripcion: "Jazz Bass inspirado en modelos Jazz Bass de los años 60. Cuerpo de álamo con acabado de poliuretano y diapasón de palorrosa",
        imagen: "../src/img/bajos/squier_classic_vibe_60s_jb.jpg"
    },
    {
        id: 10,
        tipo: "amplificadores",
        nombre: "Fender Rumble 15 1x8 15W",
        precio: 30000,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Fender_Rumble_15_1x8_15W.jpg"
    },
    {
        id: 11,
        tipo: ["amplificadores", "ofertas"],
        nombre: "Warwick Sweet 15",
        precio: 70000,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/destacado2.jpg"
    },
    {
        id: 12,
        tipo: "amplificadores",
        nombre: "Orange Crush Bass 50W 1x12",
        precio: 60000,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Orange_Crush_Bass_50W_1x12.webp"
    },
    {
        id: 13,
        tipo: ["amplificadores", "ofertas"],
        nombre: "Markbass Mini CMD 121P 1x12",
        precio: 130000,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Markbass_Mini_CMD_121P_1x12.webp"
    },
    {
        id: 14,
        tipo: ["amplificadores", "ofertas", "nuevos"],
        nombre: "Cabezal GR Bass Mini One",
        precio: 120000,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/destacado5.jpg"
    },
    {
        id: 15,
        tipo: "amplificadores",
        nombre: "Markbass CMD Ninja 102P",
        precio: 320000,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Markbass_CMD_Ninja_102P.webp"
    },
    {
        id: 16,
        tipo: ["amplificadores", "nuevos"],
        nombre: "Acoustic B100C 1X12 100W",
        precio: 30000,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Acoustic_B100C_1X12_100W.webp"
    },
    {
        id: 17,
        tipo: ["amplificadores", "nuevos"],
        nombre: "Amplificador Acus OneforBass Black",
        precio: 95000,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/amplificador2.jpg"
    },
    {
        id: 18,
        tipo: "amplificadores",
        nombre: "Cabezal Epifani UL502",
        precio: 350000,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/cabezal.jpg"
    },
    {
        id: 19,
        tipo: ["studio", "nuevos"],
        nombre: "Empire Ears Odin",
        precio: 120000,
        descripcion: "Studio",
        imagen: "../src/img/studio/Empire_Ears_Odin.jpg"
    },
    {
        id: 20,
        tipo: ["studio", "nuevos", "masvendidos"],
        nombre: "Symphonium Helios in-Ear",
        precio: 70000,
        descripcion: "Studio",
        imagen: "../src/img/studio/Symphonium_Helios_in_Ear.jpg"
    },
    {
        id: 21,
        tipo: ["studio", "ofertas", "nuevos"],
        nombre: "Audient iD4 MkII",
        precio: 200000,
        descripcion: "Studio",
        imagen: "../src/img/studio/Audient_id4.webp" 
    },
    {
        id: 22,
        tipo: ["studio", "masvendidos"],
        nombre: "Sennheiser HD 800s",
        precio: 80000,
        descripcion: "Studio",
        imagen: "../src/img/studio/Sennheiser_hd_800s.png"
    },
    {
        id: 23,
        tipo: ["studio", "masvendidos"],
        nombre: "SSL 2+ audio interface",
        precio: 60000,
        descripcion: "Studio",
        imagen: "../src/img/studio/SSL2+audio_interface.webp"
    },
    {
        id: 24,
        tipo: "studio",
        nombre: "Audeze Mobius Wireless",
        precio: 85000,
        descripcion: "Studio",
        imagen: "../src/img/studio/Audeze_Mobius_Wireless.jpg"
    },
    {
        id: 25,
        tipo: ["studio", "masvendidos"],
        nombre: "Audeze LCD-2 Classic Planar",
        precio: 50000,
        descripcion: "Studio",
        imagen: "../src/img/studio/Audeze_LCD-2_Classic_Planar.jpg"
    },
    {
        id: 26,
        tipo: ["studio", "masvendidos"],
        nombre: "Empire Ears Valkyrie MK II",
        precio: 200000,
        descripcion: "Studio",
        imagen: "../src/img/studio/Empire_Ears_Valkyrie_MK_II.png"
    },
    {
        id: 27,
        tipo: "studio",
        nombre: "64 Audio U18S In-Ear Monitor",
        precio: 350000,
        descripcion: "Studio",
        imagen: "../src/img/studio/64_Audio_U18S_In-Ear_Monitor.jpg"
    },
    {
        id: 28,
        tipo: "pedales",
        nombre: "EBS Bass IQ Envelope Filter",
        precio: 45000,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/EBS_BassIQ.jpg"
    },
    {
        id: 29,
        tipo: ["pedales", "masvendidos"],
        nombre: "MXR M288 Bass Octave Deluxe",
        precio: 70000,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/MXR_M288_Bass_Octave_Deluxe.jpg"
    },
    {
        id: 30,
        tipo: "pedales",
        nombre: "MXR M82 Bass Filter Envelope",
        precio: 500000,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/MXR_M82_Bass_Filter_Envelope.jpg"
    },
    {
        id: 31,
        tipo: ["pedales", "nuevos"],
        nombre: "Boss DD-7 Digital Delay",
        precio: 80000,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Boss_DD-7.jpg"
    },
    {
        id: 32,
        tipo: ["pedales", "nuevos"],
        nombre: "Boss PS-6 Harmonist",
        precio: 40000,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Boss_PS-6_Harmonist.jpg"
    },
    {
        id: 33,
        tipo: ["pedales", "nuevos", "masvendidos"],
        nombre: "Electro Harmonix Freeze",
        precio: 320000,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Electro_Harmonix_Freeze.jpg"
    },
    {
        id: 34,
        tipo: ["pedales", "masvendidos"],
        nombre: "Boss TR-2 Tremolo",
        precio: 30000,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Boss_TR-2_Tremolo.jpg"
    },
    {
        id: 35,
        tipo: ["pedales", "masvendidos"],
        nombre: "Electro Harmonix Nano Battalion",
        precio: 45000,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Electro_Harmonix_Nano_Battalion.jpg"
    },
    {
        id: 36,
        tipo: "pedales",
        nombre: "Fender The Bends",
        precio: 30000,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/FENDER_The_Bends.jpg"
    }
];

function agregarProdsAlDOM() {
    const divPadre = document.querySelector('.productos-todo');

    const publicaciones = articulosArray.filter(function(art) {
        if(typeof art.tipo === "object" ) {

            const cantidadTipos = art.tipo.length;
            console.log(cantidadTipos);
            for(let i=0; i<cantidadTipos; i++) {
                console.log(art.tipo[i]);
                if(art.tipo[i] === divPadre.id) {
                    console.log(art.tipo[i] + " | " + divPadre.id);
                    return art.tipo[i] === divPadre.id;
                };
            }
        }
        return art.tipo === divPadre.id;
    });     // Por ejemplo al abrir bajos.html se crea un array con todos los bajos

    console.log(publicaciones);

    publicaciones.forEach(publi => {
        const nuevoElemento = document.createElement("DIV");

        nuevoElemento.setAttribute("class", "publicacion");
        nuevoElemento.setAttribute("id", publi.id);

        nuevoElemento.innerHTML = `
        <a class="producto__enlace" href="producto.html">
            <div class="producto__contenedor">
                <img src= ${publi.imagen} alt="Producto" class="producto__imagen">
                <div class="producto__datos">
                    <p class="producto__datos__precio">$${publi.precio}</p>
                    <p class="producto__datos__nombre">${publi.nombre}</p>
                    <button class="boton-verde submit-carrito">Agregar al Carrito</button>
                </div>
            </div>
        </a>
        `;

        divPadre.appendChild(nuevoElemento);
    });
}





















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