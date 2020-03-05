"use strict"

class Validator{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    checkName(){
        return this.name ? true : false;
    }
    checkEmail(){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email) ? true : false;
    }
    checkPassword(){
        if (!this.password){
            return false
        } else if (this.password.length < 6){
            return false
        } else {
            return true;
        }
    }
    errorCreator(message, location){
        let div = document.createElement("div");
        div.setAttribute("class","error");
        div.innerHTML = message;
        form.insertBefore(div,location);
    }
    deleteError(){
        let errors = [...document.getElementsByClassName("error")];
        return errors ? errors.forEach(error => error.remove) : null;
    }
}

class SignUpValidator extends Validator{
    constructor(name, email, password, repeatPassword){
        super (name, email, password);
        this.repeatPassword = repeatPassword;
    }
    checkEmailInDB(usersDB){
        //console.log(usersDB)
        let mailExists = true; 
        if (!usersDB){
            //console.log('not users db')
            mailExists = true;
        } else {
            //console.log('entra en el foreach')
            usersDB.forEach(user => {
                if (user.email === this.email){
                    //console.log('emails son iguales')
                    mailExists = false;
                } 
            })
        }
        return mailExists;
    }
    checkRepeatPassword(){
        return this.password === this.repeatPassword ? true : false;
    }
}

class LogInValidator extends Validator {
    constructor (name, email, password){
        super(name, email, password);
    }
    checkNameAndPasswordInDB(usersDB){
        let answer = false;
        if (!usersDB){
            return false
        }
        console.log(this.name)
        console.log(this.password)
        usersDB.forEach(user=>{
            if (this.name === user.name && this.password === user.password){
                answer = true
            }
        })

        return answer
    }
    
}


