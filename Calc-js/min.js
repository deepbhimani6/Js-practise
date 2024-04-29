let displayText = document.querySelector(".calculator-display h1");
let operators = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(".number");
let equalBtn = document.getElementById("equalBtn");
let clearBtn = document.getElementById("clearBtn");

function getTextOnScreen() {
  return parseInt(displayText.textContent);
}
function printOnScreen(value) {
  displayText.textContent = value;
}
function clearScreen() {
  printOnScreen(0);
}
let num1 = 0,
  num2 = 0,
  userOperator = "",
  clearCalc = false;

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    if (clearCalc) {
      clearScreen();
      clearCalc = false;
    }
    let clickItem = this.textContent;
    let addNumbers = displayText.textContent.concat(clickItem);

    // displayText.textContent[0] == 0
    //   ? clickItem == "."
    //     ? !displayText.textContent.startsWith("0.")
    //       ? (displayText.textContent = addNumbers)
    //       : ""
    //     : displayText.textContent.startsWith("0.")
    //     ? (displayText.textContent = addNumbers)
    //     : (displayText.textContent = clickItem)
    //   : (displayText.textContent = addNumbers);

    if (displayText.textContent[0] == 0) {
      if (clickItem == ".") {
        if (!displayText.textContent.startsWith("0.")) {
          displayText.textContent = addNumbers;
        }
      } else {
        if (displayText.textContent.startsWith("0.")) {
          displayText.textContent = addNumbers;
        } else {
          displayText.textContent = clickItem;
        }
      }
    } else {
      displayText.textContent = addNumbers;
    }
  });
});

const condition = operators.forEach((operator) => {
  operator.addEventListener("click", function (e) {
    userOperator = e.target.value;
    num1 = getTextOnScreen();
    clearCalc = true;
  });
});

function calculate() {
  let answer = 0;
  switch (userOperator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
  }
  return answer;
}
equalBtn.addEventListener("click", function () {
  num2 = getTextOnScreen();
  printOnScreen(calculate());
  clearCalc = true;
  console.log({ num1, num2, userOperator });
});

clearBtn.addEventListener("click", clearScreen);
