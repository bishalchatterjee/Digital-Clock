const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');


let intervalId;
let isClockRunning = false;


function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  const year = currentTime.getFullYear();
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
  const day = currentTime.getDate().toString().padStart(2, '0');
  const dateString = `${month}/${day}/${year}`;

  clockElement.textContent = timeString;
  dateElement.textContent = dateString;
}


function startClock() {
  if (!isClockRunning) {
    updateClock();
    intervalId = setInterval(updateClock, 1000); 
    isClockRunning = true;
  }
}


function stopClock() {
  if (isClockRunning) {
    clearInterval(intervalId);
    isClockRunning = false;
  }
}


document.getElementById('startBtn').addEventListener('click', startClock);
document.getElementById('stopBtn').addEventListener('click', stopClock);


startClock();
