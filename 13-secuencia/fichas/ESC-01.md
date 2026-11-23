# Ficha escenario → secuencia · ESC-01 (DSE-01, DSE-02)

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 3 · 22/11/2026

| Campo | Valor |
|---|---|
| Caso de uso · clase | CU-01 · Registrar una venta · ☒ principal ☒ alterno ☒ excepción |
| Nivel · diagrama | ☒ 1 (caja negra) DSE-01 · ☒ 2 (componentes) DSE-02 |
| Actores | Empleado (o Jefe); receptores de la extensión: Jefe y Asesora |
| Elaboró · revisó | Elaboró Julián Estiven Murcia Rodriguez · revisó Sandy Katherin Hurtado Suárez · 22/11/2026 |
| Precondición | El usuario inició sesión (CU-13), el turno está abierto (CU-07) y existe un catálogo de productos con precio (CU-18). |
| Resultado esperado | La venta queda registrada con número de recibo, total, método de pago, fecha y hora y usuario; el stock y el historial quedan actualizados. |

## A. Pasos y mensajes

| Paso | Mensaje (retorno) | Quién | Requisito | Observaciones |
|---|---|---|---|---|
| 1 · Agrega un producto y su cantidad | agregar producto (línea agregada) | Empleado → SGMP | RF-001 | Se repite por producto |
| 2 · El sistema muestra precio y subtotal | (retorno de 1) | SGMP → Empleado | RF-001 | Precio del catálogo |
| 3 · Elige método de pago y canal | elegir método de pago (total) | Empleado → SGMP | RF-001, RF-016 | Canal opcional (Could) |
| 4 · Adjunta comprobante si es transferencia | adjuntar comprobante de pago | Empleado → SGMP | RF-017 | opt 4a |
| 5 · Confirma la venta | confirmar venta (venta registrada) | Empleado → SGMP | RF-001, RF-019, RF-028 | Medición de RNF-004 |
| 6 · Asigna número de recibo | asignar número de recibo (autollamada) | SGMP | RF-001 | Formato AAAAMMDD-NNN |
| 7 · Descuenta stock | descontar stock (stock resultante) | Registro de ventas → Inventario | RF-003 | Solo en DSE-02 |
| 8 · Escribe el historial | escribir operación (registrado) | Registro de ventas → Historial | RF-015 | Solo en DSE-02 |
| 9 · Muestra el número de recibo | venta registrada (número de recibo, total) | SGMP → Empleado | RF-001 | Garantía de éxito |

## B. Extensiones

| Ext. | Condición | Fragmento | Requisito | Razón si no se dibuja |
|---|---|---|---|---|
| 2a | Stock insuficiente | alt · dibujada | RF-023 | — |
| 4a | Pago por transferencia | opt · dibujada | RF-017 | — |
| 5a | Falta un dato obligatorio | alt · dibujada | RF-019 | — |
| 5b | Confirmación repetida | alt · dibujada (nueva) | RF-028 (nuevo) | — |
| 6a | Stock ≤ umbral mínimo | opt CU-10 · dibujada | RF-004 | — |

## C. Preguntas disparadoras

| Pregunta | Respuesta | Con quién | Produce |
|---|---|---|---|
| ¿Y si el sistema externo no responde? | No hay sistema externo: todo ocurre en el celular, sin internet (RNF-002). | Equipo | Ninguna |
| ¿Y si el actor lo envía dos veces? | Doble toque: hoy nada lo impide; la venta se duplicaría y el descuadre crecería. | Empleada (entrevista: hora pico) | Requisito RF-028 (nuevo) |
| ¿Cuánto debe tardar? ¿Y si se cae a la mitad? | ≤ 20 s (RNF-004); si se cae a la mitad no queda nada (RNF-003, todo o nada). | Catálogo de calidad | Nota en DSE-01 y DSE-02 |
| ¿Qué queda registrado y quién lo ve? | La venta, el usuario y la hora quedan en el historial; los ve el jefe (CU-16). | Jefe (entrevista, hallazgo 4) | Ya cubierto (RF-015) |
| ¿Y si el disparo por tiempo no ocurre o se repite? | No hay disparo por tiempo en CU-01. | Equipo | N/A |
