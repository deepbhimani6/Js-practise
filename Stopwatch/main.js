const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const startTimer = document.getElementById("start");
const stopTimer = document.getElementById("stop");
const resetTimer = document.getElementById("reset");

let second = 0;
let minute = 0;
let hour = 0;
let timer = false;

startTimer.addEventListener("click", () => {
  timer = true;
  stopWatch();
});

stopTimer.addEventListener("click", () => {
  timer = false;
});

resetTimer.addEventListener("click", () => {
  timer = false;
  second = 0;
  minute = 0;
  hour = 0;
  hr.textContent = "00";
  min.textContent = "00";
  sec.textContent = "00";
});

function stopWatch() {
  if (timer) {
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    if (second < 10) {
      sec.textContent = "0" + second;
    } else {
      sec.textContent = second;
    }

    if (minute < 10) {
      min.textContent = "0" + minute;
    } else {
      min.textContent = minute;
    }

    if (hour < 10) {
      hr.textContent = "0" + hour;
    } else {
      hr.textContent = hour;
    }

    setTimeout(stopWatch, 1000);
  }
}
