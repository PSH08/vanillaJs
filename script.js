const loginInout = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInout.ariaValueMax;
  console.log(username)
}

loginButton.addEventListener("click", onLoginBtnClick)
