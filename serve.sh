#!/bin/bash
cd "$(dirname "$0")"
echo "Iniciando servidor local de documentación..."
echo "Abre tu navegador en: http://127.0.0.1:8000"
.venv/bin/mkdocs serve
