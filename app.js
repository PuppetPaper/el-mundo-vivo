/* El Mundo Vivo — interacciones del sitio (sin dependencias) */
(function () {
  "use strict";

  var regions = {
    valdoria: {
      kicker: "El corazón de los reinos",
      name: "Valdoria",
      description: "Prados abiertos, bosques templados y ciudades comerciales donde todos los caminos parecen cruzarse. El lugar en el que una llegada corriente puede convertirse en el principio de una vida extraordinaria.",
      tags: ["Comercio", "Academias", "Primeros pasos"],
      note: "Tu primera parada: un gremio, un taller o una mesa junto al fuego.",
      image: "assets/art/region-valdoria.webp",
      alt: "Lámina histórica de Valdoria: un río ancho, pastos, barcas y una ciudad lejana bajo un cielo inmenso. Pintura de Philips Koninck, dominio público.",
      plate: "Lámina · Philips Koninck, Wide River Landscape, c. 1648"
    },
    dorskar: {
      kicker: "Las tierras del norte",
      name: "Dorskar",
      description: "Montañas nevadas, fortalezas y minas profundas. Entre caminos difíciles y promesas que se cumplen, el trabajo de un artesano puede sostener a toda una región.",
      tags: ["Minería", "Herrería", "Ingeniería"],
      note: "Bajo la nieve, la montaña todavía guarda secretos.",
      image: "assets/art/region-dorskar.webp",
      alt: "Lámina histórica de Dorskar: un bosque invernal oscuro con un cielo dorado al fondo. Pintura de Théodore Rousseau, dominio público.",
      plate: "Lámina · Théodore Rousseau, The Forest in Winter at Sunset, c. 1846"
    },
    namaris: {
      kicker: "Las ciudades del desierto",
      name: "Namaris",
      description: "Oasis, caravanas y mercados sobre las huellas de civilizaciones desaparecidas. Aquí el conocimiento puede ser tan valioso como las mercancías que cruzan las arenas.",
      tags: ["Alquimia", "Caravanas", "Ruinas antiguas"],
      note: "Algunas de las mayores leyendas siguen enterradas.",
      image: "assets/art/region-namaris.webp",
      alt: "Lámina histórica de Namaris: un sol rojo sobre una llanura árida con siluetas de cactus. Pintura de Arkhip Kuindzhi, dominio público.",
      plate: "Lámina · Arkhip Kuindzhi, Red Sunset, 1905–1908"
    },
    thaloria: {
      kicker: "El archipiélago oriental",
      name: "Thaloria",
      description: "Puertos, bosques costeros y ciudades que miran al mar. Las rutas unen a sus habitantes; las islas desconocidas despiertan la curiosidad de quienes no se conforman con el horizonte.",
      tags: ["Navegación", "Pesca", "Expediciones"],
      note: "Un mapa termina. El mar, todavía no.",
      image: "assets/art/region-thaloria.webp",
      alt: "Lámina histórica de Thaloria: un mar en calma con la luz del sol poniente sobre el horizonte. Pintura de John Frederick Kensett, dominio público.",
      plate: "Lámina · John F. Kensett, Sunset on the Sea, 1872"
    },
    eryndor: {
      kicker: "Las tierras olvidadas",
      name: "Eryndor",
      description: "Bosques antiguos, fortalezas abandonadas y criaturas mágicas. Un lugar donde la naturaleza no siempre respeta las leyes que creías conocer.",
      tags: ["Druidas", "Magia", "Investigación"],
      note: "No es solo un lugar peligroso. Es un lugar que aún no entiendes.",
      image: "assets/art/region-eryndor.webp",
      alt: "Lámina histórica de Eryndor: un paraje antiguo y oscuro con un árbol seco, luz dorada y dos figuras diminutas. Pintura de Albert Pinkham Ryder, dominio público.",
      plate: "Lámina · Albert Pinkham Ryder, The Forest of Arden, 1888"
    }
  };

  var paths = {
    artesano: {
      kicker: "El valor de lo que creas",
      title: "Hay espadas que cuentan la historia de dos héroes.",
      text: "El que la empuñó. Y el que supo forjarla. Empieza como aprendiz, abre tu propio taller y descubre técnicas que podrían hacer llegar tu nombre hasta la corte de un reino.",
      quote: "«Elias nunca necesitó ser guerrero para vivir una gran historia.»",
      from: "Aprendiz",
      to: "Maestro"
    },
    aventurero: {
      kicker: "Más allá de las puertas",
      title: "No todas las leyendas empiezan con una profecía.",
      text: "Un primer contrato. Un compañero inesperado. Unas ruinas que no aparecen en los mapas. El gremio puede ser tu punto de partida, pero nunca será la única forma de aventurarte.",
      quote: "«Adrian encontró una orden olvidada cuando solo buscaba un camino.»",
      from: "Aspirante",
      to: "Veterano"
    },
    comerciante: {
      kicker: "Los caminos que nos unen",
      title: "Una caravana puede cambiar el destino de una aldea.",
      text: "Descubre qué necesita cada región, acuerda encargos con artesanos y contrata escoltas. Una compañía comercial no solo transporta mercancías: conecta vidas.",
      quote: "«Lucian encontró oportunidades donde otros solo veían distancias.»",
      from: "Transportista",
      to: "Mercader"
    },
    investigador: {
      kicker: "El poder de una pregunta",
      title: "Hay puertas que solo se abren con conocimiento.",
      text: "Estudia documentos, criaturas y civilizaciones. Contrasta los recuerdos de los habitantes y descubre lo que se esconde entre dos versiones de la misma historia.",
      quote: "«Un libro antiguo también puede ser el comienzo de una aventura.»",
      from: "Estudiante",
      to: "Investigador"
    },
    ciudadano: {
      kicker: "El arte de quedarse",
      title: "Tu gran aventura puede tener una dirección.",
      text: "Consigue un hogar, conoce a tus vecinos y abre una posada, una librería o una granja. No necesitas marcharte al fin del mundo para encontrar tu lugar en él.",
      quote: "«Alguien tiene que encender el fuego cuando regresan los viajeros.»",
      from: "Vecino",
      to: "Referente local"
    },
    dirigente: {
      kicker: "El poder como responsabilidad",
      title: "Construir algo mayor que tú también deja huella.",
      text: "Organiza una asociación, dirige un gremio o participa en la vida política. La influencia tendría límites: gobernar no significa decidir cómo deben vivir los demás.",
      quote: "«Mara aprendió que una buena decisión también se mide por a quién protege.»",
      from: "Portavoz",
      to: "Autoridad"
    },
    explorador: {
      kicker: "El horizonte como oficio",
      title: "Cada mapa termina donde empieza tu historia.",
      text: "Traza rutas, documenta lo que encuentras y vuelve con mapas que otros puedan usar. El descubrimiento auténtico se gana observando, no comprando atajos.",
      quote: "«Nadia volvió con un cuaderno lleno de lugares que aún no tenían nombre.»",
      from: "Cartógrafo",
      to: "Descubridor"
    }
  };

  var days = [
    ["Lunes / La tormenta", "La mina guarda silencio.", "Una tormenta provoca un derrumbe en Dorskar. Hay trabajadores atrapados. El gremio local publica un contrato urgente y la región empieza a movilizarse.", "Mineros · Aventureros · Gremios"],
    ["Martes / El rescate", "Alguien responde a la llamada.", "Un grupo de NPC rescata a varios trabajadores y descubre señales de criaturas subterráneas. Los comerciantes empiezan a advertir retrasos en el hierro.", "Compañeros NPC · Comerciantes"],
    ["Miércoles / Las consecuencias", "El eco llega hasta Valdoria.", "Los herreros reciben menos metal. Unos buscan materiales alternativos; otros, nuevos proveedores. Los transportistas encuentran oportunidades en rutas diferentes.", "Herreros · Transportistas"],
    ["Jueves / El descubrimiento", "Una cámara fuera de los mapas.", "Un grupo de jugadores investiga las galerías y encuentra documentos de una civilización desaparecida. El derrumbe se convierte también en una pregunta.", "Aventureros · Investigadores"],
    ["Viernes / La reconstrucción", "Volver a levantar lo cotidiano.", "El gobierno contrata constructores y mineros. Los aventureros aseguran las galerías mientras una sociedad académica ofrece recompensas por los documentos.", "Constructores · Mineros · Académicos"],
    ["Sábado / El rumor", "El Corazón de la Montaña.", "La economía empieza a recuperarse. Un investigador NPC interpreta parte de un texto y encuentra una referencia que despierta el interés de los exploradores.", "Investigadores · Exploradores"],
    ["Domingo / El legado", "Una puerta que nadie esperaba.", "Una expedición alcanza un santuario olvidado. Alguien cumple, sin saberlo, las condiciones para iniciar una disciplina secreta. En el resto del continente, la vida sigue.", "Exploradores · Una posible clase oculta"]
  ];

  var $ = function (id) { return document.getElementById(id); };
  var currentDay = 0;

  /* ---------------------------------------------------------------- regiones */
  var regionTabs = Array.prototype.slice.call(document.querySelectorAll("[data-region]"));

  function selectRegion(button, focus) {
    var data = regions[button.dataset.region];
    if (!data) return;

    regionTabs.forEach(function (tab) {
      var active = tab === button;
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.tabIndex = active ? 0 : -1;
    });

    var art = document.querySelector(".region-art");
    art.src = data.image;
    art.alt = data.alt;

    $("region-plate").textContent = data.plate;
    $("region-kicker").textContent = data.kicker;
    $("region-name").textContent = data.name;
    $("region-description").textContent = data.description;
    $("region-note").textContent = data.note;

    var tags = $("region-tags");
    tags.replaceChildren.apply(tags, data.tags.map(function (label) {
      var span = document.createElement("span");
      span.textContent = label;
      return span;
    }));

    var panel = $("region-detail");
    if (button.id) panel.setAttribute("aria-labelledby", button.id);

    if (focus) button.focus();
  }

  regionTabs.forEach(function (button) {
    button.addEventListener("click", function () { selectRegion(button, false); });
    button.addEventListener("keydown", function (event) {
      var index = regionTabs.indexOf(button);
      var next;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % regionTabs.length;
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + regionTabs.length) % regionTabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = regionTabs.length - 1;
      if (typeof next === "number") {
        event.preventDefault();
        selectRegion(regionTabs[next], true);
      }
    });
  });

  /* ----------------------------------------------------------------- caminos */
  var pathButtons = Array.prototype.slice.call(document.querySelectorAll("[data-path]"));

  function selectPath(button, focus) {
    var data = paths[button.dataset.path];
    if (!data) return;

    pathButtons.forEach(function (item) {
      var active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", active ? "true" : "false");
    });

    $("life-kicker").textContent = data.kicker;
    $("life-title").textContent = data.title;
    $("life-text").textContent = data.text;
    $("life-quote").textContent = data.quote;

    var progression = $("life-progression");
    progression.replaceChildren.apply(progression, [data.from, "→", data.to, "→", "Una leyenda propia"].map(function (label, index) {
      var node = document.createElement(index % 2 ? "i" : "span");
      node.textContent = label;
      if (index % 2) node.setAttribute("aria-hidden", "true");
      return node;
    }));

    if (focus) button.focus();
  }

  pathButtons.forEach(function (button) {
    button.addEventListener("click", function () { selectPath(button, false); });
    button.addEventListener("keydown", function (event) {
      var index = pathButtons.indexOf(button);
      var next;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % pathButtons.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + pathButtons.length) % pathButtons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = pathButtons.length - 1;
      if (typeof next === "number") {
        event.preventDefault();
        selectPath(pathButtons[next], true);
      }
    });
  });

  /* ----------------------------------------------------------------- crónica */
  var dayButtons = Array.prototype.slice.call(document.querySelectorAll("[data-day]"));

  function showDay(index) {
    currentDay = (index + days.length) % days.length;
    var data = days[currentDay];

    ["day-label", "day-title", "day-text", "day-people"].forEach(function (id, i) {
      $(id).textContent = data[i];
    });
    $("day-number").textContent = String(currentDay + 1).padStart(2, "0");

    dayButtons.forEach(function (button) {
      var active = Number(button.dataset.day) === currentDay;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var next = $("next-day");
    next.innerHTML = currentDay === days.length - 1
      ? 'Volver al lunes <span aria-hidden="true">↺</span>'
      : 'Siguiente día <span aria-hidden="true">→</span>';
  }

  dayButtons.forEach(function (button, index) {
    button.setAttribute("aria-label", days[index][0].replace(" / ", ", "));
    button.addEventListener("click", function () { showDay(index); });
  });

  if ($("next-day")) {
    $("next-day").addEventListener("click", function () { showDay(currentDay + 1); });
  }

  /* -------------------------------------------------------------------- menú */
  var menu = document.querySelector(".menu-toggle");
  var nav = $("nav");

  function closeMenu() {
    if (!menu || !nav) return;
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }

  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("open", open);
    });
    Array.prototype.forEach.call(nav.querySelectorAll("a"), function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menu.focus();
      }
    });
  }
})();
