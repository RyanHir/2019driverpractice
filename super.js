var timer = document.getElementById("time");
var currentTime = Date.now();
var destinedTime = Date.now() + 150000;
var stopNow = false;
var header =  ["Match","Name","Time","Delta Time"];
var data =    [];
var lastFormatted = "2:00";
var lastRaw = 0;
var distance = 0;

function n(n){
	var num = Number(n);
	if (String(num).split(".").length < 3 || String(num).split(".")[1].length<=3 ){
		num = num.toFixed(3);
	}
	return num >= 10 ? "" + num: "0" + num;
}
function getTime() {
	currentTime = Date.now();
	distance = destinedTime - currentTime;
	var min = Math.floor(distance/60000);
	var sec = n((distance % 60000)/1000);

	lastRaw = distance;
	lastFormatted = min+":"+sec;

	return [lastFormatted, distance];
}

function addData(buttonID) {
	var match = document.getElementById("match").value;
	if (data.length == 0) {
		var diff = 150000 - distance;
		
		var min = Math.floor(diff/60000);
		var sec = n((diff % 60000) / 1000);
		
		data.push([match,buttonID,lastFormatted, min+":"+sec]);
		document.getElementById("last").innerHTML = buttonID
	}
	else {
		var previousFormatted = data[data.length - 1][2];
		var previousMin = previousFormatted.split(":")[0];
		var previousSec = previousFormatted.split(":")[1];

		var previousRaw = (previousMin * 60000) + (previousSec * 1000);

		var diff = previousRaw - distance;

		var min = Math.floor(diff/60000);
		var sec = n((diff % 60000) / 1000);

		data.push([match,buttonID,lastFormatted, min+":"+sec]);

		document.getElementById("last").innerHTML = buttonID
	}
}

function compile() {
	var finalData = [];

	finalData.push(header);
	for (var i in data) {
		finalData.push(data[i]);
	}
	console.log(finalData);

	var csvContent = "data:text/csv;charset=utf-8,";

	var lineArray = [];
	finalData.forEach(function (infoArray, index) {
		var line = infoArray.join(",");
		lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
	});
	var csvContent = lineArray.join("\n");
	var encodedUri = encodeURI(csvContent);
	window.open(encodedUri);
	stopTime();
	resetTime();
}

function resetTime() {
	stopTime();
	currentTime = Date.now();
	destinedTime = Date.now() + 150000;
	
	var timeLeft = destinedTime - currentTime;
	var min = Math.floor(timeLeft/60000);
	var sec = n((timeLeft % 60000)/1000);
	
	timer.innerHTML = min+":"+sec;

	data = [];
}

function startTime() {
	resetTime();
	stopNow = false;
	var x = setInterval(function() {
		time = getTime();
		timer.innerHTML = time[0];
		if (time[1] < 0 || stopNow == true) {
			clearInterval(x);
		}
	},1);
}

function stopTime() {stopNow = true;}
//Initialize
resetTime();
