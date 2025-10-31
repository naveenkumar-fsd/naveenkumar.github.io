// Typing Animation
const typedText = document.querySelector(".typing");
const words = ["Naveen Kumar", "Java Full Stack Developer", "Frontend Developer"];
let i = 0, j = 0, isDeleting = false, speed = 140;

function typeEffect() {
  let current = words[i];
  if (!isDeleting) {
    typedText.textContent = current.substring(0, j++);
  } else {
    typedText.textContent = current.substring(0, j--);
  }

  if (j === current.length + 1) {
    isDeleting = true;
    speed = 100;
  }
  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 140;
  }

  setTimeout(typeEffect, speed);
}
typeEffect();


// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    let top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});
