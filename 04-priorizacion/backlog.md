# Backlog priorizado (Unidad 3 · Sesión 4, completado en la Unidad 4)

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · 21/11/2026

> Antes este archivo estaba vacío y la prioridad de cada requisito no tenía de dónde heredarse. La prioridad MoSCoW es una **decisión de trabajo del equipo**, derivada de los criterios de éxito y del alcance del acta de constitución: *Must* = objetivo o criterio de éxito del acta; *Should* = dentro del alcance pero sin criterio medible; *Could* = deseable. *Won't* en la versión 1.0: la cola de atención por orden de llegada (NI-14). El patrocinador valida la lista en la fase 05. No se asignaron puntos de historia: la estimación se hace con planning poker del equipo en la planificación.

| HU | Historia | Rol | Meta | MoSCoW | Requisitos | Observación |
|---|---|---|---|---|---|---|
| **HU-01** | Registrar una venta | Empleado | G1.1, G1.2 | Must | RF-001, RF-017 (s), RF-019 (s), RNF-002 (s), RNF-003 (s), RNF-004 (s), RNF-006 (s) | Existente; se corrige el escenario 2 y se agrega el criterio de transferencia con comprobante. |
| **HU-02** | Anular o editar una venta con constancia | Empleado y jefe | G1.3 (ampliada) | Should | RF-002, RF-018 (s) | Existente; se agrega el criterio de edición. |
| **HU-03** | Registrar movimientos de inventario | Jefe | G2.1, G2.3 | Must | RF-003, RF-021 (s), RF-023 (s) | Existente. |
| **HU-04** | Recibir alertas de bajo stock | Jefe y asesora | G2.2 | Must | RF-004 | Existente; los escenarios pasan a umbral de 5 (stock 5, 3 y 8). |
| **HU-05** | Consolidar ingresos y egresos | Asesora | G3.1, G3.2 | Must | RF-009 | Existente. |
| **HU-06** | Ver reportes financieros | Asesora | G3.3 | Should | RF-010 (parte a), RF-011 (parte b) | Existente; se divide en HU-06a y HU-06b. |
| **HU-07** | Registrar un egreso | Asesora y jefe | G3.4 | Must | RF-005 | Existente. |
| **HU-08** | Iniciar sesión con perfil y permisos | Todos | G4.1, G4.2 | Must | RF-013, RNF-007 (s) | Existente; RNF-007 (Sesión 4) fija el control de acceso medible. |
| **HU-09** | Administrar usuarios y perfiles | Jefe | G4.3 | Must | RF-014, RF-020 (s) | Existente; sube a Must por el aviso de tratamiento de datos. |
| **HU-10** | Consultar el historial de auditoría | Jefe | G4.4 | Must | RF-015, RNF-007 (s) | Existente. |
| **HU-11** | Cerrar la caja y consultar el saldo de cierre | Empleado y jefe | G3.5 (nueva) | Must | RF-006, RF-022, RNF-001 | Nueva (D-01). «Como empleado o jefe, quiero cerrar la caja del día y consultar el saldo de cierre al abrir el turno, para verificar el efectivo sin depender de una hoja suelta.» |
| **HU-12** | Buscar una venta por número de recibo | Jefe | G3.2 | Must | RF-008 | Nueva (D-02). «Como jefe, quiero buscar una venta por su número de recibo y compararla con el cierre del día, para encontrar el origen de un descuadre.» |
| **HU-13** | Ver el inventario al iniciar el turno | Empleado | G2.1 | Should | RF-007 | Nueva (D-03). «Como empleado, quiero ver el stock disponible al abrir mi turno, para no depender de la memoria de quien recibió la mercancía.» |
| **HU-14** | Ver la rotación de productos | Jefe | G3.6 (nueva) | Could | RF-012 | Nueva (D-04). «Como jefe, quiero ver qué productos rotan más y cuáles menos, para armar combos o retirar los que no rotan.» |
| **HU-15** | Registrar el canal del pedido | Empleado | G1.4 (nueva) | Could | RF-016 | Nueva (D-05). «Como empleado, quiero registrar por qué canal llegó cada pedido, para separar mostrador, domicilio y redes.» |
| **HU-16** | Exportar la copia de respaldo | Jefe | G4.5 | Should (propuesta) | RNF-005 | Propuesta en la Unidad 5 (H-02, CU-17). «Como jefe, quiero exportar la copia de respaldo a mi equipo, para no perder los datos si el celular se daña.» |
| **HU-17** | Actualizar el catálogo de productos | Jefe | G2.1 | Must (propuesta) | RF-024, RF-031 | Propuesta en la Unidad 5 (H-01, CU-18). «Como jefe, quiero crear productos y cambiar su precio, umbral o estado, para que la venta use siempre el catálogo vigente.» |

Resumen de requisitos: 18 Must · 10 Should · 2 Could (de 30; RNF-007 se agregó en la Unidad 4, Sesión 4); historias: 10 Must, 3 Should y 2 Could (de 15).

**Unidad 5 (propuestos, pendientes de validación con el jefe en la fase 05):** RF-024 a RF-031 (4 Must y 4 Should propuestos) y las historias HU-16 (Should) y HU-17 (Must). Con ellos el conjunto pasa a 38 requisitos y 17 historias. Detalle en `08-requisitos-29148/matriz-trazabilidad.md`.

