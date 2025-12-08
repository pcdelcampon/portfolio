# Portfolio PCDCN

Static portfolio site for data science/statistics. Pure HTML plus Tailwind CDN, with JS for hero canvas animation, scroll effects, and i18n.

## Project structure
- `index.html`: main landing page (hero, about, portfolio, viz lab, contact).
- `project_template.html`: reusable project/case-study detail page with the same theme.
- `assets/`: shared resources.
  - `assets/js/`: UI logic.
    - `main.js`: hero canvas particles/lines, scroll-in animations via IntersectionObserver, placeholder for a D3 skills chart, mobile menu toggle.
    - `i18n.js`: ES/EN text dictionaries and translation handling.
    - `charts/`: reserved for extra visualizations (currently empty).
  - `assets/img/`: images. Includes `ClusterCarac_IA001.png` used in the portfolio section.
  - `assets/css/`: reserved for local styles if needed (currently empty; Tailwind via CDN is used instead).
- `.gitignore`: basic ignore rules for temp/IDE files.
- `README.md`: this file.

## External libraries
- Tailwind CSS via CDN (configured in the head of both HTML files).
- Google Fonts (Inter, JetBrains Mono).
- Font Awesome for icons.
- KaTeX (CSS/JS) for math rendering if needed.
- D3 v7 for data visualizations (currently only referenced in `main.js`).

## Quick use
1) Open `index.html` in the browser to view the portfolio.
2) Switch language with the flag buttons; text keys live in `assets/js/i18n.js`.
3) To create a project detail page, copy `project_template.html` and replace the content sections.

## Customization
- Colors/typography: adjust the `tailwind.config` block in the HTML head.
- Hero animation: tweak `particleCount`, `connectionDistance`, and `mouseDistance` in `assets/js/main.js`.
- New visualizations: add scripts under `assets/js/charts/` or implement `initSkillChart` for the `#skill-chart` container.

## Notes
- Fully static site; no build step required. To serve locally: `python -m http.server 8000` then open `http://localhost:8000`.
- On Windows, Git may report LF→CRLF conversion during staging; this is expected if `core.autocrlf` is enabled.

Thank you VibeCoding to make this porfolio possible ... XD
