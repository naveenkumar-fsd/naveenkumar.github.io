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


// Project Modal Data
const projectData = {
  1: {
    title: "Development of a Low-Cost Soil Nutrient Analysis System",
    description: `Designed and implemented a sensor-based system to analyze macro nutrients (N, P, K) in soil using the TCS3200
color sensor integrated with Arduino. Developed a Java application to read and process sensor data, enabling 
real-time visualization of soil nutrient levels. The system compares sensor output with standard calibration 
values to classify nutrient availability as Low, Medium, or High. Aimed at providing a cost-effective and 
portable solution for farmers to assess soil fertility and support precision agriculture practices.`
  },
  2: {
    title: "Personal Portfolio Website",
    description: `Developed a modern and fully responsive personal portfolio website using HTML5, CSS3, and JavaScript to 
highlight projects, technical skills, and contact information. Features a clean UI with smooth animations,
responsive layouts, and dynamic JavaScript components for a better user experience.`
  }
};


// Modal Controls
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-id");
    modalTitle.innerText = projectData[id].title;
    modalDesc.innerText = projectData[id].description;
    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) modal.style.display = "none";
});
