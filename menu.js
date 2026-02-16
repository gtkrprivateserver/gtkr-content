function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

/* Optional: Auto close menu saat klik link (biar lebih profesional) */
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#navMenu a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("navMenu").classList.remove("active");
    });
  });
});