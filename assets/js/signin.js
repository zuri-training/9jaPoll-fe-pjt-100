function myFunction() {
  var x = document.getElementById("signpassword");
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

function checkInputs() {
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

  //   signUpMethod: async (payload) => {
  //     // await fetch(baseService.baseURL, payload)
  //     //   .then((res) => res.json())
  //     //   .then((res) => console.log(res));

  //     await fetch(baseService.baseURL, {
  //       method: "POST", // *GET, POST, PUT, DELETE, etc.
  //       headers: {
  //         "Content-Type": "application/json",
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: JSON.stringify(payload), // body data type must match "Content-Type" header
  //     })
  //       .then((res) => res.json())
  //       .then((res) => console.log(res))
  //       .catch((error) => console.log("This is an exception" + error));
  //   },

  loginMethod: async (payload) => {
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
};

const loginPayload = {
  email: "",
  password: "",
};

async function getUser(req, res) {
  const api = "https://naijapollbackend.herokuapp.com/api/v1/auth/login";
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
    email: email.value,
    password: password.value,
  };

  console.log(user);

  loginPayload.email = email.value;
  loginPayload.password = password.value;

  baseService.setBaseURL(
    "https://naijapollbackend.herokuapp.com/api/v1/auth/login"
  );
  baseService.signUpMethod(signUpPayload);
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

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
