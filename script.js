/* PARTICLES */
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#3fa9f5" },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      color: "#3fa9f5",
      opacity: 0.3
    },
    move: { speed: 2 }
  }
});

/* TYPE EFFECT */
const texts = [
  "Informatics Student",
  "Creative Thinker",
  "Web Explorer"
];

let count = 0;
let index = 0;

(function typeEffect() {
    const current = texts[count];
    document.getElementById("typing").textContent =
        current.slice(0, ++index);

    if (index === current.length) {
        setTimeout(() => index = 0, 1200);
        count = (count + 1) % texts.length;
    }

    setTimeout(typeEffect, 120);
})();

/* FADE IN */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add("show");
    });
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
