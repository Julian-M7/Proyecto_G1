# Ficha escenario → secuencia · ESC-02 (DSE-03)

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 3 · 22/11/2026

| Campo | Valor |
|---|---|
| Caso de uso · clase | CU-06 · Cerrar la caja · ☒ principal ☒ alterno ☒ excepción |
| Nivel · diagrama | ☒ 1 (caja negra) · DSE-03 |
| Actores | Empleado (o Jefe); Jefe y Equipo de respaldo en el tramo de CU-17 |
| Elaboró · revisó | Elaboró Nicolás Bastidas Medina · revisó Julián Estiven Murcia Rodriguez · 22/11/2026 |
| Precondición | El usuario inició sesión, el turno está abierto y tiene ventas o egresos registrados. |
| Resultado esperado | El cierre queda registrado con totales, saldo del día, saldo en efectivo, conteo, diferencia, fecha, hora y usuario; se genera la copia de respaldo diaria. |

## A. Pasos y mensajes

| Paso | Mensaje (retorno) | Quién | Requisito | Observaciones |
|---|---|---|---|---|
| 1 · Solicita el cierre | solicitar cierre de caja (totales del día) | Empleado → SGMP | RF-006, RF-029 | Inicio de la medición de RNF-001 |
| 2 · Calcula totales y saldos | (retorno de 1) | SGMP → Empleado | RF-006 | Ventas anuladas excluidas |
| 3 · Ingresa el efectivo contado | ingresar efectivo contado | Empleado → SGMP | RF-025 (Sesión 2) | — |
| 4 · Registra observación si hay diferencia | registrar observación | Empleado → SGMP | RF-025 | alt 3a |
| 5 · Registra el cierre | registrar cierre (autollamada) | SGMP | RF-006, RF-015 | Todo o nada (RNF-003) |
| 6 · Genera la copia de respaldo | generar copia de respaldo (autollamada) | SGMP | RNF-005 | En el mismo paso 5 |
| 7 · Confirma y cierra la sesión | cierre registrado; sesión cerrada | SGMP → Empleado | RF-006, RF-013 | Fin de la medición de RNF-001 |
| CU-17 · 1 · Exporta la copia | exportar copia de respaldo | Jefe → SGMP | RNF-005 | Semanal |
| CU-17 · 2 · Entrega el archivo | entregar archivo de respaldo | SGMP → Equipo de respaldo | RNF-005 | EX-01 |

## B. Extensiones

| Ext. | Condición | Fragmento | Requisito | Razón si no se dibuja |
|---|---|---|---|---|
| 1a | El turno ya tiene un cierre | alt · dibujada (nueva) | RF-029 (nuevo) | — |
| 3a | Conteo distinto del saldo | alt · dibujada | RF-025 | — |
| 5a | La aplicación se cierra durante el registro | no dibujada | RNF-003 | Se cubre con la nota «todo o nada»; no cambia mensajes |
| CU-17 2a | El equipo no recibe el archivo | alt · dibujada | RNF-005 | — |
| — | Venta anulada después del cierre | no dibujada | RF-002 (P-04) | Pertenece a CU-02; se ve en DES-01 |

## C. Preguntas disparadoras

| Pregunta | Respuesta | Con quién | Produce |
|---|---|---|---|
| ¿Y si el sistema externo no responde? | Si el Equipo de respaldo no recibe el archivo, la copia diaria sigue en el celular y se avisa al jefe para reintentar. | Jefe (supuesto P-06) | EX-01; pregunta C-03 |
| ¿Y si el actor lo envía dos veces? | Dos cierres del mismo turno duplicarían el saldo: se rechaza el segundo. | Equipo; confirma el jefe | Requisito RF-029 (nuevo) |
| ¿Cuánto debe tardar? ¿Y si se cae a la mitad? | ≤ 3 minutos (RNF-001); si se cae a la mitad, no queda cierre (RNF-003). | Catálogo de calidad | Nota en DSE-03 |
| ¿Qué queda registrado y quién lo ve? | Cierre, conteo, diferencia y usuario quedan en el historial; los ve el jefe. | Jefe | Ya cubierto (RF-015) |
| ¿Y si el disparo por tiempo no ocurre o se repite? | No hay disparo por tiempo: si nadie cierra, el turno siguiente lo avisa (Sesión 4). | Equipo | Pregunta → RF-030 (Sesión 4) |
