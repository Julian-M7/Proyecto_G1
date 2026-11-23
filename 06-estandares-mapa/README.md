# 06-estandares-mapa · Unidad 4 · Sesión 1
**El ecosistema de estándares: mapa, genealogía y cómo leerlos**
Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Ingeniería de Requisitos, UPTC 2026 II, Grupo 1 · Versión 1.0 · 21/11/2026

> Esta versión 1.0 verificó todos los estándares en los catálogos oficiales, leyó el texto público de 29148 y cerró lo que quedaba abierto con **supuestos de trabajo explícitos** que el patrocinador valida en la fase 05.

## 1. Qué se hizo (en el orden de la sesión)
1. **Guía:** se leyó `ingenieria_requisitos_guia_sesion_01.docx` para extraer el método (cuándo sirve un estándar, mapa por niveles, genealogía, lectura dirigida, adaptación y declaración).
2. **Ejemplo resuelto del PQRS:** se tomó el razonamiento, no el contenido.
3. **Verificación de vigencia** de cada estándar en catálogos públicos (ISO, IEEE SA, ISACA, normogramas): `fuentes.md`.
4. **Plantillas llenadas** con datos reales del proyecto: `matriz-aplicabilidad.docx` (contexto, 16 filas, decisión difícil, 6 adaptaciones y declaración) y `ficha-lectura-29148.docx` (ficha de 29148:2018 a partir de su vista previa pública).
5. **Se añadieron** `declaracion-aplicacion-v1.0.md` y `fuentes.md`.

## 2. Resultado de la matriz

| Decisión | Cantidad | Estándares |
|---|---|---|
| Aplica | 3 | ISO/IEC/IEEE 29148:2018 (conformidad adaptada), ISO/IEC 25010:2023, Ley 1581 de 2012 |
| Parcial | 1 | ISO/IEC/IEEE 12207:2026 |
| Referencia | 7 | IEEE 830-1998, IEEE 1061-1998, CMMI V3.0, ISO/IEC 33001:2015 y serie 33000, ISO/IEC 29110-1-1:2024, Resolución DIAN 000165 de 2023, Decreto 1377 de 2013 |
| No aplica | 4 | ISO/IEC/IEEE 15288:2023, ISO/IEC 9126, ISO 9001/9000, ISO/IEC/IEEE 90003:2018 |

**Decisión difícil explicada:** ISO 9001 (No aplica): certifica a una organización y no a un software, el negocio no tiene un sistema de gestión y el problema real (el descuadre de $50.000) se resuelve con trazabilidad (G3.2, G4.4, HU-10). Se conserva solo la práctica de control de cambios.

## 3. Actividades del equipo frente a los procesos de ciclo de vida (evidencia de la fila 12207)
Los nombres de los procesos salen del índice de 29148, que los hereda de 12207 y 15288.

| Actividad del equipo | Proceso que la cubre | Evidencia |
|---|---|---|
| Acta de constitución, alcance y criterios de éxito | Análisis del negocio o la misión (6.2 de 29148) | `01-kickoff/` |
| Matriz poder-interés y tres entrevistas | Definición de necesidades y requisitos de los interesados (6.3) | `01-kickoff/`, `02-elicitacion/` |
| Árbol KAOS, CU, HU y SRS | Definición de requisitos del software (6.4) | `03-especificacion/`, `07-srs-830/`, `08-requisitos-29148/` |
| Checklist de características y validación con el patrocinador | Verificación (6.5.2) y validación (6.5.3) | Checklists de las Sesiones 2 y 3; `05-validacion/` |
| Control de cambios por pull request | Gestión de requisitos y de cambios (6.6 y 6.6.2) | Repositorio |

Construcción, despliegue y operación no se cubren (acta, sección 2).

## 4. Hallazgos de la verificación que cambian lo que dice la guía
1. **ISO 9001:2015 está retirada:** ISO 9001:2026 se publicó el 16/09/2026 y ISO 9000:2026 en mayo de 2026; ISO/IEC/IEEE 90003:2018 sigue apuntando a la 2015.
2. **IEEE 1061-1998 está «Inactive-Reserved» desde 2020:** por eso es Referencia.
3. **29148:2018 sigue vigente (confirmada en 2024)** pero está «to be revised» y hay un borrador DIS de 3.ª edición; además su texto cita 15288:2015 y 12207:2017, hoy sustituidas.
4. **ISO/IEC 33020:2015 está cancelada:** la reemplaza ISO/IEC 33020:2019 (confirmada en 2026).
5. **El Decreto 1377 de 2013 está compilado** en el capítulo 25 del Decreto 1074 de 2015.
6. **Anexos de 29148:** el Anexo A (OpsCon) y el Anexo C (políticas de adaptación) son normativos; por eso la combinación de BRS y OpsCon se justifica por escrito en la matriz.

## 5. Supuestos de trabajo
- El negocio no tiene un sistema de gestión de calidad certificado (ninguna entrevista lo menciona).
- Ninguna norma distinta de las listadas afecta el registro de ventas o de gastos.
- Las adaptaciones de la sección 5 de la matriz se aceptan como decisión del equipo y las valida el patrocinador en la fase 05.
- La facturación electrónica se trata como referencia hasta que el jefe y su contador confirmen la situación tributaria del negocio (no es asesoría legal).
- El equipo no tiene el texto completo de 29148: el apartado 4 (conformidad) y los apartados 5.2.5 a 5.2.8 se resumen desde su índice y desde la guía del curso.

## 6. Archivos de esta carpeta

| Archivo | Contenido |
|---|---|
| `matriz-aplicabilidad.docx` | Plantilla diligenciada (secciones 1 a 7) |
| `ficha-lectura-29148.docx` | Ficha de lectura de ISO/IEC/IEEE 29148:2018 |
| `declaracion-aplicacion-v1.0.md` | Declaración de aplicación v1.0 |
| `fuentes.md` | Bitácora de vigencia con enlaces y estado |
| `README.md` | Este documento |

## 7. Cómo subirlo a GitHub
1. Rama propia, por ejemplo `unidad4/sesion1-estandares`.
2. Pull request revisado por Sandy Katherin Hurtado Suárez (revisora asignada), con una fila «Unidad 4 · Sesión 1» en `CONTRIBUCIONES.md` que refleje el trabajo real de cada integrante.
3. Propuesta de commits: (1) README y `fuentes.md`; (2) ficha de lectura; (3) matriz y declaración.

## 8. Observaciones
- **Numeración de carpetas:** el repositorio ya tiene `06-diagramas/`; esta sesión usa `06-estandares-mapa/` como pide la guía. Se pueden mantener ambas o renombrar la de diagramas.
- **Nombre:** el acta y la matriz poder-interés escriben «Julián **Estiven** Murcia Rodriguez»; esta entrega usa esa grafía (las versiones anteriores de esta carpeta decían «Stiven»).

## 9. Declaración de uso de IA
Se usó un asistente de IA (Claude, Anthropic) el 18 y 21/11/2026 para leer la guía y el ejemplo, consultar catálogos públicos, leer la vista previa pública de 29148, proponer las decisiones de cada fila con base en los documentos de la Unidad 3 y redactar todos los borradores de esta carpeta. **Verificado en fuente:** estado y edición de cada estándar y las definiciones, el alcance y el índice de 29148 citados. **Supuesto de trabajo:** lo listado en la sección 5. Ninguna cita de cláusula se incluyó sin aparecer en el índice o en el texto público.
