# Matrices estado × evento y acciones por estado y rol

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 4 · 22/11/2026

## A. Estado × evento (venta)

| Estado \ evento | agregar producto | confirmar venta | editar venta | anular venta | cerrar la caja | descartar venta |
|---|---|---|---|---|---|---|
| En registro | → En registro · T-02 | → Registrada [datos completos] · T-03 | ✗ RG-01 | ✗ RG-01 | se ignora (el cierre la excluye, RG-02) | → fin · T-04 |
| Registrada | ✗ RG-03 (se edita con motivo) | se ignora: muestra la misma venta (RF-028) | → Registrada [mismo turno, motivo] · T-05 | → Anulada [motivo] · T-06 | → Cerrada en caja · T-07 | ✗ RG-13 (ya registrada: se anula) |
| Cerrada en caja | ✗ RG-05 | se ignora | ✗ RG-05 | → Anulada [jefe, motivo] · T-08 | se ignora (ya está en un cierre) | ✗ RG-13 |
| Anulada | ✗ RG-08 | se ignora | ✗ RG-08 | ✗ RG-08 | se ignora | ✗ RG-08 |

## B. Acciones por estado y rol

| Acción | Estado | Empleado | Jefe | Asesora | Cuenta desactivada | Sistema |
|---|---|---|---|---|---|---|
| Agregar producto y confirmar venta | En registro | Sí | Sí | No | No | Asigna recibo, descuenta stock, escribe historial |
| Editar venta | Registrada | Sí, solo su turno y con motivo | Sí, con motivo | No | No | Guarda constancia |
| Anular venta | Registrada | Sí, solo su turno | Sí | No | No | Excluye de totales; historial |
| Anular venta | Cerrada en caja | No | Sí, con motivo | No | No | Registro compensatorio en el día |
| Cerrar la caja | Turno Abierto | Sí | Sí | No (C-08) | No | Genera la copia de respaldo |
| Desactivar o reactivar producto | Producto Activo / Inactivo | No | Sí | No | No | Conserva historial |
| Consultar venta por recibo | Cualquiera | No | Sí | Sí (solo lectura) | No | — |

## C. Reglas y preguntas

| ID | Regla o pregunta | Fuente | Responsable · fecha | Estado |
|---|---|---|---|---|
| RG-01 | Una venta en registro no se anula ni se edita: se descarta. | DES-01; taller interno | Sandy Hurtado · 22/11/2026 | Propuesta |
| RG-04 | La empleada solo anula ventas de su turno; el jefe, cualquiera. | Supuesto P-04; PA-U5-01 | Nicolás Bastidas · 12/12/2026 | Propuesta (decide el jefe) |
| RG-05 | Una venta cerrada en caja no se edita; solo el jefe la anula con registro compensatorio. | P-04; DES-01 | Nicolás Bastidas · 12/12/2026 | Propuesta |
| RG-08 | Una venta anulada no se edita, no se anula de nuevo y no se borra. | RF-002; glosario «Anulación» | Julián Murcia · 22/11/2026 | Aprobada por el equipo |
| RG-11 | Un producto inactivo no se vende; su historial se conserva. | DES-03; RF-031 | Julián Murcia · 12/12/2026 | Propuesta |
| QE-01 | ¿Se deja constancia de las ventas descartadas? | DES-01, T-04 | Sandy Hurtado · 12/12/2026 | Pregunta abierta |
| QE-02 | ¿Hasta cuántos días después del cierre se puede anular una venta? | DES-01, T-08 | Nicolás Bastidas · 12/12/2026 | Pregunta abierta |
