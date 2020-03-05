
//0)vincular el js al html
//1)seleccionar los inputs
//2)añadir el evento click al boton con una funcion
//3)esta fincion debe tener el prevent default
//4)la funcion debe validar los inputs y comprobarlos con los de la base de datos

let name = document.getElementById("name");
let password = document.getElementById("password");

let logInButton = document.getElementById("log-in-button");
let form = document.getElementById('login-form');
let formWrapper = document.getElementsByClassName("form-wrapper")[0];

let usersDB = JSON.parse(localStorage.getItem('users'))

logInButton.addEventListener("click", function(event){
    event.preventDefault()
    //window.location.href="menu.html"
    if (checkValidUser()){
        
        console.log("valid user")
        
        window.location.href="menu.html" //para hacer que al pulsar el boton te dirija al menu
    };

})

function checkValidUser(){
    
    let validUser = true

    let loginValidator = new LogInValidator(name.value, '', password.value)
    
    let usersDB = JSON.parse(localStorage.getItem("users"))
    

    if (loginValidator.checkNameAndPasswordInDB(usersDB)){
        
        
       
        validUser = true
    } else {
        
        loginValidator.errorCreator("Por favor, introduce un nombre y una contraseña válidos.", name)
        //loginValidator.errorCreator("Por favor, introduce un nombre válido y una contraseña válidos", password)
        validUser = false
    }
    
    return validUser
}


