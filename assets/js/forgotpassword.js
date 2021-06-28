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

$(document).ready(function(){
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmpassword = document.getElementById('confirmpassword');

    form.addEventListener('submit', (e) => {
        if(!checkInputs()){
        e.preventDefault();
        }
        
        checkInputs();
    });
});

function checkInputs() {
    let  status = false;
    const emailValue = email.value.trim();
    const password = password.value.trim();
    const confirmpassword = confirmpassword.value.trim();


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
}