document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".lang-button");
  const esBlocks = document.querySelectorAll(".lang-es");
  const enBlocks = document.querySelectorAll(".lang-en");

  function showLang(lang) {
    if (lang === "es") {
      esBlocks.forEach(el => el.style.display = "");
      enBlocks.forEach(el => el.style.display = "none");
    } else {
      esBlocks.forEach(el => el.style.display = "none");
      enBlocks.forEach(el => el.style.display = "");
    }
    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => showLang(btn.dataset.lang));
  });

  // Default language
  showLang("es");
});
