# 24.5 Ambigüedades de la prueba cruzada

**Autorevisión previa.** La prueba cruzada real consiste en que otro equipo construya desde la ficha sin hablar con el equipo autor. Esta tabla recoge las ambigüedades identificadas antes de esa prueba.

| Id | Dónde | Ambigüedad | Resolución | Estado |
|---|---|---|---|---|
| AM-01 | FP-P08 · fecha | «Posterior a hoy» no dice qué hora usa el cambio de día | Hora local fijada por `__setNow`; el día cambia a las 00:00 | Corregida |
| AM-02 | FP-P08 · valor | N5 se aplica solo con grupos de 3 dígitos; «1.5» no se normaliza | Declarado en N5; «1.5» falla por R2 | Corregida |
| AM-03 | FP-P08 · duplicado | CU-04 dice «hace pocos minutos» | Se parametrizó como RN-14 con PD-06; PN-07 pregunta por la frontera | Pendiente |
| AM-04 | FP-P08 · cancelar duplicado | CU-04 dice «termina sin registrar nada»; no dice qué pasa con lo digitado | Se conserva lo digitado y vuelve a EDITANDO | Corregida |
| AM-05 | U6 · ficha de P-08 | La ficha U6 captura «nombre, precio, tipo»; CU-04 pide valor, fecha, categoría, método de pago, descripción y comprobante | Se actualiza la ficha de P-08 de U6 con los 6 campos de esta ficha | Por corregir en la carpeta 17 |
| AM-06 | U6 · P-06 | Permite modificar la cantidad de un producto, lo que evade RF-005 y RF-010 (el movimiento con motivo y usuario) | La cantidad solo cambia por movimiento de inventario o ajuste | Por corregir en la carpeta 17 |
| AM-07 | U6 · P-03 | Dice «borrar el registro de la venta» | Se cambia a «marcar como anulada» (RN-03, DT-1) | Por corregir en la carpeta 17 |
| AM-08 | HU-06 vs HU-05 | Mensajes distintos para un periodo sin ingresos («inexistentes» vs «no se realizaron ingresos») | PN-13 | Pendiente |
| AM-09 | CU-02 paso 5 | «Si aplica» sin criterio | PN-12 | Pendiente |

## Pendientes para cerrar la prueba cruzada

- Ejecutar la prueba con otro equipo sin aclaraciones verbales y registrar las dudas reales.
- Confirmar la ventana de duplicado (PD-06) y su frontera (PN-07).
- Corregir los artefactos de la carpeta 17 en AM-05, AM-06 y AM-07.
- Resolver PN-12 y PN-13 cuando los responsables definan el comportamiento.
