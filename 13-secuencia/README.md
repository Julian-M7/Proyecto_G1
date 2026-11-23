# 13-secuencia · Unidad 5 · Sesión 3
**Diagramas de secuencia: escenarios críticos, operaciones del sistema y consistencia con los casos de uso**
Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 3 · 22/11/2026

> Convención de esta entrega: los talleres de la Unidad 5 se hicieron como talleres internos del equipo el 22/11/2026, usando como casos y como voz de los interesados las tres entrevistas de la Unidad 3 (17 y 19/09/2026 y la del jefe). La lectura en voz alta y la confirmación de cada interesado se hacen en la validación de la fase 05 (12/12/2026, acción AM-01); hasta entonces el estado de cada modelo es «propuesto».

## 1. Matriz de selección de escenarios

| Caso de uso | Riesgo si falla | Frecuencia | ¿Se dibuja? | Razón |
|---|---|---|---|---|
| CU-01 Registrar una venta | Alto (descuadre, RNF-003) | 20 a 40 al día | Sí: DSE-01 (nivel 1) y DSE-02 (nivel 2) | Es el corazón del sistema y concentra RNF-003 y RNF-004 |
| CU-06 Cerrar la caja (+ CU-17) | Alto (criterio de éxito 1; único externo) | Diaria | Sí: DSE-03 | Mide RNF-001 y tiene el único mensaje a un externo |
| CU-03 Registrar movimiento | Medio | Al llegar mercancía | No | Mismo patrón que DSE-02 (inventario + historial) |
| CU-02 Anular una venta | Medio | Ocasional | No | Su riesgo está en los estados (Sesión 4) |
| CU-09, CU-11, CU-12 | Bajo | Diaria/semanal | No | Son consultas sin cambio de estado |

## 2. Archivos
- `fichas/ESC-01.md`, `fichas/ESC-02.md` y `fichas-escenario.docx`
- `diagramas/dse-01…03` (.puml y .png)
- `operaciones-sistema.md` y `.docx` (8 operaciones, 1 mensaje externo, 8 huecos)
- `checklist-consistencia.md` y `.docx` (6 hallazgos)
- `acta-recorrido-2026-11-22.md`
- `requisitos-nuevos/RF-028.md` y `RF-029.md` (Propuesto)
- La columna «CU (U5)» de `08-requisitos-29148/matriz-trazabilidad.md` incluye DSE.

## 3. Uso de IA
Se usó un asistente de IA (Claude, Anthropic) el 22/11/2026 para escribir los .puml desde las fichas y listar pasos sin mensaje y fragmentos sin extensión. Los tiempos (3 minutos, 20 segundos) salen del catálogo de calidad, no de la IA; los hallazgos se verificaron contra los casos de uso.
