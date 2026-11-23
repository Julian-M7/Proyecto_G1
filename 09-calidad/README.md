# 09-calidad · Unidad 4 · Sesión 4
**ISO/IEC 25010:2023 e IEEE 1061: requisitos de calidad medibles**
Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Ingeniería de Requisitos, UPTC 2026 II, Grupo 1 · Versión 1.0 · 22/11/2026

> Esta versión reemplaza la entrega anterior de la sesión. Lo que no se pudo medir ni preguntar todavía se cierra con **supuestos de trabajo explícitos** que el patrocinador (Camilo Gutiérrez) valida en la fase 05.

## 1. Qué se hizo (en el orden de la sesión)
1. **Guía:** se extrajo el método: las nueve preguntas por característica, el procedimiento de seis pasos (preocupación → característica → escenario → métrica → umbral objetivo y mínimo con origen → método y responsable), la matriz de relevancia 0–3, las tres palancas para las tensiones y la revisión de requisitos al estilo de la cláusula 8.2 de ISO 9001.
2. **Ejemplo resuelto del PQRS:** se tomó su razonamiento (puntuar con evidencia, descartar por escrito, cubrir la adecuación funcional con los RF, un RNF «antes y después»).
3. **Evidencia:** entrevistas a la empleada (17/09/2026), a la asesora (19/09/2026) y al jefe (Unidad 3), acta de constitución, SRS v1.0 y fichas 29148.
4. **Matriz de relevancia** (`matriz-relevancia.docx` y `.md`): 9 características × 5 interesados, ranking, descartes con condición de revisión y lectura.
5. **Catálogo** (`catalogo-rnf.docx` y `.md`): 10 preocupaciones, **7 RNF** sobre 4 características, plan de medición, 3 tensiones, antes/después de RNF-001 y registro de la revisión.
6. **Se añadieron** `preocupaciones-calidad.md`, `tensiones-calidad.md` y `acta-revision-requisitos-2026-11-22.md`.

## 2. Resultado

| Elemento | Resultado |
|---|---|
| Ranking | Fiabilidad 13 · Adecuación funcional 12 · Capacidad de interacción 10 · Eficiencia de desempeño 9 · Seguridad 8 · Mantenibilidad 5 · Compatibilidad 3 · Flexibilidad 3 · Seguridad física 0 |
| Catalogadas | Fiabilidad (RNF-002, 003, 005, 006), eficiencia (RNF-001), capacidad de interacción (RNF-004), seguridad (RNF-007, **nuevo**) |
| Cubiertas de otra forma | Adecuación funcional (criterios de aceptación de los RF) y mantenibilidad (parámetros RF-004, TBD-09, TBD-16) |
| Descartadas con justificación | Compatibilidad, flexibilidad y seguridad física |
| Tensiones | Seguridad vs. interacción (PIN por turno), respaldo vs. carga operativa (copia automática al cerrar), cierre vs. integridad |
| Revisión | ARR-MP-01: 4 aprobados, 2 con cambios, 1 condicionado (RNF-004), 5 cambios solicitados (CS-01 a CS-05) |

**Efecto en las sesiones anteriores:** RNF-007 eleva el inventario a **30 requisitos (23 RF y 7 RNF)**, con 18 Must, 10 Should y 2 Could. Se actualizaron el SRS, la matriz de trazabilidad, el backlog y los README de las Sesiones 1 a 3.

## 3. Supuestos de trabajo
- Los puntajes se derivaron de la evidencia escrita en un taller interno del equipo; se leen a cada interesado en la fase 05.
- Regla de decisión adaptada a cinco interesados: total ≥ 8 o al menos un «3».
- Mínimos aceptables de RNF-001 (5 min), RNF-004 (30 s y 8 toques) y RNF-005 (7 días y 60 min) son propuesta del equipo.
- PIN por turno (tensión 1) y copia automática al cerrar (tensión 2).
- La revisión del 22/11/2026 es interna; la firma del patrocinador se obtiene en la fase 05.

## 4. Archivos

| Archivo | Contenido |
|---|---|
| `matriz-relevancia.docx` / `.md` | Plantilla de matriz diligenciada (secciones 1 a 7) |
| `catalogo-rnf.docx` / `.md` | Plantilla de catálogo diligenciada (secciones 1 a 7, 7 fichas) |
| `preocupaciones-calidad.md` | Preocupaciones textuales y su característica |
| `tensiones-calidad.md` | Las tres tensiones y su decisión |
| `acta-revision-requisitos-2026-11-22.md` | Acta ARR-MP-01 |

## 5. Cómo subirlo a GitHub
Rama `unidad4/sesion4-calidad`; commits sugeridos: (1) preocupaciones y matriz; (2) catálogo y tensiones; (3) acta y actualización de RNF-007 en 07 y 08. Pull request revisado por Sandy Katherin Hurtado Suárez y fila «Unidad 4 · Sesión 4» en `CONTRIBUCIONES.md` con el trabajo real de cada integrante.

## 6. Declaración de uso de IA
Se usó un asistente de IA (Claude, Anthropic) el 22/11/2026 para leer la guía, proponer los puntajes a partir de las citas de las entrevistas y redactar las fichas. **Verificado contra las fuentes:** cada cita y cada línea base (8–15 minutos, 20–40 ventas, sin internet). **Supuestos:** los de la sección 3. Ningún umbral sin origen declarado.
