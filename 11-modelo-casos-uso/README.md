# 11-modelo-casos-uso · Unidad 5 · Sesión 1
**Modelo de casos de uso: actores, límite del sistema, catálogo y trazabilidad**
Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 1 · 22/11/2026

> Convención de esta entrega: los talleres de la Unidad 5 se hicieron como talleres internos del equipo el 22/11/2026, usando como casos y como voz de los interesados las tres entrevistas de la Unidad 3 (17 y 19/09/2026 y la del jefe). La lectura en voz alta y la confirmación de cada interesado se hacen en la validación de la fase 05 (12/12/2026, acción AM-01); hasta entonces el estado de cada modelo es «propuesto».

## 1. Qué se hizo
1. **Guía y ejemplo resuelto:** siete pasos para encontrar casos de uso (actores, metas, backlog, lunes, tiempo y eventos, tres pruebas, origen), reglas de «include», «extend» y generalización, vistas de 12 elementos y lista de 28 preguntas.
2. **Lista larga y taller interno** (`acta-taller.md`): actores candidatos desde la matriz de poder-interés; metas desde el árbol KAOS y el backlog; v0.1 con antipatrones y su corrección.
3. **Diagramas en PlantUML** (`diagramas/`): DCU-01 contexto, DCU-02a ventas y caja, DCU-02b inventario y finanzas, DCU-02c acceso y respaldo (v1.0), más la v0.1 de DCU-02a para mostrar los hallazgos.
4. **Fichas de actor** (`actores/` y `fichas-actor.docx`): Empleado, Jefe, Asesora, Usuario (abstracto), Equipo de respaldo y el Planificador descartado.
5. **Catálogo** (`catalogo-casos-de-uso.md` y `.docx`): 18 casos de uso con origen y prioridad, trazabilidad inversa y 8 hallazgos.
6. **Lista de verificación** (`checklist-diagrama.md` y `.docx`) y registro de validación.
7. **Matriz de trazabilidad:** columna «CU (U5)» llena en `08-requisitos-29148/matriz-trazabilidad.md` y `.docx`.

## 2. Límite del sistema y decisiones de modelado
- Dentro: ventas, caja, inventario, egresos, reportes, usuarios, historial y respaldo en el celular del local, sin internet.
- Fuera: DIAN, WhatsApp, datáfono, clientes, cola de atención (Won't) y consumo por receta.
- Decisiones D-01 a D-04 del acta del taller.

## 3. Preguntas abiertas

| ID | Pregunta | Responsable | Fecha |
|---|---|---|---|
| PA-U5-01 | ¿La empleada puede anular ventas de otro turno? | Nicolás Bastidas Medina con el jefe | 12/12/2026 |
| PA-U5-02 | ¿Hace falta un recordatorio automático de la copia semanal? | Julián Estiven Murcia Rodriguez con el jefe | 12/12/2026 |

## 4. Requisitos que nacieron aquí
- **RF-024** Crear y modificar productos del catálogo (H-01) · **HU-16** Exportar la copia de respaldo (H-02) · **HU-17** Actualizar el catálogo (H-01). Todos «Propuesto».

## 5. Cómo regenerar las imágenes
`java -jar plantuml.jar -tpng diagramas/*.puml` (los .puml no llevan estilo; se probaron con PlantUML 1.2019.06).

## 6. Uso de IA
Se usó un asistente de IA (Claude, Anthropic) el 22/11/2026 para proponer la lista larga a partir del backlog, escribir los .puml y aplicar la lista de verificación como segundo revisor. Se verificó a mano cada nombre contra el glosario v2 y cada origen contra la matriz de trazabilidad. Las citas de las fichas son de las entrevistas de la Unidad 3.
