let timerInterval;
function startPomodoro(minutes = 25) {
  let seconds = minutes * 60;
  timerInterval = setInterval(() => {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    document.getElementById("timer").innerText = `${m}:${s}`;
    if (seconds-- <= 0) {
      clearInterval(timerInterval);
      alert("⏰ Time’s up! Take a break!");
    }
  }, 1000);
}
