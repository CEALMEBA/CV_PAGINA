# CV_PAGINA — Portafolio de César Alfonso Mendoza Barradas

Página personal (HTML, CSS y JavaScript, sin build) publicada con GitHub Pages:
https://cealmeba.github.io/CV_PAGINA/

## Estructura
| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura de la página, experiencia estática, educación, certificaciones y portafolio |
| `js/profiles-data.js` | Los 5 perfiles de CV (AI & Data, Microservices, Java Full Stack, Data Eng ETL, Backend ES): rol, resumen, habilidades y experiencia de cada uno |
| `js/app.js` | Cambia el contenido de la página según el perfil elegido |
| `css/style.css` | Estilos (tema oscuro, tarjetas, impresión) |
| `CV_Cesar_Mendoza.pdf` | CV descargable desde el botón "Download CV (PDF)" |
| `images/` | Foto y capturas de proyectos |

## Cómo actualizar el contenido
- **Experiencia:** edita las fechas, puestos y descripciones en `js/profiles-data.js` (los 5 perfiles) **y** en `index.html` (la sección Experience). Deben coincidir con LinkedIn y con el PDF.
- **Fuente de verdad:** LinkedIn. Fechas vigentes: Tecnomotum Mar 2022 – Ago 2026 (Junior Programmer hasta Feb 2023; Data Engineer desde Feb 2023) y Bizlink Dic 2021 – Mar 2022.
- **Proyectos:** agrégalos en la sección Portfolio de `index.html`, no en Experience.
- **PDF:** se genera desde `cv.md` del repo privado `buscador-vacantes`. Al cambiar el CV, reemplaza aquí `CV_Cesar_Mendoza.pdf` (y `cv/CV_Cesar_Mendoza.pdf` allá, que es el que se adjunta en las postulaciones automáticas).

## Probar en local
```bash
python -m http.server 8000   # y abre http://localhost:8000
```
Los cambios en `main` se publican solos en GitHub Pages en un par de minutos.

## Relacionado
- Buscador de vacantes con postulación automática: repositorio privado `CEALMEBA/buscador-vacantes`.
