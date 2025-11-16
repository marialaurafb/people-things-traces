---
layout: single
title:
permalink: /
---

<div class="lang-toggle">
  <button type="button" data-lang="es" class="lang-button active">ES</button>
  <button type="button" data-lang="en" class="lang-button">EN</button>
</div>

<div class="lang-content lang-es">
  <h1>Personas, Cosas, Huellas</h1>
  <p>
    Bienvenida/o a <strong>Personas, Cosas, Huellas</strong>, mi sitio web de investigación.
  </p>
  <p>
    El nombre proviene de una base de datos que desarrollé durante mi doctorado, originalmente pensada para estudiar a los pintores coloniales mexicanos, pero lo suficientemente flexible como para expandirse a otros periodos y geografías. El modelo reúne tres elementos centrales:
    </p>
    <ul>
        <li><strong>Las personas</strong></li>
        <li><strong>Las cosas que producen, usan o con las que interactúan</strong></li>
        <li><strong>Las huellas que dejan en documentos y archivos</strong></li>
    </ul>
  <p>
    Estos tres elementos aparecen constantemente en mi trabajo como historiadora del arte y humanista digital. Moldean mi manera de pensar sobre las relaciones, la cultura material, el espacio y la memoria. Este sitio reúne investigaciones de diferentes campos, así como las ideas y experimentos que acompañan mi proceso.
    </p>
    <p>
    Eventualmente, este sitio también enlazará a la base de datos completa que construí durante el doctorado. Mientras tanto, compartiré aquí proyectos en curso, reflexiones y otros trabajos interdisciplinarios.
</p>
<p>
Como mi vida cotidiana y mi investigación ocurren entre dos lenguas (el español y el inglés), y entre dos mundos (lo digital y lo análogo porque también soy "crafter"), encontrarás una mezcla de los cuatro en este espacio. Algunas publicaciones estarán en inglés, otras en español, pero haré lo posible por que todo esté disponible en ambos idiomas.
</p>  
</div>

<div class="lang-content lang-en" style="display:none;">
  <h1>People, Things, Traces</h1>
  <p>
    Welcome to <strong>People, Things, Traces</strong>, my research website.
  </p>
  <p>
    The name comes from a database I developed for my PhD, originally designed to study colonial Mexican painters but flexible enough to expand across periods and geographies. The model brings together three core elements:
    </p>
    <ul>
        <li><strong>People</strong></li>
        <li><strong>The things they make, use, and interact with</strong></li>
        <li><strong>The traces they leave behind in documents and archives</strong></li>
    </ul>
  <p>
    These three elements recur throughout my work as an art historian and digital humanist. They shape how I think about relationships, material culture, space, and memory. This site gathers research from different fields, along with the thoughts and experiments that accompany my process.
    </p>
    <p>
    Eventually, this website will also link to the full database I assembled during my doctorate. In the meantime, I will be sharing ongoing projects, reflections, and other interdisciplinary work.
</p>
<p>
Because my daily life and research move between two languages (Spanish and English), and two worlds (the digital and the analog, as I’m also a crafter), you will find a mix of all four here. Some posts will appear in English, others in Spanish, and I will do my best to make everything available in both.
  </p>
</div>

<script>
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
</script>


