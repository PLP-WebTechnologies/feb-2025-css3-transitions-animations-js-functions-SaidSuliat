const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const modal = document.getElementById("nameModal");
const clickSound = document.getElementById("clickSound");

// Load saved settings
document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("userName");
  const theme = localStorage.getItem("theme");
  const fontSize = localStorage.getItem("fontSize");
  const fontColor = localStorage.getItem("fontColor");

  if (name) updateGreeting(name);
  if (theme === "dark") document.body.classList.add("dark-theme");
  if (fontSize) document.body.style.fontSize = fontSize;
  if (fontColor) document.body.style.color = fontColor;

  document.getElementById("fontSizeSelect").value = fontSize || "16px";
  document.getElementById("fontColorPicker").value = fontColor || "#000000";
});

// Save Name from Modal
document.getElementById("saveName").addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    updateGreeting(name);
    modal.style.display = "none";
    nameInput.value = "";
    playClick();
  }
});

// Update greeting
function updateGreeting(name) {
  greeting.textContent = `Welcome, ${name}!`;
  greeting.classList.add("fade-in");
}

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const theme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
  playClick();
});

// Animate button
document.getElementById("animateBtn").addEventListener("click", () => {
  const btn = document.getElementById("animateBtn");
  btn.classList.remove("bounce");
  void btn.offsetWidth;
  btn.classList.add("bounce");
  playClick();
});

// Clear all data
document.getElementById("clearData").addEventListener("click", () => {
  localStorage.clear();
  document.body.classList.remove("dark-theme");
  document.body.style.fontSize = "";
  document.body.style.color = "";
  greeting.textContent = "Welcome!";
  playClick();
});

// Open/Close Modal
document.getElementById("openModal").addEventListener("click", () => {
  modal.style.display = "flex";
  playClick();
});

document.getElementById("closeModal").addEventListener("click", () => {
  modal.style.display = "none";
  playClick();
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Font Size change
document.getElementById("fontSizeSelect").addEventListener("change", (e) => {
  const size = e.target.value;
  document.body.style.fontSize = size;
  localStorage.setItem("fontSize", size);
  playClick();
});

// Font Color change
document.getElementById("fontColorPicker").addEventListener("change", (e) => {
  const color = e.target.value;
  document.body.style.color = color;
  localStorage.setItem("fontColor", color);
  playClick();
});

// Sound Effect
function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}
