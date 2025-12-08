# Portfolio PCDCN

Landing de portafolio orientada a ciencia de datos/estadistica. El proyecto es estatico (HTML + Tailwind CDN) y se apoya en JS para animaciones, i18n y canvas.

## Estructura del proyecto
- `index.html`: landing principal con secciones hero, sobre mi, portafolio, viz lab y contacto.
- `project_template.html`: plantilla para detalle de proyectos/casos de estudio con el mismo estilo.
- `assets/`: carpeta de recursos.
  - `assets/js/`: logica de la UI.
    - `main.js`: animacion canvas del hero (particulas y conexiones), animaciones de entrada con IntersectionObserver, placeholder de grafico D3 para habilidades, toggle de menu movil.
    - `i18n.js`: diccionarios de textos en ES/EN y funciones de traduccion.
    - `charts/`: reservado para visualizaciones adicionales (actualmente vacio).
  - `assets/img/`: imagenes. Incluye `ClusterCarac_IA001.png` para mostrar en el portafolio.
  - `assets/css/`: reservado para estilos locales si se necesitan (actualmente vacio; se usa Tailwind via CDN).
- `.gitignore`: reglas basicas para excluir temporales/IDE.
- `README.md`: este archivo.

## Dependencias y librerias externas
- TailwindCSS via CDN (configurado en el head de los HTML).
- Google Fonts (Inter y JetBrains Mono).
- Font Awesome para iconos.
- KaTeX (estilos y JS) para formulas si se usan.
- D3 v7 para futuras visualizaciones (placeholder en `main.js`).

## Uso rapido
1. Abre `index.html` en el navegador para ver el portafolio.
2. Usa el selector de idioma (banderas) para cambiar textos; los textos estan en `assets/js/i18n.js`.
3. Para duplicar la plantilla de proyectos, copia `project_template.html` y reemplaza el contenido segun el caso.

## Personalizacion
- Colores/tipografia: se ajustan en el bloque `tailwind.config` del head de los HTML.
- Animacion del hero: en `assets/js/main.js` puedes ajustar `particleCount`, `connectionDistance` y `mouseDistance`.
- Nuevas visualizaciones: crea scripts en `assets/js/charts/` o usa el contenedor `#skill-chart` y completa la funcion `initSkillChart`.

## Notas
- El sitio es totalmente estatico; no necesita build ni servidor. Para probar localmente con servidor simple: `python -m http.server 8000` y abre `http://localhost:8000`.
- Si trabajas en Windows, Git puede convertir finales de linea a CRLF (aviso en staging); esto es normal si tu core.autocrlf esta activado.
