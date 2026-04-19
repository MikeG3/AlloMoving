let currentLang = "en";

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "fr" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  document.getElementById("langToggle").textContent =
    currentLang === "en" ? "FR" : "EN";
});