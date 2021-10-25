const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const split = document.getElementById("split")
const gradient = document.getElementById("gradient")
const body = document.querySelector("body")
const randomizeBtn = document.getElementById("randomize")

randomize()

function generate(valueOne, valueTwo, split) {
  body.style.background = `linear-gradient(90deg, ${valueOne}, ${split}%, ${valueTwo})`
}

function randomize() {
  const randomValueOne = randomColor()
  const randomValueTwo = randomColor()

  console.log(randomValueOne, randomValueTwo)
  generate(randomValueOne, randomValueTwo, 50)
}

color1.addEventListener(
  "input",
  generate(color1.value, color2.value, split.value)
)
color2.addEventListener(
  "input",
  generate(color1.value, color2.value, split.value)
)
split.addEventListener(
  "input",
  generate(color1.value, color2.value, split.value)
)

randomizeBtn.addEventListener("click", randomize)
