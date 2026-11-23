# Ficha de clase · Producto

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

| Campo | Contenido |
|---|---|
| Tipo · vista | Concreta · DCL-01 y DCL-02 |
| Propósito | Lo que se vende o se gasta en el local: su precio, cuánto hay y desde cuándo hay que reponer. |

## Atributos

| Atributo | Tipo de negocio | ¿Obligatorio? | Valores | Regla · quién lo captura |
|---|---|---|---|---|
| nombre | Texto | Sí | Único | RF-024 · jefe |
| precio | Dinero | Si es vendible | > 0 | RN-03 · jefe |
| umbralMinimo | Cantidad | Sí | ≥ 0; inicial 5 | RN-09 · jefe |
| stock | Cantidad | Sí | Puede ser negativo (RF-023) | RF-003 · el sistema |
| estado | Lista | Sí | Activo \| Inactivo | RN-13 · jefe |

| Campo | Contenido |
|---|---|
| Relaciones y multiplicidades | Producto 1 — 0..* LineaVenta; Producto 1 — 0..* MovimientoInventario; Producto 1 — 0..* NotificacionBajoStock. |
| Reglas | RN-03, RN-09, RN-13 |
| Casos de uso | CU-18 crea y actualiza · CU-01 y CU-03 actualizan el stock · CU-07 y CU-12 consultan |
| Requisitos | RF-003, RF-004, RF-007, RF-012, RF-023, RF-024, RF-031 |
| Preguntas abiertas | PA-D-01: ¿cambiar el precio afecta ventas ya registradas? (RN-03 dice que no) — Julián Murcia con el jefe, 12/12/2026 |
| Versión | v1.0 · estado Activo/Inactivo agregado (Sesión 4) |
