var timer = document.getElementById("time");
var currentTimeMin = 2;
var currentTimeSec = 30;

function resetTime() {
    currentTimeMin = 2;
    currentTimeSec = 30;
    timer.innerHTML = currentTimeMin+":"+currentTimeSec;
}
function startTime() {
    function idk(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = (timer % 60);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    startingTime = Date.now;



    idk(min, timer);
}


//Initialize
resetTime();