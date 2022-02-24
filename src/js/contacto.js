
const vaciarForm = document.querySelector(".botones .boton-rojo");
const enviarForm = document.querySelector(".botones .boton-verde");

vaciarForm.addEventListener("click", e => {
    e.preventDefault;
    Swal.fire({
        title: "Seguro que quiere vaciar todos los campos?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, estoy seguro",
        cancelButtonText: "No, no quiero vaciarlos"
    }) .then((resultado => {
        if(resultado.isConfirmed) {
            const nombre = document.querySelector("#nombre");
            const email = document.querySelector("#email");
            const telefono = document.querySelector("#telefono");
            const asunto = document.querySelector("#asunto");
            const mensaje = document.querySelector("#mensaje");
            const newsletter = document.querySelector("#newsletter");

            nombre.value = '';
            email.value = '';
            telefono.value = '';
            mensaje.value = '';
            asunto.selectedIndex = 0;
            newsletter.checked = false;
        }
    }))
})

