# Tabla de operaciones del sistema

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 3 · 22/11/2026

## Parte A · Actor → sistema

| ID | Operación | Entra | Responde | Precondición | CU · paso | Diagrama | Requisitos | Cobertura |
|---|---|---|---|---|---|---|---|---|
| OS-01 | Agregar producto a la venta | Producto, cantidad | Línea con precio y subtotal; advertencia si no hay stock | Sesión y turno abiertos | CU-01 · 1–2 | DSE-01 | RF-001, RF-023 | Completa |
| OS-02 | Elegir método de pago y canal | Efectivo o transferencia; canal | Total | Venta con al menos una línea | CU-01 · 3 | DSE-01 | RF-001, RF-016 | Completa |
| OS-03 | Adjuntar comprobante de pago | Imagen del comprobante | Comprobante adjunto | Método = transferencia | CU-01 · 4a | DSE-01 | RF-017 | Completa |
| OS-04 | Confirmar venta | La venta armada | Número de recibo y total; rechazo si falta un dato; misma venta si se repite | Venta completa | CU-01 · 5 | DSE-01, DSE-02 | RF-001, RF-019, RF-028, RNF-003, RNF-004 | Completa (RF-028 nuevo) |
| OS-05 | Solicitar cierre de caja | — | Totales y saldos; cierre existente si ya se cerró | Turno abierto | CU-06 · 1 | DSE-03 | RF-006, RF-029, RNF-001 | Completa (RF-029 nuevo) |
| OS-06 | Ingresar efectivo contado | Valor contado | Diferencia; pide observación si ≠ 0 | Cierre en curso | CU-06 · 3 | DSE-03 | RF-025 | Completa |
| OS-07 | Registrar observación | Texto | Cierre registrado; sesión cerrada | Diferencia ≠ 0 | CU-06 · 4 | DSE-03 | RF-025, RF-006 | Completa |
| OS-08 | Exportar copia de respaldo | — | Copia exportada o no entregada | Jefe con sesión | CU-17 · 1 | DSE-03 | RNF-005 | Parcial: el formato del archivo se define en la U7 (C-02) |

## Parte B · Sistema → externo

| ID | Mensaje | Destino | Cuándo | Se espera | Si no responde | Tiempo · reintentos | Se avisa a | Requisito | Acordado con |
|---|---|---|---|---|---|---|---|---|---|
| EX-01 | Entregar archivo de respaldo | Equipo de respaldo (computador del jefe) | El jefe exporta (CU-17), semanal | Archivo copiado completo | La copia diaria sigue en el celular; aviso al jefe | Sin espera: el jefe reintenta a mano; sin reintentos automáticos; no duplica (cada archivo lleva fecha) | Jefe | RNF-005 | Supuesto P-06; lo confirma Camilo Gutiérrez el 12/12/2026 |

## Parte C · Huecos y preguntas

| ID | Tipo | Qué falta | Qué se hará | Quién · cuándo |
|---|---|---|---|---|
| C-01 | Mensaje sin requisito | La repetición de «confirmar venta» no tenía regla | RF-028 (nuevo) | Julián Estiven Murcia Rodriguez · 22/11/2026 |
| C-02 | Requisito sin mensaje completo | RNF-005 no define el formato del archivo | Especificar en la Unidad 7 | Nicolás Bastidas Medina · Unidad 7 |
| C-03 | Pregunta abierta | ¿El jefe quiere un aviso si pasa una semana sin copia? | Preguntar en la fase 05 (PA-U5-02) | Julián Estiven Murcia Rodriguez · 12/12/2026 |
| C-04 | Mensaje sin requisito | Un segundo cierre del mismo turno | RF-029 (nuevo) | Nicolás Bastidas Medina · 22/11/2026 |
| C-05 | Requisito sin mensaje | RF-030 (turno sin cierre) aparece al abrir el turno, no aquí | Se modela en la Sesión 4 (DES-02) | Sandy Katherin Hurtado Suárez · 22/11/2026 |
| C-06 | Pregunta abierta | Tiempo real de una venta en hora pico (P-08) | Observación de hora pico (AM-02) | Julián Estiven Murcia Rodriguez · 05/12/2026 |
| C-07 | Mensaje sin consumidor | La notificación de bajo stock a la asesora: ¿la lee en el mismo celular? | Confirmar con la asesora | Sandy Katherin Hurtado Suárez · 12/12/2026 |
| C-08 | Pregunta abierta | ¿El cierre lo puede hacer la asesora? | Matriz de permisos (apéndice B); hoy no | Nicolás Bastidas Medina · 12/12/2026 |
