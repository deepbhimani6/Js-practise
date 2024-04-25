let correctScore = document.getElementById("correctScore");
let totalQuestion = document.getElementById("totalQuestion");
let questionText = document.getElementById("question");
let options = document.getElementById("options");
let btns = document.querySelectorAll("#options button");
let trueBtn = document.getElementById("trueBtn");
let falseBtn = document.getElementById("falseBtn");
let reasonText = document.getElementById("reason");
let nextQuestionBtn = document.getElementById("nextQuestion");

let questions = [
  {
    statement: "JavaScript was invented in 1995",
    answer: "true",
    reason:
      "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days.",
  },
  {
    statement: "Strings in JS are editable values",
    answer: "false",
    reason:
      "In JavaScript strings are immutable values, meaning they cannot be edited; however, they can replaced with new, different strings.",
  },
  {
    statement: "1 + 1 === 2",
    answer: "true",
    reason: "The plus operator gives the sum of two numbers.",
  },
  {
    statement: "'1' + '1' === '2'",
    answer: "false",
    reason:
      "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'.",
  },
  {
    statement: "typeof ['J', 'S'] === 'array'",
    answer: "false",
    reason:
      "Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties.",
  },
];

let score = 0;
correctScore.textContent = score;

let questionsNumber = 0;
questionText.textContent = questions[questionsNumber].statement;

let completedQuestion = 0;
totalQuestion.textContent = completedQuestion;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    reasonText.classList.remove("hidden");

    btns.forEach((btn) => {
      btn.setAttribute("disabled", "");
      btn.style.pointerEvents = "none";
    });

    completedQuestion++;
    totalQuestion.textContent = completedQuestion;

    let questionsNumberLength = questionsNumber + 1;
    if (questionsNumberLength != questions.length) {
      nextQuestionBtn.removeAttribute("disabled");
      nextQuestionBtn.style.pointerEvents = "unset";
    }

    if (questions[questionsNumber].answer == this.value) {
      this.style.backgroundColor = "lightgreen";
      score++;
      correctScore.textContent = score;
    } else {
      this.style.backgroundColor = "lightpink";
    }

    reasonText.textContent = questions[questionsNumber].reason;
  });
});

nextQuestionBtn.addEventListener("click", function () {
  questionsNumber++;
  questionText.textContent = questions[questionsNumber].statement;

  nextQuestionBtn.setAttribute("disabled", "");
  nextQuestionBtn.style.pointerEvents = "none";

  btns.forEach((btn) => {
    btn.removeAttribute("disabled");
    btn.style.cssText = "pointer-events: unset; background-color: inherit;";
  });
});
