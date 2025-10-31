// Typing Animation
const typedText = document.querySelector(".typing");
const words = ["Naveen Kumar", "Java Full Stack Developer", "Frontend Developer"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
    let text = words[i];
    typedText.textContent = text.substring(0, j);

    if(!isDeleting) j++;
    else j--;

    if(j === text.length + 1) isDeleting = true;
    if(j === 0) { isDeleting = false; i = (i + 1) % words.length; }

    setTimeout(typeEffect, isDeleting ? 80 : 140);
}
typeEffect();

// Scroll Animation
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => sec.getBoundingClientRect().top < window.innerHeight - 100 && sec.classList.add("show"));
});

// Modal Project Info
const projectData = {
    1: {
        title: "Low-Cost Soil Nutrient Analysis System",
        description: `Sensor + Java application for real-time soil analysis.`,
        code: "#",
        live: "#"
    },
    2: {
        title: "Personal Portfolio Website",
        description: `Modern responsive website with animations.`,
        code: "https://github.com/naveenkumar-fsd/portfolioProject",
        live: "https://naveenkumar-fsd.github.io/naveenkumar.github.io/"
    }
};

const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", function(){
        let id = this.getAttribute("data-id");
        document.getElementById("modalTitle").innerText = projectData[id].title;
        document.getElementById("modalDescription").innerText = projectData[id].description;
        document.getElementById("modalCode").href = projectData[id].code;
        document.getElementById("modalLive").href = projectData[id].live;
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => modal.style.display = "none");
