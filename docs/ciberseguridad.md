# Seguridad en Redes & Sistemas

Documentación sobre prácticas de seguridad en infraestructura de red, aseguramiento de servicios de directorio, análisis de protocolos y herramientas de auditoría desarrolladas en Python.

---

## Pilares de Seguridad en Infraestructura

<div class="skills-grid">

  <div class="skill-card">
    <h4 class="skill-card-title">Segmentación & Filtrado de Red</h4>
    <p style="color: var(--site-text-secondary); font-size: 0.88rem; margin-bottom: 0.8rem;">
      Protección perimetral e inter-VLAN en routers MikroTik y switches:
    </p>
    <ul class="skill-list">
      <li><strong>Políticas Stateful:</strong> Reglas de firewall para control de conexiones (established/related/invalid).</li>
      <li><strong>Aislamiento por VLANs:</strong> Separación física y lógica (802.1Q) entre usuarios, gestión y servidores.</li>
      <li><strong>Protección de Gestión:</strong> Restricción de acceso a interfaces administrativas (SSH, WinBox) exclusivamente desde redes autorizadas.</li>
    </ul>
  </div>

  <div class="skill-card">
    <h4 class="skill-card-title">Control de Identidades & Active Directory</h4>
    <p style="color: var(--site-text-secondary); font-size: 0.88rem; margin-bottom: 0.8rem;">
      Administración centralizada de accesos y dominios en Windows Server:
    </p>
    <ul class="skill-list">
      <li><strong>Políticas de Grupo (GPOs):</strong> Despliegue de configuraciones homogéneas y directivas de seguridad en puestos de trabajo.</li>
      <li><strong>Principio de Mínimo Privilegio:</strong> Separación estricta entre cuentas administrativas y usuarios estándar.</li>
      <li><strong>Gestión de Cuentas y Accesos:</strong> Altas, bajas y modificaciones controladas de usuarios y recursos compartidos.</li>
    </ul>
  </div>

  <div class="skill-card">
    <h4 class="skill-card-title">Análisis de Protocolos & Tráfico</h4>
    <p style="color: var(--site-text-secondary); font-size: 0.88rem; margin-bottom: 0.8rem;">
      Inspección de tramas y diagnóstico de comunicaciones en red:
    </p>
    <ul class="skill-list">
      <li><strong>Wireshark & tcpdump:</strong> Captura y análisis de flujos TCP, consultas DNS y comunicaciones de red.</li>
      <li><strong>Diagnóstico de Red:</strong> Detección de bucles, latencia anormal y problemas de resolución de nombres.</li>
      <li><strong>Monitoreo de Enlaces:</strong> Verificación de estado de interfaces y tráfico anómalo mediante Zabbix y SNMP.</li>
    </ul>
  </div>

  <div class="skill-card">
    <h4 class="skill-card-title">Conectividad Remota Segura</h4>
    <p style="color: var(--site-text-secondary); font-size: 0.88rem; margin-bottom: 0.8rem;">
      Túneles cifrados para acceso de usuarios y sucursales:
    </p>
    <ul class="skill-list">
      <li><strong>OpenVPN Corporativo:</strong> Despliegue de servidores VPN con autenticación de usuarios y certificados TLS.</li>
      <li><strong>Control de Tráfico VPN:</strong> Enrutamiento y filtrado de acceso para teletrabajadores según su perfil.</li>
      <li><strong>Respaldos de Configuración:</strong> Políticas de backup periódico de equipos de red y servidores.</li>
    </ul>
  </div>

</div>

---

## Herramientas de Seguridad Desarrolladas

### [PyRecon-Tool — Network Reconnaissance CLI](proyectos/pyrecon-tool.md)

Herramienta de automatización de reconocimiento en **Python 3** desarrollada para asistir en tareas de auditoría de red interna y descubrimiento de activos:

```text
[+] Target: example.com
[+] Resolving DNS records & Subdomains...
    ├── api.example.com        -> 192.0.2.14
    ├── mail.example.com       -> 192.0.2.18
    └── vpn.example.com        -> 192.0.2.22
[+] ICMP Host Discovery: Target is ALIVE (latency: 18.4 ms)
[+] Scanning TCP ports (Top 100)...
    ├── Port 22/tcp   [OPEN]   Banner: SSH-2.0-OpenSSH_8.9p1 Ubuntu-3ubuntu0.10
    ├── Port 80/tcp   [OPEN]   Banner: nginx/1.24.0 (Ubuntu)
    └── Port 443/tcp  [OPEN]   SSL/TLS Certificate valid (CN=*.example.com)
```

<div style="display: flex; gap: 10px; margin-top: 1rem;">
  <a href="proyectos/pyrecon-tool.md" class="btn-primary">
    Ver Documentación de la Herramienta →
  </a>
  <a href="https://github.com/Jusnock/PyRecon-Tool" target="_blank" rel="noopener" class="btn-secondary">
    Repositorio en GitHub ↗
  </a>
</div>

---

## Formación Continua & Laboratorios Prácticos

Plataformas de aprendizaje y preparación profesional activa:

* **TryHackMe — Cyber Security 101 (Completada):** Fundamentos de redes de datos, modelos OSI y TCP/IP, criptografía, autenticación, gestión de sistemas Linux/Windows y protocolos de comunicación.
* **TryHackMe — SOC Level 1 (En curso):** Formación en metodologías defensivas, triaje de eventos de seguridad y análisis de tráfico de red en entornos de laboratorio interactivos.

---

## Preparación CompTIA Security+ (SY0-701)

Actualmente en proceso activo de estudio para rendir la certificación internacional **CompTIA Security+**, cubriendo los 5 dominios del temario oficial.

<div style="margin-top: 1rem;">
  <a href="certificaciones.md" class="btn-secondary">
    Ver Hoja de Ruta y Desglose de Dominios Security+ →
  </a>
</div>
