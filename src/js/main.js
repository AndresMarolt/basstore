

const articulosArray = [
    {
        id: 1,
        categoria: "bajos",
        marca: "Fender",
        modelo: "American Standard Jazz Bass(2008)",
        precio: 350000,
        tipo: 1,
        descripcion: "Bajo Jazz Bass de 4 cuerdas made in USA, con cuerpo de fresno, mastil de palorrosa y diapasón de arce. Micrófonos DiMarzio DP149 Ultra Jazz y clavijas Hipshot.",
        imagen: "../src/img/bajos/destacado1.jpg"
    },
    {
        id: 2,
        categoria: "bajos",
        marca: "Eastwood",
        modelo: "Classic Fretless Bass",
        precio: 70000,
        tipo: 4,
        descripcion: "Bajo 4 cuerdas",
        imagen: "../src/img/bajos/eastwood_classic_fretless.jpg" 
    },
    {
        id: 3,
        categoria: ["bajos", "ofertas"],
        marca: "F Bass",
        modelo: "AC5 Violin Burst",
        precio: 500000,
        tipo: 2,
        descripcion: "F Bass 5 cuerdas",
        imagen: "../src/img/bajos/destacado3.jpg"
    },
    {
        id: 4,
        categoria: ["bajos", "ofertas"],
        marca: "Warwick",
        modelo: "Rockbass Corvette 5",
        precio: 80000,
        tipo: 2,
        descripcion: "Bajo 5 cuerdas",
        imagen: "../src/img/bajos/destacado4.jpg"
    },
    {
        id: 5,
        categoria: "bajos",
        marca: "Fender",
        modelo: "Player JB",
        precio: 120000,
        tipo: 1,
        descripcion: "Jazz Bass con cuerpo de aliso, diapasón de palorrosa y dos micrófonos Player Series de bobina simple",
        imagen: "../src/img/bajos/fender_player_jb.jpg"
    },
    {
        id: 6,
        categoria: "bajos",
        marca: "Ernie Ball Musicman",
        modelo: "Stingray 5",
        precio: 320000,
        tipo: 2,
        descripcion: "Mics hambuckers de alnico, previo activo con ecualizador de 3 bandas y cejuela compensada.",
        imagen: "../src/img/bajos/destacado6.jpg"
    },
    {
        id: 7,
        categoria: ["bajos", "ofertas"],
        marca: "NS",
        modelo: "Design WAV4c",
        precio: 30000,
        tipo: 1,
        descripcion: "Bajo 4 cuerdas",
        imagen: "../src/img/bajos/NS_Design_WAV4c.jpg"
    },
    {
        id: 8,
        categoria: ["bajos", "ofertas"],
        marca: "Sire",
        modelo: "Marcus Miller V5 (Zurdo)",
        precio: 95000,
        tipo: 2,
        descripcion: "Jazz Bass 4 cuerdas zurdo",
        imagen: "../src/img/bajos/sire_marcus_miller.jpg"
    },
    {
        id: 9,
        categoria: ["bajos", "ofertas"],
        marca: "Squier",
        modelo: "Classic Vibe 60s JB",
        precio: 350000,
        tipo: 1,
        descripcion: "Jazz Bass inspirado en modelos Jazz Bass de los años 60. Cuerpo de álamo con acabado de poliuretano y diapasón de palorrosa",
        imagen: "../src/img/bajos/squier_classic_vibe_60s_jb.jpg"
    },
    {
        id: 10,
        categoria: "amplificadores",
        marca: "Fender",
        modelo: "Rumble 15 1x8 15W",
        precio: 30000,
        tipo: 1,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Fender_Rumble_15_1x8_15W.jpg"
    },
    {
        id: 11,
        categoria: ["amplificadores", "ofertas"],
        marca: "Warwick",
        modelo: "Sweet 15",
        precio: 70000,
        tipo: 1,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/destacado2.jpg"
    },
    {
        id: 12,
        categoria: "amplificadores",
        marca: "Orange",
        modelo: "Crush Bass 50W 1x12",
        precio: 60000,
        tipo: 1,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Orange_Crush_Bass_50W_1x12.webp"
    },
    {
        id: 13,
        categoria: ["amplificadores", "ofertas"],
        marca: "MarkBass",
        modelo: "Mini CMD 121P 1x12",
        precio: 130000,
        tipo: 6,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Markbass_Mini_CMD_121P_1x12.webp"
    },
    {
        id: 14,
        categoria: ["amplificadores", "ofertas", "nuevos"],
        marca: "GR",
        modelo: "Mini One",
        precio: 120000,
        tipo: 5,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/destacado5.jpg"
    },
    {
        id: 15,
        categoria: "amplificadores",
        marca: "MarkBass",
        modelo: "CMD Ninja 102P",
        precio: 320000,
        tipo: 8,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Markbass_CMD_Ninja_102P.webp"
    },
    {
        id: 16,
        categoria: ["amplificadores", "nuevos"],
        marca: "Acoustic",
        modelo: "B100C 1X12 100W",
        precio: 30000,
        tipo: 2,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/Acoustic_B100C_1X12_100W.webp"
    },
    {
        id: 17,
        categoria: ["amplificadores", "nuevos"],
        marca: "Acus",
        modelo: "OneforBass Black",
        precio: 95000,
        tipo: 1,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/amplificador2.jpg"
    },
    {
        id: 18,
        categoria: "amplificadores",
        marca: "Epifani",
        modelo: "UL502",
        precio: 350000,
        tipo: 5,
        descripcion: "Amplificador",
        imagen: "../src/img/amplificadores/cabezal.jpg"
    },
    {
        id: 19,
        categoria: ["studio", "nuevos"],
        marca: "Empire Ears",
        modelo: "Odin",
        precio: 120000,
        tipo: 1,
        descripcion: "Studio",
        imagen: "../src/img/studio/Empire_Ears_Odin.jpg"
    },
    {
        id: 20,
        categoria: ["studio", "nuevos", "masvendidos"],
        marca: "Symphonium",
        modelo: "Helios",
        precio: 70000,
        tipo: 1,
        descripcion: "Studio",
        imagen: "../src/img/studio/Symphonium_Helios_in_Ear.jpg"
    },
    {
        id: 21,
        categoria: ["studio", "ofertas", "nuevos"],
        marca: "Audient",
        modelo: "iD4 MkII",
        precio: 200000,
        tipo: 2,
        descripcion: "Studio",
        imagen: "../src/img/studio/Audient_id4.webp" 
    },
    {
        id: 22,
        categoria: ["studio", "masvendidos"],
        marca: "Sennheiser",
        modelo: "HD 800s",
        precio: 80000,
        tipo: 1,
        descripcion: "Studio",
        imagen: "../src/img/studio/Sennheiser_hd_800s.png"
    },
    {
        id: 23,
        categoria: ["studio", "masvendidos"],
        marca: "SSL 2+",
        modelo: "audio interface",
        precio: 60000,
        tipo: 2,
        descripcion: "Studio",
        imagen: "../src/img/studio/SSL2+audio_interface.webp"
    },
    {
        id: 24,
        categoria: "studio",
        marca: "Audeze",
        modelo: "Mobius Wireless",
        precio: 85000,
        tipo: 1,
        descripcion: "Studio",
        imagen: "../src/img/studio/Audeze_Mobius_Wireless.jpg"
    },
    {
        id: 25,
        categoria: ["studio", "masvendidos"],
        marca: "Audeze",
        modelo: "LCD-2 Classic Planar",
        precio: 50000,
        tipo: 1,
        descripcion: "Studio",
        imagen: "../src/img/studio/Audeze_LCD-2_Classic_Planar.jpg"
    },
    {
        id: 26,
        categoria: ["studio", "masvendidos"],
        marca: "Empire Ears",
        modelo: "Valkyrie MK II",
        precio: 200000,
        tipo: 1,
        descripcion: "Studio",
        imagen: "../src/img/studio/Empire_Ears_Valkyrie_MK_II.png"
    },
    {
        id: 27,
        categoria: "studio",
        marca: "64 Audio",
        modelo: "U18S In-Ear Monitor",
        precio: 350000,
        tipo: 1,
        descripcion: "Studio",
        imagen: "../src/img/studio/64_Audio_U18S_In-Ear_Monitor.jpg"
    },
    {
        id: 28,
        categoria: "pedales",
        marca: "EBS",
        modelo: "Bass IQ Envelope Filter",
        precio: 45000,
        tipo: 7,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/EBS_BassIQ.jpg"
    },
    {
        id: 29,
        categoria: ["pedales", "masvendidos"],
        marca: "MXR",
        modelo: "M288 Bass Octave Deluxe",
        precio: 70000,
        tipo: 8,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/MXR_M288_Bass_Octave_Deluxe.jpg"
    },
    {
        id: 30,
        categoria: "pedales",
        marca: "MXR",
        modelo: "M82 Bass Filter Envelope",
        precio: 500000,
        tipo: 7,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/MXR_M82_Bass_Filter_Envelope.jpg"
    },
    {
        id: 31,
        categoria: ["pedales", "nuevos"],
        marca: "Boss",
        modelo: "DD-7 Digital Delay",
        precio: 80000,
        tipo: 5,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Boss_DD-7.jpg"
    },
    {
        id: 32,
        categoria: ["pedales", "nuevos"],
        marca: "Boss",
        modelo: "PS-6 Harmonist",
        precio: 40000,
        tipo: 9,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Boss_PS-6_Harmonist.jpg"
    },
    {
        id: 33,
        categoria: ["pedales", "nuevos", "masvendidos"],
        marca: "Electro Harmonix",
        modelo: "Freeze",
        precio: 320000,
        tipo: 10,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Electro_Harmonix_Freeze.jpg"
    },
    {
        id: 34,
        categoria: ["pedales", "masvendidos"],
        marca: "Boss",
        modelo: "TR-2 Tremolo",
        precio: 30000,
        tipo: 3,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Boss_TR-2_Tremolo.jpg"
    },
    {
        id: 35,
        categoria: ["pedales", "masvendidos"],
        marca: "Electro Harmonix",
        modelo: "Nano Battalion",
        precio: 45000,
        tipo: 1,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/Electro_Harmonix_Nano_Battalion.jpg"
    },
    {
        id: 36,
        categoria: "pedales",
        marca: "Fender",
        modelo: "The Bends",
        precio: 30000,
        tipo: 2,
        descripcion: "Pedal",
        imagen: "../src/img/pedales/FENDER_The_Bends.jpg"
    },
    {
        id: 37,
        categoria: "accesorios",
        marca: "D'Addario",
        modelo: "EXL160BT (50-120)",
        precio: 4000,
        tipo: 1,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/DAddario_EXL160BT_Balanced_Tension_(50-120).webp"
    },
    {
        id: 38,
        categoria: "accesorios",
        marca: "Ernie Ball",
        modelo: "Slinky Round Wound",
        precio: 3500,
        tipo: 1,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Ernie_Ball_2831_Slinky_Round_Wound.webp"
    },
    {
        id: 39,
        categoria: "accesorios",
        marca: "Fender",
        modelo: "Clip Tuner",
        precio: 2500,
        tipo: 2,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Afinador_clip_Fender.webp"
    },
    {
        id: 40,
        categoria: "accesorios",
        marca: "Kirlin",
        modelo: "Cable 3 metros",
        precio: 3000,
        tipo: 5,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/cable1.jpg"
    },
    {
        id: 41,
        categoria: "accesorios",
        marca: "Kirlin",
        modelo: "Cable 5 metros",
        precio: 4000,
        tipo: 5,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/cable_5_metros.webp"
    },
    {
        id: 42,
        categoria: "accesorios",
        marca: "Ernie Ball",
        modelo: "Regular Slinky Round Wound",
        precio: 3500,
        tipo: 1,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Ernie_Ball_Regular_Slinky_Round_Wound.webp"
    },
    {
        id: 43,
        categoria: "accesorios",
        marca: "Fender",
        modelo: "Bass Guitar Stand",
        precio: 3000,
        tipo: 4,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Pie_para_bajo.jpg"
    },
    {
        id: 44,
        categoria: "accesorios",
        marca: "Fender",
        modelo: "Strap",
        precio: 5000,
        tipo: 3,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/Fender_strap.webp"
    },
    {
        id: 45,
        categoria: "accesorios",
        marca: "Ernie Ball",
        modelo: "Strap",
        precio: 6000,
        tipo: 3,
        descripcion: "Accesorio",
        imagen: "../src/img/accesorios/ernie_ball_strap.webp"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    agregarProdsAlDOM();
    visualizarDetallesProd();
});


function imprimirPublicacionesEnDOM( {imagen, precio, marca, modelo, id}) {

    const divPadre = document.querySelector('.productos-todo');
    const nuevoElemento = document.createElement("DIV");

    nuevoElemento.setAttribute("class", "publicacion");
    nuevoElemento.setAttribute("id", id);

    nuevoElemento.innerHTML = `
        <a class="producto__enlace" href="producto.html">
            <div class="producto__contenedor">
                <img src= ${imagen} alt="Producto" class="producto__imagen">
                <div class="producto__datos">
                    <p class="producto__datos__precio">$${precio}</p>
                    <p class="producto__datos__nombre">${marca} ${modelo}</p>
                </div>
            </div>
        </a>
    `;

    divPadre.appendChild(nuevoElemento);
}

function cargarIDenLocalStorage() {
    
    console.log("HI");
    const productosDOM = document.querySelectorAll('.publicacion');     // productosDOM es un array de objetos (publicaciones)
    for(const p of productosDOM) {                                      // ... itera sobre el array de publicaciones...
        p.addEventListener('click', () => {                             // ... y queda a la espera de que se clickee alguna publicacion.
            localStorage.setItem('publicacionId', p.id);                // Cuando alguna es clickeada se guarda el id de la misma en localStorage
        })
    }
}

function agregarProdsAlDOM() {
    
    const divPadre = document.querySelector('.productos-todo');

    if(!divPadre) {
        return;
    }

    const publicaciones = articulosArray.filter(art => {
        
        const {categoria} = art;
        if(typeof categoria === "object" ) {                 // En caso de que el producto tenga más de una categoría...
            for(let i=0;  i < categoria.length; i++) {            // ... itera a través de todas ellas, ...
                if(categoria[i] === divPadre.id) {           // ... y si una de las categorías que tiene el producto es la misma categoría que la que se pretende mostrar en la página actual...
                   return categoria[i] === divPadre.id;     // ... añade el producto al nuevo array filtrado     
                };
            }
        }
        return categoria === divPadre.id;
    });     // Por ejemplo al abrir bajos.html se crea un array con todos los bajos

    publicaciones.forEach(publi => {
        imprimirPublicacionesEnDOM(publi);
    });

    cargarIDenLocalStorage();

    ordenarProds(publicaciones);
}

function visualizarDetallesProd() {
    const prodSeleccionado = articulosArray.find(x => x.id === parseInt(localStorage.getItem('publicacionId')));
    const prodContenedor = document.querySelector('#contenedor-prod');

    if(!prodContenedor || !prodSeleccionado) {
        return;
    }

    const {marca, modelo, imagen, precio, descripcion} = prodSeleccionado;

    prodContenedor.innerHTML = `
        <h1 class="producto__titulo" id="nombre">${marca} ${modelo}</h1>
        <div class="producto__data" id="prod-data">
            
            <img src=${imagen} alt="producto" class="prod__imagen">
            <div class="prod" id="producto">
                <div class="prod__info" id="prod-info">
                    <p class="prod__info__precio" id="precio">$${precio}</p>
                    <p class="prod__info__descripcion" id="descripcion">${descripcion}</p>
                </div>

                <div class="prod__cantidad">
                    <label for="cantidad">Cantidad: </label>
                    <input type="number" value="1" id="cantidad" min="1">
                </div>

                <button type="submit" class="boton-verde" id="boton-carrito">Agregar al Carrito</button>
            </div>
            
        </div>
    `

    document.title = prodSeleccionado.marca + prodSeleccionado.modelo + " | Basstore";

    localStorage.setItem('productoEnPantalla', JSON.stringify(prodSeleccionado));
}

// *************************************************************************************************************

function ordenarProds(publicaciones) {
    /* document.addEventListener("click", x => console.log(x.target)); */

    // =================================== PRECIO ===========================================
    // console.log("HOLA DESDE ordenarProds");
    let filtroPrecio = document.querySelector("#ordenar-productos-precio");
    filtroPrecio.addEventListener("click", () => {
        if(filtroPrecio.value !=0) { ordenarPrecio(filtroPrecio.value, publicaciones)};
    })

    // =================================== TIPO ===========================================
    let filtroTipo = document.querySelector('#ordenar-productos-tipo');
    filtroTipo.addEventListener("click", () => {
        if(filtroTipo.value !=0) { ordenarTipo(filtroTipo.value, publicaciones)};
    })

    // =================================== MARCA ===========================================
    let filtroMarca = document.querySelector('#ordenar-productos-marca');
    filtroMarca.addEventListener("click", e => {
        if(filtroMarca.value !=0) { ordenarMarca(filtroMarca.value, publicaciones)};
    })
}

function ordenarPrecio(elegido, arr) {

    if(elegido === "1") {
        arr.sort( (a, b) => (a.precio < b.precio) ? 1 : -1);
    } else if(elegido === "2") {
        arr.sort( (a, b) => (a.precio > b.precio) ? 1 : -1);                    // Ordena de mayor a menor
    }

    const divPadre = document.querySelector('.productos-todo');             // Selecciona al div padre en el DOM
    divPadre.innerHTML = '';
    arr.forEach(publi => {                                        // Itera por cada publicacion ya ordenada e imprime en el DOM
        imprimirPublicacionesEnDOM(publi);
    })

    cargarIDenLocalStorage();
}

function ordenarTipo(elegido, arr) {

    let elegidoInt = parseInt(elegido);
    const divPadre = document.querySelector('.productos-todo');

    for(let i=1; i<15; i++) {
        if(elegidoInt === i) {
            let arrayFiltrado = arr.filter(articulo => {
                return articulo.tipo === i;
            })

            if(arrayFiltrado.length === 0) {
                divPadre.innerHTML = '';
                const nuevoElemento = document.createElement("DIV");
                nuevoElemento.innerText = "No se encontraron resultados para su búsqueda";
                divPadre.appendChild(nuevoElemento);
                return;
            }
            
            divPadre.innerHTML = '';
            arrayFiltrado.forEach(producto => { imprimirPublicacionesEnDOM(producto) } );
        }
    }

    cargarIDenLocalStorage();
}

function ordenarMarca(elegido, arr) {
    let selectores = document.querySelectorAll("#ordenar-productos-marca option");
    const divPadre = document.querySelector('.productos-todo');

    selectores.forEach(sel => {
        const {value, outerText} = sel;
        if(value === elegido) {
            let arrayFiltrado = arr.filter(articulo => {
                let {marca} = articulo;
                return marca === outerText;
            })

            if(arrayFiltrado.length === 0) {
                divPadre.innerHTML = '';
                const nuevoElemento = document.createElement("DIV");
                nuevoElemento.innerText = "No se encontraron resultados para su búsqueda";
                divPadre.appendChild(nuevoElemento);
                return;
            }
    
            divPadre.innerHTML = '';
            arrayFiltrado.forEach(producto => { imprimirPublicacionesEnDOM(producto) } );
            return;
        } 
    })
    cargarIDenLocalStorage();
}

