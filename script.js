// ===============================
// WEBSITE MAIN SCRIPT
// ===============================

// ---------- COUNTDOWN TIMER ----------
const targetDate = new Date("January 19, 2026 18:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const boxes = document.querySelectorAll(".match-box h2");

  if (boxes.length === 4) {
    boxes[0].textContent = days;
    boxes[1].textContent = hours;
    boxes[2].textContent = minutes;
    boxes[3].textContent = seconds;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ---------- SMOOTH SCROLL ----------
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ---------- SCROLL ANIMATION ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animate");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".card, .hero-content, .side-news").forEach(el => {
  el.classList.add("animate");
  observer.observe(el);
});


// ---------- CARD HOVER EFFECT ----------
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
      perspective(800px)
      rotateX(${-(y - rect.height / 2) / 20}deg)
      rotateY(${(x - rect.width / 2) / 20}deg)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  });
});


// ---------- PAGE LOADED ----------
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});