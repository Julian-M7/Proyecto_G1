# Glosario y diccionario del dominio · v1.0

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

Amplía `08-requisitos-29148/glosario.md` (v2) con los nombres de los modelos de la Unidad 5. Estado «propuesto» hasta que cada interesado firme su término en la fase 05.

| Término · tipo | Definición | No se usa | Válido · inválido | Reglas | Fuente · estado |
|---|---|---|---|---|---|
| Asesora · actor | Rol que registra egresos, consolida y consulta reportes. | asistente financiera, contadora | Válido: Asesora. Inválido: «Adri». | RN-11 | Entrevista 19/09 · propuesto |
| Empleado · actor | Rol que atiende, registra ventas y abre y cierra el turno. | cajera, mesera, encargado | Válido: Empleado. Inválido: «Yudey» (persona). | RN-11 | Entrevista 17/09 · propuesto |
| Jefe · actor | Rol del propietario que mantiene catálogo, inventario y usuarios. | dueño (como rol), administrador | Válido: Jefe. | RN-11 | Acta · propuesto |
| Cerrar la caja · caso de uso | Caso de uso CU-06 en el que se registra el cierre del turno. | hacer cuentas, cuadrar | Válido: CU-06. | RN-06, RN-07 | Sesión 1 · propuesto |
| Registrar una venta · caso de uso | Caso de uso CU-01 que crea una venta con número de recibo. | anotar, grabar | Válido: CU-01. | RN-01, RN-02 | Sesión 1 · propuesto |
| CambioVenta · clase | Constancia de una edición o anulación de una venta, con motivo, usuario y fecha. | corrección, borrado | Válido: anulación con motivo «cobro doble». Inválido: borrar la venta. | RN-04, RN-05 | Jefe, hallazgo 4 · propuesto |
| CierreCaja · clase | Registro del cierre de un turno con totales, saldos, conteo y diferencia. | cuadre, cuentas | Válido: diferencia −50.000 con observación. | RN-06, RN-07 | Empleada, jefe · propuesto |
| Egreso · clase | Salida de dinero con valor mayor que cero, fecha, categoría y método de pago. | gasto (es una categoría) | Válido: 35.000, gasto de mercado. Inválido: 0. | RN-12 | Glosario v2 · propuesto |
| LineaVenta · clase | Producto y cantidad dentro de una venta, con su precio en ese momento. | ítem, renglón | Válido: 2 × tinto a 2.500. | RN-02, RN-03 | Empleada · propuesto |
| MovimientoInventario · clase | Entrada, salida o ajuste del stock de un producto, con usuario y motivo si es ajuste. | ingreso de mercancía | Válido: ajuste −3 «conteo del domingo». | RN-08 | Empleada, nota de inventario · propuesto |
| Producto · clase | Artículo del catálogo con precio, umbral mínimo y stock; los insumos son productos no vendibles. | ítem de inventario, insumo | Válido: café por libra, precio 28.000, umbral 5. | RN-09, RN-13 | Glosario v2 · propuesto |
| RegistroHistorial · clase | Anotación inalterable de una operación sensible con usuario y fecha y hora. | bitácora, log | Válido: «anulación de 20260915-014 por jefe». | RN-10 | RF-015 · propuesto |
| Turno · clase | Período de trabajo que se abre con un conteo y se cierra con un cierre de caja. | jornada, caja (como período) | Válido: turno de la tarde del 15/09. | RN-06, RN-14 | Empleada · propuesto |
| Venta · clase | Orden independiente de un cliente con una o más líneas, número de recibo, total, método de pago y usuario. | factura, pedido, comanda | Válido: 20260915-014. Inválido: una lista de productos sin orden. | RN-01 a RN-05 | Glosario v2 · propuesto |
| numeroRecibo · atributo | Identificador único de la venta con formato AAAAMMDD-NNN; no se reutiliza ni se modifica. | comprobante, número de factura | Válido: 20260915-014. Inválido: 14. | RN-01 | Glosario v2 · propuesto |
| diferencia · atributo | Conteo de efectivo menos saldo en efectivo del cierre. | faltante, sobrante | Válido: −50.000. | RN-07 | Sesión 2 (RF-025) · propuesto |
| umbralMinimo · atributo | Stock a partir del cual el producto está por agotarse (inclusivo); inicial 5. | mínimo, alerta | Válido: 5. | RN-09 | TBD-05 · propuesto |
| Por agotarse · estado | Condición del producto con stock ≤ umbral mínimo (región Nivel de stock). | bajo, crítico | Válido: stock 3 con umbral 5. | RN-09 | DES-03 · propuesto |
| Registrada · estado | Venta con número de recibo que cuenta en el saldo del día. | grabada, anotada | — | RN-04 | DES-01 · propuesto |
| Anulada · estado | Venta sin efecto, con motivo; no se borra. | borrada, eliminada | — | RN-05 | DES-01 · propuesto |
| Perfil · rol | Conjunto de permisos de un usuario: Empleado, Jefe o Asesora. | rol de sistema, permiso | Válido: Asesora. | RN-11 | Apéndice B del SRS · propuesto |

## Reglas de negocio

| ID | Regla | Términos | Fuente | Estado | Dónde se verifica |
|---|---|---|---|---|---|
| RN-01 | Cada venta registrada tiene un número de recibo único AAAAMMDD-NNN que no se reutiliza. | Venta, numeroRecibo | Glosario v2; jefe, hallazgo 3 | Propuesta | CU-01; DES-01 T-03; RF-001 |
| RN-02 | Una venta tiene al menos una línea (1..*). | Venta, LineaVenta | Empleada (orden con uno o más productos) | Propuesta (multiplicidad con interesado) | CU-01; RF-019 |
| RN-03 | El precio de la línea es el del catálogo en el momento de la venta y no cambia si luego cambia el precio. | LineaVenta, Producto | Taller interno (pregunta PA-D-01) | Propuesta | CU-18; RF-024 |
| RN-04 | Editar una venta exige motivo y deja un CambioVenta. | Venta, CambioVenta | Jefe, hallazgo 4 | Propuesta | CU-05; RF-018 |
| RN-05 | Una venta anulada no se borra, no se edita ni se anula de nuevo. | Venta, CambioVenta | RF-002; DES-01 | Propuesta | CU-02; DES-01 |
| RN-06 | Un turno tiene a lo sumo un cierre (0..1). | Turno, CierreCaja | RF-029 (Sesión 3) | Propuesta | CU-06; DES-02 |
| RN-07 | Si la diferencia del cierre es distinta de cero, el cierre lleva observación. | CierreCaja | RF-025 (Sesión 2) | Propuesta | CU-06; DSE-03 |
| RN-08 | Un ajuste de inventario lleva motivo y fija el stock en la cantidad contada. | MovimientoInventario | RF-027 (Sesión 2) | Propuesta | CU-03 |
| RN-09 | Un producto está por agotarse cuando su stock es ≤ su umbral mínimo. | Producto | RF-004; TBD-05 | Propuesta | DES-03; CU-10 |
| RN-10 | Un registro del historial no se modifica ni se borra. | RegistroHistorial | RF-015 | Propuesta | CU-16 |
| RN-11 | Cada usuario tiene exactamente un perfil. | Usuario, Perfil | Apéndice B del SRS | Propuesta | CU-14; RNF-007 |
| RN-12 | Un egreso tiene valor mayor que cero y una categoría. | Egreso, CategoriaEgreso | Glosario v2 | Propuesta | CU-04; RF-005 |
| RN-13 | Un producto con ventas o movimientos no se borra: se desactiva. | Producto | RF-031 (Sesión 4) | Propuesta | CU-18; DES-03 |
| RN-14 | Solo puede haber un turno abierto a la vez en el celular. | Turno | Un solo dispositivo (acta) | Propuesta (pregunta PA-D-02) | CU-07; DES-02 |
