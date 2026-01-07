// AOS Animation
AOS.init({ duration: 1000 });

// ===== Typing Effect =====
const text = "Java Full Stack Developer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// ===== Dark Mode Toggle with Local Storage =====
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// ===== Smooth Scroll =====
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Active Navbar =====
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-link");

  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 120;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(".nav-link[href*=" + id + "]")
        ?.classList.add("active");
    }
  });

  document.getElementById("topBtn").style.display =
    window.scrollY > 300 ? "block" : "none";
});

// ===== Contact Form Validation =====
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});

// ===== Scroll Top =====
function scrollTopPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
