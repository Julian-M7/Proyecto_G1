# Ficha de clase · Turno

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

| Campo | Contenido |
|---|---|
| Tipo · vista | Concreta · DCL-01 |
| Propósito | El período de trabajo de una persona en la caja, desde que lo abre contando el efectivo hasta que lo cierra. |

## Atributos

| Atributo | Tipo de negocio | ¿Obligatorio? | Valores | Regla · quién lo captura |
|---|---|---|---|---|
| fechaApertura | Fecha y hora | Sí | La fija el sistema | RF-026 · el sistema |
| conteoApertura | Dinero | Sí | ≥ 0 | RF-026 · empleado |
| estado | Lista | Sí | Abierto \| En cierre \| Cerrado | DES-02 · el sistema |
| usuario | Referencia | Sí | Quien abrió | RN-14 · el sistema |
| avisoSinCierre | Sí/No | No | Si el anterior quedó sin cierre | RF-030 · el sistema |

| Campo | Contenido |
|---|---|
| Relaciones y multiplicidades | Usuario 1 — 0..* Turno; Turno 1 — 0..1 CierreCaja; Turno 1 — 0..* Venta. |
| Reglas | RN-06, RN-14 |
| Casos de uso | CU-07 crea · CU-06 actualiza · CU-01 consulta |
| Requisitos | RF-022, RF-026, RF-030 |
| Preguntas abiertas | PA-D-02: ¿hay dos turnos el mismo día? — Sandy Hurtado con la empleada, 12/12/2026 |
| Versión | v1.0 · clase nueva desde la v0.1 (antes «caja») |
