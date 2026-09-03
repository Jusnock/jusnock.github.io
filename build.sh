#!/bin/bash
cd "$(dirname "$0")"
echo "Compilando sitio estático a HTML..."
.venv/bin/mkdocs build
echo "Listo! Los archivos estáticos se generaron en la carpeta 'site/'"
