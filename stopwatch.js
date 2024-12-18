// script.js
let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

// Start Timer
startBtn.addEventListener("click", () => {
    stopBtn.style.display = "block";
    resetBtn.style.display = "block";
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 10);
    }
});

// Stop Timer
stopBtn.addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
});

// Reset Timer
resetBtn.addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    stopBtn.style.display = "none";
    resetBtn.style.display = "none";
});

// Update the time
function updateTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

// Update display
function updateDisplay() {
    const formattedTime =
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
    display.textContent = formattedTime;
}
