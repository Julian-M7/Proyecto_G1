# Lista de verificación de los diagramas de casos de uso

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 1 · 22/11/2026

Diagramas: DCU-01, DCU-02a, DCU-02b, DCU-02c (v1.0); primera pasada sobre `dcu-02a-v0.1-errores.puml`. Autor: Julián Estiven Murcia Rodriguez. Revisora: Sandy Katherin Hurtado Suárez.

## A · Límite y actores

| Ítem | Respuesta | Hallazgo | Observación |
|---|---|---|---|
| A1 Límite con nombre y actores fuera | Sí | — | Rectángulo «SGMP»; los cinco actores fuera. |
| A2 Actores son roles | Sí | — | Empleado, Jefe, Asesora, Usuario y Equipo de respaldo son roles; en v0.1 decía «Empleada» (H-03 lo unificó con el glosario). |
| A3 Sin componentes como actores | Sí | H-05 | La v0.1 tenía «Base de datos» como actor; corregido. |
| A4 Secundarios interactúan | Sí | — | Equipo de respaldo recibe el archivo en CU-17. |
| A5 Temporales justificados | Sí | — | No hay actor temporal: el Planificador se evaluó y se descartó (ficha S2). |
| A6 Actor con CU y ficha | Sí | — | Cinco fichas en actores/ (y la del Planificador descartado). |
| A7 ¿Falta alguien? | Sí | H-08 | Se preguntó en el taller interno; el registro está en acta-taller.md (clientes descartados; Planificador en pregunta abierta). |

## B · Casos de uso

| Ítem | Respuesta | Hallazgo | Observación |
|---|---|---|---|
| B1 Verbo + objeto del glosario | Sí | — | Verbo en infinitivo + objeto; términos del glosario v2. |
| B2 Metas, no CRUD | Sí | H-03 | «Gestionar ventas» de la v0.1 se dividió. |
| B3 Nivel de usuario | Sí | — | CU-10 es subfunción a propósito: extensión con receptores propios. |
| B4 Actor o disparador | Sí | — | CU-10 declara su disparador (evento de stock). |
| B5 ID y catálogo | Sí | — | CU-01 a CU-18 en el catálogo. |
| B6 Sin flujos | Sí | — | No hay flechas «luego» ni decisiones. |

## C · Relaciones

| Ítem | Respuesta | Hallazgo | Observación |
|---|---|---|---|
| C1 Asociaciones sin flecha | Sí | — | Líneas sin flecha. |
| C2 «include» correcto | N. A. | — | No se usa «include» en la v1.0. |
| C3 «extend» correcto | Sí | H-06 | CU-10 → CU-01 y CU-03 con [stock ≤ umbral mínimo]; CU-01 está completo sin la alerta. |
| C4 Generalizaciones | Sí | — | Empleado, Jefe y Asesora → Usuario («es un tipo de»). |
| C5 Se leen como frase | Sí | — | «La notificación de bajo stock extiende el registro de una venta cuando el stock queda en el umbral o por debajo». |
| C6 Transversales no incluidos | Sí | H-04 | El historial es transversal (nota en DCU-02c). |

## D · Legibilidad

| Ítem | Respuesta | Hallazgo | Observación |
|---|---|---|---|
| D1 ≤ 12 elementos | Sí | — | DCU-02a 8, DCU-02b 11, DCU-02c 10 elementos. |
| D2 Título, ID, versión, fecha | Sí | — | Título con DCU-nn, versión 1.0 y fecha. |
| D3 Nombres del glosario | Sí | — | Revisado contra 08-requisitos-29148/glosario.md y el catálogo. |
| D4 Lo que queda fuera en nota | Sí | — | Nota en DCU-01 con lo que queda fuera. |
| D5 Leído con un interesado | No | H-09 | Solo se leyó en el taller interno; la lectura con el jefe, la empleada y la asesora es en la fase 05. |

## E · Trazabilidad

| Ítem | Respuesta | Hallazgo | Observación |
|---|---|---|---|
| E1 Origen completo | Sí | — | Columna «Origen» completa. |
| E2 RF con CU o transversal | Sí | — | RF-001 a RF-023 con CU o transversal (Parte B del catálogo). |
| E3 Metas del sistema con CU | Sí | — | G4.5 (respaldo) obtuvo CU-17; G2.2 es CU-10. |
| E4 Huecos con responsable | Sí | — | H-01, H-02, H-07 y H-08 con responsable y fecha. |

## Hallazgos

| H-nn | Ítem | Gravedad | Qué se encontró | Corrección | Estado |
|---|---|---|---|---|---|
| H-03 | B2 | Mayor | «Gestionar ventas» (CRUD) en v0.1. | Dividir en CU-01, CU-05 y CU-02. | Corregido (v1.0) |
| H-04 | C6 | Mayor | «Registrar en historial» incluido por todos. | Quitar; nota de transversalidad. | Corregido (v1.0) |
| H-05 | A3 | Mayor | «Base de datos» como actor. | Eliminar. | Corregido (v1.0) |
| H-06 | C3 | Mayor | Flecha «extend» invertida. | CU-10 extiende a CU-01 y CU-03 con condición. | Corregido (v1.0) |
| H-09 | D5 | Menor | No se ha leído con un interesado real. | Lectura en voz alta en la fase 05 (AM-01). | Abierto hasta 12/12/2026 |
| H-10 | D2 | Menor | La v0.1 no tenía versión ni fecha en el título. | Título con DCU-nn · v1.0 · fecha. | Corregido (v1.0) |
| H-11 | A2 | Menor | «Empleada» (persona) en lugar del rol «Empleado» del glosario. | Renombrar a Empleado. | Corregido (v1.0) |
| H-12 | B1 | Menor | «Cerrar caja» sin artículo frente al glosario («cierre de caja»). | «Cerrar la caja». | Corregido (v1.0) |
| H-13 | D1 | Menor | Una sola vista de 19 casos en el primer boceto. | Dividir en DCU-02a, 02b y 02c. | Corregido (v1.0) |

## Registro de validación

| Versión | Fecha | Interesado | Resultado | Cambios o pendientes |
|---|---|---|---|---|
| v0.1 DCU-02a | 22/11/2026 | Equipo (taller interno): Nicolás Bastidas, facilitador; Julián Murcia, dibujante; Sandy Hurtado, relatora | Validado con cambios | H-03 a H-06 y H-10 a H-13 corregidos en v1.0 |
| v1.0 DCU-01 a 02c | 22/11/2026 | Sandy Hurtado (revisora, voz de la asesora según su entrevista) | Validado con cambios | H-01 y H-02: requisito e historia propuestos |
| v1.0 | 12/12/2026 | Camilo Gutiérrez — Jefe (dueño de H-01, H-07, H-08) | Programada (fase 05) | Confirmar RF-024, HU-16 y las preguntas PA-U5-01 y PA-U5-02 |
| v1.0 | 12/12/2026 | La empleada — Empleado | Programada (fase 05) | Leer DCU-02a: ¿falta algo que haga un lunes? |
| v1.0 | 12/12/2026 | Jennifer Adriana Rodríguez Cetina — Asesora | Programada (fase 05) | Leer DCU-02b; cerrar también la validación pendiente desde el 20/09/2026 |
| v1.0 | 12/12/2026 | Equipo de respaldo (lo representa el jefe) | Programada (fase 05) | Confirmar el medio (USB) del supuesto P-06 |
| v1.1 (prevista) | Tras la fase 05 | Los tres interesados | Programada | Incorporar las respuestas; el silencio no cuenta como aprobación |
