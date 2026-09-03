# 🏢 Administración de Active Directory & GPO Hardening (Windows Server)

<div style="display: flex; gap: 8px; margin-bottom: 20px;">
  <span class="badge-tag">Windows Server</span>
  <span class="badge-tag">Active Directory Domain Services</span>
  <span class="badge-tag">Group Policy Objects (GPO)</span>
  <span class="badge-tag">Hardening</span>
</div>

## 📌 Visión General

La administración centralizada de identidades y accesos en el entorno corporativo se gestiona a través de **Active Directory Domain Services (AD DS)** en servidores Windows Server. Esta guía resume las políticas de hardening y directivas de grupo (GPOs) aplicadas para robustecer la seguridad del dominio.

---

## 🗂️ Estructura de Unidades Organizativas (OUs)

Para una administración limpia basada en el principio de mínimo privilegio (*PoLP*), se estructuraron las Unidades Organizativas separando claramente usuarios, equipos administrativos y servidores:

```
CPCE-Domain.local
├── 📂 Admin (Cuentas con privilegios elevados)
├── 📂 Servidores (Controladores de Dominio, File Servers, DB)
├── 📂 Departamentos
│   ├── 📁 Administracion (Workstations & Users)
│   ├── 📁 Contabilidad (Workstations & Users)
│   └── 📁 Sistemas (IT Staff)
└── 📂 Dispositivos Generales
```

---

## 🔒 Políticas de Grupo (GPO) Críticas Implementadas

### 1. Política de Complejidad y Bloqueo de Cuentas (Password & Account Lockout Policy)

Para prevenir ataques de fuerza bruta (*brute-force*) y *password spraying*:

* **Longitud mínima:** 12 caracteres alfanuméricos con símbolos.
* **Historial de contraseñas:** Recordar últimas 10 contraseñas.
* **Umbral de bloqueo:** Bloquear cuenta tras 5 intentos fallidos durante 30 minutos.

### 2. Deshabilitación de Protocolos Obsoletos (Hardening de Red)

A través de GPO se forzó la desactivación de protocolos vulnerables a ataques de retransmisión (*relay* / *Man-in-the-Middle*):

```powershell
# Verificación de estado de SMBv1 (deshabilitado por seguridad)
Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol
```

* **Desactivación de LLMNR y NetBIOS:** Mitiga ataques de envenenamiento de red (*Responder / LLMNR Poisoning*).
* **Firma obligatoria de SMB (SMB Signing):** Requiere firma criptográfica en comunicaciones de archivos para evitar suplantación.

### 3. Restricción de Medios Extraíbles (USB Storage)

Para evitar fugas de información y propagación de malware mediante dispositivos USB no autorizados:
* `Computer Configuration -> Administrative Templates -> System -> Removable Storage Access`
* **All Removable Storage classes: Deny all access** (habilitado selectivamente para puestos con autorización expresa).

---

## 🛡️ Protocolo de Respaldo del Directorio (System State Backup)

Se establecieron respaldos periódicos del **System State** del Domain Controller mediante tareas programadas con `wbadmin`:

```powershell
wbadmin start systemstatebackup -backupTarget:E: -quiet
```
