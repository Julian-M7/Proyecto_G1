# 15-dominio-consistencia · Unidad 5 · Sesión 5
**Modelo de dominio, glosario y matriz de consistencia: el paquete de modelos de requisitos v1.0**
Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

> Convención de esta entrega: los talleres de la Unidad 5 se hicieron como talleres internos del equipo el 22/11/2026, usando como casos y como voz de los interesados las tres entrevistas de la Unidad 3 (17 y 19/09/2026 y la del jefe). La lectura en voz alta y la confirmación de cada interesado se hacen en la validación de la fase 05 (12/12/2026, acción AM-01); hasta entonces el estado de cada modelo es «propuesto».

## 1. Qué contiene y cómo se lee el paquete

| Carpeta | Modelos | Identificadores |
|---|---|---|
| 11-modelo-casos-uso/ | Casos de uso, actores, catálogo | DCU-01, DCU-02a/b/c · CU-01 a CU-18 |
| 12-procesos-actividades/ | Procesos AS-IS y TO-BE, flujos | DAC-01 a DAC-04 |
| 13-secuencia/ | Escenarios críticos y operaciones | DSE-01 a DSE-03 · OS-01 a OS-08 |
| 14-estados/ | Ciclos de vida | DES-01 a DES-03 |
| 15-dominio-consistencia/ | Dominio, glosario, consistencia | DCL-01 a DCL-03 · RN-01 a RN-14 |

Orden de lectura: DCU-01 → catálogo → DAC-02 → DSE-01 y DSE-03 → DES-01 → DCL-01 → matriz de consistencia.

## 2. Archivos de esta carpeta
- `dominio/` DCL-01 (ventas y caja, 8 clases), DCL-02 (inventario, finanzas y acceso, 10 clases), DCL-03 (objetos del caso del descuadre)
- `depuracion-sustantivos.md` · `casos-reales.md` (5 casos)
- `glosario.md` y `.docx` (21 términos, 14 reglas) · `fichas-clase/` y `fichas-clase.docx` (CierreCaja, Venta, Producto, Turno, MovimientoInventario)
- `matriz-consistencia.md` y `.docx` (vistas A a D, 10 hallazgos, 6 decisiones) · `preguntas-abiertas.md` · `CAMBIOS.md`

## 3. Multiplicidad decidida con un interesado
Venta 1..* LineaVenta: sale de la empleada («una orden independiente con uno o más productos»); se le confirma en la fase 05.

## 4. Línea base
Tras la aprobación del PR por otro integrante, etiquetar el repositorio `modelos-req-v1.0` (`git tag modelos-req-v1.0 && git push origin modelos-req-v1.0`).

## 5. Uso de IA
Se usó un asistente de IA (Claude, Anthropic) el 22/11/2026 para extraer los nombres de los .puml y cruzarlos (vistas A a D) y para escribir los .puml del dominio. No se le delegó decidir si una ausencia es hueco o ○: cada marca la revisó el equipo. Ningún actor, caso de uso o requisito se agregó fuera del canon del proyecto.
