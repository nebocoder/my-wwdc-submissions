const screensaver = document.getElementById("screensaver")
const orb = document.getElementById("orb")

document.addEventListener("DOMContentLoaded", countdown)
document.addEventListener("mousemove", endScreensaver)

function countdown() {
  setTimeout(startScreensaver, 5000)
}

function startScreensaver() {
  if (screensaver.classList.contains("hidden"))
    screensaver.classList.remove("hidden")
}

function endScreensaver() {
  if (!screensaver.classList.contains("hidden"))
    screensaver.classList.add("hidden")
}
