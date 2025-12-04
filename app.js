const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

// Toggle open/close on hamburger click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("close");
  nav.classList.toggle("open");
});

// Close menu + smooth scroll — using event delegation
nav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return; // Not clicking a link

  const href = link.getAttribute("href");

  // Smooth scroll if link points to a real section
  if (href && href.startsWith("#") && href !== "#") {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Close mobile nav if open
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    hamburger.classList.remove("close");
  }
});
