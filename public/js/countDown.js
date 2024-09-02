// Set the date we're counting down to
//var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var countDownDate = new Date("2024-11-10").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if (days < 0) {
    days = 0;
  }
  document.getElementById("hari").innerHTML = days;
  if (hours < 0) {
    hours = 0;
  }
  document.getElementById("jam").innerHTML = hours;
  if (minutes < 0) {
    minutes = 0;
  }
  document.getElementById("menit").innerHTML = minutes;
  if (seconds < 0) {
    seconds = 0;
  }
  document.getElementById("detik").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
  }
}, 1000);
