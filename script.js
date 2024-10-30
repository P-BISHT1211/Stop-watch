let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let markBtn = document.getElementById('markBtn');
let resetBtn = document.getElementById('resetBtn');
let marksList = document.getElementById('marksList');

let timer;
let running = false;
let elapsedTime = 0;
let startTime = 0;

function updateDisplay(time) {
  const hours = String(Math.floor(time / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  const milliseconds = String(time % 1000).padStart(3, '0');
  timerDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timer = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay(elapsedTime);
  }, 10); // Updated to run every 10 milliseconds

  running = true;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  markBtn.disabled = false;
  resetBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(timer);
  running = false;

  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  elapsedTime = 0;
  updateDisplay(elapsedTime);

  marksList.innerHTML = '';

  startBtn.disabled = false;
  pauseBtn.disabled = true;
  markBtn.disabled = true;
  resetBtn.disabled = true;
}

function markTime() {
  const mark = document.createElement('li');
  mark.textContent = timerDisplay.textContent;
  marksList.appendChild(mark);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
markBtn.addEventListener('click', markTime);
