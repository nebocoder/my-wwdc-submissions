const textArea = document.getElementById("txtid")
const wordCountDisplay = document.getElementById("wordCount")
const charCountDisplay = document.getElementById("charCount")
const longestWordDisplay = document.getElementById("longestWord")
const btnClear = document.getElementById("btnClear")

let longestWord = ""

textArea.addEventListener("keyup", Counter)
btnClear.addEventListener("click", clearText)

function Counter() {
  if (textArea.value.match(/[a-zA-Z]/g)) {
    // Performing the check to avoid backspace issues
    let word = textArea.value.match(/\S+/g).length
    let char = textArea.value.match(/[a-zA-Z]/g).length
    let array = textArea.value.match(/\S+/g)
    // Setting number of words and characters
    wordCountDisplay.textContent = word
    charCountDisplay.textContent = char
    // Setting the longest word
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > longestWord.length) {
        longestWord = array[i].toLowerCase().replace(/[^a-zA-Z]/g, "")
      }
    }

    longestWordDisplay.textContent = `${longestWord} (${longestWord.length})`
  } else {
    wordCountDisplay.textContent = 0
    charCountDisplay.textContent = 0

    longestWord = ""
    longestWordDisplay.textContent = ""
  }
}

function clearText() {
  textArea.value = ""
  wordCountDisplay.textContent = 0
  charCountDisplay.textContent = 0
  longestWordDisplay.textContent = ""
}
