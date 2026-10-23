// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the nav link of the section currently in view
const links = document.querySelectorAll(".nav a");
const sections = [...links].map(a => document.querySelector(a.getAttribute("href")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => {
        const active = a.getAttribute("href") === `#${entry.target.id}`;
        a.style.fontWeight = active ? "600" : "400";
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(s => s && observer.observe(s));