const toggle = document.querySelector(".menu-toggle");
const panel = document.querySelector(".menu-panel");
const closeButton = document.querySelector(".menu-close");
const overlay = document.querySelector(".menu-overlay");
const menuLinks = document.querySelectorAll(".menu-panel a");

function openMenu() {
  panel.classList.add("open");
  overlay.classList.add("open");
  document.body.classList.add("menu-open");
  toggle.setAttribute("aria-expanded", "true");
  panel.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  panel.classList.remove("open");
  overlay.classList.remove("open");
  document.body.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
  panel.setAttribute("aria-hidden", "true");
}

toggle.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
menuLinks.forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});
document.getElementById("year").textContent = new Date().getFullYear();
