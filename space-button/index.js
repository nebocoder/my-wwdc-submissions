const exploreButton = document.getElementById("explore-btn")
const body = document.querySelector("body")

exploreButton.addEventListener("click", themeSwitch)

function themeSwitch() {
  body.classList.contains("dark") ? toLight() : toDark()
}

function toDark() {
  body.classList.remove("light")
  body.classList.add("dark")

  exploreButton.classList.remove("btn-dark")
  exploreButton.classList.add("btn-light")
}

function toLight() {
  body.classList.remove("dark")
  body.classList.add("light")

  exploreButton.classList.remove("btn-light")
  exploreButton.classList.add("btn-dark")
}
