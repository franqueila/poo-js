function signInForm() {
    document.getElementById("formTitle").innerText = "Iniciar Sesión";
    const authForm = document.getElementById("authForm");
    authForm.innerHTML = `
        <input type="email" class="form-control text-center mb-3" id="email" placeholder="Correo electrónico">
        <input type="password" class="form-control text-center mb-3" id="password" placeholder="Contraseña">
        <button class="btn btn-primary btn-block" type="submit" id="signInBtn">Enviar</button>
        <hr class="mb-3">
        <p class="text-body-secondary">¿Aun no estás registrado? <a href="#" id="questionBtn"><strong>Registrarse</strong></a></p>
    `;

    const questionBtn = document.getElementById("questionBtn");
    questionBtn.addEventListener("click", signUpForm);
}

function signUpForm() {
    document.getElementById("formTitle").innerText = "Registrarse";
    const authForm = document.getElementById("authForm");
    authForm.innerHTML = `
        <input type="text" class="form-control text-center mb-3" id="name" placeholder="Nombre">
        <input type="email" class="form-control text-center mb-3" id="email" placeholder="Correo electrónico">
        <input type="password" class="form-control text-center mb-3" id="password" placeholder="Contraseña">
        <button class="btn btn-primary btn-block" type="submit" id="signUpBtn">Enviar</button>
        <hr class="mb-3">
        <p class="text-body-secondary">¿Ya tienes una cuenta? <a href="#" id="questionBtn"><strong>Iniciar sesión</strong></a></p>
    `;

    const questionBtn = document.getElementById("questionBtn");
    questionBtn.addEventListener("click", signInForm);
}

signInForm();

/*
document.getElementById("signUpBtn").addEventListener("click", (e) => {
    e.preventDefault();
});

class Auth {
    constructor() {
        this.auth = firebase.auth();
    }
    login(email, password) {
        this.auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
            console.log("Logueado");
            window.location.href = "index.html";
        })
            .catch((error) => {
            console.log(error);
        });
    }
}
*/
/*class AuthForm {
    constructor() {
        this.authForm = document.getElementById("authForm");
        this.authForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const auth = new Auth();
            auth.login(email, password);
        });
    }
}
class Auth {
    constructor() {
        this.auth = firebase.auth();
    }
    login(email, password) {
        this.auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
            console.log("Logueado");
            window.location.href = "index.html";
        })
            .catch((error) => {
            console.log(error);
        });
    }
}
*/
