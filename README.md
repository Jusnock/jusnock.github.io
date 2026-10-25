# Portfolio · Juan Francisco Vazquez

Portfolio de infraestructura, redes y ciberseguridad construido con MkDocs y Material. La portada usa HTML, CSS y JavaScript locales, sin Tailwind ni dependencias de JavaScript externas.

## Desarrollo local

```bash
python3 -m venv .venv
.venv/bin/pip install mkdocs-material
./serve.sh
```

Abrí http://127.0.0.1:8000. Los cambios se recargan automáticamente.

## Archivos principales

- `overrides/home.html`: portada, proyectos, experiencia, formación y contacto.
- `overrides/lab.html` y `docs/stylesheets/lab.css`: diseño del caso de estudio Purple Team, índice y galería de evidencias.
- `docs/javascripts/lab.js`: copia de comandos e indicación de la sección visible.
- `docs/stylesheets/home.css`: diseño responsive de la portada.
- `docs/javascripts/home.js`: menú accesible y copia del email.
- `docs/javascripts/home-i18n.js`: selector ES/EN y traducciones de la portada; recuerda el idioma en el navegador.
- `docs/stylesheets/extra.css`: estilos de la documentación técnica.
- `docs/proyectos/`: casos de estudio en Markdown.
- `docs/assets/`: CV, memoria técnica y evidencias de los laboratorios.
- `mkdocs.yml`: configuración de MkDocs.

`docs/portfolio.html` redirige a la portada para mantener la URL anterior.

## Compilar y publicar

```bash
./build.sh
```

El sitio compilado queda en `site/` (ignorado por Git). Para previsualizar esa compilación:

```bash
python3 -m http.server 8000 --directory site
```

El workflow en `.github/workflows/` publica en GitHub Pages cuando se hace push a `main`. También se puede publicar manualmente con `.venv/bin/mkdocs gh-deploy`.

## Agregar un proyecto

Creá un Markdown en `docs/proyectos/`, agregá sus recursos a `docs/assets/` y enlazalo desde `overrides/home.html`. Conservá las rutas con el filtro `url` de MkDocs en la plantilla para resolver los recursos correctamente.

## Idiomas

El selector ES | EN de la cabecera indica el idioma activo y alterna los textos de la portada sin recargar la página. Reserva espacio para ambas traducciones y conserva la posición de scroll al cambiar de idioma. El idioma inicial es español; la elección se conserva en `localStorage` cuando está disponible. Para modificar las traducciones, editá `docs/javascripts/home-i18n.js`. Los casos de estudio y los PDFs conservan su contenido en español.
