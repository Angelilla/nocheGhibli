// SELECCIONO LOS INPUTS
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");

//SELECCIONO OTROS ELEMENTOS
let logInButton = document.getElementById("log-in-button");
let form = document.getElementsByClassName("signup-form")[0];
let formWrapper = document.getElementsByClassName("form-wrapper")[0];
let signUpButton = document.getElementsByClassName("button")[0];

let usersDB = JSON.parse(localStorage.getItem('users'))

signUpButton.addEventListener("click", function(event){
    //0)parar el efecto por default del botón
    event.preventDefault();
    //1) compruebe que los inputs son válidos
    //2) dependiendo de si son válidos o no, los guarda en la base de datos o da error
    
    deleteErrors();
    console.log("click")
    
    if (checkValidUser()){
        console.log("user registered")
        createUser(name.value, email.value, password.value)
        window.location.href="menu.html" //para hacer que al pulsar el boton te dirija al menu
    };
})

//CHECKEA QUE LOS DATOS DE LOS INPUTS SON CORRECTOS
function checkValidUser() {
    //creo una instancia de singupValidator 
    let signUpValidator = new SignUpValidator (name.value, email.value, password.value, repeatPassword.value);

    //console.log(signUpValidator)
    
    //let usersDB = JSON.parse(localStorage.getItem("users"));
    let validUser = true;
    //si pasa la comprobacion de checkName (que esta definida en validator.js) todo bien. Si no 
    //la pasa me crea el error y cambia valid user a false
    if(!signUpValidator.checkName()){
        signUpValidator.errorCreator("Por favor, introduce un nombre válido", name)
        validUser=false
    }
    
    if(!signUpValidator.checkEmail()){
        signUpValidator.errorCreator("Por favor, introduce una dirección de mail válida", email)
        validUser=false
    }
    
    if(!signUpValidator.checkPassword()){
        signUpValidator.errorCreator("Por favor, introduce una contraseña válida", password)
        validUser=false
    }
    if(!signUpValidator.checkRepeatPassword()){
        signUpValidator.errorCreator("Las contraseñas no coinciden", repeatPassword)
        validUser=false
    }
    
    if (!signUpValidator.checkEmailInDB(usersDB)){
        signUpValidator.errorCreator("Este mail ya existe", email)
        validUser=false
    }

    return validUser
}

function deleteErrors (){
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}

function createUser (name, email, password) {
    const newUser = new User (name, email, password)
    console.log(newUser)

    if (usersDB){
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
} 