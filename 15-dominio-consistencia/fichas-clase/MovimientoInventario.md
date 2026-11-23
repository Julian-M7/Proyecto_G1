# Ficha de clase · MovimientoInventario

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

| Campo | Contenido |
|---|---|
| Tipo · vista | Concreta · DCL-02 |
| Propósito | Cada vez que entra, sale o se corrige mercancía de un producto, con quién lo hizo. |

## Atributos

| Atributo | Tipo de negocio | ¿Obligatorio? | Valores | Regla · quién lo captura |
|---|---|---|---|---|
| tipo | Lista | Sí | entrada \| salida \| ajuste | RN-08 · jefe |
| cantidad | Cantidad | Sí | > 0 (ajuste: la contada) | RF-003 · jefe |
| motivo | Texto | Si es ajuste | Libre | RN-08 · jefe |
| fechaHora | Fecha y hora | Sí | La fija el sistema | RF-021 · el sistema |
| usuario | Referencia | Sí | Quien registró | RF-015 · el sistema |

| Campo | Contenido |
|---|---|
| Relaciones y multiplicidades | Producto 1 — 0..* MovimientoInventario; Usuario 1 — 0..* MovimientoInventario. |
| Reglas | RN-08 |
| Casos de uso | CU-03 crea · CU-12 y CU-16 consultan |
| Requisitos | RF-003, RF-021, RF-027 |
| Preguntas abiertas | PE-03: ¿quién registra un ajuste? — Julián Murcia, 12/12/2026 |
| Versión | v1.0 · tipo «ajuste» agregado (Sesión 2) |
