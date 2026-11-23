# Catálogo de requisitos de calidad (ISO/IEC 25010:2023)

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 4 · Sesión 4 · 22/11/2026

Versión 1.0 — línea base del equipo; el patrocinador la valida en la fase 05. Siete RNF sobre cuatro características: eficiencia de desempeño, fiabilidad, capacidad de interacción y seguridad.

| ID | Característica | Enunciado corto | Objetivo / mínimo | Prioridad | Trazabilidad |
|---|---|---|---|---|---|
| **RNF-001** | Eficiencia de desempeño | Cierre de caja con jornada de 40 ventas | ≤ 3 min / ≤ 5 min | Must | NI-06 · RF-006 · HU-11 |
| **RNF-002** | Fiabilidad | Todas las operaciones sin internet | 100 % / 100 % | Must | NI-12 · RF-001, RF-003, RF-005, RF-006 · HU-01 (s) |
| **RNF-003** | Fiabilidad | Cero registros incompletos tras interrupciones | 0 / 0 | Must | NI-12, NI-04 · RF-001, RF-003, RF-005 · HU-01 (s) |
| **RNF-004** | Capacidad de interacción | Venta de hasta 3 productos en hora pico | ≤ 20 s y 6 toques / ≤ 30 s y 8 toques | Should | NI-01, NI-14 · RF-001 · HU-01 (s) |
| **RNF-005** | Fiabilidad | Respaldo diario y restauración en otro celular | ≤ 1 día y 30 min / ≤ 7 días y 60 min | Should | NI-18 · RF-006 (el cierre genera la copia) · RNF transversal |
| **RNF-006** | Fiabilidad | Cero registros perdidos al cerrar o reiniciar | 0 / 0 | Must | NI-12 · RF-001, RF-005, RF-015 · HU-01 (s) |
| **RNF-007** | Seguridad | Permisos por rol y usuario en el historial | 100 % y 0 / igual | Must | NI-13, NI-17, NI-04 · RF-013, RF-014, RF-015 · HU-08, HU-10 |

## RNF-001 · Tiempo de cierre de caja

| Campo | Contenido |
|---|---|
| **Característica** | Eficiencia de desempeño |
| **Preocupación** | «El cierre dura unos 8 a 10 minutos» — empleada, 17/09/2026; 10 a 15 minutos según la síntesis de la entrevista al jefe. |
| **Escenario** | Al final de la jornada, con hasta 40 ventas (2 de ellas anuladas) y 10 egresos registrados, el empleado o el jefe solicita el cierre de caja en el celular del local, sin conexión a internet. |
| **Métrica** | Minutos desde que el usuario inicia el cierre hasta que el saldo de cierre queda registrado, incluidos los pasos del usuario; se cronometran 5 cierres y se reporta el mayor. |
| **Umbral objetivo** | ≤ 3 minutos. |
| **Mínimo aceptable** | ≤ 5 minutos. Por encima se rechaza: se acercaría a la línea base de 8 minutos. |
| **Origen del umbral** | Objetivo: criterio de éxito 1 del acta (3 minutos). Línea base: 8 a 10 minutos (empleada) y 10 a 15 (jefe). Mínimo de 5 minutos: supuesto del equipo (menos de dos tercios de la línea base más baja); el patrocinador (Camilo Gutiérrez) lo valida en la fase 05. |
| **Método de medición** | Prueba cronometrada en la validación (fase 05) con una jornada simulada de 40 ventas y 10 egresos, en el celular del local. Operación: el jefe anota el tiempo de cada cierre durante las dos primeras semanas. |
| **Responsable** | Mide: Sandy Hurtado (equipo de análisis). Acepta: Camilo Gutiérrez. |
| **Prioridad** | Must |
| **Trazabilidad** | NI-06 · RF-006 · HU-11 |
| **Estado y versión** | Aprobado (revisión interna 22/11/2026, acta ARR-MP-01) · v1.0 |

## RNF-002 · Operación sin conexión a internet

| Campo | Contenido |
|---|---|
| **Característica** | Fiabilidad |
| **Preocupación** | «No contamos con internet. La aplicación que tenemos funciona sin conexión; solo se necesitaría en el momento de agregar un producto nuevo» — empleada, 17/09/2026. |
| **Escenario** | Durante una jornada completa, con el celular en modo avión, el empleado, la asesora y el jefe ejecutan las 11 operaciones del sistema: registrar, anular y editar ventas; crear productos; registrar movimientos y egresos; cerrar caja; consultar stock, saldo e historial; generar reportes; administrar usuarios y exportar el respaldo. |
| **Métrica** | Porcentaje de las 11 operaciones que se completan sin conexión y sin mensajes de error de red. |
| **Umbral objetivo** | 100 %. |
| **Mínimo aceptable** | 100 %: es una restricción del acta (el local no tiene internet) y no admite un valor menor. |
| **Origen del umbral** | Acta de constitución, sección 3 (restricción) y criterio de éxito 6; obstáculo OB-1 del árbol de metas. |
| **Método de medición** | Prueba en el celular del local en modo avión durante una jornada simulada (fase 05). Operación: la empleada reporta cualquier mensaje de red en las dos primeras semanas. |
| **Responsable** | Mide: Nicolás Bastidas. Acepta: Camilo Gutiérrez. |
| **Prioridad** | Must |
| **Trazabilidad** | NI-12 · RF-001, RF-003, RF-005, RF-006 · HU-01 (s) |
| **Estado y versión** | Aprobado (revisión interna 22/11/2026, acta ARR-MP-01) · v1.0 |

## RNF-003 · Ninguna operación queda a medias

| Campo | Contenido |
|---|---|
| **Característica** | Fiabilidad |
| **Preocupación** | «Faltaban algunas ventas por registrar y no cuadraba bien con lo que había en caja» — asesora, 19/09/2026. |
| **Escenario** | La aplicación se cierra a la fuerza o el celular se apaga (batería agotada) en mitad de una venta, un egreso o un movimiento de inventario. |
| **Métrica** | Número de registros incompletos (venta sin método de pago, movimiento sin stock actualizado, egreso sin sumar al total) después de 20 interrupciones provocadas: 5 por cada tipo de operación y 5 durante el cierre. |
| **Umbral objetivo** | 0 registros incompletos. |
| **Mínimo aceptable** | 0: un registro a medias es, por definición, un descuadre. |
| **Origen del umbral** | Garantías mínimas de CU-01 a CU-04 («ninguna venta queda registrada a medias»); hallazgo de la asesora. |
| **Método de medición** | Prueba de interrupción forzada en la fase 05 (20 interrupciones) y conteo de los registros; inspección del historial después de cada interrupción. |
| **Responsable** | Mide: Julián Murcia. Acepta: Camilo Gutiérrez. |
| **Prioridad** | Must |
| **Trazabilidad** | NI-12, NI-04 · RF-001, RF-003, RF-005 · HU-01 (s) |
| **Estado y versión** | Aprobado (revisión interna 22/11/2026, acta ARR-MP-01) · v1.0 |

## RNF-004 · Registro de una venta en hora pico

| Campo | Contenido |
|---|---|
| **Característica** | Capacidad de interacción |
| **Preocupación** | «A partir de las 6 de la tarde es la hora pico» y «al vender algo, se debe buscar el producto en la lista, seleccionarlo, cobrar, elegir el método de pago y finalizar» — empleada, 17/09/2026. |
| **Escenario** | En hora pico, la empleada registra una venta de hasta 3 productos del catálogo, en efectivo o por transferencia sin comprobante, con el cliente esperando en caja. |
| **Métrica** | Segundos desde que se inicia la venta hasta que queda registrada, y número de toques en la pantalla; se reporta la mediana de 10 ventas por participante. |
| **Umbral objetivo** | ≤ 20 segundos y ≤ 6 toques (mediana). |
| **Mínimo aceptable** | ≤ 30 segundos y ≤ 8 toques (mediana). |
| **Origen del umbral** | Supuesto de trabajo P-08: el tiempo de atención en hora pico no se midió (quedó pendiente en la entrevista). Volumen: 20 a 40 ventas diarias (jefe) y unos 50 tintos al día (empleada). Se confirma midiendo el proceso actual en la fase 05. |
| **Método de medición** | Prueba de usabilidad cronometrada sobre el prototipo (Unidad 6) y antes de la entrega: la empleada y un empleado nuevo sin entrenamiento registran 10 ventas cada uno. |
| **Responsable** | Conduce: Sandy Hurtado. Acepta: la empleada y Camilo Gutiérrez. |
| **Prioridad** | Should |
| **Trazabilidad** | NI-01, NI-14 · RF-001 · HU-01 (s) |
| **Estado y versión** | Condicionado a CS-02 (revisión interna 22/11/2026, acta ARR-MP-01) · v1.0 |

## RNF-005 · Copia de respaldo exportable

| Campo | Contenido |
|---|---|
| **Característica** | Fiabilidad |
| **Preocupación** | «Falta de conexión a internet y de respaldo de datos en el celular único del local» — riesgo del acta de constitución (17/09/2026), formulado como NI-18. |
| **Escenario** | El celular del local se daña o se pierde; el jefe restaura la última copia de respaldo en otro celular y la operación continúa. |
| **Métrica** | (a) Días de registros que se pierden al restaurar la última copia (RPO). (b) Minutos que toma restaurarla en otro celular (RTO). |
| **Umbral objetivo** | (a) ≤ 1 día: la copia se genera automáticamente al cerrar la caja. (b) ≤ 30 minutos. |
| **Mínimo aceptable** | (a) ≤ 7 días (copia semanal). (b) ≤ 60 minutos. |
| **Origen del umbral** | Estrategia del riesgo del acta (sección 6); supuesto P-06: el archivo se copia por cable USB. Los valores son supuesto del equipo; el patrocinador (Camilo Gutiérrez) lo valida en la fase 05. |
| **Método de medición** | Demostración en la fase 05: exportar, restaurar en un segundo celular y comparar los conteos. Operación: el jefe copia el archivo cada semana y lo anota. |
| **Responsable** | Mide: Nicolás Bastidas. Acepta y ejecuta la copia: Camilo Gutiérrez. |
| **Prioridad** | Should |
| **Trazabilidad** | NI-18 · RF-006 (el cierre genera la copia) · RNF transversal |
| **Estado y versión** | Aprobado con cambios (CS-03) (revisión interna 22/11/2026, acta ARR-MP-01) · v1.0 |

## RNF-006 · Persistencia de lo registrado

| Campo | Contenido |
|---|---|
| **Característica** | Fiabilidad |
| **Preocupación** | «No sé si se guarda la información si se cierra la app» — empleada, 17/09/2026. |
| **Escenario** | Después de una jornada, la empleada cierra la aplicación o el celular se reinicia; al reabrir consulta el historial. |
| **Métrica** | Número de registros confirmados que no aparecen después de cerrar la aplicación o reiniciar el celular (conteo antes y después). |
| **Umbral objetivo** | 0 registros perdidos. |
| **Mínimo aceptable** | 0: la pérdida de datos al cerrar la aplicación es justo lo que el acta prohíbe. |
| **Origen del umbral** | Acta de constitución, criterio de éxito 6 («sin pérdida de datos al cerrar la aplicación»). |
| **Método de medición** | Prueba en la fase 05: 40 ventas, 10 egresos y 5 movimientos; cierre forzado y reinicio; comparación de conteos. |
| **Responsable** | Mide: Julián Murcia. Acepta: Camilo Gutiérrez. |
| **Prioridad** | Must |
| **Trazabilidad** | NI-12 · RF-001, RF-005, RF-015 · HU-01 (s) |
| **Estado y versión** | Aprobado (revisión interna 22/11/2026, acta ARR-MP-01) · v1.0 |

## RNF-007 · Control de acceso por rol

| Campo | Contenido |
|---|---|
| **Característica** | Seguridad |
| **Preocupación** | Hallazgo 4 de la empleada (paráfrasis): solo tiene acceso al registro de ventas y únicamente el dueño puede crear productos; hallazgo 5: el descuadre no se pudo atribuir a nadie. |
| **Escenario** | El empleado, la asesora y el jefe, cada uno con su propia sesión, intentan las 11 operaciones de la matriz de permisos (apéndice B del SRS); además, una cuenta desactivada intenta entrar. |
| **Métrica** | (a) Porcentaje de los 33 casos (11 operaciones × 3 roles) cuyo resultado coincide con la matriz de permisos. (b) Operaciones sensibles registradas sin usuario en el historial. |
| **Umbral objetivo** | (a) 100 % de los 33 casos; la cuenta desactivada no entra. (b) 0. |
| **Mínimo aceptable** | Igual al objetivo: sin roles ni usuario en el historial no se puede investigar un descuadre. |
| **Origen del umbral** | Acta, sección 3 (la empleada solo registra ventas; crear productos es exclusivo del dueño); matriz de permisos (TBD-13); Ley 1581 de 2012. |
| **Método de medición** | Prueba de los 33 casos y del acceso con una cuenta desactivada en la fase 05; inspección del historial de auditoría. |
| **Responsable** | Mide: Sandy Hurtado. Acepta: Camilo Gutiérrez. |
| **Prioridad** | Must |
| **Trazabilidad** | NI-13, NI-17, NI-04 · RF-013, RF-014, RF-015 · HU-08, HU-10 |
| **Estado y versión** | Aprobado con cambios (CS-05) (revisión interna 22/11/2026, acta ARR-MP-01) · v1.0 |

## Plan de medición

| RNF | Qué se mide | Instrumento | En pruebas | En operación | Quién |
|---|---|---|---|---|---|
| RNF-001 | Minutos del cierre completo | Cronómetro; jornada simulada de 40 ventas y 10 egresos | 5 cierres en la fase 05 | Registro del jefe, dos semanas | Sandy Hurtado · acepta Camilo Gutiérrez |
| RNF-002 | % de las 11 operaciones sin conexión | Modo avión; lista de las 11 operaciones | Jornada simulada en la fase 05 | Reporte de la empleada, dos semanas | Nicolás Bastidas · acepta Camilo Gutiérrez |
| RNF-003 | Registros incompletos tras 20 interrupciones | Cierre forzado y apagado del celular | 20 interrupciones en la fase 05 | Revisión semanal del historial por la asesora | Julián Murcia · acepta Camilo Gutiérrez |
| RNF-004 | Segundos y toques por venta (mediana) | Guion de prueba; cronómetro | Prototipo (U6) y antes de la entrega | Observación de una hora pico la primera semana | Sandy Hurtado · acepta la empleada |
| RNF-005 | Días perdidos y minutos de restauración | Exportación y restauración en otro celular | Demostración en la fase 05 | Copia semanal anotada por el jefe | Nicolás Bastidas · acepta Camilo Gutiérrez |
| RNF-006 | Registros perdidos tras cerrar o reiniciar | Conteo antes y después | Prueba en la fase 05 | Conteo del cierre contra el historial, diario | Julián Murcia · acepta Camilo Gutiérrez |
| RNF-007 | % de 33 casos según la matriz; operaciones sin usuario | Casos de prueba por rol; historial | 33 casos en la fase 05 | Revisión mensual del historial por el jefe | Sandy Hurtado · acepta Camilo Gutiérrez |

## Un RNF antes y después

- **Antes (SRS v0.1):** «El sistema debe permitir consolidar las cuentas rápidamente.»
- **Después (RNF-001 v1.0):** cierre en ≤ 3 minutos con 40 ventas y 10 egresos, mínimo 5 minutos, prueba cronometrada en la fase 05; mide Sandy Hurtado, acepta Camilo Gutiérrez.

## Cobertura de las características

Mantenibilidad se cubre con parámetros (RF-004, TBD-09, TBD-16); adecuación funcional, con los criterios de aceptación de los RF; compatibilidad, flexibilidad y seguridad física se descartan con justificación (matriz-relevancia.md).
