document.addEventListener('DOMContentLoaded', () => {
    agregarProdsAlDOM();
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
    const productosDOM = document.querySelectorAll('.publicacion');     // productosDOM es un array de objetos (publicaciones)
    for(const p of productosDOM) {                                      // ... itera sobre el array de publicaciones...
        p.addEventListener('mouseup', () => {                           // ... y queda a la espera de que se clickee alguna publicacion.
            localStorage.setItem('publicacionId', p.id);                // Cuando alguna es clickeada se guarda el id de la misma en localStorage
        })
    }
}

async function agregarProdsAlDOM() {
    
    const resp = await fetch('../data.json');
    const articulosArray = await resp.json();
    const divPadre = document.querySelector('.productos-todo');
    const publicaciones = articulosArray.filter(art => {  
        const {categoria} = art;
        if(typeof categoria === "object" ) {                 // En caso de que el producto tenga más de una categoría...
            for(let i=0;  i < categoria.length; i++) {       // ... itera a través de todas ellas, ...
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

async function visualizarDetallesProd() {
    
    const resp = await fetch('../data.json');
    const articulosArray = await resp.json();    
    const prodSeleccionado = articulosArray.find(x => x.id === parseInt(localStorage.getItem('publicacionId')));
    const prodContenedor = document.querySelector('#contenedor-prod');

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
    // =================================== PRECIO ===========================================
    let filtroPrecio = document.querySelector("#ordenar-productos-precio");
    filtroPrecio.addEventListener("change", () => {
        if(filtroPrecio.value !=0) { ordenarPrecio(filtroPrecio.value, publicaciones)};
    })

    // =================================== TIPO ===========================================
    let filtroTipo = document.querySelector('#ordenar-productos-tipo');
    filtroTipo.addEventListener("change", () => {
        if(filtroTipo.value !=0) { ordenarTipo(filtroTipo.value, publicaciones)};
    })

    // =================================== MARCA ===========================================
    let filtroMarca = document.querySelector('#ordenar-productos-marca');
    filtroMarca.addEventListener("change", () => {
        if(filtroMarca.value !=0) { ordenarMarca(filtroMarca.value, publicaciones)};
    })
}

function ordenarPrecio(elegido, arr) {
    let ordMarca = document.getElementById("ordenar-productos-marca");
    let ordTipo = document.getElementById("ordenar-productos-tipo");
    ordMarca.value = 0;
    ordTipo.value = 0;

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

    let ordPrecio = document.getElementById("ordenar-productos-precio");
    let ordMarca = document.getElementById("ordenar-productos-marca");
    ordPrecio.value = 0;
    ordMarca.value = 0;


    let selectores = document.querySelectorAll("#ordenar-productos-tipo option");
    const divPadre = document.querySelector('.productos-todo');

    selectores.forEach(sel => {                                     // Itera por cada selector
        const {value, outerText} = sel;                             // A cada selector se le lee el valor y el texto
        if(value === elegido) {                                     // Cuando encuentre el selector cuyo valor coincida con el del selector clickeado
            let arrayFiltrado = arr.filter(articulo => {            // Se crea un array filtrado
                let {tipo} = articulo;
                // asdadasd
                if(typeof tipo === "object" ) {                 // En caso de que el producto tenga más de una categoría...
                    console.log(tipo);
                    for(let i=0;  i < tipo.length; i++) {       // ... itera a través de todas ellas, ...
                        if(tipo[i] === outerText.toLowerCase()) {           // ... y si una de las categorías que tiene el producto es la misma categoría que la que se pretende mostrar en la página actual...
                           return tipo[i] === outerText.toLowerCase();     // ... añade el producto al nuevo array filtrado     
                        };
                    }
                }
                return tipo === outerText.toLowerCase();
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

function ordenarMarca(elegido, arr) {
    let ordPrecio = document.getElementById("ordenar-productos-precio");
    let ordTipo = document.getElementById("ordenar-productos-tipo");
    ordPrecio.value = 0;
    ordTipo.value = 0;

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


// *************************************************************************************************************

