# Registro de uso de IA en el SRS (Unidad 4 · Sesión 2)

Fechas: 19 y 21/11/2026 · Asistente: Claude (Anthropic) · Verifica el registro: Sandy Katherin Hurtado Suárez (revisora asignada)

## 1. Qué se le entregó a la IA
- La guía de la sesión (qué va en cada subsección y las ocho características), el ejemplo resuelto del PQRS y las dos plantillas.
- Del proyecto: acta, matriz poder-interés, las tres entrevistas, árbol KAOS, CU-01 a CU-04, los `.feature` y las historias HU-01 a HU-10; de la Sesión 1, la matriz de aplicabilidad.
- Instrucción de trabajo: llenar todo por completo, no inventar funciones y, donde falte un dato, suponerlo y declararlo como supuesto.

## 2. Qué produjo la IA
Los textos de las secciones 1, 2 y 3, la tabla de lectores, el glosario, el registro de necesidades, la matriz de permisos, la matriz de trazabilidad, el diagrama de contexto, la pre-auditoría con el checklist (18 hallazgos), la reescritura y el segundo pase. En la versión 1.0 se sincronizó con la Sesión 3: necesidades NI-01 a NI-18, 29 requisitos y enunciados en EARS con «deberá».

## 3. Qué es supuesto
| Tema | Supuesto adoptado | Dónde está |
|---|---|---|
| Prioridad MoSCoW | Derivada de los criterios de éxito del acta | `04-priorizacion/backlog.md` |
| Reglas del negocio (stock, umbral, saldo, duplicado, permisos, migración, dispositivo) | Decisiones de trabajo con razón | SRS, apéndice C |
| Conflictos entre fuentes | Prevalece el acta sobre las HU y los CU (operar sin conexión; solo efectivo o transferencia) | Checklist, parte 3 |
| Valores numéricos | 3 minutos y 40 ventas vienen del acta y del jefe; 5 unidades, 5 minutos y 10 egresos de prueba son supuestos | SRS, apéndice C |
| Nombre corto «SGMP» | Se usa solo dentro del documento | SRS, 1.2 |

## 4. Cómo se verificó
- Cada dato del SRS procede de un documento del repositorio citado en 1.4; cada conflicto entre fuentes cita el documento y el escenario.
- **No verificado con personas:** el glosario ni los supuestos con el jefe (fase 05) ni el segundo pase humano.

## 5. Límite
Los textos «antes» (versión 0.1) son una formalización literal de las HU, los CU y las entrevistas hecha por la misma IA que audita: los defectos encontrados son los de esas fuentes. La revisión independiente de dos integrantes complementa esta pre-auditoría.
