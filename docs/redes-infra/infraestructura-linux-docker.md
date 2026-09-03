# 🐧 Servidores Linux (Ubuntu Server) y Contenedores Docker

<div style="display: flex; gap: 8px; margin-bottom: 20px;">
  <span class="badge-tag">Ubuntu Server</span>
  <span class="badge-tag">Docker & Compose</span>
  <span class="badge-tag">SSH Hardening</span>
  <span class="badge-tag">UFW Firewall</span>
</div>

## 📌 Rol de Linux e Infraestructura Contenerizada

Junto con el entorno Windows, se despliegan servidores virtuales con **Ubuntu Server** para la ejecución de herramientas de monitoreo, servicios auxiliares y entornos de prueba aislados mediante **Docker**.

---

## 🔐 Procedimiento Estándar de Hardening en Servidores Linux

Cada nuevo nodo Linux incorporado a la infraestructura sigue un checklist de seguridad antes de pasar a producción:

### 1. Hardening del Servicio SSH (`/etc/ssh/sshd_config`)

```bash
# Deshabilitar login directo como root
PermitRootLogin no

# Forzar autenticación por par de claves públicas (deshabilitar contraseñas)
PasswordAuthentication no
PubkeyAuthentication yes

# Cambiar puerto estándar o restringir por firewall
Port 2222
MaxAuthTries 3
```

### 2. Configuración de Firewall Local (UFW)

```bash
# Políticas por defecto: rechazar todo tráfico entrante, permitir saliente
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Permitir tráfico SSH restringido a subred de administración
sudo ufw allow from 10.10.20.0/24 to any port 2222 proto tcp

# Habilitar firewall
sudo ufw enable
```

---

## 🐳 Implementación de Servicios con Docker Compose

Uso de Docker para aislar servicios en contenedores con redes puente (*bridge networks*) internas no expuestas directamente a la interfaz pública:

```yaml
version: '3.8'

services:
  app-service:
    image: app-service:latest
    container_name: internal_app
    restart: unless-stopped
    networks:
      - internal_net
    environment:
      - NODE_ENV=production
      - DB_HOST=db_backend
    ports:
      - "127.0.0.1:8080:8080" # Solo accesible vía localhost / reverse proxy

  db_backend:
    image: postgres:15-alpine
    container_name: internal_db
    restart: unless-stopped
    networks:
      - internal_net
    volumes:
      - db_data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: appdb
      POSTGRES_USER: appuser
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password

networks:
  internal_net:
    driver: bridge

volumes:
  db_data:
```
