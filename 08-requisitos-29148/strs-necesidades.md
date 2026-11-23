# StRS · Necesidades de los interesados (extracto)

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería)
Archivo: `08-requisitos-29148/strs-necesidades.md` · Versión 1.0 — 21/11/2026

> **Cómo se redactó:** las necesidades están escritas por el equipo, con apoyo de IA, a partir de la columna «Necesidad expresada» de las tres entrevistas; **no son citas textuales**. NI-17 sale de la Ley 1581 de 2012 y NI-18 de la estrategia de riesgo del acta. El dueño de cada necesidad la confirma en la validación con el patrocinador (carpeta 05); hasta entonces es la formulación de trabajo del equipo.

**Interesados:** Camilo Gutiérrez (jefe y propietario, patrocinador); la empleada (mesera y cajera); Jennifer Adriana Rodríguez Cetina (asistente financiera; en el acta, «asesora financiera»).

| ID | Interesado | Necesidad, en su lenguaje | Fuente | Justificación | Prioridad | Se refina en |
|---|---|---|---|---|---|---|
| **NI-01** | Empleada | «Quiero anotar cada venta una sola vez, sin pasarla del cuaderno al celular, para no olvidar ventas en alguno de los dos registros.» | Entrevista a la empleada (17/09/2026), hallazgo 2. | Hoy la venta se anota primero en un cuaderno y luego en el celular; se puede olvidar u omitir en alguno de los dos medios. | Alta | G1 (G1.1) |
| **NI-02** | Empleada y jefe | «Quiero ver qué productos tuvo cada pedido y consultar el historial de ventas, gastos e inventario con su fecha y número de comprobante, no solo el total del día.» | Entrevista a la empleada (17/09/2026), hallazgo 3; entrevista al jefe (fecha no registrada en el documento), hallazgo 1. | Al final del día queda una lista de productos sin dividir por pedidos; el control financiero se llevaba en un cuaderno «muy en borrador». | Alta | G1.1, G2.3 |
| **NI-03** | Jefe | «Quiero corregir un error de registro de forma ágil sin perder el rastro de lo que ocurrió.» | Entrevista al jefe, hallazgo 4; acta, sección 2 (edición o anulación con constancia). | Antes un error se corregía reescribiendo en el cuaderno; con la aplicación actual se puede eliminar o corregir directamente. | Media | G1.3 |
| **NI-04** | Empleada y jefe | «Quiero tener un respaldo de las transacciones para saber de dónde viene un descuadre y verificar rápido las diferencias entre lo digital y lo físico.» | Entrevista a la empleada, hallazgo 5; entrevista al jefe, hallazgo 3; acta, sección 1. | Hubo un descuadre de $50.000 y nadie pudo saber qué lo causó por falta de respaldo; el jefe lo rastrea hoy con el número de recibo y las cuentas físicas. | Alta | G3.2, G4.4 |
| **NI-05** | Empleada | «Quiero verificar que el saldo real de caja coincida con lo que dejó registrado el dueño, sin depender de una hoja de papel suelta.» | Entrevista a la empleada, hallazgo 1. | El dueño deja anotado en una hoja el saldo del día anterior y la empleada lo rectifica contra el efectivo al iniciar su turno. | Alta | G3.5 (nueva) |
| **NI-06** | Jefe | «Quiero reducir el tiempo que dedico a cerrar y consolidar las cuentas del día.» | Entrevista al jefe, hallazgos 6 y 7; acta, sección 7 (criterio 1). | Con 20 a 40 ventas diarias, consolidar las cuentas toma de 8 a 15 minutos y los gastos se revisan y registran todos los días. | Alta | G3.1, G3.5 |
| **NI-07** | Empleada | «Quiero conocer el inventario disponible al empezar cualquier turno, sin depender de la memoria de quien recibió la mercancía.» | Entrevista a la empleada, hallazgo 6; acta, sección 2. | En el turno del domingo no hay ningún dato previo del inventario y toca hacer un conteo rápido, manual y empírico. | Media | G2 (G2.1) |
| **NI-08** | Asesora financiera | «Quiero saber con anticipación cuándo se están agotando los insumos, para no esperar a que escaseen.» | Entrevista a la asesora (19/09/2026), hallazgo 3; acta, sección 7 (criterio 5). | El reabastecimiento se hace cuando el inventario ya está muy bajo, sin un control preventivo. | Alta | G2.2 |
| **NI-09** | Jefe | «Quiero saber qué productos rotan más y cuáles menos, para armar estrategias como combos o retirar los que no rotan.» | Entrevista al jefe, hallazgo 2. | La aplicación actual deja ver qué productos se mueven más (por ejemplo, el café por libra frente a las presentaciones de cuarto o de 340 g). | Media | G3.6 (nueva) |
| **NI-10** | Asesora financiera | «Quiero centralizar los ingresos y egresos en un solo medio, sin registros dispersos ni duplicados.» | Entrevista a la asesora, hallazgo 1; acta, sección 1 (objetivo c). | Hoy registra a diario en una aplicación y cada semana en un cuaderno aparte. | Alta | G3.1, G3.4 |
| **NI-11** | Asesora financiera | «Quiero ver mis cifras de forma clara y visual —ingresos, egresos y flujo de caja— para decidir más rápido.» | Entrevista a la asesora, hallazgo 2. | Los datos financieros se presentan como listas planas de números poco tangibles y difíciles de distinguir. | Media | G3.3 |
| **NI-12** | Empleada | «Quiero confiar en que la información no se pierde al cerrar la aplicación y poder trabajar sin internet.» | Entrevista a la empleada, hallazgo 7; acta, secciones 3 y 7 (criterio 6); árbol KAOS, OB-1. | El local no tiene internet y la empleada no sabe si la aplicación actual guarda lo registrado si se cierra. | Alta | G1.1 (OB-1) |
| **NI-13** | Empleada y dueño | «Quiero que cada persona vea y haga solo lo que le corresponde: la empleada registra ventas y el dueño gestiona productos e inventario.» | Entrevista a la empleada, hallazgo 4; acta, sección 3. | Hoy no hay usuarios diferenciados, solo la función de abrir turno, y únicamente el dueño puede crear productos nuevos. | Alta | G4.1, G4.2, G4.3 |
| **NI-14** | Jefe | «Quiero atender en orden los pedidos de distintos canales —mostrador y domicilio— durante los picos de demanda.» | Entrevista al jefe, hallazgo 5; acta, sección 2 (canal del pedido). | En alta afluencia se prioriza por orden de llegada y los pedidos por redes o WhatsApp esperan turno. | Media | G1.4 (nueva) |
| **NI-15** | Jefe | «Quiero una solución accesible en costo que reduzca de verdad el tiempo en tareas administrativas.» | Entrevista al jefe, hallazgo 7. | Le importa conocer el presupuesto y que la solución ahorre tiempo. No es un requisito del producto: es una condición de la propuesta (decisión D-10). | Media | — (condición de la propuesta; fuera del SRS) |
| **NI-16** | Empleada | «Quiero un registro único y claro de los pagos por método, sin depender de fotos de comprobantes ni de doble anotación.» | Entrevista a la empleada, hallazgo 8. | La aplicación actual separa transferencia y efectivo, exige fotografiar los comprobantes y mantiene el doble registro (físico y plataforma). | Media | G1.2 |
| **NI-17** | Todos (el jefe, como responsable) | «Los datos personales de quienes usan el sistema se tratan como manda la ley.» | Ley Estatutaria 1581 de 2012; matriz de aplicabilidad (Unidad 4, Sesión 1), fila 13. El jefe la valida en la fase 05. | El sistema guardará los usuarios internos (empleada, asesora, jefe) y el historial de quién ejecutó cada operación. | Crítica | G4.1, G4.4 |
| **NI-18** | Jefe (patrocinador) | «Quiero no perder la información del negocio si el celular falla o se daña.» | Acta de constitución, sección 6 (estrategia de riesgo: copia de respaldo exportable). Formulada por el equipo; el jefe la valida en la fase 05. | El negocio depende de un único celular dedicado y sin internet: si se pierde o se daña, se pierde el registro de ventas, inventario y gastos. | Media | G4.5 (nueva) |

**Escala de prioridad de las necesidades:** *Crítica* = obligación legal o acuerdo con un ente de control; *Alta* = sin ella el proyecto no resuelve el problema que lo originó o está ligada a un criterio de éxito del acta; *Media* = deseable y negociable entre entregas. No es la escala MoSCoW: MoSCoW prioriza historias para una entrega y esta prioriza necesidades del proyecto entero.

**Metas nuevas del árbol KAOS** (decisiones de trabajo D-01, D-04, D-05, D-07 y D-08; ver `correcciones-fuentes.md`): G1.4 «Registrar el canal del pedido»; G3.5 «Registrar el cierre de caja y su saldo»; G3.6 «Conocer la rotación de los productos»; G4.5 «Proteger la información con una copia de respaldo»; G1.3 se amplía a «anulación o edición controlada».

## Correspondencia con el apéndice B del SRS (N-xx → NI-xx)

El SRS numeró los 18 hallazgos de las entrevistas como N-01 a N-18. Aquí se consolidan en 18 necesidades (NI-xx): 16 salen de las entrevistas, NI-17 de la ley y NI-18 del acta.

| N-xx | NI-xx |
|---|---|
| N-01 | NI-05 |
| N-02 | NI-01 |
| N-03 | NI-02 |
| N-04 | NI-13 |
| N-05 | NI-04 |
| N-06 | NI-07 |
| N-07 | NI-12 |
| N-08 | NI-16 |
| N-09 | NI-02, NI-10 |
| N-10 | NI-09 |
| N-11 | NI-04 |
| N-12 | NI-03 |
| N-13 | NI-14 |
| N-14 | NI-06 |
| N-15 | NI-15 |
| N-16 | NI-10 |
| N-17 | NI-11 |
| N-18 | NI-08 |

## Decisión D-00 · se omite el SyRS

El proyecto es solo software sobre un celular dedicado que ya existe, sin hardware nuevo ni integración con otros sistemas (acta, sección 2). Lo que el SyRS habría contenido se trasladó al SRS: la interfaz con el celular y con la copia de respaldo a «interfaces externas» (3.1), y las responsabilidades de las personas a «restricciones» (2.4) y «suposiciones y dependencias» (2.5). **Decisión del equipo (supuesto de trabajo); el patrocinador la valida en la fase 05.** Es la misma decisión que la adaptación 1 de la matriz de aplicabilidad de la Sesión 1.

