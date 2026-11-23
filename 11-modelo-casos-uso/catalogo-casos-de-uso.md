# Catálogo de casos de uso · v1.0

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 1 · 22/11/2026

**Límite del sistema:** el SGMP es la aplicación del único celular del local, sin internet, para registrar ventas, inventario, egresos y cierres de caja y controlar quién hace qué. **Fuera:** DIAN, WhatsApp, datáfono, clientes, cola de atención (Won't) y consumo por receta (P-03).

## Parte A · Catálogo

| ID | Nombre | Actor principal | Secundarios o disparador | Nivel | Origen | Prioridad | Relaciones | Estado | Vista |
|---|---|---|---|---|---|---|---|---|---|
| CU-01 | Registrar una venta | Empleado (también Jefe) | Asesora y Jefe reciben la alerta si se extiende con CU-10 | Usuario | G1.1, G1.2, G1.4 · HU-01, HU-15 · RF-001, RF-016, RF-017, RF-019, RF-023, RF-028 · NI-01, NI-02, NI-16 | Must | «extend» CU-10 Notificar bajo stock [stock ≤ umbral mínimo tras la venta] | Especificado (U3) · validación en la fase 05 | DCU-02a |
| CU-02 | Anular una venta | Empleado (ventas de su turno) · Jefe (cualquiera) | — | Usuario | G1.3 · HU-02 · RF-002, RF-015 · NI-03, NI-04 | Should | — | Especificado (U3) · validación en la fase 05 | DCU-02a |
| CU-03 | Registrar un movimiento de inventario | Jefe | Asesora y Jefe reciben la alerta si se extiende con CU-10 | Usuario | G2.1, G2.3 · HU-03 · RF-003, RF-021, RF-023, RF-027 · NI-02, NI-07, NI-08 | Must | «extend» CU-10 Notificar bajo stock [stock ≤ umbral mínimo tras una salida o un ajuste] | Especificado (U3) · validación en la fase 05 | DCU-02b |
| CU-04 | Registrar un egreso | Asesora · Jefe | — | Usuario | G3.4 · HU-07 · RF-005 · NI-10, NI-02 | Must | — | Especificado (U3) · validación en la fase 05 | DCU-02b |
| CU-05 | Editar una venta | Empleado (ventas de su turno) · Jefe | — | Usuario | G1.3 · HU-02 · RF-018 · NI-03 | Should | — | Propuesto | DCU-02a |
| CU-06 | Cerrar la caja | Empleado · Jefe | Disparador: fin del turno | Usuario | G3.5 · HU-11 · RF-006, RF-025, RF-029, RNF-001, RNF-005 · NI-06 | Must | — | Propuesto | DCU-02a |
| CU-07 | Abrir el turno | Empleado | — | Usuario | G3.5, G2.1 · HU-11, HU-13 · RF-022, RF-007, RF-026, RF-030 · NI-05, NI-07 | Must | — | Propuesto | DCU-02a |
| CU-08 | Buscar una venta por número de recibo | Jefe | — | Usuario | G3.2 · HU-12 · RF-008 · NI-04 | Must | — | Propuesto | DCU-02b |
| CU-09 | Consolidar ingresos y egresos | Asesora | — | Usuario | G3.1, G3.2 · HU-05 · RF-009 · NI-10, NI-06 | Must | — | Propuesto | DCU-02b |
| CU-10 | Notificar bajo stock | — (lo inicia el sistema) | Disparador: evento «stock ≤ umbral mínimo» en CU-01 o CU-03; receptores: Jefe y Asesora | Subfunción | G2.2 · HU-04 · RF-004 · NI-08 | Must | Extiende a CU-01 y CU-03 | Propuesto | DCU-02b |
| CU-11 | Consultar los reportes financieros | Asesora (también Jefe) | — | Usuario | G3.3 · HU-06 · RF-010, RF-011 · NI-11 | Should | — | Propuesto | DCU-02b |
| CU-12 | Consultar la rotación de productos | Jefe | — | Usuario | G3.6 · HU-14 · RF-012 · NI-09 | Could | — | Propuesto | DCU-02b |
| CU-13 | Iniciar sesión | Usuario (Empleado, Jefe o Asesora) | — | Usuario | G4.1, G4.2 · HU-08 · RF-013, RF-020, RNF-007 · NI-13, NI-17 | Must | Generalización de actores: Empleado, Jefe y Asesora son tipos de Usuario | Propuesto | DCU-02c |
| CU-14 | Dar acceso a un usuario | Jefe | — | Usuario | G4.3 · HU-09 · RF-014, RF-020 · NI-13, NI-17 | Should | — | Propuesto | DCU-02c |
| CU-15 | Retirar el acceso a un usuario | Jefe | — | Usuario | G4.3 · HU-09 · RF-014 · NI-13 | Should | — | Propuesto | DCU-02c |
| CU-16 | Consultar el historial de auditoría | Jefe | — | Usuario | G4.4 · HU-10 · RF-015, RNF-007 · NI-04, NI-17 | Must | — | Propuesto | DCU-02c |
| CU-17 | Exportar la copia de respaldo | Jefe | Equipo de respaldo (secundario: recibe el archivo) | Usuario | G4.5 · HU-16 (propuesta, H-02) · RNF-005 · NI-18 | Should | — | Propuesto | DCU-02c |
| CU-18 | Actualizar el catálogo de productos | Jefe | — | Usuario | G2.1 · HU-17 (propuesta) · RF-024 (propuesto, H-01), RF-031 · NI-13, NI-07 · TBD-09 | Must (propuesta) | — | Propuesto (nuevo en U5) | DCU-02b |

Especificación textual: Unidad 7 · Pantallas: Unidad 6.

## Parte B · Trazabilidad inversa

| Historia o requisito | Enunciado corto | Prioridad | CU (U5) | Resultado | Observación |
|---|---|---|---|---|---|
| HU-01 | Registrar una venta | Must | CU-01 | cubierto | RF-028 (Sesión 3) se suma a CU-01. |
| HU-02 | Anular o editar una venta | Should | CU-02, CU-05 | cubierto | Se separa en dos metas: anular y editar. |
| HU-03 | Registrar movimientos de inventario | Must | CU-03 | cubierto | RF-027 (ajuste por conteo) se suma. |
| HU-04 | Recibir alertas de bajo stock | Must | CU-10 | cubierto | Extensión de CU-01 y CU-03. |
| HU-05 | Consolidar ingresos y egresos | Must | CU-09 | cubierto | — |
| HU-06 | Ver reportes financieros | Should | CU-11 | cubierto | — |
| HU-07 | Registrar un egreso | Must | CU-04 | cubierto | — |
| HU-08 | Iniciar sesión | Must | CU-13 | cubierto | — |
| HU-09 | Administrar usuarios y perfiles | Must | CU-14, CU-15 | cubierto | Se separa en dar y retirar acceso (B2: sin «gestionar»). |
| HU-10 | Consultar el historial de auditoría | Must | CU-16 | cubierto | La escritura en el historial es transversal. |
| HU-11 | Cerrar la caja y consultar el saldo de cierre | Must | CU-06, CU-07 | cubierto | — |
| HU-12 | Buscar una venta por número de recibo | Must | CU-08 | cubierto | — |
| HU-13 | Ver el inventario al iniciar el turno | Should | CU-07 | cubierto | Paso de CU-07. |
| HU-14 | Ver la rotación de productos | Could | CU-12 | cubierto | — |
| HU-15 | Registrar el canal del pedido | Could | CU-01 | cubierto | Paso opcional de CU-01; la cola por orden de llegada es Won't (D-05). |
| RF-015 | Historial de auditoría | Must | CU-16 · transversal | transversal | Escribir en el historial ocurre en todo caso sensible; no se dibuja como «include» (C6). |
| RF-020 | Aviso de tratamiento de datos | Must | CU-14, CU-13 | cubierto | Se muestra al crear el usuario y se acepta en el primer ingreso. |
| RNF-002/003/006 | Sin conexión, integridad, persistencia | Must | Transversal | transversal | Restricciones de todos los casos. |
| RNF-005 | Copia de respaldo exportable | Should | CU-17 | hueco → cubierto | No tenía historia: H-02 propone HU-16. |
| NI-13 (crear productos) | El dueño gestiona productos | — | CU-18 | hueco → cubierto | Ningún RF cubría el catálogo: H-01 propone RF-024. |
| NI-14 (cola por orden de llegada) | Cola de atención | Won't | — | fuera del modelo | Won't en la versión 1.0 (D-05 de la Sesión 3). |

## Parte C · Hallazgos y preguntas abiertas

| ID | Hallazgo | Dónde apareció | Requisito propuesto o pregunta | Responsable | Fecha | Decisión |
|---|---|---|---|---|---|---|
| H-01 | El catálogo de productos es precondición de CU-01 y el acta dice que crear productos es exclusivo del dueño, pero ningún RF ni HU lo cubre. | Recorrido del actor Jefe con la pregunta del lunes (taller interno) | RF-024 (propuesto): crear y modificar productos con nombre, precio y umbral mínimo; HU-17 «Actualizar el catálogo»; CU-18. | Sandy Katherin Hurtado Suárez | 12/12/2026 | Aprobado por el equipo (taller interno); lo confirma el jefe en la fase 05. |
| H-02 | CU-17 (exportar respaldo) traza a RNF-005 y NI-18 pero a ninguna historia. | Parte B, trazabilidad inversa | HU-16 (propuesta): «Como jefe quiero exportar la copia de respaldo a mi equipo para no perder los datos si el celular se daña». | Nicolás Bastidas Medina | 12/12/2026 | Aprobado por el equipo; lo confirma el jefe. |
| H-03 | La v0.1 tenía «Gestionar ventas» (CRUD) que mezcla registrar, editar y anular. | Lista de verificación, B2 | Se divide en CU-01, CU-05 y CU-02. | Julián Estiven Murcia Rodriguez | 22/11/2026 | Corregido en v1.0 (Sandy Hurtado revisó). |
| H-04 | La v0.1 dibujaba «Registrar en historial» como «include» de todos los casos. | Lista de verificación, C6 | Se quita: RF-015 es transversal; solo la consulta es caso de uso (CU-16). | Julián Estiven Murcia Rodriguez | 22/11/2026 | Corregido en v1.0. |
| H-05 | La v0.1 tenía «Base de datos» como actor. | Lista de verificación, A3 | Se elimina: es un componente interno. | Julián Estiven Murcia Rodriguez | 22/11/2026 | Corregido en v1.0. |
| H-06 | En la v0.1 la flecha «extend» iba del caso base a «Notificar bajo stock». | Lista de verificación, C3 | Se invierte: CU-10 extiende a CU-01 y CU-03, con su condición. | Julián Estiven Murcia Rodriguez | 22/11/2026 | Corregido en v1.0. |
| H-07 | ¿Puede la empleada anular una venta de otro turno, o solo las de su turno? | Lectura en voz alta de CU-02 | Pregunta abierta PA-U5-01 (supuesto P-04: solo las de su turno; el jefe, cualquiera). | Nicolás Bastidas Medina | 12/12/2026 | Abierta: decide el jefe. |
| H-08 | ¿Necesita el jefe un recordatorio automático de la copia semanal? Si sí, aparece un actor temporal. | Paso 5 (tiempo y eventos) | Pregunta abierta PA-U5-02; hoy no hay actor temporal (ficha S2). | Julián Estiven Murcia Rodriguez | 12/12/2026 | Abierta: decide el jefe. |
