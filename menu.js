// menu.js - Shared Menu dengan Slide Kiri const menu = document.getElementById("menu");

// Menu HTML menu.innerHTML = <a href=\"index.html\">Home</a> <a href=\"about.html\">About</a> <a href=\"rules.html\">Rules</a> <a href=\"events.html\">Events</a> <a href=\"join.html\">Join</a>;

// Highlight active page const links = menu.querySelectorAll("a"); links.forEach(link => { if(link.href === window.location.href){ link.style.color = "#fff"; link.style.fontWeight = "bold"; } });

// Slide Left Menu Toggle (for mobile & desktop) menu.style.position = 'fixed'; menu.style.top = '0'; menu.style.left = '-250px'; menu.style.width = '220px'; menu.style.height = '100vh'; menu.style.background = '#000'; menu.style.display = 'flex'; menu.style.flexDirection = 'column'; menu.style.paddingTop = '80px'; menu.style.transition = '0.4s'; menu.style.boxShadow = '5px 0 20px rgba(0,0,0,0.5)';

// Hamburger button const hamburger = document.createElement('div'); hamburger.innerHTML = '☰'; hamburger.style.position = 'fixed'; hamburger.style.top = '20px'; hamburger.style.left = '20px'; hamburger.style.fontSize = '28px'; hamburger.style.cursor = 'pointer'; hamburger.style.zIndex = '1000'; document.body.appendChild(hamburger);

hamburger.addEventListener('click', ()=>{ if(menu.style.left === '0px'){ menu.style.left = '-250px'; } else { menu.style.left = '0px'; } });

// Close menu when clicking a link links.forEach(link => { link.addEventListener('click', ()=>{ menu.style.left = '-250px'; }); });