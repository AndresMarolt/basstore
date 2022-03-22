signup();
login();


function signup() {
    
    if(!document.querySelector("#boton-crear")) return;

    const btnCrearCuenta = document.querySelector("#boton-crear");

    btnCrearCuenta.addEventListener("click", e => {
        e.preventDefault();

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        let nombre_signup = document.forms["signup-form"]["nombre"].value;
        let apellido_signup = document.forms["signup-form"]["apellido"].value;
        let email_signup = document.forms["signup-form"]["email"].value;
        let pass_signup = document.forms["signup-form"]["password"].value;

        if(nombre_signup === null || nombre_signup === "" || apellido_signup === null || apellido_signup === "" || email_signup === null || email_signup === "" || pass_signup === null || pass_signup === "") {
            Swal.fire({
                title: "Atención",
                icon: "error",
                text: "No puede dejar campos vacíos",
                timer: 4000
            })
            return
        } else {
            let nuevousuario = {
                nombre: nombre_signup,
                apellido: apellido_signup,
                email: email_signup,
                password: pass_signup
            }

            if(usuarios.find(x => x.email === nuevousuario.email)) {
                Swal.fire({
                    title: "Atención",
                    icon: "error",
                    text: "Ya existe una cuenta asociada con la casilla de email ingresada",
                    timer: 4000
                })
                return
            } else {
                usuarios.push(nuevousuario);
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                Swal.fire({
                    title: "¡Bien!",
                    icon: "success",
                    text: "Tu cuenta fue creada exitosamente",
                    timer: 4000
                })
            }
        }
    })
}

function login() {

    if(!document.querySelector("#boton-login")) return;
    const btnLogin = document.querySelector("#boton-login");

    btnLogin.addEventListener("click", e => {
        e.preventDefault(); 
        
        let email_login = document.forms["login-form"]["email"].value;
        let password_login = document.forms["login-form"]["password"].value;
        
        if(email_login === null || email_login === "" || password_login === null || password_login === "") {
            Swal.fire({
                title: "Atención",
                icon: "error",
                text: "No puede dejar campos vacíos",
                timer: 4000
            })
            return
        } else {
            let usuariosExistentes = JSON.parse(localStorage.getItem('usuarios'));
            let usuarioIngresado = null;

            if(usuariosExistentes) {
                usuarioIngresado = usuariosExistentes.find(x => x.email === email_login);
            } 

            console.log(usuarioIngresado);

            if(!usuarioIngresado) {
                Swal.fire({
                    title: "Atención",
                    icon: "error",
                    html: 'No existe una cuenta asociada a esa casilla de email. Le sugerimos crearse una cuenta <a href="../../paginas/signup.html">aquí</a>',
                    timer: 4000
                })
                return;
            } else if (usuarioIngresado.password !== password_login) {
                Swal.fire({
                    title: "Atención",
                    icon: "error",
                    text: "La contraseña es incorrecta",
                    timer: 4000
                })
                return;
            } else {
                Swal.fire({
                    title: "¡Bien!",
                    icon: "success",
                    text: "Ingresaste a tu cuenta correctamente",
                    timer: 4000
                })
            }
        }

    })
}



