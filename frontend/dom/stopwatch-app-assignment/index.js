/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here
let stopwatch = document.getElementById('stopwatch');
let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

startbtn.addEventListener('click', start);
stopbtn.addEventListener('click', stop);
resetbtn.addEventListener('click', reset)

function start() {
  // TODO: answer here
  if (stoptime == true) {
    stoptime = false;
    runTime();
  }
}

function stop() {
  // TODO: answer here
  if (stoptime == false) {
    stoptime = true;
  }
}

function reset() {
  // TODO: answer here
  stopwatch.innerHTML = '00:00:00';
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}

function runTime() {
  // TODO: answer here
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    stopwatch.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("runTime()", 1000);
  }
}