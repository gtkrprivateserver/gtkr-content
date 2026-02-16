function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

const matchDate = new Date("January 17, 2026 18:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = matchDate - now;

  if (distance < 0) return;

  document.getElementById("days").innerHTML =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerHTML =
    Math.floor((distance / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").innerHTML =
    Math.floor((distance / (1000 * 60)) % 60);

  document.getElementById("seconds").innerHTML =
    Math.floor((distance / 1000) % 60);
}, 1000);