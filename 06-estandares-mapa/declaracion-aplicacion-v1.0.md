# Declaración de aplicación de estándares — v1.0

**Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Especificación de requisitos, fase actual**

| Campo | Valor |
|---|---|
| Código | No aplica (el negocio no tiene sistema de gestión documental certificado; ver matriz, fila 7) |
| Versión | 1.0 |
| Fecha | 21 de noviembre de 2026 |
| Destinatarios | Docente del curso (Jorge Enrique Otalora Luna) y patrocinador (Camilo Gutiérrez, propietario de Martin Pescador) |
| Elaboraron | Nicolás Bastidas Medina, Sandy Katherin Hurtado Suárez y Julián Estiven Murcia Rodriguez (con apoyo de IA) |
| Revisó | Sandy Katherin Hurtado Suárez (revisora asignada; revisión por pull request) |

## 1. Propósito
Informar con qué estándares se elabora la especificación de requisitos del sistema, en qué grado se aplica cada uno, qué adaptaciones se hicieron y dónde está la evidencia.

## 2. Alcance
**Cubre:** necesidades de los interesados, requisitos funcionales y no funcionales y el SRS (esqueleto en la Unidad 4; especificación completa en la Unidad 7).
**No cubre:** construcción, pruebas, despliegue, capacitación, facturación electrónica ante la DIAN, integración con WhatsApp, contabilidad, impuestos, nómina ni compra automática a proveedores (acta de constitución, sección 2).

## 3. Estándares adoptados

| Estándar | Grado de aplicación | Evidencia |
|---|---|---|
| ISO/IEC/IEEE 29148:2018 | Conformidad adaptada (apartado 4.5): StRS simplificada, SRS y atributos | `08-requisitos-29148/`: StRS (NI-01 a NI-18), fichas, matriz de trazabilidad y checklist |
| ISO/IEC 25010:2023 | Modelo para clasificar los requisitos no funcionales | `07-srs-830/` (RNF-001 a RNF-007) y `09-calidad/` (Sesión 4) |
| ISO/IEC/IEEE 12207:2026 | Parcial: solo los procesos de requisitos (tabla de la sección 3 de este README) | Este README |
| Ley 1581 de 2012 | Se cumple, sin adaptación | HU-08, HU-09, HU-10 y RF-020 del SRS |

## 4. Adaptaciones y su justificación

| Estándar · elemento | Decisión | Justificación | Aprobó |
|---|---|---|---|
| 29148 · SyRS | Omitir | Solo software sobre un celular existente; el acta excluye hardware | Supuesto de trabajo del equipo (21/11/2026); el patrocinador lo valida en la fase 05 |
| 29148 · BRS y OpsCon | Combinar | Contexto en el acta y las metas G0–G4; concepto de operación en el SRS; la tabla de adaptaciones es el registro que prevé el Anexo C | Ídem |
| 29148 · StRS | Versión simplificada | Tabla de necesidades NI-01 a NI-18 desde las 3 entrevistas, la ley y el acta | Ídem |
| 29148 · atributos | Selección | Id, enunciado, justificación, fuente, meta KAOS, prioridad, verificación, estado | Ídem |
| 29148 · estructura del SRS | Modificación | Capítulos de IEEE Std 830-1998 (sustituido) con el contenido de 29148 | Ídem |
| 12207 · procesos | Selección | Solo procesos de requisitos | Ídem |

## 5. Estándares consultados como referencia (no adoptados)

| Estándar | Uso | Por qué no se adopta |
|---|---|---|
| IEEE Std 830-1998 | Estructura de capítulos del SRS | Sustituido por ISO/IEC/IEEE 29148 |
| IEEE Std 1061-1998 | Idea de métrica por requisito | Inactivo (Inactive-Reserved desde 2020) |
| CMMI V3.0; ISO/IEC 33001:2015 y 33020:2019 | Autoevaluación informal (Sesión 5) | No se ha realizado ni se planea una evaluación |
| ISO/IEC 29110-1-1:2024 | Lectura de contexto | Los perfiles organizan el desarrollo; esta fase solo especifica |
| Resolución DIAN 000165 de 2023; Decreto 1377 de 2013 | Consulta | El decreto está compilado en el Decreto 1074 de 2015; la aplicabilidad de la facturación se valida con el jefe |
| ISO/IEC/IEEE 15288:2023; ISO/IEC 9126; ISO 9001:2026 e ISO 9000:2026; ISO/IEC/IEEE 90003:2018 | — | Solo software / retirada / el negocio no tiene SGC |

## 6. Marco legal obligatorio
Ley Estatutaria 1581 de 2012: se cumple en lo relativo a datos personales de usuarios internos y de proveedores que sean personas naturales. La obligación de facturar electrónicamente ante la DIAN se valida con el jefe y su contador en la fase 05; esta declaración no la afirma ni la descarta.

## 7. Responsables

| Responsabilidad | Persona |
|---|---|
| 29148, 25010 y Ley 1581; ficha de lectura | Julián Estiven Murcia Rodriguez |
| 12207, 15288, ISO 9001 y 9000, 90003; DIAN | Sandy Katherin Hurtado Suárez |
| 830, 9126, 1061, CMMI, 33000, 29110, Decreto 1377; bitácora de fuentes | Nicolás Bastidas Medina |

## 8. Vigencia y revisión
Se revisa al cerrar la Unidad 4, al iniciar el SRS completo (Unidad 7) y cada vez que el catálogo oficial muestre una nueva edición. Se vigilan: la revisión en curso de ISO/IEC/IEEE 29148 (DIS, 3.ª edición), el proyecto de reforma de la Ley 1581 y las ediciones que cita 29148:2018 (15288:2015 y 12207:2017, sustituidas por 15288:2023 y 12207:2026).

## 9. Declaración
La especificación de requisitos del Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) se elabora conforme a ISO/IEC/IEEE 29148:2018, con las adaptaciones de la sección 4 (conformidad adaptada, apartado 4.5 del estándar). Su estructura de capítulos toma como referencia IEEE Std 830-1998 (sustituido por ISO/IEC/IEEE 29148); sus requisitos de calidad se clasifican según ISO/IEC 25010:2023; y el proceso de requisitos toma parcialmente como marco ISO/IEC/IEEE 12207:2026. Los requisitos derivados de la Ley 1581 de 2012 se especifican para su cumplimiento, sin adaptación. Esta declaración no constituye una certificación ni una evaluación de conformidad realizada por un tercero.

| Patrocinador | Responsable técnico |
|---|---|
| Camilo Gutiérrez — propietario, Martin Pescador | Equipo de análisis: Nicolás Bastidas Medina, Sandy Katherin Hurtado Suárez y Julián Estiven Murcia Rodriguez |
