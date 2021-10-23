const textArea = document.getElementById("txtid")
const wordCountDisplay = document.getElementById("wordCount")
const charCountDisplay = document.getElementById("charCount")
const longestWordDisplay = document.getElementById("longestWord")
const btnClear = document.getElementById("btnClear")

let longestWord = ""

textArea.addEventListener("input", counter)
btnClear.addEventListener("click", clear)

function counter() {
  if (textArea.value.match(/[a-zA-Z]/g)) {
    let array = textArea.value.match(/\S+/g)
    // Setting number of words and characters
    wordCountDisplay.textContent = array.length
    charCountDisplay.textContent = textArea.value.match(/[a-zA-Z]/g).length
    // Setting the longest word
    longestWord = array
      .reduce(
        (a, b) =>
          a.replace(/\W/g, "").length < b.replace(/\W/g, "").length ? b : a,
        ""
      )
      .replace(/\W/g, "")

    longestWordDisplay.textContent = `${longestWord.toLowerCase()} (${
      longestWord.length
    })`
  } else {
    clear()
  }
}

function clear() {
  textArea.value = ""
  wordCountDisplay.textContent = 0
  charCountDisplay.textContent = 0
  longestWordDisplay.textContent = ""
}
