/* -----------------------
   script.js - merged
   Typing + Scroll Reveal + Project Modal
   ----------------------- */

/* TYPING ANIMATION */
const typingEl = document.querySelector(".typing");
const words = [
  "Java Full Stack Developer",
  "Frontend Developer",
  "Sensor + Java Systems"
];
let wIndex = 0, cIndex = 0, deleting = false;

function typeLoop(){
  if(!typingEl) return; // safety
  const current = words[wIndex];
  if(!deleting){
    typingEl.textContent = current.slice(0, cIndex + 1);
    cIndex++;
    if(cIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 900);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, cIndex - 1);
    cIndex--;
    if(cIndex === 0){
      deleting = false;
      wIndex = (wIndex + 1) % words.length;
    }
  }
  setTimeout(typeLoop, deleting ? 60 : 90);
}
typeLoop();

/* SCROLL REVEAL */
const sections = document.querySelectorAll(".section");
function revealOnScroll(){
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* PROJECT DATA (use your project descriptions) */
const projectData = {
  1: {
    title: "Development of a Low-Cost Soil Nutrient Analysis System",
    description:
`Designed and implemented a sensor-based system to analyze macro nutrients (N, P, K) in soil using the TCS3200 color sensor integrated with Arduino. 
Developed a Java application to read and process sensor data, enabling real-time visualization of soil nutrient levels. The system compares sensor output with standard calibration values to classify nutrient availability as Low, Medium, or High. Aimed at providing a cost-effective and portable solution for farmers to assess soil fertility and support precision agriculture practices.`
    , github: "#" , live: "#"
  },
  2: {
    title: "Personal Portfolio Website",
    description:
`Developed a modern and fully responsive personal portfolio website using HTML5, CSS3, and JavaScript to highlight projects, technical skills, and contact information. The website features a clean UI with smooth animations, section-based navigation, and interactive elements for an enhanced user experience. Implemented responsive layouts using media queries to ensure compatibility across mobile, tablet, and desktop devices. Implemented custom CSS effects, hover transitions, and JavaScript-based dynamic components to improve interactivity.`
    , github: "https://github.com/naveenkumar-fsd/portfolioProject" , live: "https://github.com/naveenkumar-fsd/naveenkumar.github.io"
  }
};
function showProject(num) {
    document.getElementById("modalTitle").innerText = projectData[num].title;
    document.getElementById("modalDescription").innerText = projectData[num].description;

    document.getElementById("modalCode").href = projectData[num].code;
    document.getElementById("modalLive").href = projectData[num].live;

    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

/* MODAL HANDLING */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalGithub = document.getElementById("modalGithub");
const modalLive = document.getElementById("modalLive");
const modalClose = document.querySelector(".modal-close");

// open modal when view buttons clicked
document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-id");
    const data = projectData[id];
    if(!data) return;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    if(modalGithub) modalGithub.href = data.github || "#";
    if(modalLive) modalLive.href = data.live || "#";
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  });
});

// close modal
if(modalClose) modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
});
window.addEventListener("click", (e) => {
  if(e.target === modal) { modal.style.display = "none"; modal.setAttribute("aria-hidden", "true"); }
});

/* YEAR in footer */
const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();
