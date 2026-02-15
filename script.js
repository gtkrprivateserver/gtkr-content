// Set tanggal pertandingan (ubah sesuai kebutuhan)
const matchDate = new Date("January 19, 2026 18:30:00").getTime();

const countdown = setInterval(function () {

  const now = new Date().getTime();
  const distance = matchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".match-box").innerHTML = "MATCH STARTED!";
  }

}, 1000);