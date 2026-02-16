document.addEventListener("DOMContentLoaded", () => {

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.innerHTML = `
    <a href="#home">Home</a>
    <a href="#kingdom">Kingdom</a>
    <a href="#events">Events</a>
    <a href="#gallery">Gallery</a>
    <a href="rules.html">Aturan</a>
    <a href="contact.html">Contact</a>
  `;

  const overlay = document.createElement("div");
  overlay.classList.add("sidebar-overlay");

  document.body.appendChild(sidebar);
  document.body.appendChild(overlay);

  const menuToggle = document.getElementById("menuToggle");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

});