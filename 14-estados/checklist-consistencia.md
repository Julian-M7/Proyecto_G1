# Checklist de consistencia de estados

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 4 · 22/11/2026

## Bloque A

| Ítem | DES-01 | DES-02 | DES-03 |
|---|---|---|---|
| A1 Título | Sí | Sí | Sí |
| A2 Un objeto | Sí | Sí | Sí |
| A3 Estados = situaciones | No RV-01 → Sí | Sí | Sí |
| A4 Sin diseño | Sí | Sí | Sí |
| A5 ≤ 10 estados | Sí (4) | Sí (3) | Sí (5) |

## Bloque B

| Ítem | DES-01 | DES-02 | DES-03 |
|---|---|---|---|
| B1 Inicial y alcanzables | Sí | Sí | Sí |
| B2 Eventos y guardas | Sí | Sí | Sí |
| B3 Guardas completas | Sí | Sí | No RV-02 → Sí |
| B4 Sin callejones | Sí | No RV-03 → Sí | Sí |
| B5 Regiones | N/A | N/A | Sí (región) |

## Bloque C

| Ítem | DES-01 | DES-02 | DES-03 |
|---|---|---|---|
| C1 Prueba del estado | Sí | Sí | Sí |
| C2 Condiciones como región | N/A | N/A | Sí (nivel de stock en región) |
| C3 Marcas como datos | Sí (constancia como dato) | Sí | Sí |
| C4 Igual al dominio | Sí (DCL-01, Sesión 5) | Sí | Sí |

## Bloque D

| Ítem | DES-01 | DES-02 | DES-03 |
|---|---|---|---|
| D1 Eventos con dueño | Sí | Sí | Sí |
| D2 CU como transición | Sí | Sí | No RV-05 → Sí |
| D3 Reglas con requisito | Sí | Sí | Sí |
| D4 Traza | Sí | Sí | N/A (la región no escribe historial) |
| D5 Tabla = diagrama | Sí | Sí | Sí |
| D6 Roles del catálogo | Sí | Sí | Sí |
| D7 Eventos de tiempo | N/A (sin tiempo) | No RV-04 → Sí | N/A |

## Bloque E

| Ítem | DES-01 | DES-02 | DES-03 |
|---|---|---|---|
| E1 Casos reales | Sí (casos-reales.md) | Sí | Sí |
| E2 Lectura y revisión | No RV-06 | No RV-06 | No RV-06 |

## Hallazgos

| N.º | Ítem | Diagrama | Qué se encontró | Dónde se corrige | Quién | Estado |
|---|---|---|---|---|---|---|
| RV-01 | A3 | DES-01 | La v0.1 tenía un estado «Editando»: es una acción, no una situación | Diagrama: transición reflexiva T-05 | Sandy Katherin Hurtado Suárez | Cerrado · 22/11/2026 |
| RV-02 | B3 | DES-03 | Faltaba la guarda complementaria de P-05 | Diagrama y ficha | Julián Estiven Murcia Rodriguez | Cerrado · 22/11/2026 |
| RV-03 | B4 | DES-02 | El turno «Abierto» no tenía salida si nadie cerraba: callejón sin salida | Transición T-13 y requisito RF-030 (nuevo) | Nicolás Bastidas Medina | Cerrado · propuesto al jefe |
| RV-04 | D7 | DES-02 | ¿Qué pasa si el turno no se cierra a medianoche? No hay evento de tiempo | Se decide no usar tiempo: T-13 avisa al abrir (RF-030) | Nicolás Bastidas Medina | Cerrado · 22/11/2026 |
| RV-05 | D2 | DES-03 | CU-18 cambia el producto pero no había forma de retirarlo sin borrar ventas | Estado Inactivo y requisito RF-031 (nuevo) | Julián Estiven Murcia Rodriguez | Cerrado · propuesto al jefe |
| RV-06 | E2 | DES-01 a 03 | Ningún interesado lo ha leído | Recorrido en la fase 05 (AM-01) | Nicolás Bastidas Medina | Abierto hasta 12/12/2026 |
