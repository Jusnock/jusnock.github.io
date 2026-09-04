# TryHackMe: Cyber Security 101 (Writeup & Bitácora)

<div style="display: flex; gap: 8px; margin-bottom: 20px;">
  <span class="badge-tag">TryHackMe</span>
  <span class="badge-tag">Cyber Security 101</span>
  <span class="badge-tag">Certificación Completada</span>
  <span class="badge-tag">Fundamentos Purple Team</span>
</div>

## Resumen de la Ruta de Especialización

La ruta **Cyber Security 101** de TryHackMe cubre los cimientos teóricos y prácticos de la seguridad informática contemporánea, abarcando desde fundamentos de redes y sistemas operativos hasta metodologías de ataque y defensa.

* **Estado:** Completado (100%)
* **Plataforma:** [TryHackMe](https://tryhackme.com)
* **Perfil:** [Jusnock @ TryHackMe](https://tryhackme.com)

---

## Módulos Principales & Aprendizajes Clave

### 1. Fundamentos de Redes para Ciberseguridad
* **Modelo OSI & TCP/IP:** Análisis profundo de la encapsulación de paquetes, negociación *3-way handshake* TCP (`SYN` -> `SYN-ACK` -> `ACK`), banderas TCP (`FIN`, `RST`, `PSH`, `URG`) y su relevancia en escaneos con Nmap.
* **Protocolos Esenciales:** Inspección y vectores de ataque en DNS (DNS Poisoning, transferencias de zona AXFR), DHCP (DHCP Starvation, Rogue DHCP Server), ARP (ARP Spoofing/Poisoning) y HTTP/HTTPS.

### 2. Seguridad Ofensiva (Red Team Basics)
* **Reconocimiento & Enumeración:** Uso de `nmap` con diferentes técnicas de escaneo (`-sS` SYN stealth, `-sV` detección de versiones, `-sC` scripts default).
* **Vulnerabilidades Web Comunes (OWASP Top 10):**
    * **SQL Injection (SQLi):** Inyecciones basadas en booleanos, uniones (`UNION SELECT`) y mitigación mediante *prepared statements*.
    * **Cross-Site Scripting (XSS):** Vectores almacenados (*Stored*), reflejados (*Reflected*) y basados en DOM.
    * **Broken Authentication & IDOR:** Manipulación de identificadores directos en objetos y tokens de sesión.

### 3. Seguridad Defensiva & Operaciones (Blue Team Basics)
* **Gestión de Registros & Logs:** Análisis de eventos de seguridad en Windows Event Viewer (Event IDs críticos: `4624` Login exitoso, `4625` Login fallido, `4720` Usuario creado).
* **Mecanismos de Autenticación & Criptografía:** Cifrado simétrico (AES), asimétrico (RSA, ECC), funciones hash (SHA-256) y almacenamiento seguro de contraseñas (*salting & hashing* con bcrypt).

---

## Comandos & Herramientas Frecuentes

```bash
# Escaneo sigiloso con detección de versiones y scripts comunes
nmap -sS -sV -sC -T4 -p- 10.10.X.X -oN scan_results.txt

# Captura de tráfico en interfaz de red para análisis posterior
sudo tcpdump -i eth0 -nn -s0 -w capture.pcap
```
