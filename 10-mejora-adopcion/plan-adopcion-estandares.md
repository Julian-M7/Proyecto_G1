# Plan de adopción de estándares · MP-PAE-001 · v1.0

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 4 · Sesión 5 · 22/11/2026

| Campo | Valor |
|---|---|
| Elaborado por | Nicolás Bastidas Medina (dueño), Sandy Katherin Hurtado Suárez, Julián Estiven Murcia Rodriguez |
| Aprueban | Camilo Gutiérrez (jefe y propietario, patrocinador); visto bueno académico: Jorge Enrique Otalora Luna |
| Estado | v1.0 para la revisión entre equipos; firma del patrocinador en la fase 05 (AM-01) |
| Sustituye a | 06-estandares-mapa/declaracion-aplicacion-v1.0.md |

| Versión | Fecha | Cambio | Autor |
|---|---|---|---|
| 0.9 | 22/11/2026 | Borrador completo para la pre-revisión interna | Nicolás Bastidas |
| 1.0 | 22/11/2026 | Incorpora PR-01 a PR-04 de la pre-revisión | Equipo de análisis |
| 1.1 (prevista) | Tras la revisión entre equipos | Respuestas al otro equipo y firma del patrocinador | Nicolás Bastidas |

## 1. Propósito y alcance

Fija qué estándares usa el proyecto, para qué y con qué adaptaciones, y los convierte en reglas para la Unidad 7. Cubre elicitación, especificación, validación y gestión de requisitos (StRS, SRS, matriz y catálogo de calidad). No cubre diseño, construcción, despliegue ni pruebas. Objetivo del acta: cierre de caja en 3 minutos o menos, sin doble registro ni descuadres, en un único celular sin internet; facturación electrónica, WhatsApp y datáfono fuera de esta fase.

## 2. Estándares adoptados y adaptaciones

| Estándar y edición | Papel | Qué se toma | Adaptación y justificación | Verificado |
|---|---|---|---|---|
| **ISO/IEC/IEEE 29148:2018** | Aplica · norma principal | Características del requisito y del conjunto; atributos; métodos de verificación; niveles de necesidades (StRS) y de software (SRS). | No se elaboran SyRS, BRS ni OpsCon separados: el sistema es solo software en un celular. El StRS es un extracto (strs-necesidades.md) y la BRS se cubre con el acta (adaptación justificada en la matriz, sección 5). | 18/11/2026 · catálogo ISO (fuentes.md) |
| **ISO/IEC 25010:2023** | Aplica · catálogo de calidad | Las nueve características como lista de chequeo de los RNF y de la matriz de relevancia. | Se especifican solo las relevantes según la matriz (Sesión 4); compatibilidad, flexibilidad y seguridad física se descartan con justificación escrita. | 18/11/2026 · catálogo ISO |
| **ISO/IEC/IEEE 12207:2026** | Parcial · vocabulario de procesos | Nombres de los procesos de definición de necesidades y de requisitos; adaptación (tailoring). | Solo la fase de requisitos; construcción, despliegue y operación quedan fuera del acta. | 18/11/2026 · catálogo ISO |
| **IEEE Std 830-1998 (Superseded)** | Referencia · estructura del SRS | Esqueleto de capítulos y las ocho características como checklist del documento. | Solo estructura, sabiendo que es histórico; el contenido de cada requisito sigue 29148. | 18/11/2026 · IEEE SA |
| **IEEE Std 1061-1998 (Inactive-Reserved)** | Referencia · método de métricas | Procedimiento de seis pasos: preocupación, característica, escenario, métrica, umbral con origen, método y responsable. | Se usa el método, no se cita como norma vigente. | 18/11/2026 · IEEE SA |
| **CMMI V3.0 (ISACA, 2023) · serie ISO/IEC 33000 (33001:2015, 33020:2019) · ISO/IEC 29110-1-1:2024** | Referencia de proceso y de evaluación | Intención del área de requisitos (seis hábitos, sección 4); lógica de niveles y atributos para la autoevaluación; de 29110, repositorio único y solicitudes de cambio. | Sin evaluación formal ni conformidad declarada; autoevaluación ligera con indicadores del curso. | 18 y 21/11/2026 · ISACA, Genorma y catálogo ISO |

- **No aplica:** 15288:2023, 9126, 90003:2018. **ISO 9001:2026:** no aplica como certificación; solo la práctica de revisar los requisitos antes de comprometerse (registro: ARR-MP-01).
- **Marco legal:** Ley 1581 de 2012 y Decreto 1377 de 2013 (compilado en el 1074 de 2015); Resolución DIAN 000165 de 2023 como referencia hasta CS-04. No es asesoría legal.
- **Regla de vigencia:** ninguna edición entra a un documento sin fecha y fuente; se copia de `06-estandares-mapa/fuentes.md`.

## 3. Estructura del SRS

`07-srs-830/srs-martin-pescador-v1.0.docx` (IEEE 830 adaptado), sección 3 por característica (G1 ventas, G2 inventario, G3 finanzas, G4 accesos). Hoy: secciones 1 y 2 completas, 8 requisitos de muestra y 22 listados (30 en total). Unidad 7: los 22 restantes con la ficha de 29148 y los CU de la Unidad 5.

## 4. Reglas de redacción, atributos y trazabilidad

- **Patrón EARS** con un solo «deberá»; términos prohibidos sin métrica: rápido, fácil, amigable, seguro, oportuno, adecuado, eficiente, «etc.», «y/o».
- **Atributos obligatorios:** identificador, enunciado, justificación, fuente y propietario, prioridad (backlog), método de verificación (CP, IN, AN, DE) con criterio de aceptación, estado y trazas (NI → G → HU → CU → pantalla → prueba).
- **Identificadores:** NI, G, HU, CU, RF, RNF, TBD, P, D, H, CS; nunca se reutilizan.
- **Matriz única:** `08-requisitos-29148/matriz-trazabilidad.md`, actualizada en el mismo PR que el requisito.
- **Hábitos de la intención de RDM (CMMI):** (1) NI con dueño y fuente; (2) restricciones con origen; (3) interfaz con responsable (respaldo: el jefe); (4) «aprobado» solo con revisión de otro integrante y aceptación del interesado; (5) cambios por issue; (6) matriz en el mismo PR.

## 5. Catálogo de requisitos de calidad

Única fuente de enunciados y umbrales: `09-calidad/catalogo-rnf.md` (ARR-MP-01). Este plan solo registra el estado.

| ID | Característica | Necesidad | Estado |
|---|---|---|---|
| RNF-001 | Eficiencia de desempeño | NI-06 | Aprobado |
| RNF-002 | Fiabilidad | NI-12 | Aprobado |
| RNF-003 | Fiabilidad | NI-12, NI-04 | Aprobado |
| RNF-004 | Capacidad de interacción | NI-01, NI-14 | Condicionado a CS-02 (AM-02) |
| RNF-005 | Fiabilidad | NI-18 | Aprobado con cambios (CS-03) |
| RNF-006 | Fiabilidad | NI-12 | Aprobado |
| RNF-007 | Seguridad | NI-13, NI-17, NI-04 | Aprobado con cambios (CS-05) |

## 6. Criterios de revisión

| Qué | Instrumento | Cuándo | Quién |
|---|---|---|---|
| Cada requisito | Checklist de 29148 | En su PR | Quien revisa el PR (nunca el autor) |
| Requisitos Must | Inspección (U3-S5) | Antes de cada línea base | Moderador rotativo + interesado |
| Cada RNF | Métrica, umbral y plan (S4) | Al cambiar un umbral | Sandy Hurtado |
| SRS por versión | Checklist de 8 características (S2) | Al cerrar cada sección en la U7 | Julián Murcia |
| Conjunto antes de comprometerse | Acta firmada por el patrocinador | Fase 05 (12/12/2026) | Camilo Gutiérrez |

**Definición de «listo»:** atributos completos; checklist de 29148 sin observaciones; traza a NI y G (o decisión escrita); revisado por alguien distinto del autor; supuestos en el apéndice C con quién y cuándo.

## 7. Capacidad del proceso

Actual: **nivel 1** (realización L; gestión de la realización P; productos L; definición P; despliegue N). Objetivo: **nivel 2 al cierre de la Unidad 7**, con nueva autoevaluación contrastada por otro equipo. Condición: AM-01 a AM-04 (alta).

## 8. Calendario de revisiones

| Revisión | Momento | Qué se revisa |
|---|---|---|
| R1 | 12/12/2026 | AM-01, AM-02, AM-04; estado de RNF-004 y supuestos |
| R2 | Inicio de la Unidad 6 | Cambios del prototipo a RNF-004 o a la interfaz |
| R3 | Inicio de la Unidad 7 | Reglas, ficha y criterios |
| R4 | Cierre de la Unidad 7 | Nueva autoevaluación (objetivo nivel 2) |
| R5 | Antes de la entrega final | Coherencia con el SRS final y firma |

Extraordinaria: nueva edición de 29148 o 25010; cambio en la Ley 1581; obligación de facturar electrónicamente (CS-04); segundo dispositivo o internet en el local; cambio de patrocinador.

## 9. Responsables

| Parte | Responsable |
|---|---|
| Dueño del plan y del calendario | Nicolás Bastidas Medina |
| Ediciones y vigencia (fuentes.md) | Sandy Katherin Hurtado Suárez |
| SRS, reglas y matriz | Julián Estiven Murcia Rodriguez |
| Checklist por requisito | Quien revisa cada PR (regla de la sección 6) |
| Catálogo de calidad | Sandy Katherin Hurtado Suárez |
| Comunicación con interesados | Nicolás Bastidas Medina |
| Aprobación | Camilo Gutiérrez (patrocinador) |

Regla: ninguna fila sin nombre propio o sin regla que lo determine.

## 10. Insumos para la Unidad 7

Esqueleto del SRS, ficha y reglas EARS, matriz única (columnas CU y pantalla de las Unidades 5 y 6), estado de los RNF, definición de «listo» y criterios de revisión; acciones AM-03, AM-06 y AM-07 dentro de la unidad; autoevaluación R4 al cierre.

## 11. Aprobación

| Aprobador | Cargo | Firma y fecha |
|---|---|---|
| Camilo Gutiérrez | Jefe y propietario (patrocinador) | En la validación de la fase 05 (AM-01) |
| Nicolás Bastidas Medina | Dueño del plan, por el equipo | Al fusionar la v1.0 (22/11/2026) |
