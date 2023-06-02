const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
console / log(supabase);

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
    questionBtn.addEventListener("click", function (e) {
        e.preventDefault();
        signUpForm();
    });
}

function signUpForm() {
    document.getElementById("formTitle").innerText = "Registrarse";
    const authForm = document.getElementById("authForm");
    authForm.innerHTML = `
        <input type="email" class="form-control text-center mb-3" id="email" placeholder="Correo electrónico">
        <input type="password" class="form-control text-center mb-3" id="password" placeholder="Contraseña">
        <input type="password" class="form-control text-center mb-3" id="passwordConfirm" placeholder="Confirmar contraseña">
        <button class="btn btn-primary btn-block" type="submit" id="signUpBtn">Enviar</button>
        <hr class="mb-3">
        <p class="text-body-secondary">¿Ya tienes una cuenta? <a href="#" id="questionBtn"><strong>Iniciar sesión</strong></a></p>
    `;

    const questionBtn = document.getElementById("questionBtn");
    questionBtn.addEventListener("click", function (e) {
        e.preventDefault();
        signInForm();
    });
}

signInForm();

document.getElementById("authForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.submitter.id === "signInBtn") {
        signIn();
    } else if (e.submitter.id === "signUpBtn") {
        signUp();
    }
});

function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;

    if (email === "" || password === "" || passwordConfirm === "") {
        console.log("Campos vacíos");
        return;
    }

    if (password === passwordConfirm) {
        //Registrarse con supabase
    } else {
        console.log("Contraseñas no coinciden");
    }
}

function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        console.log("Campos vacíos");
        return;
    }
    //logease con supabase
}
