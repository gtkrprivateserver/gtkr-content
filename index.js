document.addEventListener("DOMContentLoaded", function () {

  // MOBILE MENU
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    navMenu.style.display =
      navMenu.style.display === "block" ? "none" : "block";
  });

  // COUNTDOWN DATE (ubah sesuai kebutuhan)
  const matchDate = new Date("January 19, 2026 18:30:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = matchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
      clearInterval(interval);
      document.querySelector(".countdown-container").innerHTML =
        "<h2>MATCH STARTED</h2>";
    }
  }, 1000);
});