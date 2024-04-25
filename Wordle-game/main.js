let keyboardLetters = Array.from(
  document.querySelectorAll(".keyboard-btn-letter")
);
let keyboardBtnBackspace = document.querySelector(".keyboard-btn-backspace");
let keyboardBtnEnter = document.querySelector(".keyboard-btn-enter");
let rowWrapper = Array.from(document.querySelectorAll(".row"));
let rowLetters = Array.from(document.querySelectorAll(".row-letter"));
let matchResults = Array.from(document.getElementsByClassName("message"));

let word = "deep";

const alphas = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let activeRaw = 1;
function enterClick() {
  if (activeRaw <= rowWrapper.length) {
    activeRaw++;
  }
  return activeRaw;
}

// click event on enter btn
keyboardBtnEnter.addEventListener("click", function () {
  const filledLetters = rowLetters.filter(
    (rowLetter) => rowLetter.textContent != ""
  );
  if (filledLetters.length % 4 !== 0) {
    return e.preventDefault();
  }
  if (activeRaw <= rowWrapper.length + 1) {
    enterClick();

    for (
      let i = (activeRaw - 2) * word.length;
      i < (activeRaw - 1) * word.length;
      i++
    ) {
      let userLetterElm = filledLetters[i];

      let acualLetter = word[i % 4];
      if (acualLetter === userLetterElm?.textContent) {
        userLetterElm.style.backgroundColor = "#79b851";
        userLetterElm.style.borderColor = "#79b851";
        userLetterElm.style.color = "white";
      } else if (word.includes(userLetterElm?.textContent)) {
        userLetterElm.style.backgroundColor = "#f3c237";
        userLetterElm.style.borderColor = "#f3c237";
        userLetterElm.style.color = "white";
      } else {
        userLetterElm.style.backgroundColor = "#a4aec4";
        userLetterElm.style.borderColor = "#a4aec4";
        userLetterElm.style.color = "white";
      }
    }
  } else {
    matchResults.forEach((matchResults) => {
      matchResults.style.display = "";
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const filledLetters = rowLetters.filter(
      (rowLetter) => rowLetter.textContent != ""
    );
    if (filledLetters.length % 4 !== 0) {
      return e.preventDefault();
    }
    if (activeRaw <= rowWrapper.length + 1) {
      enterClick();

      for (
        let i = (activeRaw - 2) * word.length;
        i < (activeRaw - 1) * word.length;
        i++
      ) {
        let userLetterElm = filledLetters[i];

        let acualLetter = word[i % 4];
        if (acualLetter === userLetterElm?.textContent) {
          userLetterElm.style.backgroundColor = "#79b851";
          userLetterElm.style.borderColor = "#79b851";
          userLetterElm.style.color = "white";
        } else if (word.includes(userLetterElm?.textContent)) {
          userLetterElm.style.backgroundColor = "#f3c237";
          userLetterElm.style.borderColor = "#f3c237";
          userLetterElm.style.color = "white";
        } else {
          userLetterElm.style.backgroundColor = "#a4aec4";
          userLetterElm.style.borderColor = "#a4aec4";
          userLetterElm.style.color = "white";
        }
      }
    } else {
      matchResults.forEach((matchResults) => {
        matchResults.style.display = "";
      });
    }
  }
});

// keypress event on keyboard keys
document.addEventListener("keydown", (e) => {
  alphas.map((alpha) => {
    const filledLetter = rowLetters.filter(
      (rowLetter) => rowLetter.textContent != ""
    );
    if (alpha == e.key && filledLetter.length < 4 * activeRaw) {
      const printLetters = rowLetters.findIndex((rowLetter) => {
        return rowLetter.textContent == "";
      });
      rowLetters[printLetters].textContent = e.key;
    }
  });
});

// click event on letters btn
keyboardLetters.forEach((keyboardLetter) => {
  keyboardLetter.addEventListener("click", function () {
    const printLetters = rowLetters.findIndex(
      (rowLetter) => rowLetter.textContent == ""
    );
    rowLetters[printLetters].textContent = this.textContent;
  });
});

// click event on backspace btn
function removeLatter() {
  const filledLetter = rowLetters.filter(
    (rowLetter) => rowLetter.textContent != ""
  );

  if (filledLetter.length > 0 && filledLetter.length !== (activeRaw - 1) * 4) {
    rowLetters[
      rowLetters.filter((rowLetter) => rowLetter.textContent != "").length - 1
    ].textContent = "";
  }
}
keyboardBtnBackspace.addEventListener("click", function () {
  removeLatter();
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") {
    removeLatter();
  }
});
