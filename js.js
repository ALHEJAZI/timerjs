var timer = document.getElementById('timer');
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var resetButton = document.getElementById('reset');

var startTime;
var elapsedTime = 0;
var timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
}

function pauseTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timer.textContent = '00:00:00';
  elapsedTime = 0;
  startButton.disabled = false;
}

function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var formattedTime = formatTime(elapsedTime);
  timer.textContent = formattedTime;
}

function formatTime(time) {
  var totalSeconds = Math.floor(time / 1000);
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds % 3600) / 60);
  var seconds = totalSeconds % 60;

  var formattedTime =
    padZero(hours) + ':' +
    padZero(minutes) + ':' +
    padZero(seconds);

  return formattedTime;
}

function padZero(num) {
  return (num < 10) ? '0' + num : num;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);