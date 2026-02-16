document.addEventListener("DOMContentLoaded", function () {
  const sidebarContainer = document.getElementById("sidebar-container");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  sidebar.innerHTML = `
    <button title="Shop">🛒</button>
    <button title="Gallery">🖼</button>
    <button title="News">📰</button>
    <button title="Chat">💬</button>
  `;

  sidebarContainer.appendChild(sidebar);
});