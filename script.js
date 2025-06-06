let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);

  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs)
  );
}

function start() {
  if (timerInterval) return; // Prevent multiple intervals
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = timeToString(elapsedTime);
  }, 1000);
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  stop();
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (!elapsedTime) return;
  const lapTime = timeToString(elapsedTime);
  const li = document.createElement("li");
  li.textContent = "Lap: " + lapTime;
  document.getElementById("laps").appendChild(li);
}