const audio = document.getElementById("alarm-sound");
var minutes = 25;
var oriMinutes = minutes;
var seconds = 0;
var timeParagraph = document.getElementById("time");
var btnPomodoro = document.getElementById("pomodoro");
var btnShortBreak = document.getElementById("short-break");
var btnLongBreak = document.getElementById("long-break");
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");

btnPomodoro.addEventListener("click", () => {
  timeParagraph.innerHTML = "25:00";
  seconds = 0;
  minutes = 25;
  oriMinutes = minutes;
});

btnShortBreak.addEventListener("click", () => {
  timeParagraph.innerHTML = "05:00";
  seconds = 0;
  minutes = 5;
  oriMinutes = minutes;
});

btnLongBreak.addEventListener("click", () => {
  timeParagraph.innerHTML = "15:00";
  seconds = 0;
  minutes = 15;
  oriMinutes = minutes;
});
btnStart.addEventListener("click", () => {
  btnStart.disabled = true;
  fun = setInterval(timer, 1000);
});
btnStop.addEventListener("click", () => {
  btnStart.disabled = false;
  clearInterval(fun);
});
btnReset.addEventListener("click", () => {
  clearInterval(fun);
  btnStart.disabled = false;
  minutes = oriMinutes;
  seconds = 0;
  timeParagraph.innerHTML = `${minutes < 10 ? "0" + minutes : minutes}:00`;
});

function timer() {
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes == 0 && seconds == 0) {
    alarm();
    clearInterval(fun);
  }
  timeParagraph.innerHTML = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
function alarm() {
  audio.play();
}
