/* El Mundo Vivo — interacciones del sitio (sin dependencias, sin red) */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };

  /* ------------------------------------------------------------- luz de portada */
  var timeButtons = Array.prototype.slice.call(document.querySelectorAll("button[data-time]"));
  var timeNames = { amanecer: "amanecer", ocaso: "ocaso", noche: "noche" };

  function setTime(value, announce) {
    if (!timeNames[value]) return;
    document.documentElement.setAttribute("data-time", value);
    timeButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", button.dataset.time === value ? "true" : "false");
    });
    if (announce && $("light-status")) {
      $("light-status").textContent = "Luz de " + timeNames[value] + " en la portada.";
    }
  }

  timeButtons.forEach(function (button) {
    button.addEventListener("click", function () { setTime(button.dataset.time, true); });
  });

  /* -------------------------------------------------------------------- llegada */
  var arrivals = {
    forja: {
      kicker: "La forja de la plaza",
      title: "El herrero no levanta la vista del yunque.",
      text: "Te señala un banco con la barbilla y sigue golpeando. Al rato te tiende unas tenazas: no para que forjes, sino para que sujetes. La pieza es una bisagra para la puerta de la escuela y no puede esperar.",
      text2: "No has aprendido a forjar. Has aprendido dónde se guardan las tenazas, que es distinto y también sirve. Al salir, el maestro dice que vuelvas mañana: la puerta queda abierta.",
      open: "Un banco libre y una pregunta: ¿vuelves mañana?",
      image: "assets/fantasy/forge.webp",
      alt: "Escena ilustrativa: un herrero trabajando junto al yunque, con chispas y luz cálida de fragua.",
      caption: "Escena ilustrativa · La forja, primera hora"
    },
    taberna: {
      kicker: "La taberna de la plaza",
      title: "Alguien te pone un cuenco delante sin preguntar.",
      text: "Quien atiende la mesa te avisa de que la sopa quema y te hace sitio junto a la ventana. Al rato te enteras de que el molino lleva tres días parado y de que en Dorskar han cerrado una galería.",
      text2: "No has hablado con nadie importante. Has escuchado, que en un pueblo pequeño es casi lo mismo. Antes de irte, alguien deja una llave sobre la mesa y dice que la habitación de arriba está libre.",
      open: "Una mesa, una noticia y una deuda pequeña que se paga con conversación.",
      image: "assets/fantasy/home.webp",
      alt: "Escena ilustrativa: interior cálido de una casa con una persona sirviendo comida y vapor sobre la mesa.",
      caption: "Escena ilustrativa · La taberna, a media mañana"
    },
    camino: {
      kicker: "El camino del bosque",
      title: "El empedrado se acaba donde empieza el sendero.",
      text: "Andas un rato sin encontrar nada: un mojón con el nombre de Valdoria medio borrado, un carro volcado hace tiempo y un pájaro que te sigue de rama en rama. Al volver, sabes que el pueblo está a menos de una hora.",
      text2: "No has encontrado un tesoro, pero ya reconoces el camino de vuelta. En el borde del mapa hay una marca que no recuerdas haber visto al salir. Mañana podrías volver a buscarla.",
      open: "Un sendero que no está en el mapa y una hora de luz que se gasta rápido.",
      image: "assets/fantasy/forest.webp",
      alt: "Escena ilustrativa: un sendero de bosque entre árboles altos, con luz filtrada y niebla suave.",
      caption: "Escena ilustrativa · El camino del bosque"
    }
  };

  var arrivalButtons = Array.prototype.slice.call(document.querySelectorAll("[data-arrival]"));

  function selectArrival(button) {
    var data = arrivals[button.dataset.arrival];
    if (!data) return;
    arrivalButtons.forEach(function (item) {
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });
    var art = $("arrival-art");
    art.src = data.image;
    art.alt = data.alt;
    $("arrival-caption").textContent = data.caption;
    $("arrival-kicker").textContent = data.kicker;
    $("arrival-title").textContent = data.title;
    $("arrival-text").textContent = data.text;
    $("arrival-text-2").textContent = data.text2;
    $("arrival-open").innerHTML = "";
    var label = document.createElement("span");
    label.textContent = "Queda abierto";
    $("arrival-open").appendChild(label);
    $("arrival-open").appendChild(document.createTextNode(" " + data.open));
  }

  arrivalButtons.forEach(function (button) {
    button.addEventListener("click", function () { selectArrival(button); });
  });

  /* ------------------------------------------------------------------- regiones */
  var regions = {
    valdoria: {
      kicker: "El corazón de los reinos",
      name: "Valdoria",
      description: "El mercado abre antes de que aclare. Entre puestos de queso y herraduras, dos carreteros discuten por el precio del hierro y una niña persigue a un ganso que no piensa dejarse atrapar. Nadie te mira dos veces: eso, aquí, es una forma de cortesía.",
      ifLine: "Tu casa estaría a diez minutos del taller y a dos del pan.",
      tags: ["Comercio", "Academias", "Primeros pasos"],
      note: "El lugar donde casi todo el mundo empieza sin saber que ha empezado.",
      image: "assets/fantasy/valdoria.webp",
      alt: "Escena ilustrativa de Valdoria: prados, un río ancho y una ciudad de piedra bajo un cielo amplio.",
      plate: "Escena ilustrativa · Valdoria"
    },
    dorskar: {
      kicker: "Las tierras del norte",
      name: "Dorskar",
      description: "La nieve tapa el camino viejo hasta la mina del Cuervo. En la fonda, los mineros hablan bajo: desde el derrumbe, el turno de noche no ha vuelto a sonar. Alguien deja una moneda sobre la mesa y nadie pregunta para qué.",
      ifLine: "Aprenderías a medir el frío por el crujido de la leña.",
      tags: ["Minería", "Herrería", "Ingeniería"],
      note: "Un sitio donde un favor se paga con otro favor, y se recuerda.",
      image: "assets/fantasy/dorskar.webp",
      alt: "Escena ilustrativa de Dorskar: montañas nevadas, pinares y una fortaleza entre la niebla.",
      plate: "Escena ilustrativa · Dorskar"
    },
    namaris: {
      kicker: "Las ciudades del desierto",
      name: "Namaris",
      description: "La caravana llega al atardecer, cuando las piedras todavía guardan el calor. Un alquimista compra agua y vende sombra; en el zoco, una anciana asegura que bajo la arena hay una ciudad que sigue teniendo calles.",
      ifLine: "Dormirías en la azotea y aprenderías el nombre de las estrellas.",
      tags: ["Alquimia", "Caravanas", "Ruinas antiguas"],
      note: "Aquí una pregunta puede valer más que una moneda.",
      image: "assets/fantasy/namaris.webp",
      alt: "Escena ilustrativa de Namaris: una ciudad de arena, cúpulas y una caravana al atardecer.",
      plate: "Escena ilustrativa · Namaris"
    },
    thaloria: {
      kicker: "El archipiélago oriental",
      name: "Thaloria",
      description: "El puerto huele a sal y a brea. Un barquero remienda una red que ya no usa y cuenta que ayer vio una isla donde el mapa solo tiene una mancha. Nadie se ríe: aquí todos tienen una historia así.",
      ifLine: "Sabrías cuándo va a cambiar la marea sin mirar el cielo.",
      tags: ["Navegación", "Pesca", "Expediciones"],
      note: "El mapa termina donde empieza la conversación.",
      image: "assets/fantasy/thaloria.webp",
      alt: "Escena ilustrativa de Thaloria: un puerto de madera, barcas y un mar en calma.",
      plate: "Escena ilustrativa · Thaloria"
    },
    eryndor: {
      kicker: "Las tierras olvidadas",
      name: "Eryndor",
      description: "El bosque no está en silencio: está escuchando. Los musgos crecen en espiral, los pájaros cambian de rama cuando dices su nombre y el sendero que ayer llevaba al río hoy lleva a otra parte.",
      ifLine: "Dejarías de preguntar por qué las cosas son como son.",
      tags: ["Druidas", "Magia", "Investigación"],
      note: "No es un lugar peligroso. Es un lugar que aún no entiendes.",
      image: "assets/fantasy/eryndor.webp",
      alt: "Escena ilustrativa de Eryndor: un bosque antiguo con musgo, luz verde y un santuario de piedra.",
      plate: "Escena ilustrativa · Eryndor"
    }
  };

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
    $("region-if").innerHTML = "";
    var ifLabel = document.createElement("span");
    ifLabel.textContent = "Si te quedaras";
    $("region-if").appendChild(ifLabel);
    $("region-if").appendChild(document.createTextNode(data.ifLine));
    $("region-note").textContent = data.note;

    var tags = $("region-tags");
    tags.replaceChildren.apply(tags, data.tags.map(function (label) {
      var span = document.createElement("span");
      span.textContent = label;
      return span;
    }));

    if (button.id) $("region-detail").setAttribute("aria-labelledby", button.id);
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

  /* -------------------------------------------------------------------- oficios */
  var paths = {
    artesano: {
      kicker: "El valor de lo que creas",
      title: "El martillo tiene un ritmo y tú lo aprendes.",
      scene: "Elias enciende la fragua antes de que amanezca. Huele a carbón y a aceite. La primera pieza del día no se vende: es una bisagra para la puerta de la escuela.",
      note: "Elias es un ejemplo de jugador, no un NPC: empezó de aprendiz en el taller de un herrero y con el tiempo abrió el suyo.",
      unseen: "El pulso que se afina, el cliente que vuelve y la herramienta que pasa a otro."
    },
    aventurero: {
      kicker: "Más allá de las puertas",
      title: "El primer contrato no aparece en ninguna profecía.",
      scene: "Un tablón, un clavo y una hoja mal cortada: «Se busca quien suba al molino viejo a mirar por qué cruje». Pagan poco. Es un principio.",
      note: "La biblia no promete que el primer contrato sea épico; promete que puede ser el principio de una vida.",
      unseen: "El barro en las botas, la confianza de un compañero y el relato que llevas de vuelta."
    },
    comerciante: {
      kicker: "Los caminos que nos unen",
      title: "La mitad del negocio es saber qué va a faltar.",
      scene: "Lucian pesa la lana, huele el aceite y pregunta por la cosecha antes de hablar de precios. Cuando llega el invierno, ya sabe qué aldea va a necesitar harina.",
      note: "Lucian es otro ejemplo de jugador: encarga herramientas a Elias y organiza la escolta de Adrian. Dos oficios que se necesitan.",
      unseen: "Las cuentas sin pagar, la ruta que se cierra y el favor que hay que devolver."
    },
    investigador: {
      kicker: "El poder de una pregunta",
      title: "Hay dos versiones del mismo incendio.",
      scene: "En una, el fuego empezó en el granero. En la otra, en la torre. La verdad está en quién escribió cada una y en lo que decidió no contar.",
      note: "La biblia insiste en que la historia se descubre; no se entrega como una enciclopedia.",
      unseen: "Las horas de archivo, la hipótesis que se cae y el colega que no comparte sus notas."
    },
    ciudadano: {
      kicker: "El arte de quedarse",
      title: "Pones una olla al fuego y alguien llama a la puerta.",
      scene: "No hay misión. Hay una silla de más, una conversación que dura hasta tarde y un vecino que mañana te pedirá que le guardes las llaves.",
      note: "Una vida completa no requiere salir del mapa.",
      unseen: "Las recetas compartidas, los vecinos que conoces y una mesa que acaba siendo tuya."
    },
    dirigente: {
      kicker: "El poder como responsabilidad",
      title: "Cinco personas esperan tu respuesta sobre el puente.",
      scene: "Dos quieren piedra, tres quieren madera y ninguna quiere pagar sola. Decides algo que se va a recordar en la próxima asamblea, aunque salga mal.",
      note: "La influencia tendría límites: gobernar no es decidir cómo deben vivir los demás.",
      unseen: "Las reuniones, los votos que se pierden y la decisión que nunca contenta a todos."
    },
    explorador: {
      kicker: "El horizonte como oficio",
      title: "Doblas el mapa donde termina el camino dibujado.",
      scene: "Delante hay un valle sin nombre y un arroyo que baja hacia el norte. Lo anotas todo, incluso lo que no entiendes, y vuelves antes de que se acabe la luz.",
      note: "Descubrir se gana observando, no comprando atajos.",
      unseen: "Los días sin hallazgos, el mapa que hay que corregir y la ruta que otro recorrerá después."
    }
  };

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
    $("life-scene").textContent = data.scene;
    $("life-quote").textContent = data.note;
    $("life-unseen").textContent = data.unseen;

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

  /* ------------------------------------------------------------------- crónica */
  var days = [
    ["Lunes / La tormenta", "La montaña interrumpe lo cotidiano.", "Una tormenta provoca un derrumbe en una mina de Dorskar. Varios trabajadores quedan atrapados y el gremio publica un contrato urgente. Una necesidad local empieza a conectar vidas.", "Mineros · El gremio · Las familias"],
    ["Martes / El rescate", "Alguien responde antes de que llegues.", "Un grupo de habitantes consigue rescatar a varios trabajadores y encuentra señales de criaturas subterráneas. Los comerciantes avisan de retrasos en el hierro. El mundo también sabe actuar sin ti.", "Aventureros NPC · Mineros · Comerciantes"],
    ["Miércoles / Las consecuencias", "El eco llega al taller de Valdoria.", "Los herreros reciben menos material. Algunos ajustan sus precios; otros buscan nuevos proveedores. Los transportistas descubren rutas donde pueden ser útiles, sin tener que empuñar una espada.", "Herreros · Comerciantes · Transportistas"],
    ["Jueves / El descubrimiento", "Detrás de la roca hay una pregunta.", "Una expedición de jugadores investiga las galerías y encuentra una cámara fuera de los mapas. Sus documentos hablan de una civilización desaparecida. La noticia llega a quienes prefieren investigar.", "Aventureros · Investigadores"],
    ["Viernes / La reconstrucción", "Cada oficio encuentra su sitio.", "El gobierno contrata constructores y mineros para recuperar la instalación. Los aventureros aseguran las galerías; una sociedad académica ofrece recompensas por estudiar los documentos.", "Constructores · Mineros · Académicos"],
    ["Sábado / El rumor", "El Corazón de la Montaña.", "La economía empieza a recuperarse. Un investigador NPC interpreta parte de un texto y encuentra un nombre que invita a seguir buscando. Algunos exploradores preparan su siguiente salida.", "Investigadores · Exploradores"],
    ["Domingo / El legado", "Una puerta que nadie esperaba.", "Una expedición llega a un santuario olvidado. Alguien cumple, sin saberlo, las condiciones de una disciplina secreta. Mientras tanto, en el resto del continente se abren tiendas, se cocina y la vida sigue.", "Exploradores · Los demás habitantes"]
  ];

  var dayButtons = Array.prototype.slice.call(document.querySelectorAll("[data-day]"));
  var currentDay = 0;

  function showDay(index) {
    currentDay = (index + days.length) % days.length;
    var data = days[currentDay];

    $("day-label").textContent = data[0];
    $("day-title").textContent = data[1];
    $("day-text").textContent = data[2];
    $("day-people").textContent = data[3];
    $("day-number").textContent = String(currentDay + 1).padStart(2, "0");

    dayButtons.forEach(function (button) {
      var active = Number(button.dataset.day) === currentDay;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    $("next-day").innerHTML = currentDay === days.length - 1
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

  /* ------------------------------------------------------------ decisión escrita */
  var branches = {
    ausente: {
      title: "No intervenir: que decida el gremio",
      community: "El gremio y los habitantes organizan los relevos y continúan la recuperación. Puedes dedicarte a tu propia vida: no intervenir no convierte tu ausencia en una falta ni detiene la historia.",
      economy: "Durante los días siguientes, los talleres reutilizan material y los comerciantes recurren a otras rutas. La recuperación es más lenta, pero la región conserva alternativas y servicios esenciales.",
      open: "Cuando vuelvas a la plaza, el tablón contará lo que hicieron otros."
    },
    mina: {
      title: "Bajar a la mina: ayudar a desescombrar",
      community: "Te sumas al trabajo coordinado de mineros, constructores y aventureros. Hay quien asegura el camino, quien repara herramientas y quien lleva comida. En la siguiente visita ya no tienes que presentarte.",
      economy: "La galería sur abre a medias en dos semanas. El hierro llega tarde y caro, pero llega: el herrero repara el molino con una pieza de segunda mano. La molienda se hace con retraso y el pan no sube de precio.",
      open: "Un plano nuevo en la pared del gremio, con una zona sin dibujar."
    },
    suministros: {
      title: "Traer suministros: organizar la caravana",
      community: "En los días siguientes ayudas a organizar una caravana desde Valdoria: alimentos, mantas y herramientas. Los talleres preparan sus encargos y los transportistas acuerdan la ruta. Tu aportación conecta a gente que antes no se conocía.",
      economy: "El transporte tiene un coste y exige acuerdos entre talleres, pero los suministros sostienen los mercados mientras la mina se recupera. El comercio también puede ser la respuesta a una crisis.",
      open: "Una cuenta pendiente y una ruta que ahora tiene nombre."
    }
  };

  var branchButtons = Array.prototype.slice.call(document.querySelectorAll("[data-branch]"));

  function selectBranch(button) {
    var data = branches[button.dataset.branch];
    if (!data) return;

    branchButtons.forEach(function (item) {
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });

    $("branch-title").textContent = data.title;
    $("branch-community").textContent = data.community;
    $("branch-economy").textContent = data.economy;
    $("branch-open").textContent = data.open;
    $("branch-empty").hidden = true;
    $("branch-result").hidden = false;
  }

  branchButtons.forEach(function (button) {
    button.addEventListener("click", function () { selectBranch(button); });
  });

  /* -------------------------------------------------------------------- molino */
  var solutions = {
    cunas: {
      label: "Lo que pasa si eliges cuñas de encina",
      text: "La piedra vuelve a girar recta sin piezas nuevas. Cuesta poco y no depende de nadie; aguanta hasta la primavera y en marzo habrá que volver a mirarlo.",
      close: "El pan sale esta semana. En marzo, la molinera tendrá que acordarse de llamar a alguien otra vez."
    },
    roble: {
      label: "Lo que pasa si eliges el eje de roble de Dorskar",
      text: "Tarda diez días y hay que pagar el porte. La molienda se retrasa, pero el eje dura años y el molino vuelve a moler de noche, cuando el aire está frío y la harina no se apelmaza.",
      close: "Dos semanas de pan comprado y una pieza que no habrá que tocar en una década."
    },
    harina: {
      label: "Lo que pasa si traes harina de otra aldea",
      text: "Un comerciante encuentra un molino que puede compartir parte de su molienda. El transporte cuesta dinero, pero permite abastecer a los vecinos mientras el carpintero prepara la reparación.",
      close: "El pan sigue llegando. Dos aldeas se conocen y el molino gana tiempo para repararse bien."
    }
  };

  var solutionButtons = Array.prototype.slice.call(document.querySelectorAll("[data-solution]"));

  function selectSolution(button) {
    var data = solutions[button.dataset.solution];
    if (!data) return;
    solutionButtons.forEach(function (item) {
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });
    $("solution-label").textContent = data.label;
    $("solution-text").textContent = data.text;
    $("solution-close-text").textContent = data.close;
  }

  solutionButtons.forEach(function (button) {
    button.addEventListener("click", function () { selectSolution(button); });
  });

  /* --------------------------------------------------------------------- menú */
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
