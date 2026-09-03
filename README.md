# 🛡️ Portafolio Técnico & Knowledge Base (Docs & Writeups)

Portafolio profesional en formato **Docs & Writeups** creado con **MkDocs + Material Theme** (el estándar de la comunidad de ciberseguridad, DevOps e ingeniería de infraestructura).

---

## 📁 Estructura del Proyecto

```
portfolio-docs/
├── mkdocs.yml                  # Configuración central (tema, menú, extensiones, mermaid)
├── serve.sh                    # Script para levantar servidor de desarrollo local
├── build.sh                    # Script para compilar el sitio a HTML estático
├── docs/                       # Artículos y laboratorios en formato Markdown puro (.md)
│   ├── index.md                # Portada y bienvenida
│   ├── sobre-mi.md             # Perfil, experiencia y descarga de CV
│   ├── assets/                 # Recursos (CV-Juan-Francisco-Vazquez.pdf)
│   ├── redes-infra/            # Casos de estudio de Redes y SysAdmin
│   │   ├── topologia-corporativa-cpce.md
│   │   ├── active-directory-gpo-hardening.md
│   │   └── infraestructura-linux-docker.md
│   ├── ciberseguridad-purple-team/ # Writeups y laboratorios de seguridad
│   │   ├── thm-cyber-security-101.md
│   │   ├── thm-soc-level-1.md
│   │   └── lab-purple-team-simulacion.md
│   ├── proyectos/              # Casos de software y backend
│   │   ├── syscow-gestion-agropecuaria.md
│   │   └── rst-salud-digital.md
│   └── certificaciones/        # Notas de estudio
│       ├── comptia-security-plus.md
│       └── cisco-networking-academy.md
└── site/                       # Sitio HTML estático listo para producción
```

---

## 🚀 Cómo probarlo localmente

1. Ejecutá el script de servidor local:
   ```bash
   ./portfolio-docs/serve.sh
   ```
2. Abrí en tu navegador: **`http://127.0.0.1:8000`**
3. Cualquier cambio que hagas en los archivos `.md` de la carpeta `docs/` se recargará automáticamente en vivo (*hot reload*).

---

## ✍️ Cómo agregar nuevos Writeups o Laboratorios

Solo tenés que crear un nuevo archivo `.md` dentro de la carpeta correspondiente en `docs/` (por ejemplo `docs/ciberseguridad-purple-team/nuevo-lab.md`) y agregarlo en la sección `nav:` de `portfolio-docs/mkdocs.yml`.

---

## 🌐 Cómo publicarlo 100% Gratis en GitHub Pages (`jusnock.github.io`)

Tenés dos formas súper fáciles:

### Método A: Despliegue automático con MkDocs (Recomendado)
1. En GitHub, creá un repositorio público llamado **`jusnock.github.io`**.
2. Cloná o agregá el remote en la carpeta `portfolio-docs`:
   ```bash
   cd portfolio-docs
   git init
   git remote add origin https://github.com/Jusnock/jusnock.github.io.git
   .venv/bin/mkdocs gh-deploy --force
   ```
3. ¡Listo! MkDocs compila y sube el sitio automáticamente. Estará online en `https://jusnock.github.io`.

### Método B: Subir la carpeta `site/`
El contenido de `portfolio-docs/site/` ya son archivos HTML/CSS/JS estáticos puros. Podés subir el contenido de esa carpeta a la rama principal de `jusnock.github.io` o arrastrarlo a Vercel / Netlify / Cloudflare Pages.
