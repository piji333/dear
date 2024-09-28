// Set the date we're counting down to
//var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var countDownDateQN = new Date("2024-11-08").getTime();

// Update the count down every 1 second
var xQN = setInterval(function () {
  // Get today's date and time
  var nowQN = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceQN = countDownDateQN - nowQN;

  // Time calculations for days, hours, minutes and seconds
  var daysQN = Math.floor(distanceQN / (1000 * 60 * 60 * 24));
  var hoursQN = Math.floor((distanceQN % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesQN = Math.floor((distanceQN % (1000 * 60 * 60)) / (1000 * 60));
  var secondsQN = Math.floor((distanceQN % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if (daysQN < 0) {
    daysQN = 0;
  }
  document.getElementById("hariQN").innerHTML = daysQN;
  if (hoursQN < 0) {
    hoursQN = 0;
  }
  document.getElementById("jamQN").innerHTML = hoursQN;
  if (minutesQN < 0) {
    minutesQN = 0;
  }
  document.getElementById("menitQN").innerHTML = minutesQN;
  if (secondsQN < 0) {
    secondsQN = 0;
  }
  document.getElementById("detikQN").innerHTML = secondsQN;

  // If the count down is finished, write some text
  if (distanceQN < 0) {
    clearInterval(xQN);
    document.getElementById("demoQN").innerHTML = "";
  }
}, 1000);
