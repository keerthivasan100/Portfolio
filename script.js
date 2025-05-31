const sections = document.querySelectorAll("section");

function revealSection() {
  const trigger = window.innerHeight * 0.8;
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);
