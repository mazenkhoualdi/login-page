let email = document.getElementById("email");
let password = document.getElementById("password");
let yesss = document.querySelector(".u_check");
let nonnn = document.querySelector(".u_times");
let yess = document.querySelector(".e_check");
let nonn = document.querySelector(".e_times");

email.addEventListener("keyup", function () {
  var pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(pattern)) {
    yesss.classList.add("openfa-check");
    nonnn.classList.remove("openfa-times");
  } else {
    nonnn.classList.add("openfa-times");
    yesss.classList.remove("openfa-check");
  }
});

password.addEventListener("keyup", function () {
  if (password.value.length > 8) {
    yess.classList.add("openfa-check");
    nonn.classList.remove("openfa-times");
  } else {
    nonn.classList.add("openfa-times");
    yess.classList.remove("openfa-check");
  }
});
