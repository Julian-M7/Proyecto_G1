# Matriz de consistencia entre modelos · v1.0

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

Marcas: ✓ cubierto · ◐ parcial · ✗ hueco · ○ no se requiere (con razón). Construida desde los .puml y las fichas de las carpetas 11 a 15.

## Vista A · Por caso de uso

| CU | Caso de uso · actor | Actividades | Secuencia | Estados | Clases | RF/RNF | HU | Diagnóstico |
|---|---|---|---|---|---|---|---|---|
| CU-01 | Registrar una venta · Empleado (también Jefe) | ✓ DAC-02, DAC-04 | ✓ DSE-01, DSE-02 | → Registrada (T-03) | C: Venta, LineaVenta, ComprobantePago · U: Producto | RF-001, RF-016, RF-017, RF-019, RF-023, RF-028 | HU-01, HU-15 | ✓ |
| CU-02 | Anular una venta · Empleado (ventas de su turno) · Jefe (cualquiera) | ○ | ○ | → Anulada (T-06, T-08) | C: CambioVenta · U: Venta | RF-002, RF-015 | HU-02 | ◐ sin actividad ni secuencia; su riesgo está en DES-01 (decisión D-02) |
| CU-03 | Registrar un movimiento de inventario · Jefe | ◐ nota en DAC-02 | ○ | Producto: región Nivel de stock (P-01 a P-05) | C: MovimientoInventario · U: Producto | RF-003, RF-021, RF-023, RF-027 | HU-03 | ✓ |
| CU-04 | Registrar un egreso · Asesora · Jefe | ○ | ○ | ○ no cambia estado | C: Egreso · R: CategoriaEgreso | RF-005 | HU-07 | ◐ egreso sin diagrama de comportamiento (H-03, diferido) |
| CU-05 | Editar una venta · Empleado (ventas de su turno) · Jefe | ○ | ○ | Registrada (T-05) | C: CambioVenta · U: Venta | RF-018 | HU-02 | ○ consulta sin cambio de estado: no requiere secuencia |
| CU-06 | Cerrar la caja · Empleado · Jefe | ✓ DAC-02, DAC-03 | ✓ DSE-03 | Turno → Cerrado (T-12); venta → Cerrada en caja | C: CierreCaja, CopiaRespaldo · U: Turno, Venta | RF-006, RF-025, RF-029, RNF-001, RNF-005 | HU-11 | ✓ |
| CU-07 | Abrir el turno · Empleado | ✓ DAC-02 | ○ | Turno → Abierto (T-09, T-13) | C: Turno · R: CierreCaja, Producto | RF-022, RF-007, RF-026, RF-030 | HU-11, HU-13 | ✓ |
| CU-08 | Buscar una venta por número de recibo · Jefe | ✓ DAC-02 | ○ | ○ no cambia estado | R: Venta, CierreCaja | RF-008 | HU-12 | ✓ |
| CU-09 | Consolidar ingresos y egresos · Asesora | ✓ DAC-02 | ○ | ○ no cambia estado | R: Venta, Egreso | RF-009 | HU-05 | ✓ |
| CU-10 | Notificar bajo stock · — (lo inicia el sistema) | ✓ DAC-02, DAC-04 | ✓ DSE-01 (opt) | P-01, P-05 (acción) | C: NotificacionBajoStock · R: Producto | RF-004 | HU-04 | ✓ |
| CU-11 | Consultar los reportes financieros · Asesora (también Jefe) | ○ | ○ | ○ no cambia estado | R: Venta, Egreso | RF-010, RF-011 | HU-06 | ○ consulta sin cambio de estado: no requiere secuencia |
| CU-12 | Consultar la rotación de productos · Jefe | ○ | ○ | ○ no cambia estado | R: Producto, LineaVenta, MovimientoInventario | RF-012 | HU-14 | ○ consulta sin cambio de estado: no requiere secuencia |
| CU-13 | Iniciar sesión · Usuario (Empleado, Jefe o Asesora) | ✓ DAC-02 | ○ | ○ no cambia estado | R: Usuario, Perfil · U: Usuario (aviso) | RF-013, RF-020, RNF-007 | HU-08 | ✓ |
| CU-14 | Dar acceso a un usuario · Jefe | ○ | ○ | ○ no cambia estado | C: Usuario · R: Perfil | RF-014, RF-020 | HU-09 | ○ consulta sin cambio de estado: no requiere secuencia |
| CU-15 | Retirar el acceso a un usuario · Jefe | ○ | ○ | ○ no cambia estado | U: Usuario | RF-014 | HU-09 | ○ consulta sin cambio de estado: no requiere secuencia |
| CU-16 | Consultar el historial de auditoría · Jefe | ○ | ○ | ○ no cambia estado | R: RegistroHistorial | RF-015, RNF-007 | HU-10 | ○ consulta sin cambio de estado: no requiere secuencia |
| CU-17 | Exportar la copia de respaldo · Jefe | ◐ DAC-03 (copia) | ✓ DSE-03 | ○ no cambia estado | U: CopiaRespaldo | RNF-005 | HU-16 (propuesta) | ◐ sin HU aprobada (HU-16 propuesta, H-02 de la Sesión 1) |
| CU-18 | Actualizar el catálogo de productos · Jefe | ○ | ○ | Producto → Activo/Inactivo (T-14 a T-16) | C, U: Producto | RF-024 (propuesto, H-01), RF-031 | HU-17 (propuesta) | ◐ RF-024 y RF-031 propuestos; sin actividad (H-04) |

## Vista B · Por requisito

| Req. | Enunciado | HU | CU | DAC · DSE | DES | Clases | Estado | Diagnóstico |
|---|---|---|---|---|---|---|---|---|
| RF-001 | Registrar la venta como orden independiente | HU-01 | CU-01 | ✓ | ✓ | Venta, LineaVenta | Ver matriz 08 | ✓ |
| RF-002 | Anular una venta con constancia | HU-02 | CU-02 | ○ | ✓ | Venta, CambioVenta | Ver matriz 08 | ✓ |
| RF-003 | Actualizar el stock con cada venta o movimiento | HU-03 | CU-03, CU-01 | ✓ | ✓ | Producto, MovimientoInventario | Ver matriz 08 | ✓ |
| RF-004 | Notificar bajo stock al jefe y a la asesora | HU-04 | CU-10 | ○ | ○ | NotificacionBajoStock | Ver matriz 08 | ✓ |
| RF-005 | Registrar un egreso | HU-07 | CU-04 | ○ | ○ | Egreso, CategoriaEgreso | Ver matriz 08 | ✓ |
| RF-006 | Cierre de caja diario | HU-11 (nueva) | CU-06 | ✓ | ✓ | CierreCaja | Ver matriz 08 | ✓ |
| RF-007 | Inventario disponible al iniciar el turno | HU-13 (nueva) | CU-07 | ✓ | ✓ | Producto | Ver matriz 08 | ✓ |
| RF-008 | Buscar por número de recibo y comparar con el cierre | HU-12 (nueva) | CU-08 | ○ | ○ | Venta | Ver matriz 08 | ✓ |
| RF-009 | Consolidar ingresos y egresos por día, semana y mes | HU-05 | CU-09 | ○ | ○ | Venta, Egreso | Ver matriz 08 | ✓ |
| RF-010 | Reporte de estado de resultados | HU-06 (parte a) | CU-11 | ○ | ○ | Venta, Egreso | Ver matriz 08 | ✓ |
| RF-011 | Reporte de flujo de caja | HU-06 (parte b) | CU-11 | ○ | ○ | Venta, Egreso | Ver matriz 08 | ✓ |
| RF-012 | Reporte de rotación de productos | HU-14 (nueva) | CU-12 | ○ | ○ | Producto, LineaVenta | Ver matriz 08 | ✓ |
| RF-013 | Sesión propia y permisos por perfil | HU-08 | CU-13 | ○ | ○ | Usuario, Perfil | Ver matriz 08 | ✓ |
| RF-014 | Administrar usuarios y perfiles | HU-09 | CU-14, CU-15 | ○ | ○ | Usuario, Perfil | Ver matriz 08 | ✓ |
| RF-015 | Historial de auditoría de operaciones sensibles | HU-10 | CU-16 (consulta); transversal (escritura en el historial) | ○ | ○ | RegistroHistorial | Ver matriz 08 | ✓ |
| RF-016 | Registrar el canal del pedido | HU-15 (nueva) | CU-01 | ✓ | ✓ | Venta (canal) | Ver matriz 08 | ✓ |
| RF-017 | Comprobante digital en ventas por transferencia | HU-01 (s) | CU-01, CU-04 | ✓ | ✓ | ComprobantePago | Ver matriz 08 | ✓ |
| RF-018 | Editar una venta con constancia | HU-02 (s) | CU-05 | ○ | ✓ | CambioVenta | Ver matriz 08 | ✓ |
| RF-019 | Rechazar una venta incompleta | HU-01 (s) | CU-01 | ✓ | ✓ | Venta | Ver matriz 08 | ✓ |
| RF-020 | Aviso de tratamiento de datos a usuarios internos | HU-09 (s) | CU-14, CU-13 | ○ | ○ | Usuario (avisoAceptado) | Ver matriz 08 | ✓ |
| RF-021 | Historial de movimientos de inventario | HU-03 (s) | CU-03 | ✓ | ○ | MovimientoInventario | Ver matriz 08 | ✓ |
| RF-022 | Consultar el saldo de cierre al abrir el turno | HU-11 (nueva) | CU-07 | ✓ | ✓ | CierreCaja | Ver matriz 08 | ✓ |
| RF-023 | Advertir sobre stock insuficiente | HU-03 (s) | CU-01, CU-03 | ✓ | ✓ | Producto | Ver matriz 08 | ✓ |
| RNF-001 | Cierre de caja en 3 minutos o menos | HU-11 (nueva) | CU-06 | ✓ | ✓ | — (restricción transversal) | Ver matriz 08 | ✓ |
| RNF-002 | Operación sin conexión a internet | HU-01 (s) | Transversal (todos) | ○ | ○ | — (restricción transversal) | Ver matriz 08 | ✓ |
| RNF-003 | Integridad: ninguna operación queda a medias | HU-01 (s) | Transversal (CU-01 a CU-06) | ✓ | ✓ | — (restricción transversal) | Ver matriz 08 | ✓ |
| RNF-004 | Registro de una venta en pocos pasos en hora pico | HU-01 (s) | CU-01 | ✓ | ✓ | — (restricción transversal) | Ver matriz 08 | ✓ |
| RNF-005 | Copia de respaldo exportable | — (RNF transversal) | CU-17, CU-06 | ✓ | ✓ | CopiaRespaldo | Ver matriz 08 | ✓ |
| RNF-006 | Persistencia tras cerrar la aplicación o reiniciar | HU-01 (s) | Transversal (todos) | ○ | ○ | — (restricción transversal) | Ver matriz 08 | ✓ |
| RNF-007 | Control de acceso por rol y usuario en el historial | HU-08 (s), HU-10 (s) | CU-13; transversal (permisos) | ○ | ○ | Usuario, Perfil, RegistroHistorial | Ver matriz 08 | ✓ |
| RF-024 | Crear y modificar productos del catálogo (nombre, precio, umbral mínimo) | HU-17 (propuesta) | CU-18 | ○ | ○ | Producto | Propuesto | ◐ propuesto: falta aprobación del jefe (H-01) |
| RF-025 | Registrar el efectivo contado y la diferencia al cerrar la caja | HU-11 | CU-06 | ✓ | ○ | CierreCaja | Propuesto | ◐ propuesto: falta aprobación del jefe (H-01) |
| RF-026 | Registrar el efectivo contado al abrir el turno | HU-11 | CU-07 | ✓ | ○ | Turno | Propuesto | ◐ propuesto: falta aprobación del jefe (H-01) |
| RF-027 | Registrar un ajuste de stock por conteo físico con motivo | HU-03 | CU-03 | ✓ | ○ | MovimientoInventario | Propuesto | ◐ propuesto: falta aprobación del jefe (H-01) |
| RF-028 | Registrar una sola venta ante una confirmación repetida | HU-01 | CU-01 | ✓ DSE | ✓ | Venta | Propuesto | ◐ propuesto: falta aprobación del jefe (H-01) |
| RF-029 | Rechazar un segundo cierre del mismo turno | HU-11 | CU-06 | ✓ DSE | ✓ | Turno, CierreCaja | Propuesto | ◐ propuesto: falta aprobación del jefe (H-01) |
| RF-030 | Avisar al abrir el turno si el anterior quedó sin cierre | HU-11 | CU-07 | ○ | ✓ | Turno | Propuesto | ◐ propuesto: falta aprobación del jefe (H-01) |
| RF-031 | Desactivar un producto sin borrar su historial | HU-17 (propuesta) | CU-18 | ○ | ✓ | Producto | Propuesto | ◐ propuesto: falta aprobación del jefe (H-01) |

## Vista C · Por clase

| Clase | La crea | La consulta o actualiza | Requisitos | Glosario · reglas | Diagnóstico |
|---|---|---|---|---|---|
| CierreCaja | CU-06 | CU-07, CU-08 | RF-006, RF-022, RF-025, RF-029 | ✓ · RN-06, RN-07 | ✓ |
| Venta | CU-01 | CU-02, CU-05, CU-06, CU-08, CU-09, CU-11 | RF-001, 002, 016–019, 028 | ✓ · RN-01 a RN-05 | ✓ |
| LineaVenta | CU-01 | CU-12 | RF-001 | ✓ · RN-02, RN-03 | ✓ |
| Producto | CU-18 | CU-01, CU-03, CU-07, CU-12 | RF-003, 004, 007, 023, 024, 031 | ✓ · RN-03, RN-09, RN-13 | ◐ CU-18 propuesto (H-01) |
| Turno | CU-07 | CU-06, CU-01 | RF-022, 026, 030 | ✓ · RN-06, RN-14 | ✓ |
| ComprobantePago | CU-01, CU-04 | CU-08 | RF-017, RF-005 | ✓ | ✓ |
| CambioVenta | CU-02, CU-05 | CU-16 | RF-002, RF-018 | ✓ · RN-04, RN-05 | ✓ |
| MovimientoInventario | CU-03 | CU-12, CU-16 | RF-003, 021, 027 | ✓ · RN-08 | ✓ |
| NotificacionBajoStock | CU-10 | — (la leen Jefe y Asesora) | RF-004 | ✓ · RN-09 | ◐ ¿dónde la lee la asesora? (C-07) |
| Egreso | CU-04 | CU-09, CU-11 | RF-005, 009–011 | ✓ · RN-12 | ◐ sin diagrama de comportamiento (H-03) |
| CategoriaEgreso | ✗ ningún CU | CU-04 | TBD-16 | ✓ | ✗ nadie la crea ni la mantiene (H-05) |
| Usuario | CU-14 | CU-13, CU-15, CU-16 | RF-013, 014, 020 | ✓ · RN-11 | ✓ |
| Perfil | — (fijo: tres perfiles) | CU-13, CU-14 | RNF-007 | ✓ · RN-11 | ○ lista fija; no requiere CU |
| RegistroHistorial | Transversal (todo CU sensible) | CU-16 | RF-015 | ✓ · RN-10 | ✓ |
| CopiaRespaldo | CU-06 | CU-17 | RNF-005 | ✓ | ✓ |

## Vista D · Actores y estados

| Actor | DCU | Calle DAC | DSE | Diagnóstico |
|---|---|---|---|---|
| Empleado | ✓ DCU-02a, 02c | ✓ Empleada / Empleado | ✓ DSE-01, 02, 03 | ✓ |
| Jefe | ✓ DCU-02a, 02b, 02c | ✓ Jefe | ✓ DSE-01 (receptor), DSE-03 | ✓ |
| Asesora | ✓ DCU-02b, 02c | ✓ Asesora | ◐ DSE-01 (solo receptor) | ◐ sin secuencia propia: sus CU son consultas (○) |
| Usuario | ✓ DCU-02c | ○ abstracto | ○ | ✓ generalización |
| Equipo de respaldo | ✓ DCU-01, 02c | ○ no es calle | ✓ DSE-03 | ✓ |

| Estado | Evento | CU | Requisito | ¿Se registra? | Diagnóstico |
|---|---|---|---|---|---|
| En registro (venta) | agregar producto | CU-01 | RF-001 | No (no persiste) | ✓ |
| Registrada | confirmar venta | CU-01 | RF-001, RF-019 | Sí | ✓ |
| Cerrada en caja | cerrar la caja | CU-06 | RF-006 | Sí | ✓ |
| Anulada | anular venta | CU-02 | RF-002 | Sí | ✓ |
| Abierto (turno) | abrir turno | CU-07 | RF-022, RF-026 | Sí | ✓ |
| Cerrado (turno) | registrar cierre | CU-06 | RF-006, RF-025 | Sí | ✓ |
| Inactivo (producto) | desactivar producto | CU-18 | RF-031 (propuesto) | Sí | ◐ requisito propuesto |

## Hallazgos

| ID | Regla | Qué se encontró | Gravedad | Decisión | Estado |
|---|---|---|---|---|---|
| H-01 | RC-09 | RF-024 a RF-031 están en la matriz como «Propuesto», pero no en el SRS v1.0 | Media | D-01 | En decisión |
| H-02 | RC-03 | CU-02 (anular) es crítico y no tiene actividad ni secuencia | Baja | D-02 | Cerrado |
| H-03 | RC-03 | CU-04 (egreso) no aparece en ningún diagrama de comportamiento | Media | D-03 | Abierto (diferido) |
| H-04 | RC-02 | CU-18 depende de RF-024 y RF-031, ambos propuestos | Media | D-01 | En decisión |
| H-05 | RC-07 | CategoriaEgreso no la crea ningún CU (TBD-16 la deja parametrizable) | Media | D-04 | En decisión |
| H-06 | RC-06 | La v0.1 del dominio tenía Venta.estado = {abierta, pagada, anulada}, distinto de DES-01 | Alta | D-05 | Cerrado |
| H-07 | RC-08 | «Caja» se usaba para el turno y para el cierre | Media | D-06 | Cerrado |
| H-08 | RC-04 | «canal» viajaba en DSE-01 y no existía en el dominio | Baja | D-05 | Cerrado |
| H-09 | RC-01 | La Asesora no es participante propio en ninguna secuencia | Baja | D-02 | Cerrado |
| H-10 | RC-10 | La multiplicidad Turno–CierreCaja no tenía regla escrita | Media | D-05 | Cerrado |

## Decisiones y plan

| ID | Hallazgos | Opciones | Decisión y razón | Responsable | Fecha | Entregable |
|---|---|---|---|---|---|---|
| D-01 | H-01, H-04 | Completar el SRS ahora · esperar a la fase 05 | Llevar RF-024 a RF-031 al SRS como «Propuesto» en la Unidad 7, tras la validación de la fase 05 | Nicolás Bastidas Medina | 12/12/2026 | SRS v1.1 |
| D-02 | H-02, H-09 | Dibujar DSE de CU-02 · declarar «no se requiere» | No se requiere: CU-02 no tiene mensajes nuevos y su riesgo está en DES-01; la asesora solo consulta | Julián Estiven Murcia Rodriguez | 22/11/2026 | matriz v1.0 |
| D-03 | H-03 | Dibujar DAC de egresos ahora · diferir | Diferir a la Unidad 7 con un diagrama de actividad corto del egreso | Sandy Katherin Hurtado Suárez | Unidad 7 | DAC-05 |
| D-04 | H-05 | Crear CU «Definir categorías» · lista fija | Preguntar al jefe; mientras tanto lista fija (gasto de mercado, gasto diario, otros) | Nicolás Bastidas Medina | 12/12/2026 | glosario v1.1 |
| D-05 | H-06, H-08, H-10 | Completar el modelo | Corregir el dominio: estados de DES-01, atributo canal, RN-06 | Julián Estiven Murcia Rodriguez | 22/11/2026 | DCL v1.0 |
| D-06 | H-07 | Cambiar el nombre | «Turno» para el período, «CierreCaja» para el registro; «caja» solo como lugar | Sandy Katherin Hurtado Suárez | 22/11/2026 | glosario v1.0 |
