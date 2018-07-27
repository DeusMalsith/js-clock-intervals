var degrees = 6;
var hourDegrees = 30

var second = document.getElementById("second");
second.style.transform = "rotate(" + degrees + "deg)";

var minute = document.getElementById("minute");
minute.style.transform = "rotate(" + degrees + "deg)";

var hour = document.getElementById("hour");
hour.style.transform = "rotate(" + hourDegrees + "deg)";


secondRotation(0)
minuteRotation(0)
hourRotation(0)

setInterval(function(){
    console.log("TICK!");
 }, 1000);

//For every second rotate second hand by 6 deg.
//For every minute rotate minute hand by 6 deg.
//For every hour rotate hour hand by 30 deg




