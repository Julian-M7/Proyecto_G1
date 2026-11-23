# 07-srs-830 · Unidad 4 · Sesión 2
**IEEE 830-1998: el SRS clásico y sus ocho características**
Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Ingeniería de Requisitos, UPTC 2026 II, Grupo 1 · Versión 1.0 · 21/11/2026

> Esta versión 1.0 sincroniza el SRS con la Sesión 3 y cierra todos los pendientes con **supuestos de trabajo explícitos** (apéndice C del SRS). El patrocinador los valida en la fase 05.

## 1. Qué se hizo (en el orden de la sesión)
1. **Guía:** se leyó `ingenieria_requisitos_guia_sesion_02.docx` para extraer el método: qué va y qué no va en cada subsección, la tabla de decisión para organizar la sección 3 y la prueba de cada una de las ocho características.
2. **Ejemplo resuelto del PQRS:** se tomó su razonamiento (armar el SRS con lo que existe, trazar cada requisito, revisar con el checklist por requisito y por documento, reescribir y hacer un segundo pase).
3. **Insumos:** acta, matriz poder-interés, tres entrevistas, árbol KAOS, CU-01 a CU-04, los `.feature`, HU-01 a HU-10.
4. **SRS en la plantilla IEEE 830 adaptada:** portada, control de versiones (0.1, 0.2 y 1.0), lectores, secciones 1 y 2 completas con diagrama de contexto, sección 3 por característica con **8 requisitos de muestra** en EARS y **30 identificados** (RNF-007 se agregó en la Sesión 4), y apéndices A, B y C.
5. **Checklist de las ocho características:** pase por requisito (8 × 8), pase por documento (8 preguntas), 18 hallazgos con su cierre, reescritura de los 8 requisitos y segundo pase.
6. **Se añadieron:** `acta-revision-srs.md`, `ia-borrador-registro.md` y el diagrama de contexto en SVG y PNG.

## 2. Resultado

| Elemento | Resultado |
|---|---|
| Organización de la sección 3 | Por característica (G1 ventas, G2 inventario, G3 finanzas, G4 accesos), con la tabla de decisión de la guía |
| Requisitos | 30 identificados (23 funcionales y 7 no funcionales); 8 en la muestra |
| Necesidades | NI-01 a NI-18 (`08-requisitos-29148/strs-necesidades.md`) |
| Hallazgos | 18 (12 mayores y 6 menores); cubren las 8 características; los 18 están cerrados (10 en el texto, 8 con un supuesto) |
| Supuestos | 17 (TBD-01 a TBD-17), cada uno con quién lo valida y cuándo |
| Matriz de permisos | Definida en el apéndice B (roles: empleado, jefe y asesora) |

### Hallazgos más importantes (de los documentos de la Unidad 3)
- **H-01** HU-01 cancelaba la venta si fallaba la conexión, contra OB-1 y el acta → la venta se guarda en el dispositivo.
- **H-06** HU-03 rechazaba ventas por stock insuficiente → se advierte y se permite (RF-023).
- **H-08** Umbral de bajo stock: 10 implícito en HU-04, 5 en el `.feature` y «configurable» en CU-03 → parámetro por producto con valor inicial de 5.
- **H-10** El cierre de caja no tenía HU ni CU → HU-11.
- **H-13** CU-01 1a exigía conexión para productos nuevos → los productos se crean sin conexión en el mismo celular.
- **H-16** CU-03 y CU-04 citaban una meta G5 que no existe → se corrigen (correcciones-fuentes.md).

## 3. Decisiones del borrador (supuestos de trabajo)
1. **Prevalece el acta** sobre las HU y los CU cuando se contradicen.
2. **Prioridades MoSCoW** derivadas de los criterios de éxito del acta, ahora en `04-priorizacion/backlog.md` (18 Must, 10 Should y 2 Could en los 30 requisitos).
3. **SGMP, NI-xx, RF/RNF y los identificadores de prueba** (CP-xxx) existen solo dentro de estos documentos.
4. **El SRS que se entrega es la v1.0.** La v0.1 solo existe como el texto «antes» del checklist; el control de versiones registra 0.1, 0.2 y 1.0.

## 4. Archivos de esta carpeta

| Archivo | Contenido |
|---|---|
| `srs-martin-pescador-v1.0.docx` | SRS en la plantilla IEEE 830 adaptada |
| `checklist-8-caracteristicas.docx` | Checklist con pre-auditoría, hallazgos cerrados, reescritura y segundo pase |
| `acta-revision-srs.md` | Acta de revisión con roles asignados |
| `ia-borrador-registro.md` | Qué se le entregó a la IA y qué es supuesto |
| `diagramas/contexto-sgmp.svg` y `.png` | Figura 1 del SRS (diagrama de contexto) |

## 5. Cómo subirlo a GitHub
1. Rama propia, por ejemplo `unidad4/sesion2-srs`; copiar esta carpeta (la Sesión 3 trae también `04-priorizacion/backlog.md` y las correcciones a las fuentes).
2. Pull request revisado por Sandy Katherin Hurtado Suárez y Nicolás Bastidas Medina (moderador), con una fila «Unidad 4 · Sesión 2» en `CONTRIBUCIONES.md` con el trabajo real de cada integrante.
3. Propuesta de commits: (1) «07: SRS v0.1» con secciones 1 y 2; (2) «07: revisión SRS» con checklist y acta; (3) «07: SRS v1.0» con las correcciones y la sincronización con la Sesión 3.

## 6. Observaciones
- **Numeración de carpetas:** la Sesión 1 usa `06-estandares-mapa/` y el repositorio ya tiene `06-diagramas/`; esta sesión usa `07-srs-830/` y la Sesión 3, `08-requisitos-29148/`. Se pueden mantener ambas carpetas `06-*` o renombrar la de diagramas.
- **El SRS crece:** en la Unidad 7 la especificación de los 30 requisitos se escribe sobre este mismo archivo.
- **Facturación electrónica:** el acta la deja fuera porque el local hoy no entrega factura; la obligación del negocio se valida con el jefe y su contador (matriz de la Sesión 1, fila 14). No es asesoría legal.

## 7. Declaración de uso de IA
Se usó un asistente de IA (Claude, Anthropic) el 19 y 21/11/2026 para leer la guía, el ejemplo y los documentos de la Unidad 3; redactar el SRS, el glosario, la matriz de trazabilidad y el diagrama; aplicar el checklist como pre-auditoría y redactar las reescrituras. **Verificado contra las fuentes:** cada dato del SRS procede de un documento del repositorio. **Supuestos, no validados con el jefe:** los 17 del apéndice C. No se incluyó ningún número de cláusula de IEEE 830 ni de 29148 sin verificar. Detalle en `ia-borrador-registro.md`.
