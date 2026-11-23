# Matriz de trazabilidad NI → meta → historia → requisito → verificación

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Versión **1.0 (después de las decisiones D-00 a D-10)** · 21/11/2026 · Revisora asignada: Sandy Katherin Hurtado Suárez (por pull request).

> Fuente única de la traza: **30 requisitos** (23 funcionales y 7 no funcionales; RNF-007 se agregó en la Sesión 4) y 18 necesidades. Cada NI, meta e historia se puede abrir en 01-kickoff, 02-elicitacion, 03-especificacion o 04-priorizacion/backlog.md. «(s)» = relación de soporte; «(nueva)» = meta o historia creada por una decisión de este documento. La prioridad MoSCoW es la del backlog.md, derivada de los criterios de éxito del acta (supuesto de trabajo). La columna CU (U5) se completó en la Unidad 5 con el caso de uso y, entre paréntesis, los diagramas de secuencia (DSE) y de estados (DES) donde aparece; la columna Pantalla se completa en la Unidad 6. La Unidad 5 agregó RF-024 a RF-031 en estado «Propuesto» (38 requisitos: 31 RF y 7 RNF).

Códigos de verificación: CP = caso de prueba · IN = acta de inspección · AN = informe de análisis · DE = registro de demostración (los casos se escriben en la Unidad 7; aquí se reserva el identificador).

## 1. Matriz principal

| Req. | Enunciado corto | NI | Meta (G) | HU | Prioridad | Método · evidencia | CU (U5) | Pantalla (U6) | Estado | Observación |
|---|---|---|---|---|---|---|---|---|---|---|
| **RF-001** | Registrar la venta como orden independiente | NI-01, NI-02, NI-16 | G1.1, G1.2 | HU-01 | Must | Prueba · CP-001 | CU-01 (DSE-01, DSE-02 · DES-01) | Unidad 6 | Propuesto | Corrige HU-01, escenario 2: la venta se guarda en el dispositivo, no se cancela. |
| **RF-002** | Anular una venta con constancia | NI-03, NI-04 | G1.3 | HU-02 | Should | Prueba · CP-002 | CU-02 (DES-01) | Unidad 6 | Propuesto (ficha en la Unidad 7) | Anulación posterior al cierre: registro compensatorio (P-04). |
| **RF-003** | Actualizar el stock con cada venta o movimiento | NI-02, NI-07, NI-08 | G2.1 | HU-03 | Must | Prueba · CP-003 | CU-03, CU-01 (DSE-02 · DES-03) | Unidad 6 | Propuesto | Un solo concepto: producto (P-03). |
| **RF-004** | Notificar bajo stock al jefe y a la asesora | NI-08 | G2.2 | HU-04 | Must | Prueba · CP-004 | CU-10 (DSE-01 · DES-03) | Unidad 6 | Propuesto | Destinatarios: jefe y asesora (P-02). Umbral inicial de 5 unidades (TBD-05). |
| **RF-005** | Registrar un egreso | NI-10, NI-02 | G3.4 | HU-07 | Must | Prueba · CP-005 | CU-04 | Unidad 6 | Propuesto (ficha en la Unidad 7) | Posible duplicado: 5 minutos (TBD-06). |
| **RF-006** | Cierre de caja diario | NI-06 | G3.5 (nueva) | HU-11 (nueva) | Must | Prueba · CP-006 | CU-06 (DSE-03 · DES-02) | Unidad 6 | Propuesto | Saldo total y saldo en efectivo (TBD-07). Antes huérfano (D-01). |
| **RF-007** | Inventario disponible al iniciar el turno | NI-07 | G2.1 | HU-13 (nueva) | Should | Prueba · CP-007 | CU-07 | Unidad 6 | Propuesto (ficha en la Unidad 7) | Antes huérfano (D-03). |
| **RF-008** | Buscar por número de recibo y comparar con el cierre | NI-04 | G3.2 | HU-12 (nueva) | Must | Prueba · CP-008 | CU-08 | Unidad 6 | Propuesto (ficha en la Unidad 7) | Criterio de éxito 4 del acta. Antes huérfano (D-02). |
| **RF-009** | Consolidar ingresos y egresos por día, semana y mes | NI-10, NI-06 | G3.1 | HU-05 | Must | Prueba · CP-009 | CU-09 | Unidad 6 | Propuesto (ficha en la Unidad 7) | — |
| **RF-010** | Reporte de estado de resultados | NI-11 | G3.3 | HU-06 (parte a) | Should | Prueba · CP-010 | CU-11 | Unidad 6 | Propuesto (ficha en la Unidad 7) | HU-06 se divide en dos partes (a y b), cada una con su requisito. |
| **RF-011** | Reporte de flujo de caja | NI-11 | G3.3 | HU-06 (parte b) | Should | Prueba · CP-011 | CU-11 | Unidad 6 | Propuesto (ficha en la Unidad 7) | — |
| **RF-012** | Reporte de rotación de productos | NI-09 | G3.6 (nueva) | HU-14 (nueva) | Could | Prueba · CP-012 | CU-12 | Unidad 6 | Propuesto (ficha en la Unidad 7) | Antes huérfano de meta y de historia (D-04). |
| **RF-013** | Sesión propia y permisos por perfil | NI-13, NI-17 | G4.1, G4.2 | HU-08 | Must | Prueba · CP-013 | CU-13 | Unidad 6 | Propuesto (ficha en la Unidad 7) | Matriz de permisos en el apéndice B del SRS (TBD-13). |
| **RF-014** | Administrar usuarios y perfiles | NI-13 | G4.3 | HU-09 | Should | Prueba · CP-014 | CU-14, CU-15 | Unidad 6 | Propuesto (ficha en la Unidad 7) | — |
| **RF-015** | Historial de auditoría de operaciones sensibles | NI-04, NI-17 | G4.4 | HU-10 | Must | Prueba · CP-015 | CU-16 (consulta); transversal (escritura en el historial) | Unidad 6 | Propuesto (ficha en la Unidad 7) | Frontera con RF-021 definida (H3-02). |
| **RF-016** | Registrar el canal del pedido | NI-14 | G1.4 (nueva) | HU-15 (nueva) | Could | Prueba · CP-016 | CU-01 | Unidad 6 | Propuesto (ficha en la Unidad 7) | Solo el canal; la cola por orden de llegada queda fuera de la versión 1.0 (D-05). |
| **RF-017** | Comprobante digital en ventas por transferencia | NI-16 | G1.2 | HU-01 (s) | Should | Prueba · CP-017 | CU-01, CU-04 (DSE-01) | Unidad 6 | Propuesto (ficha en la Unidad 7) | Antes huérfano (D-06). |
| **RF-018** | Editar una venta con constancia | NI-03 | G1.3 (ampliada) | HU-02 (s) | Should | Prueba · CP-018 | CU-05 (DES-01) | Unidad 6 | Propuesto (ficha en la Unidad 7) | Antes huérfano (D-07). |
| **RF-019** | Rechazar una venta incompleta | NI-02, NI-16 | G1.2 | HU-01 (s) | Must | Prueba · CP-019 | CU-01 (DSE-01) | Unidad 6 | Propuesto | Nuevo: división de RF-001 (H3-11). |
| **RF-020** | Aviso de tratamiento de datos a usuarios internos | NI-17 | G4.1 | HU-09 (s) | Must | Demostración · DE-020 | CU-14, CU-13 | Unidad 6 | Propuesto (ficha en la Unidad 7) | Nuevo (D-09). Redacción supuesta (P-01). |
| **RF-021** | Historial de movimientos de inventario | NI-02 | G2.3 | HU-03 (s) | Must | Prueba · CP-021 | CU-03 | Unidad 6 | Propuesto (ficha en la Unidad 7) | Nuevo: división de RF-003 (H3-11). |
| **RF-022** | Consultar el saldo de cierre al abrir el turno | NI-05 | G3.5 (nueva) | HU-11 (nueva) | Must | Prueba · CP-022 | CU-07 (DES-02) | Unidad 6 | Propuesto (ficha en la Unidad 7) | Nuevo: división de RF-006 (H3-11). |
| **RF-023** | Advertir sobre stock insuficiente | NI-07, NI-08 | G2.1 | HU-03 (s) | Should | Prueba · CP-023 | CU-01, CU-03 (DSE-01 · DES-03) | Unidad 6 | Propuesto (ficha en la Unidad 7) | Nuevo: regla extraída de RF-003 (TBD-03). |
| **RF-024** | Crear y modificar productos del catálogo (nombre, precio, umbral mínimo) | NI-13, NI-07 | G2.1 | HU-17 (propuesta) | Must (propuesta) | Prueba · CP-024 | CU-18 (DES-03) | Unidad 6 | Propuesto (U5) | Nuevo en la Unidad 5, Sesión 1 (H-01); lo valida el jefe en la fase 05. |
| **RF-025** | Registrar el efectivo contado y la diferencia al cerrar la caja | NI-04, NI-06 | G3.5 | HU-11 | Must (propuesta) | Prueba · CP-025 | CU-06 (DSE-03 · DES-02) | Unidad 6 | Propuesto (U5) | Nuevo en la Unidad 5, Sesión 2 (B-04); lo valida el jefe en la fase 05. |
| **RF-026** | Registrar el efectivo contado al abrir el turno | NI-05 | G3.5 | HU-11 | Should (propuesta) | Prueba · CP-026 | CU-07 (DES-02) | Unidad 6 | Propuesto (U5) | Nuevo en la Unidad 5, Sesión 2 (B-06); lo valida el jefe en la fase 05. |
| **RF-027** | Registrar un ajuste de stock por conteo físico con motivo | NI-07, NI-02 | G2.3 | HU-03 | Should (propuesta) | Prueba · CP-027 | CU-03 (DES-03) | Unidad 6 | Propuesto (U5) | Nuevo en la Unidad 5, Sesión 2 (B-08); lo valida el jefe en la fase 05. |
| **RF-028** | Registrar una sola venta ante una confirmación repetida | NI-02, NI-04 | G1.2 | HU-01 | Must (propuesta) | Prueba · CP-028 | CU-01 (DSE-01) | Unidad 6 | Propuesto (U5) | Nuevo en la Unidad 5, Sesión 3 (R-03); lo valida el jefe en la fase 05. |
| **RF-029** | Rechazar un segundo cierre del mismo turno | NI-06, NI-04 | G3.5 | HU-11 | Must (propuesta) | Prueba · CP-029 | CU-06 (DSE-03 · DES-02) | Unidad 6 | Propuesto (U5) | Nuevo en la Unidad 5, Sesión 3 (R-05); lo valida el jefe en la fase 05. |
| **RF-030** | Avisar al abrir el turno si el anterior quedó sin cierre | NI-05, NI-06 | G3.5 | HU-11 | Should (propuesta) | Prueba · CP-030 | CU-07 (DES-02) | Unidad 6 | Propuesto (U5) | Nuevo en la Unidad 5, Sesión 4 (RV-03); lo valida el jefe en la fase 05. |
| **RF-031** | Desactivar un producto sin borrar su historial | NI-13, NI-09 | G2.1 | HU-17 (propuesta) | Should (propuesta) | Prueba · CP-031 | CU-18 (DES-03) | Unidad 6 | Propuesto (U5) | Nuevo en la Unidad 5, Sesión 4 (RV-05); lo valida el jefe en la fase 05. |
| **RNF-001** | Cierre de caja en 3 minutos o menos | NI-06 | G3.5 (nueva) | HU-11 (nueva) | Must | Prueba (cronometrada) · CP-101 | CU-06 (DSE-03) | Unidad 6 | Aprobado (ARR-MP-01; ficha en 09-calidad) | Califica a RF-006. Jornada de prueba de 40 ventas y 10 egresos (TBD-08). |
| **RNF-002** | Operación sin conexión a internet | NI-12 | G1.1 (OB-1) | HU-01 (s) | Must | Prueba · CP-102 | Transversal (todos) | Unidad 6 | Aprobado (ARR-MP-01; ficha en 09-calidad) | Productos nuevos se crean sin conexión (TBD-09). |
| **RNF-003** | Integridad: ninguna operación queda a medias | NI-12 | G1.1 | HU-01 (s) | Must | Prueba · CP-104 | Transversal (CU-01 a CU-06) (DSE-02) | Unidad 6 | Aprobado (ARR-MP-01; ficha en 09-calidad) | Origen: criterio de éxito 6 del acta. |
| **RNF-004** | Registro de una venta en pocos pasos en hora pico | NI-14, NI-01 | G1.1 | HU-01 (s) | Should | Prueba · CP-105 | CU-01 (DSE-01) | Unidad 6 | Condicionado a CS-02 (ARR-MP-01; ficha en 09-calidad) | Valores supuestos: 20 segundos y 6 toques (P-08). |
| **RNF-005** | Copia de respaldo exportable | NI-18 | G4.5 (nueva) | — (RNF transversal) | Should | Demostración · DE-005 | CU-17, CU-06 (DSE-03) | Unidad 6 | Aprobado con cambios CS-03 (ARR-MP-01; ficha en 09-calidad) | Antes huérfano de NI (D-08). |
| **RNF-006** | Persistencia tras cerrar la aplicación o reiniciar | NI-12 | G1.1 (OB-1) | HU-01 (s) | Must | Prueba · CP-103 | Transversal (todos) | Unidad 6 | Aprobado (ARR-MP-01; ficha en 09-calidad) | Nuevo: división de RNF-002 (H3-11). |
| **RNF-007** | Control de acceso por rol y usuario en el historial | NI-13, NI-17, NI-04 | G4.1, G4.4 | HU-08 (s), HU-10 (s) | Must | Prueba · CP-106 | CU-13; transversal (permisos) | Unidad 6 | Aprobado con cambios (catálogo 09-calidad, ARR-MP-01) | Nuevo en la Sesión 4 (seguridad, 25010:2023): 33 casos de la matriz de permisos. |

**Prioridades:** 18 Must · 10 Should · 2 Could. Fuera de la versión 1.0 (Won't): la cola de atención por orden de llegada (NI-14, D-05).

**Huérfanos antes de las decisiones** (ya resueltos): RF-006, RF-007, RF-008, RF-012, RF-016, RF-017, RF-018, RF-020, RF-022 (sin historia) y RNF-005 (sin necesidad). Ahora todos tienen historia y necesidad (ver cada decisión).

## 2. Cobertura por necesidad (hacia adelante)

| NI | Interesado | Requisitos que la cubren | Prioridad más alta | Diagnóstico |
|---|---|---|---|---|
| **NI-01** | Empleada | RF-001, RF-019, RNF-004 | Must | Cubierta |
| **NI-02** | Empleada y jefe | RF-001, RF-003, RF-005, RF-019, RF-021 | Must | Cubierta |
| **NI-03** | Jefe | RF-002, RF-018 | Should | Cubierta (RF-018 queda cubierto por HU-02 ampliada: D-07) |
| **NI-04** | Empleada y jefe | RF-002, RF-008, RF-015, RNF-007 | Must | Cubierta (RF-008 con HU-12: D-02) |
| **NI-05** | Empleada | RF-022 | Must | Cubierta (RF-022 con HU-11: D-01) |
| **NI-06** | Jefe | RF-006, RF-009, RNF-001 | Must | Cubierta (RF-006 con HU-11: D-01) |
| **NI-07** | Empleada | RF-003, RF-007, RF-023 | Must | Cubierta (RF-007 con HU-13: D-03) |
| **NI-08** | Asesora financiera | RF-004, RF-003, RF-023 | Must | Cubierta (la alerta llega al jefe y a la asesora: P-02) |
| **NI-09** | Jefe | RF-012 | Could | Cubierta con un solo requisito de prioridad Could (D-04) |
| **NI-10** | Asesora financiera | RF-005, RF-009 | Must | Cubierta |
| **NI-11** | Asesora financiera | RF-010, RF-011 | Should | Cubierta |
| **NI-12** | Empleada | RNF-002, RNF-003, RNF-006 | Must | Cubierta solo por RNF, como corresponde |
| **NI-13** | Empleada y dueño | RF-013, RF-014, RNF-007 | Must | Cubierta |
| **NI-14** | Jefe | RF-016, RNF-004 | Could | Cubierta en parte: solo el canal; la cola queda fuera de la versión 1.0 (D-05) |
| **NI-15** | Jefe | ninguno | — | Fuera del SRS: no es un requisito del producto (D-10) |
| **NI-16** | Empleada | RF-001, RF-017, RF-019 | Must | Cubierta (RF-017 respaldado por HU-01: D-06) |
| **NI-17** | Todos | RF-013, RF-015, RF-020, RNF-007 | Must | Cubierta (RF-020 con aviso de tratamiento: D-09, P-01) |
| **NI-18** | Jefe | RNF-005 | Should | Cubierta (D-08) |

## 3. Registro de decisiones

Está en [`decisiones-trazabilidad.md`](decisiones-trazabilidad.md) (D-00 a D-10).

