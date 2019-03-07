var timer = document.getElementById("time");
var currentTimeMin = 2;
var currentTimeSec = 30;
var currentTimeMil = 0

function resetTime() {
    currentTimeMin = 2;
    currentTimeSec = 30;
    currentTimeMil = 0;
    timer.innerHTML = "Timer: "+currentTimeMin+":"+currentTimeSec+"."+currentTimeSec;
}