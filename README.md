# Proyecto_G1 · Sistema de gestión de ventas, inventario y finanzas para Martin Pescador

Proyecto final de **Ingeniería de Requisitos** (UPTC · Facultad de Ingeniería · 2026 II · Grupo 1). Este repositorio reúne la ingeniería de requisitos completa de un sistema de software para la cafetería **Martin Pescador**: desde el acta de constitución y las entrevistas hasta el SRS, los modelos UML, el prototipo de interfaz y las pruebas de usabilidad.

| | |
|---|---|
| **Docente** | Jorge Enrique Otalora Luna |
| **Equipo** | Nicolás Bastidas Medina · Sandy Katherin Hurtado Suárez · Julián Estiven Murcia Rodriguez |
| **Patrocinador** | Camilo Gutiérrez, jefe y propietario de Martin Pescador |
| **Asesora financiera** | Jennifer Adriana Rodríguez Cetina |
| **Contribuciones por integrante** | [CONTRIBUCIONES.md](CONTRIBUCIONES.md) |

---

## 1. El problema

Martin Pescador lleva hoy sus cuentas con un **doble registro**: un cuaderno físico y una aplicación en el celular del local. De ahí salen tres problemas que motivan el proyecto:

- No se puede rastrear el origen de un descuadre. Hubo uno de 50 mil pesos y no había ningún respaldo para revisarlo.
- Consolidar las cuentas del día se hace a mano y toma entre 8 y 15 minutos.
- El inventario no se controla de forma confiable; se reabastece cuando el producto ya está muy bajo.

## 2. Objetivo

Especificar un sistema de software que reemplace el doble registro y permita:

1. Registrar cada venta como una orden independiente, con su método de pago.
2. Controlar el inventario con alertas de agotamiento.
3. Registrar los gastos diarios y de mercado.
4. Generar automáticamente el cierre de caja diario, con historial trazable de cada transacción.

El sistema debe funcionar **sin conexión a internet** en el celular del local, sin perder datos.

### Alcance de esta fase

| Dentro | Fuera (y por qué) |
|---|---|
| Ventas por orden, con edición o anulación que deja constancia | Facturación electrónica ante la DIAN: excede el marco técnico y normativo de esta fase |
| Inventario por producto con alertas de bajo stock | Integración con WhatsApp o redes sociales: solo se registra el canal del pedido |
| Gastos, egresos e ingresos en un solo medio | Contabilidad formal, impuestos y nómina |
| Cierre de caja diario y búsqueda por número de recibo | Compra automática a proveedores: solo se alerta el agotamiento |
| Reportes de ingresos, egresos, flujo de caja y rotación | Hardware (caja registradora, impresora, datáfono) |
| Perfiles con permisos: empleado, jefe y asesora | Implementación en producción y capacitación del personal |
| Funcionamiento sin conexión con persistencia confiable | |

### Criterios de éxito (acta de constitución)

- Consolidar las cuentas del día en **3 minutos o menos** (hoy, entre 8 y 15).
- Capturar el **100 %** de las ventas de una jornada de prueba una sola vez, sin cuaderno.
- Localizar el origen de un descuadre simulado en **menos de 5 minutos** con el historial y el número de recibo.
- Generar alerta para el **100 %** de los productos por debajo del mínimo definido con el jefe.
- Operar toda la jornada de prueba sin internet y sin pérdida de datos.
- Especificación aprobada por escrito por el patrocinador.

---

## 3. Estructura del repositorio

Cada carpeta es una sesión de trabajo de la asignatura y lleva sus plantillas diligenciadas. Las carpetas de las Unidades 4 y 5 además traen un `README.md` propio con lo que se hizo y los supuestos adoptados.

| Unidad | Carpeta | Contenido |
|---|---|---|
| **1 a 3** · Inicio, elicitación y especificación | `01-kickoff/` | Acta de constitución y matriz de poder-interés de los interesados |
| | `02-elicitacion/` | Guías y entrevistas al jefe, a la empleada y a la asesora |
| | `03-especificacion/` | Árbol de metas KAOS, historias de usuario, casos de uso y escenarios de aceptación (Gherkin) |
| | `04-priorizacion/` | Backlog priorizado con MoSCoW |
| | `05-validacion/` | Validación de los requisitos |
| | `06-diagramas/` | Diagramas de actividades |
| **4** · Estándares y calidad | `06-estandares-mapa/` | Aplicabilidad de estándares, ficha de lectura de ISO/IEC/IEEE 29148, declaración de aplicación |
| | `07-srs-830/` | SRS v1.0 con el esquema de IEEE 830, checklist de ocho características, diagrama de contexto |
| | `08-requisitos-29148/` | Necesidades de los interesados, fichas de requisito, matriz de trazabilidad, glosario |
| | `09-calidad/` | Requisitos no funcionales con ISO/IEC 25010: relevancia, catálogo, tensiones, acta de revisión |
| | `10-mejora-adopcion/` | Autoevaluación de capacidad y plan de adopción de estándares |
| **5** · Modelado UML | `11-modelo-casos-uso/` | Diagramas de casos de uso, fichas de actor, catálogo de casos de uso |
| | `12-procesos-actividades/` | Procesos AS-IS y TO-BE, hallazgos y brechas |
| | `13-secuencia/` | Diagramas de secuencia, escenarios y operaciones del sistema |
| | `14-estados/` | Máquinas de estados, matrices estado × evento × rol |
| | `15-dominio-consistencia/` | Modelo de dominio, fichas de clase, matriz de consistencia entre modelos |
| **6** · Prototipado de interfaz | `16-usuarios-usabilidad/` | Fichas de persona, escenario y puntos de dolor |
| | `17-pantallas-navegacion/` | Inventario de pantallas, matriz CU–pantalla, navegación |
| | `18-wireframes-estilo/` | Wireframes anotados, guía de estilo, catálogo de mensajes |
| | `19-prototipo-funcional/` | Plan del prototipo, fichas de pantalla con reglas y el prototipo ejecutable |
| | `20-validacion-prototipo/` | Guion de prueba de usabilidad, evaluación SUS y heurística, hallazgos por severidad |
| **7** · Especificación textual | `21-srs-estructura/` | SRS-MP-001 v1.1, ficha de alcance y supuestos, checklist de revisión |
| | `22-redaccion-requisitos/` | Requisitos en notación EARS, glosario, pendientes, revisión por pares |
| | `23-casos-uso-historias/` | Casos de uso completos, historias de usuario y escenarios de aceptación |
| | `24-reglas-pantallas/` | Catálogo de reglas y tablas de decisión, ficha de pantalla ejecutable, matriz estado × acción × rol |
| | `25-srs-integracion/` | Matriz de trazabilidad completa, inspección del SRS, solicitudes de cambio, prueba de tres preguntas |
| **8** · Cierre | a cargo de Nicolás Bastidas Medina | Se incorpora al repositorio con la entrega de la unidad |

> Hay dos carpetas con el número 06: `06-diagramas/` (Unidad 3) y `06-estandares-mapa/` (Unidad 4).

## 4. Cómo se conectan los documentos

Todo requisito se puede seguir de punta a punta:

```
Necesidad del interesado (NI) → Meta KAOS (G) → Historia de usuario (HU) → Caso de uso (CU)
        → Requisito (RF / RNF) → Pantalla (P) → Prueba (CP)
```

| Prefijo | Qué identifica | Dónde vive |
|---|---|---|
| `NI-` | Necesidad del interesado | `08-requisitos-29148/strs-necesidades.md` |
| `G` | Meta del árbol KAOS | `03-especificacion/` |
| `HU-` | Historia de usuario | `03-especificacion/`, `04-priorizacion/`, `23-casos-uso-historias/` |
| `CU-` | Caso de uso | `11-modelo-casos-uso/`, `23-casos-uso-historias/` |
| `RF-` / `RNF-` | Requisito funcional / no funcional | `07-srs-830/`, `08-requisitos-29148/`, `09-calidad/`, `22-redaccion-requisitos/` |
| `P-` | Pantalla | `17-pantallas-navegacion/`, `19-prototipo-funcional/` |
| `RN-` | Regla de negocio | `24-reglas-pantallas/` |
| `DCU`, `DAC`, `DSE`, `DES`, `DCL` | Diagramas de casos de uso, actividades, secuencia, estados y clases | `11` a `15` |

Los requisitos se priorizan con **MoSCoW** (Must, Should, Could, Won't) y se redactan con la notación **EARS** en la Unidad 7.

### Estándares aplicados

IEEE 830 (estructura del SRS), ISO/IEC/IEEE 29148:2018 (procesos y contenido de los requisitos), ISO/IEC 25010:2023 (calidad del producto), IEEE 1061 (métricas de calidad), UML 2 (modelado), EARS (redacción) y SUS (usabilidad).

## 5. Prototipo

El prototipo de la Unidad 6 está en [`19-prototipo-funcional/`](19-prototipo-funcional/). Es una página web estática: no necesita servidor ni instalación.

1. Abrir `19-prototipo-funcional/index.html` en el navegador. Se ve mejor en una ventana angosta, como un celular.
2. Usar el botón **☰ Pantallas** para cambiar entre las tres pantallas simuladas:
   - **P-02** · Registrar venta (empleado)
   - **P-04** · Gestionar inventario (jefe)
   - **P-10** · Reporte financiero (asesora)

Los datos son simulados y viven en memoria: al recargar la página vuelven a su estado inicial. Los wireframes anotados están en `18-wireframes-estilo/` (`index_WF01-02.html` y `index_WF03.html`).

## 6. Estado del proyecto

- **Unidades 1 a 7:** incluidas en el repositorio.
- **Unidad 8:** a cargo de Nicolás; se agrega al repositorio con su entrega.
- **Validación con los interesados:** la lectura de los modelos y del catálogo con el jefe, la empleada y la asesora está programada para el 12/12/2026. Hasta entonces los requisitos nuevos de la Unidad 5 (RF-024 a RF-031) quedan en estado «Propuesto».
- **Pendientes abiertos:** cada documento registra los suyos con responsable. Los de la Unidad 7 están consolidados en `22-redaccion-requisitos/pendientes.docx` y `25-srs-integracion/pendientes-nuevos-carpeta25.md` (entre ellos, las solicitudes de cambio SC-01 y SC-02, que esperan la decisión del comité de cambios).

## 7. Cómo trabajamos

- **Ramas y revisión:** cada unidad se sube en su propia rama y se fusiona a `main` por *pull request*, con la revisión de otro integrante y al menos un commit por persona.
- **Formato:** las plantillas del curso van diligenciadas en `.docx` o `.pdf`; las versiones de trabajo en Markdown; los diagramas UML como `.puml` junto a su `.png`.
- **Versiones:** las líneas base se marcan con etiquetas: `req-base-1.0` (Unidad 4) y `modelos-req-v1.0` (Unidad 5).
