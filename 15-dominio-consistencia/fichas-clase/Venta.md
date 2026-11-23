# Ficha de clase · Venta

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

| Campo | Contenido |
|---|---|
| Tipo · vista | Concreta · DCL-01 |
| Propósito | Una orden independiente de un cliente: lo que se le vendió, cuánto pagó y cómo, y quién la registró. |

## Atributos

| Atributo | Tipo de negocio | ¿Obligatorio? | Valores | Regla · quién lo captura |
|---|---|---|---|---|
| numeroRecibo | Identificador | Sí | AAAAMMDD-NNN | RN-01 · el sistema |
| total | Dinero | Sí | Suma de las líneas | RN-02 · el sistema |
| metodoPago | Lista | Sí | efectivo \| transferencia | RF-001 · empleado |
| canal | Lista | No | mostrador \| domicilio | RF-016 · empleado |
| estado | Lista | Sí | En registro \| Registrada \| Cerrada en caja \| Anulada | DES-01 · el sistema |

| Campo | Contenido |
|---|---|
| Relaciones y multiplicidades | Venta 1 *— 1..* LineaVenta (empleada); Turno 1 — 0..* Venta; Usuario 1 — 0..* Venta; Venta 1 — 0..1 ComprobantePago; Venta 1 — 0..* CambioVenta. |
| Reglas | RN-01 a RN-05 |
| Casos de uso | CU-01 crea · CU-05 y CU-02 actualizan · CU-06 actualiza (Cerrada en caja) · CU-08, CU-09, CU-11, CU-12 consultan |
| Requisitos | RF-001, RF-002, RF-016, RF-017, RF-018, RF-019, RF-028 |
| Preguntas abiertas | QE-01: ¿constancia de las ventas descartadas? — Sandy Hurtado, 12/12/2026 |
| Versión | v1.0 · estado alineado con DES-01; canal agregado |
