# Hallazgos y brechas: del proceso actual al futuro y a los requisitos

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 2 · 22/11/2026

## A. Problemas del proceso actual

| ID | Familia | Dónde | Problema | Frecuencia | Costo | Riesgo | Fuente | Confirmó | Prioridad |
|---|---|---|---|---|---|---|---|---|---|
| PA-01 | Trabajo duplicado | DAC-01 · «Anota la venta en el cuaderno» + «Registra la venta» | Cada venta se escribe dos veces (cuaderno y celular) porque nadie confía en un solo registro. | Todas: 20 a 40 ventas diarias | Un segundo registro por venta y 8 a 15 minutos de comparación al cierre | Datos: «se puede olvidar en algún lado» | Entrevista a la empleada (17/09), hallazgo 2 | Taller interno; empleada en la fase 05 | Crítica |
| PA-02 | Pérdida de información | DAC-01 · «Guarda el pedido en la mente» | El pedido vive en la memoria hasta que el cliente pide la cuenta; la lista del día no se divide por órdenes. | Todas las ventas | No se puede reconstruir una venta después | Descuadre sin explicación | Empleada, hallazgo 2 y síntesis | Taller interno; empleada en la fase 05 | Alta |
| PA-03 | Punto de control ausente | DAC-01 · «Informa la diferencia sin poder explicarla» | No queda registro del efectivo contado ni de quién hizo cada venta, así que una diferencia no se puede rastrear. | 2 casos recordados (empleada y asesora) en el último año | $50.000 en un caso; horas de revisión | Confianza y pérdida de dinero | Empleada (descuadre de $50.000); asesora («faltaban algunas ventas») | Taller interno; jefe en la fase 05 | Crítica |
| PA-04 | Reproceso | DAC-01 · «Compara la lista del cuaderno con el resumen» | El cierre consiste en comparar dos listas a mano, con calculadora o de memoria. | Diaria | 8 a 10 minutos (empleada) y 10 a 15 (jefe) por día | Error humano en la suma | Empleada, pregunta cerrada; jefe, hallazgo 6 | Taller interno; jefe en la fase 05 | Alta |
| PA-05 | Pérdida de información | DAC-01 · «Deja anotado en una hoja el saldo» | El saldo del día anterior viaja en una hoja suelta del dueño a la empleada. | Diaria | Minutos de rectificación al llegar | Hoja perdida = sin saldo de partida | Empleada, hallazgo 1 | Taller interno; empleada en la fase 05 | Media |
| PA-06 | Trabajo duplicado | DAC-01 · «Copia ingresos y egresos al cuaderno semanal» | La asesora registra en la aplicación y otra vez en un cuaderno semanal. | Diaria y semanal | 30 a 40 minutos diarios dedicados a las finanzas | Cifras distintas en dos fuentes | Asesora, hallazgo 1 | Taller interno; asesora en la fase 05 | Media |
| PA-07 | Punto de control débil | DAC-01 · «Hace un conteo rápido del inventario» | El inventario se lleva de memoria; quien no recibió la mercancía (turno del domingo) cuenta a mano. | 1 de cada 7 días (domingo) | Conteo manual al abrir | Vender lo que no hay; reponer tarde | Empleada, sondeo de disponibilidad; asesora, hallazgo 3 | Taller interno; empleada en la fase 05 | Media |
| PA-08 | Esperas | DAC-01 · «Pide productos» (hora pico) | En hora pico los pedidos de WhatsApp esperan turno detrás del mostrador. | Hora pico (desde las 6 p. m.) | No medido (P-08) | Reputación | Jefe, hallazgo 5 | Taller interno; jefe en la fase 05 | Baja |

## B. Decisiones de rediseño

| ID | Problema(s) | Respuesta | Decisión | Quién | Efecto en el TO-BE | Efecto en las personas |
|---|---|---|---|---|---|---|
| D-01 | PA-01, PA-02 | Automatizar | La venta se registra una sola vez en el SGMP como una orden con número de recibo; desaparece el cuaderno. | Equipo (taller interno); confirma el jefe | Se quita «Anota en el cuaderno»; la calle «Aplicación» pasa a «SGMP» | La empleada deja de escribir dos veces; debe confirmar cada venta en el celular |
| D-02 | PA-03 | Automatizar | Al cerrar, el empleado ingresa el efectivo contado y el SGMP registra la diferencia con observación. | Equipo; confirma el jefe | Nueva acción «Registra el cierre con la diferencia» | La empleada cuenta el efectivo una vez y queda constancia |
| D-03 | PA-04 | Automatizar | El SGMP calcula totales y saldos; el cierre solo cuenta y confirma. | Equipo; confirma el jefe | «Compara listas» se reemplaza por «Calcula totales» | El jefe deja de consolidar a mano |
| D-04 | PA-05 | Automatizar | El saldo de cierre se consulta al abrir el turno y el empleado registra su conteo de apertura. | Equipo; confirma la empleada | Se quita la hoja; nuevas acciones de apertura | Nadie depende de la hoja del dueño |
| D-05 | PA-06 | Eliminar el paso | La asesora consolida en el SGMP; el cuaderno semanal desaparece. | Equipo; confirma la asesora | Se quita «Copia al cuaderno semanal» | La asesora cambia su rutina semanal |
| D-06 | PA-07 | Automatizar | El stock se muestra al abrir el turno; un conteo físico se registra como ajuste con motivo. | Equipo; confirma el jefe | Nueva acción de stock al abrir; ajuste en CU-03 | El conteo del domingo pasa a ser una verificación |
| D-07 | PA-08 | Conservar | Se atiende por orden de llegada como hoy; el SGMP solo registra el canal (Could). La cola es Won't. | Jefe (D-05 de la Sesión 3) | Sin cambio de flujo; dato de canal en la venta | Ninguno |
| D-08 | PA-03 | Cambiar de responsable | Solo el jefe busca una diferencia por número de recibo y revisa el historial; la empleada ya no la investiga sola. | Equipo; confirma el jefe | Rama «Hay diferencia» en la calle Jefe | La empleada no carga con explicar un descuadre |

## C. Brechas AS-IS → TO-BE → requisito

| ID | PA | Cambio TO-BE | Requisito | CU | Respuesta | Evidencia | Estado · dueño | Validó |
|---|---|---|---|---|---|---|---|---|
| B-01 | PA-01, PA-02 | SGMP · «Valida la venta y asigna el número de recibo» | RF-001, RF-019 | CU-01 | Software | DAC-02 | Aprobado (U4) · jefe | Programado 12/12/2026 |
| B-02 | PA-08 | Empleado · «Registra la venta… y canal» | RF-016 | CU-01 | Software (Could) | DAC-02 | Propuesto · jefe | Programado 12/12/2026 |
| B-03 | PA-02, PA-03 | SGMP · «Descuenta el stock y escribe el historial» | RF-003, RF-015 | CU-01 | Software | DAC-02, DAC-04 | Propuesto · jefe | Programado 12/12/2026 |
| B-04 | PA-03, PA-04 | SGMP · «Registra el cierre con la diferencia» | RF-006, RF-025 (nuevo), RNF-001 | CU-06 | Software | DAC-02, DAC-03 | Propuesto · jefe | Programado 12/12/2026 |
| B-05 | PA-05 | SGMP · «Muestra el saldo de cierre anterior» | RF-022 | CU-07 | Software | DAC-02 | Propuesto · empleada | Programado 12/12/2026 |
| B-06 | PA-05 | SGMP · «Registra el conteo de apertura» | RF-026 (nuevo) | CU-07 | Software | DAC-02 | Propuesto · empleada | Programado 12/12/2026 |
| B-07 | PA-07 | SGMP · «Muestra el stock disponible» | RF-007 | CU-07 | Software | DAC-02 | Propuesto · empleada | Programado 12/12/2026 |
| B-08 | PA-07 | Jefe · ajuste por conteo (en CU-03) | RF-027 (nuevo) | CU-03 | Software | DAC-02 (nota) | Propuesto · jefe | Programado 12/12/2026 |
| B-09 | PA-06 | Asesora · «Consolida en el SGMP» | RF-009 | CU-09 | Software + procedimiento (sin cuaderno) | DAC-02 | Propuesto · asesora | Programado 12/12/2026 |
| B-10 | PA-03 | Jefe · «Busca la venta por número de recibo» | RF-008, RF-015 | CU-08, CU-16 | Software + procedimiento | DAC-02 | Propuesto · jefe | Programado 12/12/2026 |
| B-11 | PA-04 | SGMP · «Genera la copia de respaldo» | RNF-005 | CU-06, CU-17 | Software | DAC-03 | Aprobado con cambios (ARR-MP-01) | Programado 12/12/2026 |
| B-12 | PA-01 | Empleado · «Inicia sesión con su PIN» | RF-013, RNF-007 | CU-13 | Software | DAC-02 | Propuesto · jefe | Programado 12/12/2026 |

## D. Requisitos nuevos

### RF-025 · Registrar el efectivo contado y la diferencia al cerrar

| Campo | Contenido |
|---|---|
| Enunciado (EARS) | CUANDO el empleado o el jefe ingrese el efectivo contado durante el cierre de caja, el sistema deberá registrar ese valor y la diferencia frente al saldo en efectivo y, SI la diferencia es distinta de cero, ENTONCES deberá exigir una observación antes de registrar el cierre. |
| Origen | PA-03, PA-04 · B-04 · NI-04, NI-06 · G3.5 · taller interno |
| Prioridad propuesta | Must: es la constancia que faltó en el descuadre de $50.000. |
| Caso de uso | CU-06 (paso del cierre) |
| Criterio de aceptación | Con saldo en efectivo de $180.000 y conteo de $130.000, el cierre registra una diferencia de −$50.000 y no se completa sin observación; con conteo igual al saldo, la diferencia es 0 y no se pide observación. |
| Dependencias | RF-006 (lo amplía), RNF-001 (el conteo cuenta dentro de los 3 minutos), RF-029 |
| Propietario · estado | Camilo Gutiérrez · Propuesto |
| Pregunta abierta | ¿La diferencia se avisa al jefe en el momento o se revisa al día siguiente? — Nicolás Bastidas, 12/12/2026 |

### RF-026 · Registrar el efectivo contado al abrir el turno

| Campo | Contenido |
|---|---|
| Enunciado (EARS) | CUANDO el empleado abra el turno, el sistema deberá mostrar el saldo de cierre anterior y registrar el efectivo que el empleado cuenta, con la diferencia frente a ese saldo. |
| Origen | PA-05 · B-06 · NI-05 · G3.5 |
| Prioridad propuesta | Should: reemplaza la hoja del dueño; no bloquea la venta. |
| Caso de uso | CU-07 |
| Criterio de aceptación | Con saldo de cierre de $200.000 y conteo de $200.000, la apertura registra diferencia 0 con fecha, hora y usuario. |
| Dependencias | RF-022, RF-030 |
| Propietario · estado | Camilo Gutiérrez · Propuesto |
| Pregunta abierta | ¿Se registra un conteo por turno o uno por día? — Sandy Hurtado con la empleada, 12/12/2026 |

### RF-027 · Registrar un ajuste de stock por conteo físico

| Campo | Contenido |
|---|---|
| Enunciado (EARS) | CUANDO el jefe registre un conteo físico de un producto, el sistema deberá fijar el stock en la cantidad contada y registrar un movimiento de ajuste con la diferencia, el motivo y el usuario. |
| Origen | PA-07 · B-08 · NI-07, NI-02 · G2.3 |
| Prioridad propuesta | Should: corrige el stock sin borrar el historial. |
| Caso de uso | CU-03 (tipo de movimiento «ajuste») |
| Criterio de aceptación | Con stock 12 y conteo 9, el stock queda en 9 y el historial muestra un ajuste de −3 con motivo y usuario. |
| Dependencias | RF-003 (hoy solo entrada y salida), RF-021, RF-004 |
| Propietario · estado | Camilo Gutiérrez · Propuesto |
| Pregunta abierta | ¿La empleada puede registrar el conteo o solo el jefe? — Julián Murcia con el jefe, 12/12/2026 |

## E. Trazabilidad

### E1 · Del TO-BE al requisito

| Acción | CU | Requisito | Cobertura |
|---|---|---|---|
| Inicia sesión con su PIN | CU-13 | RF-013, RNF-007 | cubierta |
| Muestra el saldo de cierre anterior y el stock | CU-07 | RF-022, RF-007 | cubierta |
| Registra el conteo de apertura | CU-07 | RF-026 (nuevo) | cubierta (nuevo) |
| Avisa si el turno anterior quedó sin cierre | CU-07 | RF-030 (Sesión 4) | cubierta (nuevo) |
| Valida la venta y asigna el número de recibo | CU-01 | RF-001, RF-019 | cubierta |
| Descuenta el stock y escribe el historial | CU-01 | RF-003, RF-015 | cubierta |
| Notifica bajo stock | CU-10 | RF-004 | cubierta |
| Calcula totales y saldos | CU-06 | RF-006 | cubierta |
| Registra el cierre con la diferencia y genera la copia | CU-06 | RF-025 (nuevo), RNF-001, RNF-005 | cubierta |
| Consolida ingresos y egresos | CU-09 | RF-009 | cubierta |

### E2 · Requisitos que no aparecen en el diagrama

| Requisito | ¿Aparece? | Por qué | Qué se hace |
|---|---|---|---|
| RF-005 Registrar un egreso | No | No es un paso de la jornada de venta: ocurre cuando hay un gasto | Se modela en CU-04; queda fuera de este proceso |
| RF-010, RF-011 Reportes financieros | No | No es un paso del proceso diario | Se dejan en CU-11 |
| RF-014 Usuarios y perfiles | No | Ocurre antes del proceso | CU-14 y CU-15 |
| RF-018 Editar una venta | No | Falta en el diagrama: es una excepción de la jornada | Se agrega en la v1.1 del TO-BE como rama de CU-05 |
| RF-012 Rotación de productos | No | No es un paso del proceso | CU-12 |

### E3 · Matriz actualizada

| Req. | NI → Meta → HU | CU (U5) | Diagrama · acción | Brecha | Pantalla (U6) |
|---|---|---|---|---|---|
| RF-001 | NI-01 → G1.1 → HU-01 | CU-01 | DAC-02 · Valida la venta | B-01 | Unidad 6 |
| RF-003 | NI-02 → G2.1 → HU-03 | CU-01, CU-03 | DAC-02 · Descuenta el stock | B-03 | Unidad 6 |
| RF-006 | NI-06 → G3.5 → HU-11 | CU-06 | DAC-03 · Registra el cierre | B-04 | Unidad 6 |
| RF-007 | NI-07 → G2.1 → HU-13 | CU-07 | DAC-02 · Muestra el stock | B-07 | Unidad 6 |
| RF-022 | NI-05 → G3.5 → HU-11 | CU-07 | DAC-02 · Muestra el saldo | B-05 | Unidad 6 |
| RF-025 (nuevo) | NI-04 → G3.5 → HU-11 | CU-06 | DAC-03 · Ingresa el conteo | B-04 | Unidad 6 |
| RF-026 (nuevo) | NI-05 → G3.5 → HU-11 | CU-07 | DAC-02 · Registra el conteo de apertura | B-06 | Unidad 6 |
| RF-027 (nuevo) | NI-07 → G2.3 → HU-03 | CU-03 | DAC-02 · ajuste (nota) | B-08 | Unidad 6 |

## F. Pendientes

| ID | Pregunta | Responsable | Fecha | Dónde se resuelve |
|---|---|---|---|---|
| PE-01 | ¿La diferencia de caja se avisa al jefe en el momento? | Nicolás Bastidas Medina | 12/12/2026 | Validación con el jefe (AM-01) |
| PE-02 | ¿Un conteo de apertura por turno o por día? | Sandy Katherin Hurtado Suárez | 12/12/2026 | Validación con la empleada |
| PE-03 | ¿Quién puede registrar un ajuste por conteo? | Julián Estiven Murcia Rodriguez | 12/12/2026 | Validación con el jefe |
| PE-04 | ¿Cuánto tarda hoy una venta en hora pico? (P-08, CS-02) | Julián Estiven Murcia Rodriguez | 05/12/2026 | Observación de hora pico (AM-02) |
| PE-05 | ¿La foto del comprobante se sigue tomando con la cámara del celular? | Sandy Katherin Hurtado Suárez | 12/12/2026 | Validación con la empleada |
| PE-06 | Fecha real de la entrevista al jefe | Julián Estiven Murcia Rodriguez | 05/12/2026 | Llamada al jefe (AM-02) |
| PE-07 | ¿El cuaderno semanal de la asesora tiene datos que el SGMP no registra? | Sandy Katherin Hurtado Suárez | 12/12/2026 | Validación con la asesora |
| PE-08 | Confirmación escrita de los cuatro dueños de calle | Nicolás Bastidas Medina | 12/12/2026 | Fase 05 |
