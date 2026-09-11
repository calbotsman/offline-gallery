const reveals = document.querySelectorAll(".section, .hero, .site-footer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});

const form = document.querySelector(".visit-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const input = form.querySelector("input");
    if (!button || !input) return;
    button.textContent = "Request sent";
    input.value = "";
  });
}
