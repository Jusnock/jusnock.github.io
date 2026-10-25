"use strict";
(() => {
  const translations = {
  "Saltar al contenido": "Skip to content",
  "ESTUDIANTE DE INGENIERÍA EN SISTEMAS": "INFORMATION SYSTEMS ENGINEERING STUDENT",
  "Menú": "Menu",
  "Proyectos": "Projects",
  "Experiencia": "Experience",
  "Hablemos": "Let's talk",
  "PORTFOLIO PERSONAL · PROYECTOS Y APRENDIZAJE": "PERSONAL PORTFOLIO · PROJECTS & LEARNING",
  "Hola, soy": "Hi, I'm",
  "Estudiante de Ingeniería en Sistemas": "Information Systems Engineering student",
  "Estudio en la UTN de Mendoza y me interesan las redes, la administración de sistemas y la ciberseguridad. Acá comparto los proyectos y laboratorios con los que voy aprendiendo y poniendo en práctica lo que estudio.": "I study at UTN in Mendoza, with an interest in networking, systems administration and cybersecurity. Here I share the projects and labs I use to learn and put my studies into practice.",
  "Explorar proyectos": "Explore projects",
  "Descargar CV": "Download CV (Spanish)",
  "Ingeniería en Sistemas · UTN": "Information Systems Engineering · UTN",
  "Mi espacio para experimentar y aprender.": "My space to experiment and learn.",
  "cat sobre-mi.txt": "cat about-me.txt",
  "Estudiante en UTN FRM.": "Student at UTN FRM.",
  "Explorando redes y seguridad.": "Exploring networks and security.",
  "Aprendiendo en el laboratorio.": "Learning in the lab.",
  "REDES CORPORATIVAS": "ENTERPRISE NETWORKING",
  "ADMINISTRACIÓN DE SISTEMAS": "SYSTEMS ADMINISTRATION",
  "AUTOMATIZACIÓN": "AUTOMATION",
  "01 / TRABAJO EN PRÁCTICA": "01 / HANDS-ON WORK",
  "Mis proyectos y laboratorios": "My projects and labs",
  "Mi GitHub": "My GitHub",
  "PROYECTO DESTACADO": "FEATURED PROJECT",
  "01 / CIBERSEGURIDAD": "01 / CYBERSECURITY",
  "Del ataque a la respuesta. Un entorno aislado para emular fuerza bruta SSH, analizar telemetría y automatizar la contención con Wazuh.": "From attack to response. An isolated environment to emulate SSH brute-force attacks, analyze telemetry and automate containment with Wazuh.",
  "Ver caso de estudio ↗": "Read case study (Spanish) ↗",
  "Repositorio ↗": "Repository ↗",
  "EVIDENCIA DEL LABORATORIO": "LAB EVIDENCE",
  "DETECCIÓN → CORRELACIÓN → RESPUESTA": "DETECTION → CORRELATION → RESPONSE",
  "02 / INFRAESTRUCTURA": "02 / INFRASTRUCTURE",
  "Una red empresarial,": "An enterprise network,",
  "de extremo a extremo.": "from end to end.",
  "Infraestructura virtualizada en GNS3: cinco VLANs, directorio corporativo, monitoreo y acceso remoto seguro.": "Virtualized infrastructure in GNS3: five VLANs, a corporate directory, monitoring and secure remote access.",
  "Explorar arquitectura ↗": "Explore architecture (Spanish) ↗",
  "Memoria PDF ↓": "Technical report (Spanish PDF) ↓",
  "03 / PYTHON & AUTOMATIZACIÓN": "03 / PYTHON & AUTOMATION",
  "Visibilidad desde la terminal.": "Visibility from the terminal.",
  "Herramienta CLI de reconocimiento de red: descubrimiento de hosts, escaneo de puertos concurrente e identificación de servicios.": "A network reconnaissance CLI: host discovery, concurrent port scanning and service identification.",
  "Conocer la herramienta ↗": "Explore the tool (Spanish) ↗",
  "Código ↗": "Source code ↗",
  "02 / RECORRIDO": "02 / MY JOURNEY",
  "Mi recorrido": "My journey",
  "Combino mi formación en la universidad con experiencia en soporte de TI y desarrollo. Me interesa seguir aprendiendo y sumar práctica en redes y seguridad.": "I combine my university studies with experience in IT support and development. I want to keep learning and gain more hands-on experience in networking and security.",
  "FORMACIÓN ACADÉMICA": "EDUCATION",
  "Ingeniería en Sistemas de Información": "Information Systems Engineering",
  "2020 — Presente · Estudiante avanzado": "2020 — Present · Advanced undergraduate student",
  "ABR 2025 — SEP 2026": "APR 2025 — SEP 2026",
  "Soporte de TI e Infraestructura de Redes": "IT Support & Network Infrastructure",
  "Administración de redes con MikroTik y Ubiquiti UniFi. Segmentación con VLANs, túneles OpenVPN y gestión de Windows Server, Active Directory, GPOs y entornos Linux con Docker.": "Network administration with MikroTik and Ubiquiti UniFi. VLAN segmentation, OpenVPN tunnels, and management of Windows Server, Active Directory, GPOs and Linux environments with Docker.",
  "JUL 2024 — AGO 2024": "JUL 2024 — AUG 2024",
  "Pasante de Desarrollo Web Backend": "Backend Web Development Intern",
  "Desarrollo de microservicios RESTful en Python, optimización de consultas SQL y colaboración con Git y GitHub.": "Developed RESTful microservices in Python, optimized SQL queries and collaborated using Git and GitHub.",
  "03 / CAJA DE HERRAMIENTAS": "03 / TOOLBOX",
  "Tecnologías que uso y estudio": "Technologies I use and study",
  "01 / DEFENDER": "01 / DEFEND",
  "Seguridad & SOC": "Security & SOC",
  "02 / CONECTAR": "02 / CONNECT",
  "Redes & infraestructura": "Networking & infrastructure",
  "MikroTik RouterOS · Ubiquiti UniFi · VLANs 802.1Q · OpenVPN · Firewalls stateful": "MikroTik RouterOS · Ubiquiti UniFi · 802.1Q VLANs · OpenVPN · Stateful firewalls",
  "03 / OPERAR": "03 / OPERATE",
  "Sistemas & monitoreo": "Systems & monitoring",
  "04 / AUTOMATIZAR": "04 / AUTOMATE",
  "Código & herramientas": "Code & tools",
  "APRENDIZAJE CONTINUO": "CONTINUOUS LEARNING",
  "Curso Técnico en Redes · Completado": "Networking course · Completed",
  "Cyber Security 101 · Completado": "Cyber Security 101 · Completed",
  "SY0-701 · En preparación": "SY0-701 · In preparation",
  "SEGUIR APRENDIENDO, EN EQUIPO": "KEEP LEARNING, TOGETHER",
  "¿Charlamos": "Let's talk",
  "?": "?",
  "Me gustaría seguir creciendo en infraestructura, redes y ciberseguridad.": "I'd like to keep growing in infrastructure, networking and cybersecurity.",
  "Si tenés una oportunidad o querés conversar sobre algún proyecto, escribime.": "If you have an opportunity or would like to discuss a project, get in touch.",
  "Escribime un correo ↗": "Send me an email ↗",
  "Copiar email": "Copy email",
  "Volver arriba ↑": "Back to top ↑",
  "Juan Vazquez, inicio": "Juan Vazquez, home",
  "Navegación principal": "Main navigation",
  "Diagrama conceptual de infraestructura: red, firewall y monitoreo SIEM": "Infrastructure concept diagram: network, firewall and SIEM monitoring",
  "Ver el caso de estudio del laboratorio SOC": "Read the SOC lab case study",
  "Dashboard de Wazuh con eventos de seguridad del laboratorio Purple Team": "Wazuh dashboard showing security events from the Purple Team lab",
  "Volver al inicio": "Back to home"
};

  const button = document.querySelector("#language-toggle");
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest("script, style, #language-toggle")) continue;
    const source = node.nodeValue.trim();
    if (Object.hasOwn(translations, source)) textNodes.push({ node, source, original: node.nodeValue });
  }
  const attributes = [];
  document.querySelectorAll("[aria-label], [alt]").forEach(element => {
    ["aria-label", "alt"].forEach(attribute => {
      const source = element.getAttribute(attribute);
      if (source && translations[source]) attributes.push({ element, attribute, source });
    });
  });
  const descriptions = [...document.querySelectorAll('meta[name="description"], meta[property="og:description"]')]
    .map(element => ({ element, original: element.content }));
  const originalTitle = document.title;
  const originalOgTitle = document.querySelector('meta[property="og:title"]').content;
  let language = "es";
  function setLanguage(next) {
    language = next === "en" ? "en" : "es";
    document.documentElement.lang = language;
    textNodes.forEach(({ node, source, original }) => {
      node.nodeValue = language === "en" ? original.replace(source, () => translations[source]) : original;
    });
    attributes.forEach(({ element, attribute, source }) => element.setAttribute(attribute, language === "en" ? translations[source] : source));
    document.title = language === "en" ? "Juan Francisco Vazquez · Information Systems Engineering Student" : originalTitle;
    document.querySelector('meta[property="og:title"]').content = language === "en" ? document.title : originalOgTitle;
    descriptions.forEach(({ element, original }) => {
      element.content = language === "en" ? "Juan Francisco Vazquez, Information Systems Engineering student in Mendoza, Argentina. Networking and cybersecurity projects, labs, experience and contact." : original;
    });
    button.textContent = language === "es" ? "EN" : "ES";
    button.lang = language === "es" ? "en" : "es";
    button.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
    button.title = button.getAttribute("aria-label");
    const status = document.querySelector("#copy-status");
    if (status.dataset.copied === "true") status.textContent = language === "es" ? "Email copiado" : "Email copied";
    try { localStorage.setItem("portfolio-language", language); } catch {}
  }
  let saved = "es";
  try { saved = localStorage.getItem("portfolio-language") || "es"; } catch {}
  setLanguage(saved);
  button.hidden = false;
  button.addEventListener("click", () => setLanguage(language === "es" ? "en" : "es"));
})();
