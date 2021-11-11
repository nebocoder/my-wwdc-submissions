const header = document.getElementById("header")
const posts = document.querySelectorAll(".post")
const buttons = document.querySelectorAll("button")
const toggle = document.getElementById("toggle")

toggle.addEventListener("change", () => {
  toggle.checked === true ? toDark() : toLight()
})

function dark(element) {
  element.classList.remove("light-theme")
  element.classList.add("dark-theme")
}

function light(element) {
  element.classList.remove("dark-theme")
  element.classList.add("light-theme")
}

function toDark() {
  dark(header)
  posts.forEach((post) => dark(post))
  buttons.forEach((button) => light(button))
}

function toLight() {
  light(header)
  posts.forEach((post) => light(post))
  buttons.forEach((button) => dark(button))
}
