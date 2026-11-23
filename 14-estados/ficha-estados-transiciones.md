# Fichas de estado y tabla de transiciones

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 4 · 22/11/2026

## A. Fichas de estado

### E-01 · En registro (venta)

| Campo | Contenido |
|---|---|
| Definición | La empleada está armando la venta: ya agregó al menos un producto, pero aún no la confirma; todavía no tiene número de recibo. |
| Se entra por | T-01 · agregar producto (CU-01) |
| Se sale por | T-03 · confirmar venta [datos completos] → Registrada · T-04 · descartar venta → fin (no queda registro) |
| Qué se permite | Agregar o quitar productos; elegir método de pago y canal; adjuntar comprobante; confirmar; descartar. |
| Qué se prohíbe | Anular o editar (RG-01: algo no registrado no se anula ni se edita); cerrar la caja con ventas en registro (RG-02: el cierre las excluye). |
| Qué ve el cliente o el usuario | El cliente ve el total que le dicen; aún no hay número de recibo. |
| Acciones del estado | — (sin acciones de entrada ni salida) |
| Requisitos · preguntas | RF-001, RF-019, RF-023, RNF-003. QE-01: ¿se deja constancia de las ventas descartadas? — Sandy Hurtado con el jefe, 12/12/2026 |

### E-02 · Registrada (venta)

| Campo | Contenido |
|---|---|
| Definición | La venta ya existe con número de recibo, total, método de pago, fecha, hora y usuario; cuenta en el saldo del día. |
| Se entra por | T-03 · confirmar venta (CU-01) · T-05 · editar venta (CU-05) |
| Se sale por | T-05 · editar (vuelve a Registrada) · T-06 · anular → Anulada · T-07 · cerrar la caja → Cerrada en caja |
| Qué se permite | Editar con motivo (mismo turno); anular con motivo; buscarla por número de recibo; incluirla en el cierre. |
| Qué se prohíbe | Editarla sin motivo (RG-03); que la empleada anule una venta de otro turno (RG-04); confirmarla de nuevo (RF-028: se muestra la misma). |
| Qué ve el cliente o el usuario | El número de recibo y el total. |
| Acciones del estado | entry / asignar número de recibo, descontar stock y escribir el historial |
| Requisitos · preguntas | RF-001, RF-002, RF-008, RF-015, RF-018, RF-028 |

### E-03 · Cerrada en caja (venta)

| Campo | Contenido |
|---|---|
| Definición | La venta ya quedó dentro de un cierre de caja registrado; el cierre no se modifica. |
| Se entra por | T-07 · cerrar la caja (CU-06) |
| Se sale por | T-08 · anular venta [jefe, con motivo] → Anulada (con registro compensatorio) |
| Qué se permite | Consultarla; buscarla por recibo; que el jefe la anule con registro compensatorio. |
| Qué se prohíbe | Editarla (RG-05: una venta cerrada no se edita); que la empleada la anule (RG-06); cambiar el cierre ya registrado (RG-07). |
| Qué ve el cliente o el usuario | Nada nuevo. |
| Acciones del estado | — |
| Requisitos · preguntas | RF-002 (P-04), RF-006, RF-008. QE-02: ¿hasta cuántos días después del cierre se puede anular? — Nicolás Bastidas con el jefe, 12/12/2026 |

### E-04 · Anulada (venta)

| Campo | Contenido |
|---|---|
| Definición | La venta se dejó sin efecto con un motivo; no cuenta en los totales, pero no se borra. |
| Se entra por | T-06 · anular (desde Registrada) · T-08 · anular (desde Cerrada en caja) (CU-02) |
| Se sale por | No se sale: estado final. |
| Qué se permite | Consultarla en el historial y por número de recibo. |
| Qué se prohíbe | Editarla o anularla de nuevo (RG-08); borrarla (RG-09). |
| Qué ve el cliente o el usuario | El cliente no ve nada; en el historial figura «Anulada» con motivo y usuario. |
| Acciones del estado | entry / excluir de los totales y escribir el historial (motivo, usuario) |
| Requisitos · preguntas | RF-002, RF-015. No revierte el stock: TBD-04. |

### E-05 · Abierto (turno)

| Campo | Contenido |
|---|---|
| Definición | Un empleado está trabajando el turno: puede vender y registrar. |
| Se entra por | T-09 abrir turno · T-11 cancelar cierre |
| Se sale por | T-10 solicitar cierre |
| Qué se permite | Vender, editar, anular, registrar egresos |
| Qué se prohíbe | Abrir otro turno encima sin aviso (RF-030) |
| Requisitos | RF-022, RF-026, RF-030 |

### E-06 · En cierre (turno)

| Campo | Contenido |
|---|---|
| Definición | Se calcularon los totales y falta el conteo o la observación. |
| Se entra por | T-10 |
| Se sale por | T-11 cancelar · T-12 registrar cierre |
| Qué se permite | Ingresar conteo y observación |
| Qué se prohíbe | Vender (RG-10: termine o cancele el cierre) |
| Requisitos | RF-006, RF-025 |

### E-07 · Cerrado (turno)

| Campo | Contenido |
|---|---|
| Definición | El cierre quedó registrado y la sesión se cerró. |
| Se entra por | T-12 |
| Se sale por | No se sale: estado final |
| Qué se permite | Consultar el saldo de cierre |
| Qué se prohíbe | Segundo cierre (RF-029) |
| Requisitos | RF-006, RF-022, RF-029 |

### E-08 · Activo (producto)

| Campo | Contenido |
|---|---|
| Definición | El producto está en el catálogo y se puede vender; su nivel de stock está en la región. |
| Se entra por | T-14 crear · T-16 reactivar |
| Se sale por | T-15 desactivar |
| Qué se permite | Vender, registrar movimientos |
| Qué se prohíbe | — |
| Requisitos | RF-024, RF-003, RF-004 |

### E-09 · Inactivo (producto)

| Campo | Contenido |
|---|---|
| Definición | El producto ya no se vende, pero su historial se conserva. |
| Se entra por | T-15 |
| Se sale por | T-16 reactivar |
| Qué se permite | Consultar su historial |
| Qué se prohíbe | Venderlo (RG-11); borrarlo si tiene movimientos (RG-12) |
| Requisitos | RF-031 |

## B. Tabla de transiciones

| T-nn | Origen → destino | Evento · quién | Guarda | Acción | CU | Requisito | ¿Se registra? |
|---|---|---|---|---|---|---|---|
| T-01 | [*] → En registro | agregar producto · Empleado o Jefe | — | — | CU-01 | RF-001 | No (aún no existe) |
| T-02 | En registro → En registro | agregar o quitar producto · Empleado | — | Recalcular el total; advertir stock insuficiente | CU-01 | RF-001, RF-023 | No |
| T-03 | En registro → Registrada | confirmar venta · Empleado | Datos completos (producto, cantidad, método de pago; comprobante si es transferencia) | Asignar número de recibo, descontar stock, escribir historial | CU-01 | RF-001, RF-019, RF-003, RF-015 | Sí |
| T-04 | En registro → fin | descartar venta · Empleado | — | Borrar la venta en registro | CU-01 | RNF-003 · QE-01 | No (QE-01) |
| T-05 | Registrada → Registrada | editar venta · Empleado o Jefe | Mismo turno y con motivo | Guardar constancia del cambio | CU-05 | RF-018 | Sí |
| T-06 | Registrada → Anulada | anular venta · Empleado (su turno) o Jefe | Con motivo | Excluir de totales | CU-02 | RF-002 | Sí |
| T-07 | Registrada → Cerrada en caja | cerrar la caja · Empleado o Jefe | Cierre registrado (T-12) | — | CU-06 | RF-006 | Sí (en el cierre) |
| T-08 | Cerrada en caja → Anulada | anular venta · Jefe | Con motivo; solo el jefe | Registro compensatorio en el día | CU-02 | RF-002 (P-04) | Sí |
| T-09 | [*] → Abierto | abrir turno · Empleado | Sesión iniciada | Mostrar saldo y stock; registrar conteo de apertura | CU-07 | RF-022, RF-007, RF-026 | Sí |
| T-10 | Abierto → En cierre | solicitar cierre · Empleado o Jefe | Turno sin cierre | Calcular totales | CU-06 | RF-006, RF-029 | No |
| T-11 | En cierre → Abierto | cancelar cierre · Empleado | — | — | CU-06 | RNF-003 | No |
| T-12 | En cierre → Cerrado | registrar cierre · Empleado o Jefe | Conteo ingresado y observación si hay diferencia | Registrar cierre, generar copia, cerrar sesión | CU-06 | RF-006, RF-025, RNF-005 | Sí |
| T-13 | Abierto → Abierto | abrir turno siguiente · Empleado | El turno sigue sin cierre | Avisar al empleado y al jefe | CU-07 | RF-030 (nuevo) | Sí |
| T-14 | [*] → Activo | crear producto · Jefe | Nombre, precio y umbral | — | CU-18 | RF-024 | Sí |
| T-15 | Activo → Inactivo | desactivar producto · Jefe | — | Conservar historial | CU-18 | RF-031 (nuevo) | Sí |
| T-16 | Inactivo → Activo | reactivar producto · Jefe | — | — | CU-18 | RF-031 | Sí |
| P-01 | Suficiente → Por agotarse | venta o salida · Empleado o Jefe | Stock ≤ umbral mínimo | Notificar bajo stock (CU-10) | CU-01, CU-03 | RF-004 | No (lo registra el movimiento) |
| P-03 | Por agotarse → Sin stock | venta o salida | Stock ≤ 0 | — | CU-01, CU-03 | RF-023 | No |
| P-04 | Sin stock → Suficiente | entrada o ajuste · Jefe | Stock > umbral | — | CU-03 | RF-003, RF-027 | No |
