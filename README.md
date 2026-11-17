# CV_PAGINA — Portafolio de César Alfonso Mendoza Barradas

Página personal (HTML, CSS y JavaScript, sin build) publicada con GitHub Pages:
https://cealmeba.github.io/CV_PAGINA/

## Estructura
| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura de la página, contacto, educación, certificaciones y portafolio |
| `js/profiles-data.js` | Todo el texto del CV: 4 perfiles (General, Datos y Cloud, Java Backend, Java Full Stack) en español e inglés, y los textos fijos de la página |
| `js/app.js` | Pinta habilidades y experiencia según el perfil y el idioma elegidos |
| `css/style.css` | Estilos (tema oscuro, tarjetas, impresión) |
| `CV_Cesar_Mendoza_ES.pdf`, `CV_Cesar_Mendoza_EN.pdf` | CV que descarga el botón según el idioma (`CV_Cesar_Mendoza.pdf` es copia del de español, para enlaces viejos) |
| `images/` | Foto y capturas de proyectos |

Enlaces directos: `?lang=en` abre la página en inglés y `?perfil=backend` (o `data`, `fullstack`, `general`) abre ese perfil.

## Cómo actualizar el contenido
- **Fuente de verdad:** `cv.md` y `cv/fuentes/*.html` del repo privado `buscador-vacantes` (los CV que se adjuntan al postular). La página debe decir lo mismo.
- **Puestos y fechas** (iguales a LinkedIn) están una sola vez, en `JOBS` al inicio de `js/profiles-data.js`: Tecnomotum Mar 2022 – Ago 2026 (Junior Programmer hasta Feb 2023; Data Engineer desde Feb 2023) y Bizlink Dic 2021 – Mar 2022. Cada perfil solo cambia el resumen, las habilidades y las viñetas.
- **No agregar a un perfil tecnologías o logros que no estén en los CV del buscador:** un reclutador puede comparar las pestañas entre sí y contra el PDF.
- **Proyectos:** agrégalos en la sección Portfolio de `index.html`; sus textos van en `uiText` (`p1`…`p5`).
- **PDF:** se generan allá desde `cv/fuentes/CV_Cesar_Mendoza_ES.html` y `_EN.html` (Chrome: `--headless --no-pdf-header-footer --print-to-pdf`). Al cambiar el CV, copia aquí los tres PDF de `cv/`.

## Probar en local
```bash
python -m http.server 8000   # y abre http://localhost:8000
```
Los cambios en `main` se publican solos en GitHub Pages en un par de minutos.

## Relacionado
- Buscador de vacantes con postulación automática: repositorio privado `CEALMEBA/buscador-vacantes`.
