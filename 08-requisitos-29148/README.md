# 08-requisitos-29148 · Unidad 4 · Sesión 3
**ISO/IEC/IEEE 29148:2018: requisitos bien formados y su trazabilidad**
Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Ingeniería de Requisitos, UPTC 2026 II, Grupo 1 · Versión 1.0 · 21/11/2026

> **Cómo leer este entregable:** todo lo que antes quedaba abierto (reglas del negocio, valores, destinatarios, huérfanos de la matriz) se cerró con una **decisión de trabajo explícita** del equipo, justificada con los documentos del repositorio y registrada en `decisiones-trazabilidad.md` y en el apéndice C del SRS. Lo marcado con asterisco (Sí\*) en el checklist depende de uno de esos supuestos. El patrocinador (Camilo Gutiérrez) los valida en la fase 05; si cambia alguno, se actualizan ficha, matriz y backlog en el mismo pull request.

## 1. Qué se hizo (en el orden de la sesión)
1. **Guía:** se leyó `ingenieria_requisitos_guia_sesion_03.docx` para extraer el método: StRS → SyRS → SRS, nueve características del requisito y cinco del conjunto, atributos de la ficha, árbol de decisión del método de verificación y matriz de trazabilidad bidireccional.
2. **Ejemplo resuelto del PQRS:** se copió el recorrido, no el contenido.
3. **Insumos del proyecto:** acta, matriz poder-interés, tres entrevistas, árbol KAOS, HU-01 a HU-10, CU-01 a CU-04, los `.feature`, el SRS y la matriz de aplicabilidad de la Sesión 1.
4. **Actividad 1:** extracto del StRS con **18 necesidades (NI-01 a NI-18)** y **seis fichas**: RF-001, RF-003, RF-004, RF-006, RNF-001 y RNF-002 (cuatro funcionales y dos no funcionales; RF-006 no venía de ninguna historia).
5. **Actividad 2:** matriz de trazabilidad con **una fila por cada uno de los 30 requisitos** (23 funcionales y 7 no funcionales; RNF-007 viene de la Sesión 4), tabla de cobertura de las 18 NI y 11 decisiones (D-00 a D-10).
6. **Actividad 3:** checklist con las partes A (6 fichas × 9 pruebas), B (5 características del conjunto, con barrido por pares de 7 entidades) y C (14 hallazgos).
7. **Se completaron los documentos de los que dependía la trazabilidad:** `04-priorizacion/backlog.md` (estaba vacío), `correcciones-fuentes.md` (cambios a HU, CU, KAOS y entrevistas), `cu-04/CU-04-registrar-egreso.feature` (faltaba), `glosario.md` v2 y `ia-borrador-registro.md`.

## 2. Resultado

| Elemento | Resultado |
|---|---|
| Necesidades (StRS) | 18 (NI-01 a NI-18), cada una con fuente verificable; NI-17 sale de la Ley 1581 y NI-18 de la estrategia de riesgo del acta |
| Requisitos | 30: 23 funcionales y 7 no funcionales (RNF-007 se agregó en la Sesión 4, `09-calidad/`) (el SRS v0.2 tenía 23; 6 nacieron al dividir enunciados que no eran singulares —RF-019, RF-021, RF-022, RF-023 y RNF-006— o por la decisión D-09 —RF-020—) |
| Prioridad (backlog.md) | 18 Must, 10 Should, 2 Could; fuera de la versión 1.0: la cola de atención (NI-14) |
| Huérfanos | 9 sin historia y 1 sin necesidad **antes**; **0 después** de las decisiones D-01 a D-09 |
| NI sin requisito | NI-15 (costo de la propuesta): fuera del SRS por D-10 |
| Hallazgos del checklist | 14 (H3-01 a H3-14), todos con corrección adoptada |
| Historias | HU-01 a HU-15 (5 nuevas: HU-11 a HU-15) |

### Hallazgos más importantes y cómo se cerraron
- **H3-01** Anular una venta después del cierre dejaba el saldo registrado descuadrado → se permite con **registro compensatorio** en el día en que se anula (P-04).
- **H3-04** «Comprobante» significaba dos cosas → «número de recibo» (identificador de la venta, formato AAAAMMDD-NNN) y «comprobante de pago» (constancia de transferencia).
- **H3-06** La alerta de bajo stock iba solo al jefe aunque la necesidad es de la asesora → llega a **ambos** (P-02).
- **H3-07** Se descontaba stock «por producto» pero se hablaba de insumos → control por producto; los insumos son productos no vendibles con salidas manuales (P-03).
- **H3-08** Almacenamiento y respaldo en un celular sin internet → el respaldo es un archivo que el jefe copia por USB (P-06); el almacenamiento se mide en la prueba de validación.
- **H3-10 / H3-11** Los enunciados usaban «debe» sin EARS y mezclaban capacidades → seis fichas en EARS con «deberá» y requisitos partidos.

## 3. Supuestos de trabajo (lo que el equipo decidió sin poder preguntarle todavía al jefe)
Cada supuesto está en `decisiones-trazabilidad.md` (D-00 a D-10 y P-01 a P-08) y en el apéndice C del SRS (TBD-01 a TBD-17). Los más importantes: stock negativo → advertir y permitir; umbral inicial de 5 unidades por producto; saldo del día = ventas no anuladas − egresos, más el saldo en efectivo; duplicado de egreso = 5 minutos; permiso de anular = empleado (sus ventas del turno) y jefe; ningún dato histórico se migra; celular Android; respaldo por archivo y USB; 20 segundos y 6 toques para una venta en hora pico; aviso de tratamiento de datos al crear un usuario. **Las necesidades NI-01 a NI-18 están redactadas por el equipo y no son citas textuales.**

## 4. Archivos de esta carpeta

| Archivo | Contenido |
|---|---|
| `strs-necesidades.md` | NI-01 a NI-18, escala de prioridad, metas nuevas, correspondencia N-xx → NI-xx y D-00 |
| `glosario.md` | Glosario v2 y sinónimos descartados |
| `fichas/RF-001.md` … `fichas/RNF-002.md` | Las seis fichas, una por archivo |
| `fichas-requisito-29148.docx` | Las seis fichas en la plantilla Word |
| `matriz-trazabilidad.md` y `.docx` | Matriz de 30 requisitos y cobertura por NI |
| `decisiones-trazabilidad.md` | D-00 a D-10 y supuestos P-01 a P-08 |
| `checklist-conjunto.md` y `checklist-29148.docx` | Partes A, B y C y conclusión |
| `correcciones-fuentes.md` | Cambios a HU, CU, KAOS y entrevistas |
| `cu-04/CU-04-registrar-egreso.feature` | Escenarios de aceptación de CU-04 (copiar a `03-especificacion/aceptacion/`) |
| `ia-borrador-registro.md` | Qué se le entregó a la IA y qué se verificó |
| `../04-priorizacion/backlog.md` | Backlog HU-01 a HU-15 con MoSCoW |

## 5. Cómo subirlo a GitHub
1. Rama propia, por ejemplo `unidad4/sesion3-requisitos`.
2. Copiar `08-requisitos-29148/` y `04-priorizacion/backlog.md`; copiar `cu-04/CU-04-registrar-egreso.feature` a `03-especificacion/aceptacion/`.
3. Aplicar `correcciones-fuentes.md` a las HU, CU, KAOS y entrevistas en commits separados.
4. Pull request revisado por Sandy Katherin Hurtado Suárez (revisora asignada) y moderado por Nicolás Bastidas Medina; una fila «Unidad 4 · Sesión 3» en `CONTRIBUCIONES.md` con el trabajo real de cada integrante.
5. Verificación mecánica de la guía: `grep -oh "R[N]*F-[0-9]\{3\}" fichas/*.md | sort -u` frente a la columna «Req.» de la matriz.

## 6. Observaciones
- **Nombre:** el acta y la matriz poder-interés escriben «Julián **Estiven** Murcia Rodriguez»; esta carpeta y las de las Sesiones 1 y 2 usan esa grafía.
- **Fecha de la entrevista a la asesora:** el documento dice «Viernes 19 de septiembre de 2026» y fue sábado (corrección en `correcciones-fuentes.md`).
- **29148 cita ediciones anteriores:** el texto público de la norma remite a ISO/IEC/IEEE 15288:2015 y 12207:2017, hoy sustituidas por 15288:2023 y 12207:2026.
- **Validación con el patrocinador:** la fase 05 es donde Camilo Gutiérrez, la empleada y la asesora confirman las frases de las NI y los supuestos; las fichas pasan de «Propuesto» a «Aprobado» con esa confirmación.

## 7. Declaración de uso de IA
Se usó un asistente de IA (Claude, Anthropic) el 20 y 21/11/2026 para leer la guía, el ejemplo y los documentos de las unidades 3 y 4; redactar las necesidades, las fichas, la matriz, el glosario, el backlog, las correcciones y el checklist; tomar las decisiones de trabajo y aplicar el checklist como pre-auditoría. **Verificado contra las fuentes:** cada NI, meta e historia citada existe en el repositorio; los valores (3 minutos, 40 ventas, 20 a 40 ventas diarias, 8 a 15 minutos, $50.000) vienen del acta y de las entrevistas; los títulos y definiciones de 29148 citados vienen de la vista previa pública del estándar. **Supuestos, no verificados con los interesados:** todo lo listado en la sección 3. Detalle en `ia-borrador-registro.md`.
