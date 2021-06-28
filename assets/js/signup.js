function myFunction() {
    var x = document.getElementById('password');
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('hide').style.display = "inline-block";
        document.getElementById('show').style.display = "none";
    }
    else {
        x.type = "password";
        document.getElementById('hide').style.display = "none";
        document.getElementById('show').style.display = "inline-block";
    }
}

function validate() {
    var x = document.getElementById('confirmpassword');
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('close').style.display = "inline-block";
        document.getElementById('open').style.display = "none";
    }
    else {
        x.type = "password";
        document.getElementById('close').style.display = "none";
        document.getElementById('open').style.display = "inline-block";
    }
}

function checkInputs() {
    //Firstname
    if(firstname.value.trim()===""){
        onError (firstname, "Firstname cannot be empty")
    }

    else {
        onSuccess (firstname)
    }

    //Laastname
    if(lastname.value.trim()===""){
        onError (lastname, "Lastname cannot be empty")
    }

    else {
        onSuccess (lastname)
    }

    //Email
    if(email.value.trim()===""){
        onError (email, "Email cannot be empty")
    }

    else if (isEmail(email.value.trim())){
        onError (email, "Email is not valid")
    }

    else {
        onSuccess (firstname)
    }

    //Password
    if(password.value.trim()===""){
        onError (password, "Password cannot be empty")
    }

    else {
        onSuccess (password)
    }

    //Confirm Password
    if(confirmpassword.value.trim()===""){
        onError (confirmpassword, "Password cannot be empty")
    }

    else if (password.value.trim()!==confirmpassword.value.trim()){
        onError (confirmpassword, "Password does not match")
    }

    else {
        onSuccess (confirmpassword)
    }
}

document.getElementsByClassName('button')
.addEventListener('click', (event) => {
    event.preventDefault();
    
    checkInputs();
});

function onSuccess (input) {
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"
    parent.classList.remove("error")
    parent.classList.add("success")
}

function onError (input, message) {
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible"
    messageEle.innerText="input"
    parent.classList.add("error")
    parent.classList.remove("success")
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/*const parentstrength = document.querySelector ("#parentstrength")
const divstrength = document.querySelector ("#divstrength")
const password = document.querySelector ("#password")
const weak = document.querySelector (".weak")
const fair = document.querySelector (".fair")
const medium = document.querySelector (".medium")
const passwordstrength = document.querySelector ("#passwordstrength")
const green = document.querySelector ("#green")

function trigger() {
    if(password.value != ""){
        parentstrength.style.display = "block"   
    }

    else{
        parentstrength.style.display = "none"
    }
}*/

let parameters = {
    capitalletter : false,
    letters : false,
    numbers : false,
    special : false
}

let divstrength = document.getElementById ("divstrength");
let small = document.getElementById ("green");

function strengthChecker() {
    let password = document.getElementById ("password").value;

    parameters.capitalletters = (/[A-Z]+/.test (password))?
    true:false;

    parameters.letters = (/[a-z]+/.test (password))?
    true:false;

    parameters.numbers = (/[0-9]+/.test (password))?
    true:false;

    parameters.numbers = (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test (password))?
    true:false;

    console.log(Objects.value(parameters));
}

/*$(document).ready(function(){
    const form = document.getElementById('form');
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmpassword = document.getElementById('confirmpassword');

    form.addEventListener('submit', (e) => {
        if(!checkInputs()){
        e.preventDefault();
        }
        
        checkInputs();
    });
});*/

/*function checkInputs() {
    let  status = false;
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const password = password.value.trim();
    const confirmpassword = confirmpassword.value.trim();


    if(firstnameValue === '') {
        status = setErrorFor(firstname, 'firstname cannot be blank')
    }

    else {
        status = setSuccessFor(firstname)
    }

    if(lastnameValue === '') {
        status = setErrorFor(lastname, 'lastname cannot be blank')
    }

    else {
        status = setSuccessFor(lastname)
    }

    if(emailValue === '') {
        status = setErrorFor(email, 'email cannot be blank')
    }

    else if (isEmail (emailValue)) {
        status = setErrorFor(email, 'email is not valid')
    }

    else {
        status = setSuccessFor(email)
    }

    if(password === '') {
        status = setErrorFor(password, 'password cannot be blank')
    }

    else {
        status = setSuccessFor(password)
    }

    if(firstnameValue === '') {
        status = setErrorFor(confirmpassword, 'password cannot be blank')
    }

    else if (password !== confirmpassword) {
        status = setErrorFor(confirmpassword, 'password does not match')
    }

    else {
        status = setSuccessFor(confirmpassword)
    }

    return status;
}

function setErrorFor(input, message) {
    const formcontrol = input.parentelement;
    const small = formcontrol.querySelector('small');

    small.innerText = message;

    formcontrol.className = 'formcontrol error'

    return false;
}

function setSuccessFor(input) {
    const formcontrol = input.parentelement;
    formcontrol.className = 'formcontrol success'
    return true;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}*/