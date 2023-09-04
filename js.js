var timerInterval;
var startTime;
var elapsedTime = 0;

var hoursDisplay = document.getElementById('hours');
var minutesDisplay = document.getElementById('minutes');
var secondsDisplay = document.getElementById('seconds');
var millisecondsDisplay = document.getElementById('milliseconds');

var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var resetButton = document.getElementById('reset');

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  startButton.disabled = true;
}

function pauseTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  hoursDisplay.textContent = '00';
  minutesDisplay.textContent = '00';
  secondsDisplay.textContent = '00';
  millisecondsDisplay.textContent = '000';
  elapsedTime = 0;
  startButton.disabled = false;
}

function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var time = new Date(elapsedTime);

  var hours = time.getUTCHours().toString().padStart(2, '0');
  var minutes = time.getUTCMinutes().toString().padStart(2, '0');
  var seconds = time.getUTCSeconds().toString().padStart(2, '0');
  var milliseconds = time.getUTCMilliseconds().toString().padStart(3, '0');

  hoursDisplay.textContent = hours;
  minutesDisplay.textContent = minutes;
  secondsDisplay.textContent = seconds;
  millisecondsDisplay.textContent = milliseconds;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);