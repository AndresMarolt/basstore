
// // ====== SET INTERVAL Y SET TIMOUT ===========

console.log("Hola");

const cuentaRegresiva = setTimeout( () => {
    console.log("Esto no se va a imprimir en consola");
}, 5000);
clearTimeout(cuentaRegresiva);


setTimeout( () => {
    console.log("Funcion asincronica");
}, 5000);


let i = 0;
const intervalo = setInterval( () => {
    console.log("Contador: ", i);
    i++;
    if(i > 10) {
        clearInterval(intervalo);
        console.log("Intervalo removido");
    }
}, 1000);

console.log("Mundo");

// ======= PROMISES =======


const eventoFuturo = res => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            res ? resolve("Promesa resuelta") : reject("Promesa rechazada")
        }, 2000);
    })
}



eventoFuturo(true)              // Se llama a la funcion mandandole el argumento con el que trabajará
    .then( (response) => {        // Si la promesa fue resuelta se entrará al then, que recibirá la respuesta
        console.log(response);  // Se imprimirá esa respuesta
    })
    .catch( (error) => {          // En este caso es lo mismo solo que en el caso de que la promesa se rechace
        console.log(error);
    })
    .finally( () => {
        console.log("Fin del proceso");
    })




// EJEMPLO
// Funcion que tras 3 segundos retorna un array de objetos

const BBDD = [
        {id: 1, nombre: "Producto 1", precio: 1500}, 
        {id: 2, nombre: "Producto 2", precio: 2500}, 
        {id: 3, nombre: "Producto 3", precio: 3500}, 
        {id: 4, nombre: "Producto 4", precio: 3500}, 
]

const pedirProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(BBDD);      // Se retorna la BBDD después de 3 segundos
        }, 3000);
    })
}


let productos = [];

const renderProductos = arr => {
    console.log(arr);
}

// Asincrónicamente pedimos los datos y generamos la vista:
pedirProductos()
    .then( res => {
        productos = res;
        renderProductos(productos);
    })



// ========================== FETCH ================================

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(respuesta => respuesta.json() )
    .then(data => console.log(data[0].title));

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({title: 'Coderhouse', body: 'Post de prueba', userId: 1,}),
    headers: {'Content-type': 'application/json; charset=UTF-8',},
})
    .then(response => response.json())
    .then(json => console.log(json));


    
const pedirPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await resp.json();

    data.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>    
        `
        sadasd.appendchild(li);
    });
}

pedirPosts();