AOS.init({ duration: 1200, once: true });

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// script.js

const toggleMode = document.getElementById('toggleMode');
const body = document.body;

toggleMode.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Swap icon between moon & sun
  toggleMode.innerHTML = body.classList.contains('dark-mode')
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
});

// Create modal dynamically
const viewButtons = document.querySelectorAll('.view-btn');

viewButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-img');

    // Create modal elements
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <span class="close">&times;</span>
      <div class="modal-content">
        <img src="${src}" alt="Project View">
      </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';

    // Close modal
    modal.querySelector('.close').addEventListener('click', () => {
      modal.remove();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  });
});


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const hamburger = document.getElementById("hamburger");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});



const toggleBtn = document.getElementById("toggleMode");
if (toggleBtn) {
    if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark-mode");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });
}


const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (backToTop) backToTop.style.display = window.scrollY > 100 ? "block" : "none";
});
if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}


const tabs = document.querySelectorAll(".tab-btn");
const projectCategories = document.querySelectorAll(".project-category");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const target = tab.dataset.target;
        projectCategories.forEach(cat => {
            cat.classList.toggle("active", cat.classList.contains(target));
        });
    });
});


const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = modal?.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const videoSrc = btn.dataset.video;
        if (!videoSrc || !modal) return;

        modal.style.display = "flex";
        modalVideo.src = videoSrc;
        modalVideo.style.display = "block";
        modalVideo.play();
    });
});


function closeModal() {
    if (!modal) return;
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
}

closeBtn?.addEventListener("click", closeModal);

modal?.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

console.log("🔥 Portfolio Script Loaded");