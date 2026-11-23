# Checklist de calidad de los diagramas de actividades

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 2 · 22/11/2026

Revisores (no dibujaron): Sandy Katherin Hurtado Suárez y Nicolás Bastidas Medina. Dibujó: Julián Estiven Murcia Rodriguez.

| Código | Diagrama | Versión | Fecha | Revisor | Archivo |
|---|---|---|---|---|---|
| D1 | DAC-01 · AS-IS jornada de venta y cierre | v1.0 | 22/11/2026 | Sandy Katherin Hurtado Suárez | diagramas/as-is.puml |
| D2 | DAC-02 · TO-BE jornada con el SGMP | v1.0 | 22/11/2026 | Sandy Katherin Hurtado Suárez | diagramas/to-be.puml |
| D3 | DAC-03 · flujo de CU-06 Cerrar la caja | v1.0 | 22/11/2026 | Nicolás Bastidas Medina | diagramas/flujo-caso-uso.puml |
| D4 | DAC-04 · flujo de CU-01 Registrar una venta | v1.0 | 22/11/2026 | Nicolás Bastidas Medina | diagramas/flujo-cu01-venta.puml |

## Prueba del recorrido

| Diagrama | Caso | ¿Se reprodujo? | Qué faltó | Hallazgo |
|---|---|---|---|---|
| D1 | Venta por transferencia (C4), no usada al dibujar la v0.1 | Sí (en la v0.2) | La foto del comprobante estaba después del cierre | HD-01 |
| D2 | Descuadre de $50.000 (C2) recorrido sobre el TO-BE | Sí | Nada: deja conteo, diferencia y responsable | — |
| D3 | Cierre con diferencia de −$50.000 | Sí | Faltaba la rama «ya tiene un cierre» | HD-04 |
| D4 | Venta de tres productos con uno sin stock | Sí | Nada | — |

## A · Forma

| Pregunta | D1 | D2 | D3 | D4 |
|---|---|---|---|---|
| A1 Un nodo inicial | sí | sí | sí | sí |
| A2 Todo camino termina | sí | sí | sí | sí |
| A3 Decisiones completas | sí | sí | sí | sí |
| A4 Bifurcación con unión | n.a. (sin paralelos) | n.a. (sin paralelos) | n.a. (sin paralelos) | n.a. (sin paralelos) |
| A5 Fusión vs. unión | sí | sí | sí | sí |
| A6 Verbo + objeto | no HD-02 | sí | sí | sí |
| A7 Objetos con nombre | sí | sí | sí | sí |
| A8 Ciclos con salida | sí | sí | sí | sí |

## B · Contenido

| Pregunta | D1 | D2 | D3 | D4 |
|---|---|---|---|---|
| B1 Calles con dueño real | sí | sí | sí | sí |
| B2 Acción en una calle | sí | sí | sí | sí |
| B3 Acción con fuente | sí | sí | sí | sí |
| B4 Reproduce un caso no usado | sí (C4) | sí (C2) | sí | sí |
| B5 Excepción dibujada | sí | sí | sí | sí |
| B6 Una sola altura | sí | sí | sí | sí |
| B7 Frontera persona/sistema | n.a. | sí | sí | sí |
| B8 Nombres del glosario | no HD-03 | sí | sí | sí |

## C · Utilidad

| Pregunta | D1 | D2 | D3 | D4 |
|---|---|---|---|---|
| C1 Problemas medidos | sí (PA-01 a PA-08) | n.a. | n.a. | n.a. |
| C2 Acción del sistema con requisito | n.a. | sí | sí | sí |
| C3 Requisito en el diagrama | n.a. | sí | no HD-04 | sí |
| C4 Acción del sistema con CU | n.a. | sí | sí | sí |
| C5 Pendientes con responsable | sí | sí | sí | sí |
| C6 Confirmación escrita | ? (fase 05) | ? (fase 05) | ? (fase 05) | ? (fase 05) |
| C7 Cabe en una hoja | sí | sí | sí | sí |
| C8 Lo normativo «por confirmar» | n.a. (sin norma) | n.a. (sin norma) | n.a. (sin norma) | n.a. (sin norma) |

## Hallazgos

| ID | Diagrama · elemento | Pregunta | Qué se encontró | Corrección | Revisó · aprobó | Estado |
|---|---|---|---|---|---|---|
| HD-01 | D1 · rama de transferencia | B4 | La foto del comprobante aparecía después de comparar las listas | Moverla dentro del ciclo de venta | Sandy Hurtado · Julián Murcia | Cerrado · 22/11/2026 |
| HD-02 | D1 · «Registro» | A6 | Una acción decía «Registro» sin verbo ni objeto | «Registra la venta producto por producto» | Sandy Hurtado · Julián Murcia | Cerrado · 22/11/2026 |
| HD-03 | D1 · calle «App» | B8 | La calle se llamaba «App», no como la nombra el negocio | «Aplicación del celular» | Sandy Hurtado · Julián Murcia | Cerrado · 22/11/2026 |
| HD-04 | D3 · inicio | C3 | RF-029 (segundo cierre) no aparecía en el flujo | Rama «¿El turno ya tiene un cierre?» | Nicolás Bastidas · Julián Murcia | Cerrado · 22/11/2026 |
| HD-05 | D1 a D4 | C6 | No hay confirmación escrita de los dueños de calle | Enviar diagramas y pedir confirmación (AM-01) | Nicolás Bastidas | Abierto · hasta 12/12/2026 |
| HD-06 | D2 | C4 | La acción «Avisa si el turno anterior quedó sin cierre» no tenía CU | Asignar a CU-07 con RF-030 | Nicolás Bastidas | Cerrado · 22/11/2026 |
| HD-07 | D2 | B6 | Una nota decía «pantalla de cierre» | Quitar: es diseño (Unidad 6) | Sandy Hurtado | Cerrado · 22/11/2026 |
| HD-08 | D4 | A3 | La decisión de stock no tenía la rama [no] | Agregar la guarda complementaria | Nicolás Bastidas | Cerrado · 22/11/2026 |
| HD-09 | D2 | C2 | «Genera la copia» no tenía requisito citado | RNF-005 en la nota | Sandy Hurtado | Cerrado · 22/11/2026 |
| HD-10 | D1 | B3 | La acción del jefe «consolida» no tenía fuente | Citar la entrevista al jefe, hallazgo 6 | Sandy Hurtado | Cerrado · 22/11/2026 |
| HD-11 | D3 | A2 | La rama de rechazo del segundo cierre no llegaba a un final | Agregar «stop» | Nicolás Bastidas | Cerrado · 22/11/2026 |
| HD-12 | D2 | C5 | PE-04 (tiempo en hora pico) sin fecha | Fecha 05/12/2026 (AM-02) | Nicolás Bastidas | Cerrado · 22/11/2026 |

## Resumen y decisión

| Diagrama | Versión | «no» | «?» | Abiertos | Decisión | Fecha · quién |
|---|---|---|---|---|---|---|
| D1 | v1.0 | 2 (cerrados) | 1 (C6) | HD-05 | Usar como base de requisitos; confirmación pendiente | 22/11/2026 · Sandy Hurtado |
| D2 | v1.0 | 0 | 1 (C6) | HD-05 | Usar como base de requisitos; confirmación pendiente | 22/11/2026 · Sandy Hurtado |
| D3 | v1.0 | 1 (cerrado) | 1 (C6) | HD-05 | Usar como base de requisitos | 22/11/2026 · Nicolás Bastidas |
| D4 | v1.0 | 0 | 1 (C6) | HD-05 | Usar como base de requisitos | 22/11/2026 · Nicolás Bastidas |
