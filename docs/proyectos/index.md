# Proyectos & Casos de Estudio

Documentación técnica y repositorios de proyectos de infraestructura, redes y herramientas de seguridad:

---

<div class="eng-project-card">
  <div class="eng-project-header">
    <div>
      <span class="tag-badge tag-badge-success" style="margin-bottom: 6px;">Caso de Estudio Completo · Laboratorio Purple Team</span>
      <h3 class="eng-project-title">
        <a href="purple-team-soc-lab.md">Enterprise SOC & Purple Team Simulation Lab</a>
      </h3>
    </div>
  </div>

  <p class="eng-project-desc">
    Entorno práctico de ciberseguridad enfocado en la emulación de adversarios (Kali Linux), análisis forense de telemetría en endpoints Windows (Sysmon) y Linux (Ubuntu Server), e ingeniería de detección y contención automatizada en <strong>Wazuh SIEM/EDR</strong> mapeado a la matriz <strong>MITRE ATT&CK</strong>.
  </p>

  <ul class="eng-specs-list">
    <li><strong>Topología Dual-NIC Aislada:</strong> Segmentación entre red de gestión y subred de intrusión <code>192.168.56.0/24</code> con VirtualBox.</li>
    <li><strong>Emulación MITRE T1110.001:</strong> Ataques de fuerza bruta SSH con Hydra sobre demonios <code>sshd-session</code>.</li>
    <li><strong>Detection Engineering:</strong> Creación de reglas Sigma nativas y reglas correlacionadas personalizadas en Wazuh XML (Regla 100010, Nivel 10).</li>
    <li><strong>Active Response Automatizada:</strong> Contención en tiempo real mediante inserción dinámica de reglas en el firewall <code>iptables</code> de la víctima.</li>
    <li><strong>Procedimientos Operativos (SOPs):</strong> Playbook de Respuesta a Incidentes PB-01 bajo el marco NIST SP 800-61 / SANS.</li>
  </ul>

  <div class="eng-tag-row">
    <span class="tag-badge">Wazuh SIEM/EDR</span>
    <span class="tag-badge">MITRE ATT&CK</span>
    <span class="tag-badge">Sigma Rules</span>
    <span class="tag-badge">Microsoft Sysmon</span>
    <span class="tag-badge">Active Response</span>
    <span class="tag-badge">Hydra</span>
    <span class="tag-badge">VirtualBox</span>
  </div>

  <div class="eng-card-footer">
    <a href="purple-team-soc-lab.md" class="btn-primary">
      Ver Documentación Técnica Completa →
    </a>
    <a href="https://github.com/Jusnock/purple-team-soc-lab" target="_blank" rel="noopener" class="btn-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      Ver Repositorio en GitHub ↗
    </a>
  </div>
</div>

<div class="eng-project-card">
  <div class="eng-project-header">
    <div>
      <span class="tag-badge tag-badge-success" style="margin-bottom: 6px;">Caso de Estudio Completo · Memoria Técnica en PDF</span>
      <h3 class="eng-project-title">
        <a href="red-empresarial-virtualizada.md">Diseño, Implementación y Seguridad de Red Empresarial Virtualizada</a>
      </h3>
    </div>
  </div>

  <p class="eng-project-desc">
    Infraestructura corporativa multicapa completamente virtualizada en <strong>GNS3</strong> y <strong>Open vSwitch (OVS)</strong>, gobernada por un router central <strong>MikroTik Cloud Hosted Router (CHR v7)</strong>. El proyecto abarca desde la segmentación en VLANs y servicios de producción corporativos (Active Directory, DNS, Zabbix) hasta políticas de firewall stateful y acceso remoto cifrado con <strong>OpenVPN</strong>.
  </p>

  <ul class="eng-specs-list">
    <li><strong>Segmentación 802.1Q:</strong> 5 VLANs con políticas de firewall de mínimo privilegio (Usuarios, Gestión de Red, Servidores & Monitoreo, DMZ Pública y Directorio Corporativo).</li>
    <li><strong>Control de Acceso & Directorio:</strong> Windows Server 2022 DC con Active Directory (AD DS), Directivas de Grupo (GPOs) y servidor DNS interno.</li>
    <li><strong>Monitoreo Centralizado:</strong> Servidor Zabbix 7.0 LTS para supervisión de tráfico, latencia e interfaces de red vía SNMP.</li>
    <li><strong>Seguridad Perimetral:</strong> Reglas de firewall stateful y rate-limiting en MikroTik RouterOS v7.</li>
    <li><strong>Acceso Remoto:</strong> Túneles VPN cifrados con OpenVPN para usuarios remotos corporativos.</li>
  </ul>

  <div class="eng-tag-row">
    <span class="tag-badge">MikroTik RouterOS v7</span>
    <span class="tag-badge">Open vSwitch</span>
    <span class="tag-badge">Windows Server 2022</span>
    <span class="tag-badge">Active Directory</span>
    <span class="tag-badge">Zabbix 7.0</span>
    <span class="tag-badge">OpenVPN</span>
    <span class="tag-badge">GNS3</span>
  </div>

  <div class="eng-card-footer">
    <a href="red-empresarial-virtualizada.md" class="btn-primary">
      Ver Documentación Técnica Completa →
    </a>
    <a href="../assets/Proyecto-Red-Memoria-Tecnica.pdf" target="_blank" download="Proyecto-Red-Memoria-Tecnica.pdf" class="btn-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      Descargar Memoria Técnica (PDF · 38 Páginas)
    </a>
  </div>
</div>

<div class="eng-project-card">
  <div class="eng-project-header">
    <div>
      <span class="tag-badge tag-badge-accent" style="margin-bottom: 6px;">Herramienta CLI · Open Source</span>
      <h3 class="eng-project-title">
        <a href="pyrecon-tool.md">PyRecon-Tool — Network Reconnaissance CLI</a>
      </h3>
    </div>
  </div>

  <p class="eng-project-desc">
    Herramienta de reconocimiento y análisis de red desarrollada en <strong>Python 3</strong>. Automatiza tareas de descubrimiento de activos, enumeración de subdominios, escaneo de puertos TCP abiertos y captura de banners de servicios.
  </p>

  <ul class="eng-specs-list">
    <li><strong>Enumeración Pasiva:</strong> Consulta APIs públicas de inteligencia para listar subdominios sin generar tráfico directo hacia el objetivo.</li>
    <li><strong>Host Discovery con Scapy:</strong> Forjado y envío de paquetes ICMP Echo Request para validación activa de dispositivos encendidos en el segmento.</li>
    <li><strong>Port Scanning & Banner Grabbing:</strong> Concurrencia mediante multi-threading sobre sockets TCP nativos para identificar versiones de software expuestas (HTTP, SSH, FTP).</li>
  </ul>

  <div class="eng-tag-row">
    <span class="tag-badge">Python 3</span>
    <span class="tag-badge">Scapy</span>
    <span class="tag-badge">Sockets & Concurrencia</span>
    <span class="tag-badge">Network Recon</span>
    <span class="tag-badge">CLI Tool</span>
  </div>

  <div class="eng-card-footer">
    <a href="pyrecon-tool.md" class="btn-primary">
      Ver Documentación de la Herramienta →
    </a>
    <a href="https://github.com/Jusnock/PyRecon-Tool" target="_blank" rel="noopener" class="btn-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      Ver Repositorio en GitHub ↗
    </a>
  </div>
</div>
