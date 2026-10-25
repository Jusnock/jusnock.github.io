"use strict";
const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  toggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener("click", event => {
  if (!event.target.closest(".nav-wrap")) closeMenu();
});
window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);
document.querySelector("#copy-email").addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText("vazquezjuanfrancisco49@gmail.com");
    status.dataset.copied = "true";
    status.textContent = document.documentElement.lang === "en" ? "Email copied" : "Email copiado";
  } catch {
    status.dataset.copied = "false";
    status.textContent = "vazquezjuanfrancisco49@gmail.com";
  }
});
