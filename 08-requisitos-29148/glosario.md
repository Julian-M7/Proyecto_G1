# Glosario del proyecto (versión 2)

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · 21/11/2026

> Amplía y corrige el glosario 1.3 del SRS. Las definiciones que fijan un valor (umbral, formato del recibo, saldo) son decisiones de trabajo del equipo (apéndice C del SRS); el patrocinador las valida en la fase 05. Un solo término por concepto.

| Término | Definición |
|---|---|
| **Anulación** | Cambio del estado de una venta de «Registrada» a «Anulada». Exige un motivo, no elimina la venta del historial, no revierte el stock (si el producto vuelve al inventario, el jefe registra una entrada) y, si ocurre después del cierre, se compensa en el día en que se anula. |
| **Asesora** | Rol de la persona que registra egresos, consolida y genera reportes. Hoy: la asistente financiera (en el acta, «asesora financiera»). |
| **Cierre de caja** | Registro, al final del día o del turno, del total de ventas no anuladas, el total de egresos, el saldo del día y el saldo en efectivo, con fecha, hora y usuario (RF-006). |
| **Comprobante de pago** | Constancia de una transferencia (imagen) que se adjunta a una venta o a un egreso (RF-017, RF-005). **No** es el identificador de la venta (ver «número de recibo»). |
| **Descuadre** | Diferencia entre lo registrado en el sistema y el efectivo o los comprobantes físicos del día. |
| **Egreso** | Salida de dinero del negocio, con valor mayor que cero, fecha, categoría y método de pago. «Gasto» es una categoría de egreso (gasto de mercado, gasto diario u otros). |
| **Empleado** | Rol de quien atiende a los clientes y registra las ventas. Hoy: la empleada (mesera y cajera). No crea productos. |
| **Factura** | Documento fiscal que el local hoy no emite; fuera del alcance (acta, sección 2). No se usa como sinónimo de recibo ni de comprobante. |
| **Historial** | Lista cronológica de registros (de ventas, anulaciones, movimientos o auditoría). Término único: «trazabilidad» es la propiedad de poder seguir un dato, no la lista. |
| **Jefe (dueño)** | Rol del propietario del negocio y patrocinador (Camilo Gutiérrez). Crea productos y usuarios, registra movimientos de inventario, recibe alertas y consulta reportes. |
| **Método de pago** | Forma en que se paga una venta o un egreso: efectivo o transferencia. La tarjeta no se admite en la versión 1.0 (acta: sin datáfono). |
| **Número de recibo** | Identificador único de una venta, asignado por el sistema al registrarla, con el formato AAAAMMDD-NNN (consecutivo por día). No se reutiliza ni se modifica. Equivale al «número de comprobante» que menciona el jefe. |
| **Operación sensible** | Venta, anulación, egreso o movimiento de inventario; cada una se registra en el historial con el usuario que la ejecutó (meta G4.4). |
| **Permiso** | Autorización de un rol para ejecutar una operación. La matriz de permisos por rol está en el apéndice B del SRS. |
| **Producto** | Artículo del catálogo cuyo stock se controla. Los insumos (materia prima) se registran como productos no vendibles y su consumo se descuenta con movimientos de salida manuales. «Ítem de inventario» e «insumo» no se usan en los requisitos. |
| **Producto por agotarse** | Producto cuyo stock es menor o igual que su umbral mínimo (límite inclusivo). |
| **Registro compensatorio** | Registro que corrige el efecto de una anulación posterior al cierre en el día en que se hace, sin modificar el cierre ya registrado. |
| **Saldo de cierre** | Saldo del día y saldo en efectivo registrados en el cierre de caja; el turno siguiente los consulta (RF-022). |
| **Saldo del día** | Total de ventas no anuladas menos total de egresos del día. |
| **Saldo en efectivo** | Ventas en efectivo no anuladas menos egresos en efectivo del día; es el saldo que la empleada contrasta con el efectivo físico. |
| **Stock** | Cantidad disponible de un producto. Término único: se evitan «existencias», «inventario» (reservado para el conjunto) y «disponibilidad». |
| **Turno** | Período de trabajo de una empleada que se abre al empezar y se cierra al terminar. |
| **Umbral mínimo** | Cantidad de stock, definida por producto por el jefe, a partir de la cual un producto se considera por agotarse. Valor inicial: 5 unidades, editable. |
| **Venta (orden)** | Transacción de un cliente registrada como una orden independiente con uno o más productos, valor total (suma de los precios del catálogo), método de pago, fecha y hora y usuario que la registró. Estado: «Registrada» o «Anulada». |

## Sinónimos descartados (hallazgos H3-04, H3-05 y H3-09)

| En los documentos aparece | En los requisitos se usa |
|---|---|
| comprobante (de la venta), recibo | número de recibo (identificador de la venta) |
| comprobante (de la transferencia), foto del comprobante | comprobante de pago |
| existencias, inventario (como cantidad), disponibilidad | stock |
| ítem de inventario, insumo | producto (los insumos son productos no vendibles) |
| bitácora, historial de trazabilidad | historial |
| cajero, cajera, encargado, usuario autorizado, usuario con permiso | empleado, jefe o asesora, con el permiso nombrado en el requisito |
| dueño | jefe (dueño) |

