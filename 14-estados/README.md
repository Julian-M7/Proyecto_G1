# 14-estados · Unidad 5 · Sesión 4
**Diagramas de máquina de estados: ciclo de vida de la venta, el turno y el producto**
Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 4 · 22/11/2026

> Convención de esta entrega: los talleres de la Unidad 5 se hicieron como talleres internos del equipo el 22/11/2026, usando como casos y como voz de los interesados las tres entrevistas de la Unidad 3 (17 y 19/09/2026 y la del jefe). La lectura en voz alta y la confirmación de cada interesado se hacen en la validación de la fase 05 (12/12/2026, acción AM-01); hasta entonces el estado de cada modelo es «propuesto».

## 1. Objeto elegido y fronteras
- **Venta** (DES-01): el objeto con más reglas de cambio (editar, anular, cierre) y el origen del descuadre.
- **Turno** (DES-02): la caja del turno, que contiene a las ventas; explica el cierre y la apertura.
- **Producto** (DES-03): ciclo Activo/Inactivo y la región «Nivel de stock», que es una condición y no una etapa.
- Fuera: el egreso (solo «registrado»; no cambia de estado) y el usuario (activo/desactivado: se resume en la matriz de roles).

## 2. Archivos
- `vocabulario.md` · `diagramas/des-01…03` (.puml y .png) · `ficha-estados-transiciones.md` y `.docx` (9 estados, 19 transiciones) · `matriz-estado-evento-rol.md` y `.docx` · `checklist-consistencia.md` y `.docx` (6 hallazgos) · `casos-reales.md` (5 casos) · `acta-recorrido-2026-11-22.md` · `requisitos-nuevos/RF-030.md` y `RF-031.md`.
- La matriz de trazabilidad (08) agrega DES a la columna «CU (U5)».

## 3. Uso de IA
Se usó un asistente de IA (Claude, Anthropic) el 22/11/2026 para listar estados sin entrada o salida y celdas sin decidir en la matriz. Las reglas RG y las decisiones las tomó el equipo con las entrevistas; las preguntas QE quedan para el jefe.
