var deadline = new Date("jun 11, 2022 07:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML =seconds;
if (t < 0) {
		clearInterval(x);
		document.getElementById("clockdiv").style.display = "none";
		document.getElementById("day").style.display = "none";
		document.getElementById("hour").style.display = "none";
		document.getElementById("minute").style.display = "none";
		document.getElementById("second").style.display = "none";
		document.getElementById("text").style.display = "block";
		document.getElementById("pic").style.display = "block";
		document.body.style.background = "linear-gradient(to bottom right, #202A44 , #6495ED";
		document.getElementById("text").innerHTML = "<h2>833 DAYS!!</h2><br><p>It's been 833 days monkey.<br><br> But the day is finally here,<br> I cannot wait to see you in your dress. All my love x</p>"
		document.getElementById("pic").src = "Images/spouses.png";
		}
}, 1000);
