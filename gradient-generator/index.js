const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const split = document.getElementById("split")
const gradient = document.getElementById("gradient")
const body = document.querySelector("body")
const randomizeBtn = document.getElementById("randomize")

randomize()

function generate() {
  body.style.background = `linear-gradient(90deg, ${color1.value}, ${split.value}%, ${color2.value})`
}

function randomize() {
  color1.value = randomColor()
  color2.value = randomColor()

  generate()
}

color1.addEventListener("input", generate)
color2.addEventListener("input", generate)
split.addEventListener("input", generate)

randomizeBtn.addEventListener("click", randomize)
