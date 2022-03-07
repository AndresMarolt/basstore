(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('nnPpPbFrfLhXUKKfs');
})();

window.onload = () => {
    const formulario = document.getElementById('contact-form');
    formulario.addEventListener('submit', () => {
        event.preventDefault();
        
        let nombre = document.forms["form"]["user_name"].value;
        let email = document.forms["form"]["user_email"].value;
        let tel = document.forms["form"]["user_phone"].value;
        let asunto = document.forms["form"]["subject"].value;
        let mensaje = document.forms["form"]["message"].value;

        console.log("Nombre: " + nombre);
        console.log("Email: " + email);
        console.log("Teléfono: " + tel);
        console.log("Asunto: " + asunto);
        console.log("Mensaje: " + mensaje);
        if(nombre == null || nombre == "" || email == null || email == "" || tel == "0" || tel == "" || asunto == "0" || mensaje == null || mensaje == "") {
            Swal.fire({
                title: "Atención",
                icon: "error",
                text: "Para enviar su consulta debe primero llenar todos los campos",
                timer: 4000
            })
            return
        } else {

            // generate a five digit number for the contact_number variable
            const id_cont = document.getElementById('nro_cont');
            id_cont.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('servicio_contacto', 'formulario_contacto', formulario)
                .then( () => {
                    console.log('SUCCESS!');
                }, error => {
                    console.log('FAILED...', error);
                });
            
            Swal.fire({
                title: "Listo!",
                icon: "success",
                text: "Email enviado correctamente. A la brevedad nos estaremos comunicando",
                timer: 4000
            })
        }


        
    });
}
const vaciarForm = document.querySelector(".botones .boton-rojo");

vaciarForm.addEventListener("click", () => {
    e.preventDefault();
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

