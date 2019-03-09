var timer = document.getElementById("time");
var currentTime = Date.now();
var destinedTime = Date.now() + 150000;
var stopNow = false;

function resetTime() {
	currentTime = Date.now();
	destinedTime = Date.now() + 150000;
	
	var timeLeft = destinedTime - currentTime;
	var min = Math.floor(timeLeft/60000);
	var sec = (timeLeft % 60000)/1000;
	
	timer.innerHTML = min+":"+sec;
}

function startTime() {
	resetTime();
	stopNow = false;
	var x = setInterval(function() {
		currentTime = Date.now();
		var distance = destinedTime - currentTime;

		var min = Math.floor(distance/60000);
		var sec = (distance % 60000)/1000;
		
		timer.innerHTML = min+":"+sec;
		
		if (distance < 0 || stopNow == true) {
			clearInterval(x);
			resetTime();
		}

	},10);
}
function stopTime() {
	stopNow = true;

}
//Initialize
resetTime();
