"use strict";
document.querySelectorAll(".lab-article .highlight").forEach(block => {
  const code = block.querySelector("pre code");
  if (!code || !navigator.clipboard) return;
  const button = document.createElement("button");
  button.className = "code-copy";
  button.type = "button";
  button.textContent = "Copiar código";
  button.setAttribute("aria-label", "Copiar bloque de código");
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = "Copiado ✓";
      setTimeout(() => { button.textContent = "Copiar código"; }, 2000);
    } catch { button.textContent = "No se pudo copiar"; }
  });
  block.append(button);
});
const links = [...document.querySelectorAll('.lab-index nav a')];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
  }, { rootMargin: "-15% 0px -65% 0px" });
  document.querySelectorAll('.lab-article h2[id]').forEach(heading => observer.observe(heading));
}
