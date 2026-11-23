# Autoevaluación de capacidad del proceso de requisitos · v1.0

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 4 · Sesión 5 · 22/11/2026

> Autoevaluación ligera, con la lógica de la serie ISO/IEC 33000. No es una evaluación formal ni otorga un nivel oficial; los indicadores son los del curso.

| Campo | Valor |
|---|---|
| Proceso y alcance | Elicitación y especificación de requisitos, del kickoff (17/09/2026) al acta ARR-MP-01 (22/11/2026) |
| Versión del repositorio | Proyecto_G1, rama main, estado del 22/11/2026, más 04 y 06–09 de esta entrega; sin etiquetas (el commit se anota en el PR; AM-04 crea req-base-1.0) |
| Evaluadores | Nivel 1: Sandy Hurtado (contrasta Julián Murcia) · Nivel 2: Nicolás Bastidas y Julián Murcia (contrasta Sandy Hurtado) · Nivel 3: los tres (contrasta Nicolás Bastidas en el PR) |
| Fecha y versión | 22/11/2026 · v1.0 |

Escala: N no logrado · P parcialmente · L ampliamente · F totalmente. Regla del curso: un nivel se alcanza si sus atributos están en L o F y los de los niveles inferiores en F.

## Inventario de evidencia

| Carpeta o fuente | Artefactos | Qué demuestran |
|---|---|---|
| **01-kickoff/** | Acta_Constitucion_.pdf y Matriz_Poder_Interes_.pdf (17/09/2026); acta-constitucion.md (vacío en el repositorio) | Objetivo, alcance, restricciones (sin internet, un celular), 7 criterios de éxito, riesgos; cinco interesados con poder, interés y estrategia. El cronograma deja dos hitos «[Por definir]». |
| **02-elicitacion/** | Entrevista_Empleada.pdf (17/09/2026), entrevista_asesora.docx (19/09/2026), Entrevista_Jefe_.pdf (sin fecha); 02-elicitacion.md (vacío) | Una técnica (entrevista con guía) aplicada a tres interesados, con hallazgos y dudas pendientes. La validación de las notas se envió a la asesora el 20/09/2026 y no tiene respuesta. |
| **03-especificacion/** | Árbol de metas KAOS.pdf; CU-01 a CU-04 (PDF); HU-01 a HU-10 (PDF); 9 escenarios .feature en aceptacion/; los .md índice están vacíos | Metas G0–G4 con obstáculos; casos de uso con flujos alternos; historias con criterios Gherkin. |
| **04-priorizacion/** | backlog.md (21/11/2026; vacío en el repositorio hasta la Unidad 4) | Backlog MoSCoW de 15 historias y 30 requisitos (18 Must, 10 Should, 2 Could), derivado del acta; supuesto de trabajo del equipo. |
| **05-validacion/** | 05-validacion.md (vacío) | Nada: no hay acta de inspección ni de validación con los interesados en el repositorio. |
| **06-estandares-mapa/** | matriz-aplicabilidad.docx, ficha-lectura-29148.docx, declaracion-aplicacion-v1.0.md, fuentes.md (18 y 21/11/2026) | Dieciséis estándares con edición verificada, fuente y fecha; decisión por estándar y seis adaptaciones justificadas. |
| **07-srs-830/** | srs-martin-pescador-v1.0.docx, checklist-8-caracteristicas.docx, acta-revision-srs.md, ia-borrador-registro.md, diagramas/ (19 y 21/11/2026) | SRS con secciones 1 y 2 completas y 8 requisitos de muestra; 18 hallazgos cerrados; versiones 0.1, 0.2 y 1.0. |
| **08-requisitos-29148/** | strs-necesidades.md, fichas/ (6 fichas), fichas-requisito-29148.docx, matriz-trazabilidad.md/.docx, decisiones-trazabilidad.md, checklist-29148.docx, glosario.md, correcciones-fuentes.md (21/11/2026) | NI-01 a NI-18 con dueño y fuente; matriz de 30 requisitos; 14 hallazgos del conjunto; decisiones D-00 a D-10 y supuestos P-01 a P-08. |
| **09-calidad/** | preocupaciones-calidad.md, matriz-relevancia.docx/.md, catalogo-rnf.docx/.md, tensiones-calidad.md, acta-revision-requisitos-2026-11-22.md (22/11/2026) | Diez preocupaciones textuales; matriz 9 × 5; 7 RNF medibles; acta ARR-MP-01 con CS-01 a CS-05 (revisión interna). |
| **GitHub: PR, issues, etiquetas** | Repositorio Proyecto_G1, rama main; CONTRIBUCIONES.md vacío; sin etiquetas; sin plantilla de issue | Los productos están versionados en Git, pero no hay registro de quién hizo qué ni línea base etiquetada; las entregas de la Unidad 4 se suben en esta misma entrega. |

## Nivel 1 · Realización del proceso

| Indicador | Evidencia | Val. | Brecha observada |
|---|---|---|---|
| **R1. Interesados y necesidades** | 01-kickoff/Matriz_Poder_Interes_.pdf (cinco interesados con poder, interés, cuadrante y estrategia); 08-requisitos-29148/strs-necesidades.md (NI-01 a NI-18, cada una con interesado dueño y fuente) | **F** | — |
| **R2. Elicitación documentada** | 02-elicitacion/Entrevista_Empleada.pdf (17/09), entrevista_asesora.docx (19/09) y Entrevista_Jefe_.pdf, con guía, hallazgos y dudas; 09-calidad/preocupaciones-calidad.md (citas textuales) | **L** | Una sola técnica (entrevista). La entrevista al jefe no registra fecha ni cita textual del tiempo de cierre; los clientes no se consultaron; el tiempo de atención en hora pico quedó «por definir» (P-08). |
| **R3. Requisitos especificados, identificados y priorizados** | 04-priorizacion/backlog.md (MoSCoW); 07-srs-830/srs-martin-pescador-v1.0.docx (sección 3 y apéndice C); 08-requisitos-29148/matriz-trazabilidad.md (30 requisitos con ID estable) | **L** | La prioridad MoSCoW la derivó el equipo del acta y no la ha aceptado el patrocinador; 22 de los 30 requisitos solo tienen nombre (se especifican en la Unidad 7). |
| **R4. Requisitos validados con los interesados** | Plantilla de validación enviada a la asesora el 20/09/2026 (entrevista_asesora.docx, sección 10); 09-calidad/acta-revision-requisitos-2026-11-22.md (revisión interna) | **P** | 05-validacion/ está vacío. Ningún requisito ha sido aceptado por un interesado: la asesora no respondió la validación y los 17 TBD y 8 supuestos P esperan la fase 05. |
| **Atributo: realización** | R1 en F, R2 y R3 en L, R4 en P. | **L** | Nivel 1 alcanzado (L basta para el propio nivel), pero no está en F: bloquea el nivel 2. |

## Nivel 2 · Gestión de la realización

| Indicador | Evidencia | Val. | Brecha observada |
|---|---|---|---|
| **G1. Objetivos y plan** | 01-kickoff/Acta_Constitucion_.pdf, sección 5 (cronograma de alto nivel) | **P** | Solo los hitos de kickoff y entrevistas tienen fecha; especificación y validación están «[Por definir]». No hay issues ni hitos con responsable por actividad. |
| **G2. Seguimiento y ajuste** | Seguimiento de los supuestos en 07-srs-830/ (apéndice C) y 08-requisitos-29148/decisiones-trazabilidad.md, con «quién valida y cuándo» | **P** | La validación de la asesora (20/09/2026) no tuvo seguimiento ni reprogramación registrada; la fecha de la entrevista al jefe sigue sin confirmar. |
| **G3. Responsabilidades y roles** | Roles en 07-srs-830/acta-revision-srs.md y en ARR-MP-01 (autor, moderador, revisora); responsables de medición en 09-calidad/catalogo-rnf.md | **P** | CONTRIBUCIONES.md está vacío; los roles se asignan por documento y no está escrito quién responde por la matriz o el catálogo entre sesiones. |
| **G4. Comunicación con interesados** | Estrategias por interesado en 01-kickoff/Matriz_Poder_Interes_.pdf («mantener informado», «mantener satisfecho», «monitorear») | **P** | No hay bitácora de comunicación: al jefe («mantener satisfecho») no se le ha presentado nada desde su entrevista y a la asesora no se le dio seguimiento. |
| **Atributo: gestión de la realización** | Los cuatro indicadores en P. | **P** | Atributo no logrado: no hay plan ni seguimiento registrados. |

## Nivel 2 · Gestión de los productos de trabajo

| Indicador | Evidencia | Val. | Brecha observada |
|---|---|---|---|
| **P1. Requisitos de los productos definidos** | Plantillas del curso diligenciadas; reglas EARS con «deberá» y glosario v2 en 08-requisitos-29148/glosario.md; checklists de 07-srs-830/ y 08-requisitos-29148/ | **L** | No existía una definición de «listo» única para un requisito: cada sesión aplicó su propio checklist (se fija en el plan, sección 6). |
| **P2. Control de versiones y registro de cambios** | Repositorio Git (rama main); control de versiones dentro de los documentos (SRS 0.1 → 0.2 → 1.0; fichas con historia); cambios en actas: H-01 a H-18, H3-01 a H3-14, D-00 a D-10, CS-01 a CS-05 | **P** | Los cambios constan en cuatro documentos de tres carpetas; no hay issues de cambio, no hay etiqueta de línea base y CONTRIBUCIONES.md no registra autores. |
| **P3. Revisión contra criterios explícitos** | 07-srs-830/checklist-8-caracteristicas.docx (pase por requisito y por documento); 08-requisitos-29148/checklist-29148.docx; ARR-MP-01 | **L** | Todas las revisiones son internas del equipo; las 24 fichas no muestreadas no han pasado el checklist individual. |
| **P4. Trazabilidad al día** | 08-requisitos-29148/matriz-trazabilidad.md y .docx (30 requisitos, cobertura por NI, huérfanos resueltos con D-01 a D-10) | **L** | Las columnas de caso de uso y pantalla están vacías (Unidades 5 y 6); el estado de RNF-001 a RNF-006 quedó desactualizado frente al catálogo hasta la pre-revisión del plan (hallazgo PR-01). |
| **Atributo: gestión de los productos** | P1, P3 y P4 en L; P2 en P. | **L** | Ampliamente logrado, con P2 como brecha principal. |

## Nivel 3 · Definición y despliegue

| Indicador | Evidencia | Val. | Brecha observada |
|---|---|---|---|
| **D1. Descripción del proceso** | Cada README.md de 06-estandares-mapa/ a 09-calidad/ describe cómo se hizo esa sesión; 06-estandares-mapa/README.md relaciona actividades con procesos de 12207 | **P** | No hay una descripción única del proceso de requisitos del equipo; cada sesión se hizo siguiendo la guía. |
| **D2. Adaptaciones justificadas** | 06-estandares-mapa/matriz-aplicabilidad.docx (sección 5: seis adaptaciones) y declaracion-aplicacion-v1.0.md | **L** | Las adaptaciones son del uso de los estándares, no del proceso propio del equipo. |
| **Atributo: definición del proceso** | Definición: D1 en P y D2 en L. | **P** | Atributo parcialmente logrado. |
| **D3. Uso consistente del proceso definido** | — | **N** | Sin un proceso definido no hay despliegue que valorar. |
| **D4. Datos del uso para mejorar** | Conteos de hallazgos por revisión (18 en 07, 14 en 08, 5 CS en 09) | **P** | Los datos existen, pero nadie los ha comparado entre sesiones ni ha medido el esfuerzo. |
| **Atributo: despliegue del proceso** | Despliegue: D3 en N y D4 en P. | **N** | D3, el núcleo del atributo, no tiene evidencia. |

## Perfil y nivel alcanzado

| Nivel · atributo | Valoración | ¿Alcanzado? |
|---|---|---|
| 1 · Realización | **L** | Sí, con brechas en R2, R3 y R4. |
| 2 · Gestión de la realización | **P** | No: atributo en P y el nivel 1 no está en F. |
| 2 · Gestión de los productos | **L** | No por sí solo: el nivel 2 exige ambos atributos en L o F y el nivel 1 en F. |
| 3 · Definición | **P** | No. |
| 3 · Despliegue | **N** | No. |

**Resultado: nivel 1 (Realizado)** según esta autoevaluación ligera.

**Objetivo: nivel 2 (Gestionado) al cierre de la Unidad 7**: realización en F, gestión de la realización en L o F y gestión de productos sostenida en L o F. El nivel 3 no se fija como objetivo.

## Acciones de mejora

| ID | Brecha | Acción | Prioridad | Responsable | Fecha | Evidencia de cierre |
|---|---|---|---|---|---|---|
| AM-01 | R4, G2 | Validación con el patrocinador en la fase 05: presentar el backlog, los 17 TBD, los supuestos P-01 a P-08 y la matriz de relevancia; firmar ARR-MP-01; registrar el acta en 05-validacion/. | Alta | Sandy Katherin Hurtado Suárez (con Camilo Gutiérrez) | 12/12/2026 | 05-validacion/acta-validacion-patrocinador.md firmada; supuestos en «validado» o con cambio registrado |
| AM-02 | R2 | Observar una hora pico en el local (desde las 6 p. m.): medir el tiempo actual de atención y de cierre (CS-01, CS-02) y hacer tres preguntas cortas a cinco clientes; fechar la entrevista al jefe con él. | Alta | Julián Estiven Murcia Rodriguez | 05/12/2026 | 02-elicitacion/observacion-hora-pico.md; RNF-004 sin condición |
| AM-03 | G1, G2 | Hito de GitHub por unidad (U5, U6, U7) con un issue por entregable, responsable y fecha; nota de seguimiento semanal de diez líneas. | Alta | Nicolás Bastidas Medina | 29/11/2026; luego cada viernes | Hitos e issues en GitHub; 10-mejora-adopcion/seguimiento/ con una nota por semana |
| AM-04 | P2, G3 | Llenar CONTRIBUCIONES.md con el trabajo real de cada integrante; etiqueta req-base-1.0 al aprobar este plan; plantilla de issue «Solicitud de cambio de requisito» (requisito, motivo, solicitante, impacto, decisión). | Alta | Julián Estiven Murcia Rodriguez | 29/11/2026 | CONTRIBUCIONES.md con filas por sesión; etiqueta en Git; .github/ISSUE_TEMPLATE/solicitud-cambio-requisito.md |
| AM-05 | G4 | Bitácora de comunicación según la matriz de poder-interés: resumen quincenal al jefe; recordatorio y visita presencial a la asesora para cerrar su validación. | Media | Nicolás Bastidas Medina | 05/12/2026 y cada quince días | 10-mejora-adopcion/bitacora-interesados.md con al menos tres entradas al cierre de la Unidad 7 |
| AM-06 | P3, P1 | Pasar el checklist individual de 29148 a las 24 fichas que no están en la muestra, aplicando la definición de «listo» del plan. | Media | Sandy Katherin Hurtado Suárez | Durante la Unidad 7 | Checklist diligenciado por ficha en 08-requisitos-29148/fichas/ |
| AM-07 | D1 | Describir en una página el proceso de requisitos del equipo (entradas, pasos, plantillas, revisión, salidas) a partir de lo que funcionó. Preparación, no compromiso de nivel 3. | Baja | Nicolás Bastidas Medina | Primera semana de la Unidad 7 | 10-mejora-adopcion/proceso-requisitos-equipo.md |

## Uso de IA y contraste

- IA (Claude, Anthropic), 22/11/2026: clasificar el inventario por indicador y redactar brechas y acciones. Cada ruta se abrió; la valoración la firman los integrantes de la tabla inicial.
- La propuesta inicial tenía R3 en F y P2 en L; se bajaron (prioridad no aceptada por el patrocinador; Git no es registro de cambios).
- Pre-contraste: rutas de R1, R4, G3, P2 y P4 abiertas; R3 de F a L y nueva brecha en P4 (PR-01). El contraste de cada integrante se deja como comentario en el PR antes de fusionar.
