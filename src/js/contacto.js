(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('nnPpPbFrfLhXUKKfs');
})();

enviarMailContacto();
vaciarFormulario();
comprarGiftCard();
checkoutGiftcard();

function enviarMailContacto() {

    if(!document.getElementById('contact-form')) return;

    const formulario = document.getElementById('contact-form');
    formulario.addEventListener('submit', e => {
        e.preventDefault();
        
        let nombre = document.forms["form"]["user_name"].value;
        let email = document.forms["form"]["user_email"].value;
        let tel = document.forms["form"]["user_phone"].value;
        let asunto = document.forms["form"]["subject"].value;
        let mensaje = document.forms["form"]["message"].value;

        if(nombre == null || nombre == "" || email == null || email == "" || tel == null || tel == "" || asunto == "" || asunto == null || mensaje == null || mensaje == "") {
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
                    Swal.fire({
                        title: "Listo!",
                        icon: "success",
                        text: "Email enviado correctamente. A la brevedad nos estaremos comunicando",
                        timer: 4000
                    })
                }, error => {
                    console.log('FAILED...', error);
                });
            
            
        }


        
    });
}

function vaciarFormulario() {

    if(!document.querySelector(".botones .boton-rojo")) return;

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

}


function comprarGiftCard() {
    if(!document.querySelector(".giftcards")) return;

    let giftCards = document.querySelectorAll(".gift-card");

    giftCards.forEach(giftcard => {
        console.log(giftcard);

        let btnComprar = giftcard.querySelector(".boton-verde");

        console.log(btnComprar);

        btnComprar.addEventListener("click", e => {
            let padre = e.target.parentElement;
            let precio = parseInt(padre.querySelector(".gift-card__precio .valor").innerText);

            console.log(precio);

            localStorage.setItem("giftcard", precio);

            location.href = "../paginas/giftcard-checkout.html";
        })
    })
}

function checkoutGiftcard() {

    document.getElementById("giftcard-valor-p");
    if(!document.getElementById("giftcard-form")) return;
    
    let valorP = document.querySelector("#valor-p");
    valorP.innerHTML = 'Giftcard: $<span name="valor">' + localStorage.getItem("giftcard") + '</span>';

    let valorINPUT = document.getElementById("valor-input");
    valorINPUT.value = localStorage.getItem("giftcard");

    const form = document.getElementById("giftcard-form");
    form.addEventListener("submit", e => {

        e.preventDefault();

        let emisor = document.forms["giftcard-form"]["emisor"].value;
        let receptor = document.forms["giftcard-form"]["receptor"].value;
        let email = document.forms["giftcard-form"]["email"].value;
        
        if(emisor === "" || emisor === null || receptor === "" || receptor === null || email === "" || email === null) {
            Swal.fire({
                title: "Atención",
                icon: "error",
                text: "Debe llenar todos los campos",
                timer: 4000
            })
            return;
        } else {
            const codigo = document.getElementById('idcodigo');
            codigo.value = Math.random().toString(36).slice(2);

            console.log(codigo);


            emailjs.sendForm('servicio_giftcards', 'mensajeGiftcard', form)
                .then( () => {
                    Swal.fire({
                        title: "Listo!",
                        icon: "success",
                        text: "La persona a cuyo mail enviaste la giftcard recibirá el código en este momento",
                        timer: 4000
                    })
                }, error => {
                    console.log('FAILED...', error);
                });
            }

        
    })
}