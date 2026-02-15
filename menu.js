const menu = document.getElementById("menu");

menu.innerHTML = `
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="rules.html">Rules</a>
  <a href="events.html">Events</a>
  <a href="join.html">Join</a>
`;

// Highlight active page
const links = menu.querySelectorAll("a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#fff";
    link.style.fontWeight = "bold";
  }
});