# El Mundo Vivo — informe de diseño

Rediseño del sitio conceptual. Fecha: 18 de octubre de 2026. Autor: perfil `construccion`
(equipo NEXUS). Ámbito de escritura: este repositorio, excluyendo `.git` y `antes/`.

---

## 1. El problema, medido sobre la versión anterior

Capturas reales de `antes/` (`assets/compare/antes-desktop.webp`, `antes-movil.webp`) y
revisión visual externa coinciden en cuatro defectos:

1. **Aviso conceptual ilegible.** Estaba en vertical, en el borde derecho, a 10 px y con
   tracking amplio. El requisito legal/editorial más importante del sitio era el menos legible.
2. **Jerarquía invertida en la portada.** El sol vectorial era el elemento más brillante y la
   ciudad, el destino narrativo, era pequeña y plana.
3. **Hueco verde inferior.** El `hero` dejaba una franja de césped sin información; el ojo caía
   al vacío justo antes del recorte.
4. **Texto e imagen como islas.** Titular a la izquierda, ilustración a la derecha, sin
   elemento compartido (ni filete, ni medida, ni superposición) que los uniera.

El quinto problema, no visible en una captura, era de repertorio: **cinco paisajes SVG
prácticamente idénticos** para cinco regiones que el texto describe como radicalmente distintas.

## 2. Dos bocetos compositivos

### Boceto A — «Crónica ilustrada» (elegido)

Sitio como una publicación impresa de campo: papel cálido, tinta verde profunda, oro viejo,
serif de alto contraste (Cormorant Garamond) para la voz y una grotesca humanista (Karla) para
la interfaz. La portada es una **lámina a sangre** con el texto sobre un degradado; el pie de la
lámina es una ficha de crédito legible. El resto del sitio se ordena como capítulos numerados
(01–05) con filetes finos, capitular y citas al margen. El atlas deja de ser un mapa y pasa a ser
un **índice de cinco entradas** con una lámina distinta por región.

- A favor: resuelve los cuatro defectos con una sola decisión (jerarquía tipográfica + imagen
  real); funciona con imágenes históricas de dominio público sin fingir capturas; escalable a
  móvil sin reflow complejo; honesto con el estado conceptual.
- En contra: depende de la calidad de las láminas; hay que atribuirlas y explicarlas.

### Boceto B — «Cartografía nocturna»

Fondo azul tinta, retícula cartográfica, mayúsculas iluminadas, mapa interactivo con puntos
calientes y un atlas que se recorre como un mapa de navegación. Muy atmosférico y muy
«videojuego», pero:

- reproduce el mismo vicio que se quería corregir (una maraña de SVG propia en el papel
  protagonista), y el brief lo desaconseja explícitamente;
- exige un mapa dibujado a mano que competiría con las láminas en lugar de complementarlas;
- en móvil, un mapa con puntos calientes es peor experiencia que una lista.

**Decisión: A.** Gana por brief (fantasía habitable, Decide/Learn, no dashboard), por
accesibilidad (texto grande, contraste alto, foco visible) y porque permite usar arte real con
procedencia verificable en lugar de sustituirlo con vectores inventados.

## 3. Principios extraídos de las referencias públicas

Consultadas por NEXUS: `palia.com` (fantasía de vida) y `playableworlds.com` (historias
sociales). Se extraen principios, **no assets**:

- la promesa se enuncia como una vida, no como una mecánica;
- la imagen hace de escenario habitable y el texto se apoya en ella, no la flanquea;
- el estado del producto (fase conceptual, sin lanzamiento) se dice sin letra pequeña;
- nada de capturas falsas ni de cifras de comunidad inventadas.

## 4. Sistema visual aplicado

- **Paleta:** tinta `#16211c`, papel `#f5f0e5`, salvia `#e3e2cf`, oro `#c9a25c`, oro profundo
  `#a97c33`, texto `#2b3a32`, secundario `#59675d`.
- **Tipografía:** Cormorant Garamond (400/600/itálica) para titulares, citas y cifras; Karla
  (400/600) para navegación, etiquetas y cuerpo pequeño. Ambas **locales** en
  `assets/fonts/*.woff2`, SIL OFL 1.1, sin peticiones a Google. Licencia y avisos completos
  en `assets/fonts/OFL.txt` (ver §6).
- **Microtipografía:** ninguna etiqueta funcional por debajo de 12 px; se elimina todo texto
  vertical; el aviso conceptual pasa a una ficha horizontal de 12,5 px sobre fondo oscuro.
- **Portada:** imagen a sangre 16:9, doble degradado (izquierda y abajo), titular a 17ch,
  botón dorado y enlace secundario. Altura `clamp(560px, 86svh, 800px)`.
- **Capítulos:** numeración 01–05 con etiqueta, filete de sección y medida de línea de 62ch.
- **Atlas:** lista `role="tablist"` vertical (Ⅰ–Ⅴ) y panel con lámina 3:2, pie de crédito y
  ficha descriptiva. Flechas, Inicio y Fin mueven la selección; el foco se mantiene visible.
- **Caminos:** siete celdas en rejilla (4 + 3 en escritorio, 2 columnas en tablet, **1** en
  móvil), estado activo en tinta y oro; detalle en dos columnas con progresión. En móvil la
  séptima celda vuelve a una sola pista (`grid-column: auto`), medida y verificada.
- **Crónica:** siete días como tira de calendario con día activo en tinta y número de día grande.
- **Responsive:** 1440 / 768 / 390 sin desbordamiento horizontal; menú desplegable con
  `aria-expanded`, cierre por Escape y foco devuelto al botón.

## 5. Imágenes: procedencia y licencia

Todas son obras históricas de **dominio público** de The Metropolitan Museum of Art
(Open Access), descargadas del API público, recortadas y convertidas a WebP con Pillow.
No son capturas de ningún videojuego y no se presentan como tales: cada una lleva su ficha.

| Uso | Obra | Autor | Año | Objeto Met |
|---|---|---|---|---|
| Portada | *Merced River, Yosemite Valley* | Albert Bierstadt | 1866 | [10150](https://www.metmuseum.org/art/collection/search/10150) |
| Valdoria | *Wide River Landscape* | Philips Koninck | c. 1648–49 | [436832](https://www.metmuseum.org/art/collection/search/436832) |
| Dorskar | *The Forest in Winter at Sunset* | Théodore Rousseau | c. 1846–67 | [438816](https://www.metmuseum.org/art/collection/search/438816) |
| Namaris | *Red Sunset* | Arkhip Kuindzhi | 1905–08 | [436833](https://www.metmuseum.org/art/collection/search/436833) |
| Thaloria | *Sunset on the Sea* | John Frederick Kensett | 1872 | [11325](https://www.metmuseum.org/art/collection/search/11325) |
| Eryndor | *The Forest of Arden* | Albert Pinkham Ryder | 1888–97 | [11977](https://www.metmuseum.org/art/collection/search/11977) |

Archivos: `assets/art/*.webp` (portada 2400×1350, 84 %; regiones 1400×933, 80 %).
Total aproximado: 1,08 MB. Atribución repetida en cada lámina, en el pie del sitio y en
`privacidad.html`.

## 6. Tipografías: licencia y procedencia

Ambas familias se sirven desde `assets/fonts/` (seis WOFF2, sin CDN ni peticiones de terceros):

| Familia | Archivos | Versión | Copyright (nameID 0) | Licencia |
|---|---|---|---|---|
| Cormorant Garamond | `cormorant-garamond-400-normal`, `-400-italic`, `-600-normal` | 4.001 | Copyright 2015 The Cormorant Project Authors (github.com/CatharsisFonts/Cormorant) | SIL OFL 1.1 (nameID 14: https://openfontlicense.org) |
| Karla | `karla-400-normal`, `-400-italic`, `-600-normal` | 2.004 (gftools 0.9.33) | Copyright 2019 The Karla Project Authors (https://github.com/googlefonts/karla) | SIL OFL 1.1 (nameID 14: https://scripts.sil.org/OFL) |

Procedencia comprobable: los avisos anteriores **no** se deducen del nombre del archivo; se
han extraído de la tabla `name` embebida en cada WOFF2 (`fontTools`, nameID 0, 5 y 14), de modo
que el copyright y la licencia viajan dentro del propio binario distribuido, como exige la
condición 2 de la OFL. El texto íntegro de la SIL Open Font License 1.1 —preámbulo,
definiciones, cinco condiciones, terminación y exención— está en
`assets/fonts/OFL.txt`, junto a los dos avisos de copyright y la versión de cada archivo; la
página `privacidad.html` enlaza ese archivo. Fuente oficial de la licencia:
<https://openfontlicense.org/open-font-license-official-text/>.

## 7. Estructura de archivos

```
index.html          portada + 01 visión + 02 atlas + 03 caminos + 04 crónica + 05 horizonte
compare.html        comparativa honesta antes/después (capturas reales, sin puntuaciones)
vision.html         manifiesto (contenido previo, ahora con la hoja nueva)
privacidad.html     privacidad, alojamiento, láminas y tipografías
styles.css          hoja única, comentada por secciones
app.js              interacciones: regiones, caminos, días, menú (sin dependencias)
assets/art/         seis WebP de dominio público
assets/compare/     capturas antes/después en WebP
assets/fonts/       seis WOFF2 (Cormorant Garamond y Karla) + OFL.txt con licencia completa
assets/*.svg        sigilo y material vectorial heredado (no se usa en la portada)
antes/              versión anterior intacta
```

## 8. Pruebas ejecutadas (Chrome real vía HTTP, 1440/768/390)

Ejecutadas con Playwright sobre Chrome instalado y `python -m http.server` en 127.0.0.1:8765,
con las fuentes servidas por HTTP (no `file://`).

- `node --check app.js` → sin errores de sintaxis.
- **Rejilla móvil de caminos (ronda 2):** a 390 px `gridTemplateColumns` = `348px` —una única
  pista— y los **siete** botones miden 348 px de ancho. A 1440 px: `276.75px ×4` con la séptima
  celda a 555 px (4 + 3). Corregido el `span 2` heredado que creaba una segunda columna implícita
  (medido antes: `135.562px 196.438px`).
- **Navegación secundaria de `compare.html` (ronda 2):** `display: flex` y `visibility: visible`
  a 390, 768 y 1440. A 390 se oculta «Inicio» (el logotipo ya enlaza al inicio) y queda visible
  «Versión anterior»; a 768 se ven ambos enlaces.
- Las **cinco** regiones seleccionan su lámina, actualizan ficha, etiquetas y `aria-selected`;
  todas las imágenes cargan (`naturalWidth > 0`).
- Los **siete** caminos actualizan título, texto, cita y progresión (`aria-pressed` correcto).
- Los **siete** días actualizan número, título, texto y personas; «Siguiente día» cicla al lunes.
- Teclado: flecha abajo en el atlas pasa a Dorskar con foco; flecha derecha en caminos pasa a
  Aventurero. `Escape` cierra el menú móvil y devuelve el foco.
- Sin desbordamiento horizontal (`scrollWidth == clientWidth`) en `/`, `/compare.html`,
  `/vision.html` y `/privacidad.html` a 390, 768 y 1440: 12 combinaciones medidas.
- Cero respuestas HTTP ≥ 400, cero peticiones fallidas y cero errores de consola en esas 12
  combinaciones.
- Fuentes locales cargadas: `document.fonts` reporta Cormorant Garamond 400 normal, 400 italic y
  600 normal, y Karla 400 y 600 (`status: loaded`).
- Capturas de la comparativa regeneradas tras la corrección: `despues-portada.webp` (1400×875),
  `despues-desktop.webp` (1400×6972) y `despues-movil.webp` (390×8779).

## 9. Límites conocidos

- No se ha publicado nada: `git` sin commit, sin push. La revisión y la publicación
  corresponden a NEXUS.
- Las láminas son pinturas históricas: sugieren atmósfera, no representan el juego. Se dice
  explícitamente en cada pie y en `privacidad.html`.
- El manifiesto (`vision.html`) mantiene su contenido original; solo hereda la hoja nueva.
- `assets/social.png` sigue siendo la tarjeta social anterior; conviene regenerarla a partir de
  la nueva portada antes de publicar.
- No se ha medido con lector de pantalla real; la semántica se ha limitado a lo verificable
  (roles de tab, `aria-selected`, `aria-pressed`, `aria-expanded`, foco visible).
