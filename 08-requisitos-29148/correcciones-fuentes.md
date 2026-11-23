# Correcciones a los documentos de la Unidad 3

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · 21/11/2026

Estas son las correcciones que las decisiones de las Sesiones 2 y 3 exigen en los documentos de `01-kickoff`, `02-elicitacion` y `03-especificacion`. Se listan aquí con su texto actual y su texto corregido para aplicarlas por pull request; cada una cita el hallazgo o la decisión que la origina.

## 1. Historias de usuario

| Documento | Texto actual (resumen) | Texto corregido | Origen |
|---|---|---|---|
| HU-01, escenario 2 | Si falla la conexión durante el registro, el sistema cancela la venta y deja la información lista para reintentar el pago. | Si no hay conexión, el sistema registra la venta en el dispositivo y la conserva; la falta de internet no cancela ninguna venta. | H2-01, TBD-02, RNF-002 |
| HU-01, criterios | Sin criterio para transferencias. | Nuevo escenario: venta con método «transferencia» y comprobante de pago adjunto (RF-017). | D-06 |
| HU-02, criterios | Solo anulación; el motivo aparece en un escenario pero no en CU-02. | Motivo obligatorio; nuevo escenario de edición de una venta con constancia (solo el jefe); anulación posterior al cierre con registro compensatorio. | D-07, P-04, H3-01 |
| HU-03, escenario 2 | La operación se rechaza por stock insuficiente. | La operación se completa y el sistema advierte el stock insuficiente (RF-023). | TBD-03, H3-03 |
| HU-04, escenarios | Trata 9 unidades como insuficiente y 11 como suficiente; «Como jefe». | Umbral de 5 unidades: stock 5 y 3 generan alerta; stock 8 no. Rol: «Como jefe o asesora». | TBD-05, P-02, H2-08 |
| HU-06 | Una historia con dos productos de datos (estado de resultados y flujo de caja). | Se divide en HU-06a (estado de resultados) y HU-06b (flujo de caja), cada una con su ID. | Guía de la Unidad 3 (historia dividida) |
| HU-08 | Rol «usuario del sistema». | Rol «empleado, jefe o asesora, según el perfil». | H3-09 |
| HU-09 | Sin aviso de tratamiento de datos. | Nuevo criterio: al crear un usuario se muestra la política de tratamiento y se registra la aceptación (RF-020). | D-09 |

## 2. Casos de uso y escenarios de aceptación

| Documento | Texto actual (resumen) | Texto corregido | Origen |
|---|---|---|---|
| CU-01, paso 3 | Métodos de pago: efectivo, transferencia y tarjeta. | Efectivo o transferencia; la tarjeta queda fuera (el acta excluye el datáfono). | H2-02, TBD-14 |
| CU-01, extensión 1a | Un producto nuevo exige conexión para sincronizar el catálogo. | Los productos se crean y editan en el mismo celular, sin conexión; no hay catálogo externo. | H2-13, TBD-09 |
| CU-01, actor | «Empleado», «cajero» y «mesera» indistintamente. | «Empleado». | H3-09 |
| CU-02, actores y paso 5 | «Cajero»; «ajusta el stock si aplica». | «Empleado o jefe»; la anulación no revierte el stock: si el producto vuelve al inventario, el jefe registra una entrada. | H2-18, TBD-04 |
| CU-02, motivo | No captura motivo. | Captura el motivo, obligatorio (HU-02). | H2-18 |
| CU-03, metas y actores | Cita la meta «G5» (no existe); actor «cajero» en el encabezado y «encargado» en los pasos. | Cita G2.1, G2.3 y G4.2; actor «jefe». | H2-16, H2-15, TBD-13 |
| CU-03, extensión 3a y su `.feature` | Umbral «configurado» y escenario con 5 unidades. | Umbral por producto, valor inicial de 5 unidades, editable por el jefe; el escenario permanece. | TBD-05 |
| CU-04, actores y §6 | Cita la meta «G5»; lista los `.feature` de CU-02 y no existe `.feature` de CU-04. | Cita G3.4 y G4.2; actores «asesora o jefe»; §6 apunta a `CU-04-registrar-egreso.feature` (ver anexo 1). | H2-16, TBD-13 |
| CU-04, paso 5c | «Egreso igual registrado hace pocos minutos». | «…registrado en los últimos 5 minutos». | H2-09, TBD-06 |

## 3. Árbol de metas KAOS

| Cambio | Texto | Origen |
|---|---|---|
| G1.3 ampliada | «Permitir la anulación o edición controlada de una venta, con constancia». | D-07 |
| G1.4 nueva | «Registrar el canal del pedido» (hija de G1). | D-05 |
| G3.5 nueva | «Registrar el cierre de caja y su saldo» (hija de G3). | D-01 |
| G3.6 nueva | «Conocer la rotación de los productos» (hija de G3). | D-04 |
| G4.5 nueva | «Proteger la información con una copia de respaldo exportable» (hija de G4). | D-08 |

## 4. Otras correcciones

| Documento | Corrección | Origen |
|---|---|---|
| `02-elicitacion/entrevista_asesora.docx` | La fecha dice «Viernes 19 de septiembre de 2026»; el 19/09/2026 fue sábado. | Revisión de fechas (Sesión 3) |
| `02-elicitacion/Entrevista_Jefe_.pdf` | Fecha, hora y lugar de la entrevista no están registrados; completarlos con el dato real del registro del equipo. | Revisión de fechas (Sesión 3) |
| Acta de constitución y matriz poder-interés | El nombre del tercer integrante es «Julián Estiven Murcia Rodriguez»; unificar esa grafía en todos los documentos. | Revisión de nombres (Sesión 3) |
| `04-priorizacion/backlog.md` | Estaba vacío; se completa con HU-01 a HU-15 y la prioridad MoSCoW (esta entrega). | H2-14, TBD-01 |

## Anexo 1 · `CU-04-registrar-egreso.feature` (nuevo)

El archivo está en [`cu-04/CU-04-registrar-egreso.feature`](cu-04/CU-04-registrar-egreso.feature); debe copiarse a `03-especificacion/aceptacion/`.
