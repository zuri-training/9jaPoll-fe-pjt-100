function myFunction() {
  var x = document.getElementById("password");
  var y = document.getElementById("confirmpassword");

  if (x.type === "password") {
    x.type = "text";
    document.getElementById("hide").style.display = "inline-block";
    document.getElementById("show").style.display = "none";
  } else {
    x.type = "password";
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "inline-block";
  }
}

function validate() {
  var x = document.getElementById("confirmpassword");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("close").style.display = "inline-block";
    document.getElementById("open").style.display = "none";
  } else {
    x.type = "password";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "inline-block";
  }
}

function checkInputs() {
  //Firstname
  if (firstname.value.trim() === "") {
    onError(firstname, "Firstname cannot be empty");
  } else {
    onSuccess(firstname);
  }

  //Lastname
  if (lastname.value.trim() === "") {
    onError(lastname, "Lastname cannot be empty");
  } else {
    onSuccess(lastname);
  }

  //Email
  if (email.value.trim() === "") {
    onError(email, "Email cannot be empty");
  } else if (!isEmail(email.value.trim())) {
    onError(email, "Email is not valid");
  } else {
    onSuccess(email);
  }

  //Password
  if (password.value.trim() === "") {
    onError(password, "Password cannot be empty");
  } else {
    onSuccess(password);
  }

  //Confirm Password
  if (confirmpassword.value.trim() === "") {
    onError(confirmpassword, "Password cannot be empty");
  } else if (password.value.trim() !== confirmpassword.value.trim()) {
    onError(confirmpassword, "Password does not match");
  } else {
    onSuccess(confirmpassword);
  }
}

const baseService = {
  baseURL: "",
  setBaseURL: (url) => {
    baseService.baseURL = url;
  },
  getAllMethod: async () => {
    await fetch(baseService.baseURL)
      .then((res) => res.text())
      .then((res) => console.log(res));
  },

  signUpMethod: async (payload) => {
    // await fetch(baseService.baseURL, payload)
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));

    await fetch(baseService.baseURL, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log("This is an exception" + error));
  },

  //   loginMethod: async (payload) => {
  //   // await fetch(baseService.baseURL, payload)
  //   //   .then((res) => res.json())
  //   //   .then((res) => console.log(res));

  //     await fetch(baseService.baseURL, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //     'Content-Type': 'application/json'
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: JSON.stringify(payload) // body data type must match "Content-Type" header
  // })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res)).catch((error) => console.log("This is an exception" + error))
  // }
};

const signUpPayload = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

async function getUser(req, res) {
  const api = "https://propernaijapoll.herokuapp.com//api/v1/auth/signup";
  // await fetch(api)
  //   .then((res) => res.text())
  //   .then((res) => console.log(res));
  baseService.setBaseURL(api);
  console.log(baseService.baseURL);
  baseService.getAllMethod();
}

getUser();

document.querySelector("#submit").addEventListener("click", async (event) => {
  event.preventDefault();

  checkInputs();

  const user = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value,
  };

  console.log(user);

  signUpPayload.firstname = firstname.value;
  signUpPayload.lastname = lastname.value;
  signUpPayload.email = email.value;
  signUpPayload.password = password.value;
  signUpPayload.passwordConfirm = confirmpassword.value;

  baseService.setBaseURL(
    "https://propernaijapoll.herokuapp.com//api/v1/auth/signup"
  );
  baseService.signUpMethod(signUpPayload);

  // try {
  //   const response = await fetch(
  //     " https://naijapollbackend.herokuapp.com/",
  //     {
  //       method: "GET",
  //     }
  //   );

  //   console.log(response);
  // } catch (error) {
  //   return console.log(error.message);
  // }
});

function onSuccess(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector(".small");
  messageEle.style.visibility = "hidden";
  parent.classList.remove("error");
  parent.classList.add("success");
}

function onError(input, message) {
  let parent = input.parentElement;
  console.log(parent);
  let messageEle = parent.querySelector(".small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

const parentstrength = document.querySelector("#parentstrength");
const divstrength = document.querySelector("#divstrength");
// const password = document.querySelector("#password");
const weak = document.querySelector(".weak");
const fair = document.querySelector(".fair");
const medium = document.querySelector(".medium");
const passwordstrength = document.querySelector(".passwordstrength");
const green = document.querySelector("#green");

// function trigger() {
//   if (password.value.length !== 0) {
//     parentstrength.style.display = "block";
//   } else {
//     parentstrength.style.display = "none";
//   }
// }

// let parameters = {
//   capitalletter: false,
//   letters: false,
//   numbers: false,
//   special: false,
// };

let timeout;
const password = document.querySelector("#password");
// let divstrength = document.getElementById("divstrength");
// let small = document.getElementById("green");

let capital = new RegExp(/[A-Z]+/);
let small = new RegExp(/[a-z]+/);
let character = new RegExp(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/);
let number = new RegExp(/[0-9]+/);

function StrengthChecker(passwordValue) {
  const passwordLength = passwordValue.length;
  if (
    passwordLength >= 8 &&
    capital.test(passwordValue) &&
    small.test(passwordValue) &&
    character.test(passwordValue) &&
    number.test(passwordValue)
  ) {
    passwordstrength.style.display = "block";
    green.textContent = "Strong";
    green.style.color = "#56c568";
    weak.style.backgroundColor = "#56c568";
    fair.style.backgroundColor = "#56c568";
    medium.style.backgroundColor = "#56c568";
    passwordstrength.style.backgroundColor = "#56c568";
  } else if (
    passwordLength >= 6 &&
    capital.test(passwordValue) &&
    small.test(passwordValue) &&
    number.test(passwordValue)
  ) {
    medium.style.display = "block";
    green.textContent = "Medium";
    green.style.color = "yellow";
    weak.style.backgroundColor = "yellow";
    fair.style.backgroundColor = "yellow";
    medium.style.backgroundColor = "yellow";
  } else if (
    passwordLength >= 4 &&
    capital.test(passwordValue) &&
    small.test(passwordValue) &&
    number.test(passwordValue)
  ) {
    fair.style.display = "block";
    green.textContent = "Fair";
    green.style.color = "orange";
    weak.style.backgroundColor = "orange";
    fair.style.backgroundColor = "orange";
  } else {
    weak.style.display = "block";
    green.textContent = "Weak";
    green.style.color = "#e74c3c";

    fair.style.display = "none";
    medium.style.display = "none";
    // parentstrength.display = "none";
    // passwordstrength.display = "none !important";
  }
}

password.addEventListener("input", () => {
  divstrength.style.display = "flex";
  clearTimeout(timeout);

  timeout = setTimeout(() => StrengthChecker(password.value), 500);

  if (password.value.length !== 0) {
    divstrength.style.display != "flex";
    parentstrength.style.visibility = "visible";
  } else {
    divstrength.style.display = "none";
    weak.style.display = "none";
    fair.style.display = "none";
    passwordstrength.style.display = "none";
    medium.style.display = "none";
    green.style.display = "none";
  }
});

// function strengthChecker() {
//   let password = document.getElementById("password").value;

//   parameters.capitalletters = /[A-Z]+/.test(password) ? true : false;

//   parameters.letters = /[a-z]+/.test(password) ? true : false;

//   parameters.numbers = /[0-9]+/.test(password) ? true : false;

//   parameters.numbers = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
//     ? true
//     : false;
// }

const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const confirmpassword = document.getElementById("confirmpassword");

// form.addEventListener("submit", (e) => {
//   if (!checkInputs()) {
//     e.preventDefault();
//   }

//   checkInputs();
// });

// function checkInputs() {
//   let status = false;
//   const password = password.value.trim();
//   const firstnameValue = firstname.value.trim();
//   const lastnameValue = lastname.value.trim();
//   const emailValue = email.value.trim();
//   const confirmpassword = confirmpassword.value.trim();

//   if (firstnameValue === "") {
//     status = setErrorFor(firstname, "firstname cannot be blank");
//   } else {
//     status = setSuccessFor(firstname);
//   }

//   if (lastnameValue === "") {
//     status = setErrorFor(lastname, "lastname cannot be blank");
//   } else {
//     status = setSuccessFor(lastname);
//   }

//   if (emailValue === "") {
//     status = setErrorFor(email, "email cannot be blank");
//   } else if (isEmail(emailValue)) {
//     status = setErrorFor(email, "email is not valid");
//   } else {
//     status = setSuccessFor(email);
//   }

//   if (password === "") {
//     status = setErrorFor(password, "password cannot be blank");
//   } else {
//     status = setSuccessFor(password);
//   }

//   if (firstnameValue === "") {
//     status = setErrorFor(confirmpassword, "password cannot be blank");
//   } else if (password !== confirmpassword) {
//     status = setErrorFor(confirmpassword, "password does not match");
//   } else {
//     status = setSuccessFor(confirmpassword);
//   }

//   return status;
// }

function setErrorFor(input, message) {
  const formcontrol = input.parentelement;
  const small = formcontrol.querySelector("small");

  small.innerText = message;

  formcontrol.className = "formcontrol error";

  return false;
}

function setSuccessFor(input) {
  const formcontrol = input.parentelement;
  formcontrol.className = "formcontrol success";
  return true;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
