

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
    },
    {
        id: 37,
        tipo: "accesorios",
        nombre: "D'Addario EXL160BT (50-120)",
        precio: 4000,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/DAddario_EXL160BT_Balanced_Tension_(50-120).webp"
    },
    {
        id: 38,
        tipo: "accesorios",
        nombre: "Ernie Ball Slinky Round Wound",
        precio: 3500,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Ernie_Ball_2831_Slinky_Round_Wound.webp"
    },
    {
        id: 39,
        tipo: "accesorios",
        nombre: "Afinador clip Fender",
        precio: 2500,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Afinador_clip_Fender.webp"
    },
    {
        id: 40,
        tipo: "accesorios",
        nombre: "Cable 3 metros",
        precio: 3000,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/cable1.jpg"
    },
    {
        id: 41,
        tipo: "accesorios",
        nombre: "Cable 5 metros",
        precio: 4000,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/cable_5_metros.webp"
    },
    {
        id: 42,
        tipo: "accesorios",
        nombre: "Ernie Ball Regular Slinky Round Wound",
        precio: 3500,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Ernie_Ball_Regular_Slinky_Round_Wound.webp"
    },
    {
        id: 43,
        tipo: "accesorios",
        nombre: "Pie para Bajo",
        precio: 3000,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Pie_para_bajo.jpg"
    },
    {
        id: 44,
        tipo: "accesorios",
        nombre: "Fender Strap",
        precio: 5000,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Fender_strap.webp"
    },
    {
        id: 45,
        tipo: "accesorios",
        nombre: "Ernie Ball Strap",
        precio: 6000,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/ernie_ball_strap.webp"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    agregarProdsAlDOM();
    visualizarDetallesProd();
    
});

function agregarProdsAlDOM() {
    
    const divPadre = document.querySelector('.productos-todo');

    if(!divPadre) {
        return;
    }

    const publicaciones = articulosArray.filter(art => {
        
        if(typeof art.tipo === "object" ) {                 // En caso de que el producto tenga más de una categoría...
            for(let i=0; i<art.tipo.length; i++) {            // ... itera a través de todas ellas, ...
                if(art.tipo[i] === divPadre.id) {           // ... y si una de las categorías que tiene el producto es la misma categoría que la que se pretende mostrar en la página actual...
                   return art.tipo[i] === divPadre.id;     // ... añade el producto al nuevo array filtrado     
                };
                
            }
        }
        return art.tipo === divPadre.id;
    });     // Por ejemplo al abrir bajos.html se crea un array con todos los bajos

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
                    </div>
                </div>
            </a>
        `;

        divPadre.appendChild(nuevoElemento);
    });

    const productosDOM = document.querySelectorAll('.publicacion');     // productosDOM es un array de objetos (publicaciones)
    for(const p of productosDOM) {                                      // ... itera sobre el array de publicaciones...
        p.addEventListener('click', () => {                             // ... y queda a la espera de que se clickee alguna publicacion.
            localStorage.setItem('publicacionId', p.id);                // Cuando alguna es clickeada se guarda el id de la misma en localStorage
        })
    }

    ordenarProds(publicaciones);
}

function visualizarDetallesProd() {
    const prodSeleccionado = articulosArray.find(x => x.id === parseInt(localStorage.getItem('publicacionId')));
    const prodContenedor = document.querySelector('#contenedor-prod');

    if(!prodContenedor || !prodSeleccionado) {
        return;
    }

    prodContenedor.innerHTML = `
        <h1 class="producto__titulo" id="nombre">${prodSeleccionado.nombre}</h1>
        <div class="producto__data" id="prod-data">
            
            <img src=${prodSeleccionado.imagen} alt="producto" class="prod__imagen">
            <div class="prod" id="producto">
                <div class="prod__info" id="prod-info">
                    <p class="prod__info__precio" id="precio">$${prodSeleccionado.precio}</p>
                    <p class="prod__info__descripcion" id="descripcion">${prodSeleccionado.descripcion}</p>
                </div>

                <div class="prod__cantidad">
                    <label for="cantidad">Cantidad: </label>
                    <input type="number" value="1" id="cantidad" min="1">
                </div>

                <button type="submit" class="boton-verde" id="boton-carrito">Agregar al Carrito</button>
            </div>
            
        </div>
    `

    document.title = prodSeleccionado.nombre + " | Basstore";

    localStorage.setItem('productoEnPantalla', JSON.stringify(prodSeleccionado));
}

// *************************************************************************************************************

function ordenarProds(publicaciones) {
    /* document.addEventListener("click", x => console.log(x.target)); */

    // =================================== PRECIO ===========================================
    console.log("HOLA DESDE ordenarProds");
    filtroPrecio = document.querySelector("#ordenar-productos-precio");
    filtroPrecio.addEventListener("click", e => {
        if(filtroPrecio.value != 0) {
            ordenarPrecio(filtroPrecio.value, publicaciones);
        }
    })
    
}

function ordenarPrecio(elegido, arr) {
    console.log(arr);
    console.log("HICISTE CLICK");
    if(elegido === "1") {
        arr.sort( (a, b) => (a.precio > b.precio) ? 1 : -1);                    // Ordena de mayor a menor

        const divPadre = document.querySelector('.productos-todo');             // Selecciona al div padre en el DOM
        publicaciones.forEach(publi => {                                        // Itera por cada publicacion ya ordenada e imprime en el DOM
            const nuevoElemento = document.createElement("DIV");                    // <div class="publicacion" id=publi.id> </div>

            nuevoElemento.setAttribute("class", "publicacion");
            nuevoElemento.setAttribute("id", publi.id);

            nuevoElemento.innerHTML = `
                <a class="producto__enlace" href="producto.html">
                    <div class="producto__contenedor">
                        <img src= ${publi.imagen} alt="Producto" class="producto__imagen">
                        <div class="producto__datos">
                            <p class="producto__datos__precio">$${publi.precio}</p>
                            <p class="producto__datos__nombre">${publi.nombre}</p>
                        </div>
                    </div>
                </a>
            `;

            divPadre.appendChild(nuevoElemento);
        }
    )}
}