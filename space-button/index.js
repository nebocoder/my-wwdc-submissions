const exploreButton = document.getElementById("explore-btn")
const body = document.querySelector("body")

exploreButton.addEventListener("click", themeSwitch)

function themeSwitch() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark")
    body.classList.add("light")

    exploreButton.classList.remove("btn-light")
    exploreButton.classList.add("btn-dark")
  } else {
    body.classList.remove("light")
    body.classList.add("dark")

    exploreButton.classList.remove("btn-dark")
    exploreButton.classList.add("btn-light")
  }
}
