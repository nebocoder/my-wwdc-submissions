const screensaver = document.getElementById("screensaver")
const orb = document.getElementById("orb")

document.addEventListener("DOMContentLoaded", countdown)
document.addEventListener("mousemove", endScreensaver)

function countdown() {
  let screensaver = setInterval(startScreensaver, 10000)
}

function startScreensaver() {
  screensaver.classList.remove("hidden")
}

function endScreensaver() {
  screensaver.classList.add("hidden")

  clearInterval(screensaver)
}
