const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
  h1.style.color = 'blue'
}

function handleTitleEnter() {
  h1.innerText = "Mouse is here!"
}

function handleTitleLeave() {
  h1.innerText = "Mouse is gone!"
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato'
}

function handleWindowCopy() {
  alert("copier!")
}

function handleWindowOffline() {
  alert("Offline");
}

function handleWindowOnline() {
  alert("Online!!")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleTitleEnter);
h1.addEventListener("mouseleave", handleTitleLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);