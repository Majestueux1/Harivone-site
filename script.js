document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  success.hidden = false;
  form.reset();
});
