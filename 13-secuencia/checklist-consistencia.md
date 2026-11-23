# Checklist de consistencia caso de uso vs. secuencia

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 3 · 22/11/2026

Revisores: Sandy Katherin Hurtado Suárez (DSE-01, DSE-02) y Julián Estiven Murcia Rodriguez (DSE-03); pasadas primera y segunda.

## Bloque A

| Ítem | DSE-01 | DSE-02 | DSE-03 |
|---|---|---|---|
| A1 Título e ID | Sí | Sí | Sí |
| A2 Participantes del catálogo | Sí | Sí (4 componentes del glosario) | Sí |
| A3 Sin diseño | Sí | Sí | Sí |
| A4 Nombres del glosario | Sí | Sí | Sí |
| A5 ≤ 25 mensajes | Sí (14) | Sí (11) | Sí (15) |

## Bloque B

| Ítem | DSE-01 | DSE-02 | DSE-03 |
|---|---|---|---|
| B1 Retornos | Sí | Sí | Sí |
| B2 Tipos de flecha | Sí (notificaciones asíncronas) | Sí | Sí |
| B3 Verbo + objeto | No R-01 → Sí | Sí | Sí |
| B4 Guardas | Sí | Sí | Sí |
| B5 alt completos | Sí | Sí | No R-02 → Sí |

## Bloque C

| Ítem | DSE-01 | DSE-02 | DSE-03 |
|---|---|---|---|
| C1 Pasos con mensaje | Sí | Sí (pasos 5–9) | Sí |
| C2 Orden | Sí | Sí | Sí |
| C3 Extensiones | No R-03 → Sí | N/A (solo principal) | No R-05 → Sí |
| C4 Fragmentos reales | Sí | Sí | Sí |
| C5 Emisor correcto | Sí | Sí | Sí |
| C6 Garantías | Sí | Sí | Sí |

## Bloque D

| Ítem | DSE-01 | DSE-02 | DSE-03 |
|---|---|---|---|
| D1 Datos definidos | Sí | Sí | Sí |
| D2 En la tabla de operaciones | Sí | Sí | Sí |
| D3 Criterios por rama | Sí | Sí | Sí |
| D4 Tiempos anotados | Sí (RNF-004) | Sí (RNF-003) | Sí (RNF-001) |
| D5 Falla de externos | N/A (sin externos) | N/A | No R-04 → Sí |
| D6 Disparos por tiempo | N/A | N/A | N/A (sin disparo por tiempo) |

## Bloque E

| Ítem | DSE-01 | DSE-02 | DSE-03 |
|---|---|---|---|
| E1 Leído por un interesado | No R-06 | No R-06 | No R-06 |
| E2 Revisión par | Sí | Sí | Sí (TI = el jefe) |

## Hallazgos

| N.º | Ítem | Diagrama | Qué se encontró | Dónde se corrige | Quién | Estado |
|---|---|---|---|---|---|---|
| R-01 | B3 | DSE-01 | «btnConfirmar()» como nombre de mensaje en la v0.1 | Diagrama: «confirmar venta» | Sandy Katherin Hurtado Suárez | Cerrado · 22/11/2026 |
| R-02 | B5 | DSE-03 | La rama «turno ya cerrado» estaba anidada dentro de la de diferencia | Diagrama: alt de primer nivel | Julián Estiven Murcia Rodriguez | Cerrado · 22/11/2026 |
| R-03 | C3 | DSE-01 | La confirmación repetida (doble toque) no estaba en el caso de uso | Caso de uso (extensión 5b) y requisito RF-028 | Julián Estiven Murcia Rodriguez | Cerrado · propuesto al jefe |
| R-04 | D5 | DSE-03 | La entrega a Equipo de respaldo no decía qué pasa si falla | Diagrama (alt) y EX-01 | Nicolás Bastidas Medina | Cerrado · 22/11/2026 |
| R-05 | C3 | DSE-03 | El segundo cierre del mismo turno no estaba en CU-06 | Caso de uso (extensión 1a) y requisito RF-029 | Nicolás Bastidas Medina | Cerrado · propuesto al jefe |
| R-06 | E1 | DSE-01 a 03 | Ningún interesado lo ha leído todavía | Recorrido con la empleada y el jefe en la fase 05 | Nicolás Bastidas Medina | Abierto hasta 12/12/2026 |
