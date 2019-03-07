var timer = document.getElementById("time");
var currentTimeMin = 2;
var currentTimeSec = 30;
var currentTimeMil = 0

function resetTime() {
    currentTimeMin = 2;
    currentTimeSec = 30;
    currentTimeMil = 0;
    timer.innerHTML = "Timer: "+currentTimeMin+":"+currentTimeSec+"."+currentTimeMil;
}
function startTime() {
    function idk(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    min = currentTimeMin * 60;
    min = min + currentTimeSec;
    min = min + (currentTimeMil / 1000)
}


//Initialize
resetTime();