# Ficha de clase · CierreCaja

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

| Campo | Contenido |
|---|---|
| Tipo · vista | Concreta · DCL-01 |
| Propósito | Deja constancia de cómo terminó la caja de un turno: lo que el sistema calculó y lo que la empleada contó. |

## Atributos

| Atributo | Tipo de negocio | ¿Obligatorio? | Valores | Regla · quién lo captura |
|---|---|---|---|---|
| totalVentas, totalEgresos | Dinero | Sí | ≥ 0; calculados | RN-06 · el sistema |
| saldoDia, saldoEfectivo | Dinero | Sí | Calculados (glosario) | RF-006 · el sistema |
| conteoEfectivo | Dinero | Sí | ≥ 0 | RF-025 · empleado |
| diferencia | Dinero | Sí | conteo − saldo en efectivo | RN-07 · el sistema |
| observacion | Texto | Si diferencia ≠ 0 | Libre | RN-07 · empleado |

| Campo | Contenido |
|---|---|
| Relaciones y multiplicidades | Turno 1 — 0..1 CierreCaja (RN-06, decidido por el equipo con RF-029; lo confirma el jefe). |
| Reglas | RN-06, RN-07 |
| Casos de uso | CU-06 crea · CU-07 consulta (saldo de cierre) · CU-08 consulta |
| Requisitos | RF-006, RF-022, RF-025, RF-029, RNF-001 |
| Preguntas abiertas | PE-01: ¿se avisa la diferencia al jefe en el momento? — Nicolás Bastidas, 12/12/2026 |
| Versión | v1.0 · conteo, diferencia y observación agregados desde la v0.1 (Sesión 2) |
