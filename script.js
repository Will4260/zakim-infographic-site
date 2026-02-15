// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// Reveal-on-scroll animation
const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach(el => io.observe(el));

// Stat cards: click to toggle details
document.querySelectorAll(".stat").forEach(stat => {
  stat.addEventListener("click", () => {
    stat.classList.toggle("stat--open");
  });
});
