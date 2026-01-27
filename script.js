// ================= TYPING EFFECT =================
const text = "Front End Developer | Java Full Stack Developer";
let index = 0;
const speed = 100;

const typingElement = document.getElementById("typing");

if (typingElement) {
  typingElement.innerHTML = "";

  function typingEffect() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typingEffect, speed);
    }
  }

  typingEffect();
}
