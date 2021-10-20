const textArea = document.getElementById("txtid")
const wordCountDisplay = document.getElementById("wordCount")
const charCountDisplay = document.getElementById("charCount")
const longestWordDisplay = document.getElementById("longestWord")
const btnClear = document.getElementById("btnClear")

let wordCount = 0
let charCount = 0
let longestWord = ""
let longestWordLength = 0

textArea.addEventListener("keyup", wordCounter)
textArea.addEventListener("keyup", charCounter)
textArea.addEventListener("keyup", longestWordTracker)
btnClear.addEventListener("click", clearText)

function wordCounter() {
  if (textArea.value.match(/[a-zA-Z]/g)) {
    let count = textArea.value.match(/\S+/g).length
    wordCountDisplay.textContent = count
  } else {
    wordCountDisplay.textContent = 0
  }
}

function charCounter() {
  if (textArea.value.match(/[a-zA-Z]/g)) {
    let count = textArea.value.match(/[a-zA-Z]/g).length
    charCountDisplay.textContent = count
  } else {
    charCountDisplay.textContent = 0
  }
}

function longestWordTracker() {
  if (textArea.value.match(/[a-zA-Z]/g)) {
    let array = textArea.value.match(/\S+/g)
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > longestWordLength) {
        longestWordLength = array[i].length
        longestWord = array[i].toLowerCase().replace(/[^a-zA-Z]/g, "")
      }
    }

    longestWordDisplay.textContent = `${longestWord} (${longestWordLength})`
  } else {
    longestWord = ""
    longestWordLength = 0
    longestWordDisplay.textContent = ""
  }
}

function clearText() {
  textArea.value = ""
  wordCountDisplay.textContent = 0
  charCountDisplay.textContent = 0
  longestWordDisplay.textContent = ""
}
