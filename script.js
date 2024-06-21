let remainingLetters = document.querySelector("span");
let textArea = document.querySelector("textarea");

textArea.addEventListener("input" , () => {
    let textLength = textArea.value.length;
    remainingLetters.innerText = 20 - textLength;
})
