function CodelandUsernameValidation(str) { 

    // code goes here 
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if(str.match(letterNumber)) {
        return true;
    }
    else {
        return false;
    }
  
  }

  console.log(CodelandUsernameValidation("faithy"));