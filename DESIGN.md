# El Mundo Vivo — informe de diseño

Rediseño del sitio conceptual. Fecha: 18 de octubre de 2026. Perfil `construccion` (equipo NEXUS).
Objetivo del encargo: pasar de «folleto ilustrado» a «ventana a un mundo», reutilizando el arte
aportado por el autor y sin copiar código ni estructura de la referencia Aethria.

---

## 1. Diagnóstico

La versión anterior (commit 639825d) resolvió jerarquía, legibilidad del aviso conceptual y
atribución de las láminas, pero seguía siendo un **catálogo**: portada, visión abstracta, atlas,
lista de clases, calendario y cierre. El visitante podía mirarlo entero sin que nada le pasara.
El encargo lo resume: «calidad mejoró pero falta alma». Faltaban personas concretas, decisiones
con consecuencias y un lugar al que llegar.

## 2. Dos bocetos compositivos

### Boceto A — «La puerta de Valdoria» (elegido)

El sitio se organiza como una **primera semana en un lugar**, no como un índice de features.
Portada a sangre con escala humana y una hora del día elegible; después, una llegada que se
ramifica en tres respuestas; un atlas con escenas pequeñas y habitables; los siete oficios como
registro de un taller, no como rejilla; una crónica de siete días que desemboca en una decisión
con dos consecuencias escritas (comunidad y economía); un encargo corriente con causa, tres
soluciones y consecuencia; y un cierre honesto de fase conceptual. Ritmo: **escena → atlas →
texto → registro → diario → panel → cierre**.

- A favor: cada sección responde a una pregunta de visitante; las interacciones son contenido,
  no adorno; el arte se usa como escenario y no como lámina de museo; encaja con el canon de
  fantasía acogedora y con el estado conceptual.
- En contra: exige escribir prosa nueva y etiquetar bien qué es canon y qué es escena; más
  estados que mantener (luz, llegada, decisión, encargo).

### Boceto B — «Crónica de viaje a pantalla partida»

Una sola línea temporal larga, con el mapa a la izquierda y un diario que se desplaza a la
derecha; el visitante avanza por estaciones del año. Muy atmosférico, pero:

- convierte toda la web en un único scroll narrativo y deja los cinco regiones y los siete
  oficios sin espacio propio;
- depende de un mapa dibujado que competiría con el arte real;
- en móvil, la pantalla partida se degrada a una columna larga sin hitos claros.

**Decisión: A.** Gana por encargo (mundo habitable), por accesibilidad (secciones con nombre y
anclas) y porque permite alternar escena, atlas y texto sin alargar el sitio con componentes
de la referencia.

## 3. Sistema visual

- **Paleta:** tinta `#16211c`, tinta profunda `#0e1713`, papel `#f6f0e2`, salvia `#dfe1cb`,
  oro `#d3a95f`, oro profundo `#9c6f2c`. Tonos cálidos de bosque y ámbar; nada de noir.
- **Tipografía:** Cormorant Garamond (titulares, citas, cifras) y Karla (interfaz y cuerpo),
  locales en `assets/fonts/*.woff2`, SIL OFL 1.1; licencia completa en `assets/fonts/OFL.txt`.
  Cuerpo 17 px; etiquetas funcionales ≥ 0.66 rem; ningún texto vertical.
- **Portada:** `hero.webp` a sangre, doble degradado, titular a 780 px, silla junto al fuego como
  promesa concreta. Controles **Amanecer / Ocaso / Noche** con `aria-pressed`, tratamiento de
  color de la propia página y nota explícita de que no simula el paso del tiempo.
- **Ritmo:** bandas papel / tinta / salvia alternas, pero cada sección tiene una composición
  distinta: llegada (puertas + escena), atlas (índice + lámina), oficios (registro + ficha),
  crónica (calendario + diario + decisión), encargo (imagen + diálogo + soluciones), cierre.
- **Controles:** objetivos táctiles ≥ 44 px, `:focus-visible` oro, `prefers-reduced-motion`,
  sin autoplay, sin partículas permanentes, sin localStorage.
- **Progresividad:** todo el contenido por defecto está en el HTML; el JS solo cambia el estado.
  Sin JS se lee la llegada de la forja, Valdoria, el artesano, el lunes y el encargo con cuñas.

## 4. Contrato cubierto

1. Portada envolvente con hero, escala humana, aire y tipografía local; tres luces accesibles.
2. Llegada a Valdoria con tres respuestas (trabajo / ciudad / explorar), texto distinto y arte
   relacionado (`forge`, `home`, `forest`), sin estadísticas ni progreso ficticio.
3. Cinco regiones con su arte y una situación narrativa breve, etiquetadas como escenas
   ilustrativas.
4. Siete oficios con voz cotidiana («un día cualquiera» y «lo que no se ve»), sin rejilla SaaS.
   Adrian, Elias y Lucian aparecen solo como ejemplos de jugador de la biblia.
5. Crónica de siete días y decisión del derrumbe con tres ramas escritas (no intervenir / bajar
   a la mina / traer suministros), cada una con consecuencias de comunidad y economía.
6. Mundo cálido: taller, hogar, viajeros y necesidades; encargo del molino con causa, tres
   soluciones y consecuencia.
7. Cierre de fase conceptual sin beta, fecha ni financiación inventada; compromisos y enlace al
   manifiesto existente.

## 5. Arte y procedencia

Once WebP en `assets/fantasy/` procedentes del ejemplo visual Aethria aportado por el autor para
este mismo universo; la página de origen declara ilustraciones generadas con IA. Se reutiliza el
arte, no el código ni la estructura. Manifiesto con URL y SHA-256 en
`assets/fantasy/sources.json`. No se atribuye dominio público ni autoría de NEXUS. Las imágenes
no son capturas de juego.

Uso: `hero` portada; `valdoria`, `dorskar`, `namaris`, `thaloria`, `eryndor` atlas; `forge`
llegada-trabajo; `home` llegada-ciudad y molino; `forest` llegada-explorar. `guild` y `adventure`
quedan como arte de reserva para no repetir escenas en la portada actual. Tarjeta social
regenerada desde `hero.webp` a 1200×630.

## 6. Limpieza y correcciones de NEXUS

Retirados con `git rm` los destinos autorizados `antes/`, `compare.html`, `assets/compare/`,
`assets/art/` y los paisajes SVG heredados. La aprobación inteligente nativa autorizó esta
eliminación acotada en la sesión interactiva. Se conservan `.git`, `assets/sigil.svg`,
tipografías y arte de fantasía. El historial de Git permite recuperar lo anterior.

NEXUS corrigió el selector de luz para que seleccione botones y no incluya el elemento HTML.
La crónica de siete días vuelve a respetar la secuencia original de rescate, descubrimiento,
reconstrucción y santuario; las respuestas alternativas se etiquetan por separado. El tono
de las escenas no penaliza no intervenir ni convierte la vida cotidiana en obligaciones.
El selector de luz deja de ser una caja flotante que tapa la figura de la portada; se integra
en el flujo y se mejora el tamaño/contraste del aviso y de las etiquetas móviles del calendario.

## 7. Pruebas

- `node --check app.js` → sin errores de sintaxis.
- Tarjeta social generada con Pillow (`-I`) desde `hero.webp`: 1200×630.
- Primera comprobación NEXUS HTTP: nueve combinaciones de tres páginas a 390/768/1440,
  sin desbordamiento, imágenes rotas ni errores de consola; cinco regiones, siete caminos,
  siete días y menú respondieron. Detectó que faltaba la limpieza, completada después.
- Comprobación final HTTP NEXUS: nueve combinaciones de tres páginas a 390/768/1440;
  cero desbordamientos, errores de consola o recursos fallidos, y limpieza confirmada.
- Prueba profunda NEXUS a 320/390/768/1440: tres luces con filtros distintos, tres llegadas,
  tres respuestas al derrumbe y tres soluciones del molino con salidas distintas y estados
  ARIA exclusivos; teclado, ciclo semanal, movimiento reducido y contenido inicial sin JS pasan.
- Capturas finales de portada de escritorio y llegada móvil inspeccionadas con visión: sin
  solapamientos visibles. Las primeras capturas tenían restauración de scroll y carga diferida
  sin esperar: se corrigió el capturador, no se confundieron esos artefactos con fallos de la web.
- `node --check`, `git diff --check` y comprobación de cambios preparados pasan en primer plano.
  La cadena de pruebas en segundo plano terminó con un error de terminal después de pasar ambos
  tests de navegador; la comprobación de sintaxis se repitió correctamente en primer plano.
- Límites: no es una auditoría completa WCAG ni una prueba en dispositivos físicos o lectores
  de pantalla. La publicación y su lectura de vuelta se registran en el cierre de NEXUS.

## 8. Estructura de archivos

```
index.html       portada, llegada, atlas, oficios, crónica, encargo, horizonte
styles.css       hoja única comentada por secciones
app.js           luz, llegada, regiones, oficios, días, ramas, molino, menú (vanilla)
vision.html      manifiesto previo (hereda la hoja nueva)
privacidad.html  privacidad, alojamiento, arte IA, tipografías, estado
assets/fantasy/  once WebP + sources.json (NEXUS, solo lectura)
assets/fonts/    seis WOFF2 + OFL.txt
assets/sigil.svg único vector heredado en uso
assets/social.png tarjeta social 1200×630 regenerada
```

## 9. Regresión visual tras la publicación

El usuario detectó pérdida de calidad y elementos desplazados. La investigación de NEXUS
reprodujo dos fallos que las pruebas anteriores no cubrían:

- Entre 861 y 1020 px, una regla residual `bottom:96px` desplazaba el selector de luz sobre
  las acciones. Se eliminó ese desplazamiento, manteniendo el control en el flujo normal.
- Una sesión con `styles.css` de la versión anterior en caché podía recibir el HTML nuevo y
  mostrar las opciones de llegada como bloques sin la distribución de rejilla. Se reprodujo
  con la hoja real del commit 639825d, almacenada mediante HTTP. El HTML actual solicita CSS
  y JS con una clave de versión para evitar esa mezcla entre publicaciones.

La prueba de regresión falló antes de corregir (dos solapamientos y distribución perdida con
caché caliente) y pasa después. Se comprobaron nueve anchos, incluidos 860/900/1020/1021.
Las pruebas funcionales de nueve escenarios y las interacciones de cuatro anchos siguen pasando.
Esto no certifica que toda discrepancia visual señalada por el usuario esté resuelta: se han
corregido las causas reproducidas; hace falta contrastar cualquier síntoma restante con su vista.
