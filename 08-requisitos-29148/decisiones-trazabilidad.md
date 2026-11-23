# Registro de decisiones de trazabilidad

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · 21/11/2026

> **Cómo se tomaron:** el equipo adoptó cada decisión como **supuesto de trabajo** el 21/11/2026, eligiendo entre las opciones de la guía y justificándola con los documentos del repositorio. El patrocinador (Camilo Gutiérrez) las valida en la fase 05; si cambia alguna, se actualizan la matriz, la ficha y el backlog en el mismo pull request.

## Huérfanos y huecos de la matriz

### D-00 · Se omite el SyRS

- **Opciones consideradas:** Producir el SyRS · omitirlo con razón escrita.
- **Decisión y razón:** Se omite: el proyecto es solo software sobre un celular que ya existe, sin hardware nuevo ni integración (acta, sección 2). Lo que el SyRS habría contenido se trasladó al SRS: interfaz con el celular y con el respaldo a «interfaces externas» (3.1) y las responsabilidades de las personas a «restricciones» (2.4) y «suposiciones» (2.5). Misma decisión que la adaptación 1 de la matriz de la Sesión 1.
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** Sin SyRS; SRS v1.0 con esa información.

### D-01 · RF-006 y RF-022 sin historia (NI-05, NI-06)

- **Opciones consideradas:** Crear historia · justificar por la meta G3.1 y reforzar HU-05 · eliminar.
- **Decisión y razón:** Crear la historia HU-11 (backlog.md): «Como empleado o jefe, quiero cerrar la caja del día y consultar el saldo de cierre al abrir el turno, para verificar el efectivo sin depender de una hoja suelta». Se descarta justificar por G3.1: calcula totales periódicos y no cubre el saldo que consulta el turno siguiente. Se crea la meta G3.5 «Registrar el cierre de caja y su saldo».
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** RF-006, RF-022 y RNF-001 → HU-11; NI-05 y NI-06 cubiertas; árbol KAOS con G3.5.

### D-02 · RF-008 sin historia (NI-04)

- **Opciones consideradas:** Crear historia · justificar por la meta G3.2 · eliminar.
- **Decisión y razón:** Crear la historia HU-12: «Como jefe, quiero buscar una venta por su número de recibo y compararla con el cierre del día, para encontrar el origen de un descuadre». Tiene actor propio y un criterio de éxito del acta (origen de un descuadre simulado en menos de 5 minutos).
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** RF-008 → HU-12 (Must).

### D-03 · RF-007 sin historia (NI-07)

- **Opciones consideradas:** Crear historia · justificar por G2.1 y reforzar HU-03 · eliminar.
- **Decisión y razón:** Crear la historia HU-13 (consulta del inventario disponible al iniciar el turno). Se descarta reforzar HU-03: allí el actor es el jefe y aquí es el empleado que llega a un turno sin datos.
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** RF-007 → HU-13 (Should).

### D-04 · RF-012 sin meta ni historia (NI-09)

- **Opciones consideradas:** Crear meta e historia · degradar NI-09 · eliminar.
- **Decisión y razón:** Crear la meta G3.6 «Conocer la rotación de los productos» y la historia HU-14 en categoría Could. No se justifica por G3.3 porque esa meta habla del estado financiero.
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** RF-012 → HU-14 (Could); árbol KAOS con G3.6.

### D-05 · RF-016 sin meta ni historia; no singular (NI-14)

- **Opciones consideradas:** Crear meta e historia · justificar por el alcance del acta · degradar NI-14.
- **Decisión y razón:** Dividir RF-016: queda solo «registrar el canal del pedido» (el acta lo incluye en el alcance), con la meta G1.4 y la historia HU-15 en categoría Could; la cola por orden de llegada queda fuera de la versión 1.0 (categoría Won't de esta entrega).
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** RF-016 singular con HU-15; NI-14 cubierta en parte.

### D-06 · RF-017 sin historia (NI-16)

- **Opciones consideradas:** Crear historia · justificar por G1.2 · eliminar.
- **Decisión y razón:** Justificar por la meta G1.2 y por NI-16 como requisito de soporte de HU-01: mismo actor (el empleado), misma pantalla (la venta) y mismo valor. Se agrega a HU-01 un criterio para la venta por transferencia con comprobante.
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** RF-017 → HU-01 (s).

### D-07 · RF-018 sin historia ni meta que lo cubra (NI-03)

- **Opciones consideradas:** Ampliar G1.3 y reforzar HU-02 · crear historia · eliminar.
- **Decisión y razón:** Ampliar G1.3 a «anulación o edición controlada» y agregar a HU-02 un criterio de edición con constancia: el acta incluye «edición o anulación que deje constancia» y el jefe lo pidió.
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** RF-018 → HU-02 (s); G1.3 ampliada.

### D-08 · RNF-005 sin NI

- **Opciones consideradas:** Buscar la fuente · eliminar.
- **Decisión y razón:** Se encontró una fuente documental: la estrategia de riesgo del acta (sección 6). Se formula la necesidad NI-18 y se crea la meta G4.5 «Proteger la información con una copia de respaldo»; el jefe la valida en la fase 05, y si no la respalda, RNF-005 se retira (su identificador no se reutiliza).
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** RNF-005 → NI-18, G4.5.

### D-09 · NI-17 con cobertura débil

- **Opciones consideradas:** Crear requisito · reforzar con uno existente · degradar.
- **Decisión y razón:** Una obligación legal no se degrada: se crea RF-020, «aviso de tratamiento de datos a usuarios internos» (al crear un usuario, el sistema muestra la política de tratamiento y registra la aceptación). Es un supuesto de diseño: su suficiencia legal la confirma quien asesore al negocio; este documento no afirma qué exige la ley.
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** RF-020 con HU-09 (s); NI-17 cubierta.

### D-10 · NI-15 sin requisito

- **Opciones consideradas:** Crear requisito · degradar · dejar fuera del SRS.
- **Decisión y razón:** Dejar fuera del SRS: justificar el costo y el ahorro de tiempo es una condición de la propuesta, no una función del producto. El ahorro se expresa en RNF-001 (cierre en 3 minutos o menos).
- **Quién la tomó y quién la valida:** Equipo de análisis (supuesto de trabajo); el patrocinador lo valida en la fase 05
- **Fecha:** 21/11/2026
- **Efecto en la matriz y en el backlog:** NI-15 queda trazada a la propuesta.

## Preguntas abiertas y supuesto adoptado

| ID | Pregunta | Supuesto adoptado | Quién lo valida | Relacionada con |
|---|---|---|---|---|
| **P-01** | ¿Qué debe hacer el sistema con los datos personales de los usuarios internos? | Al crear un usuario, el sistema muestra la política de tratamiento de datos del negocio y registra la fecha y hora de aceptación (RF-020). La política la redacta el jefe con quien lo asesore legalmente. | Camilo Gutiérrez, con su asesoría legal, en la fase 05 | H3-14 · RF-020 |
| **P-02** | ¿Quién recibe la alerta de bajo stock? | El jefe y la asesora (ambos): NI-08 es de la asesora y HU-04 es del jefe. | Camilo Gutiérrez, en la validación (fase 05) | H3-06 · RF-004 |
| **P-03** | ¿El inventario se controla por producto terminado, por insumo o por ambos? | Se controla por producto; los insumos se registran como productos no vendibles y su consumo se descuenta con movimientos de salida manuales. El consumo automático por receta queda fuera de la versión 1.0. | Camilo Gutiérrez, en la validación (fase 05) | H3-05, H3-07 · RF-003 |
| **P-04** | ¿Se permite anular una venta después del cierre del día? | Sí, con un registro compensatorio en el día en que se anula; el cierre ya registrado no se modifica. | Camilo Gutiérrez, en la validación (fase 05) | H3-01 · RF-002, RF-006 |
| **P-05** | ¿El «número de comprobante» del jefe es el «número de recibo»? | Sí: se usa «número de recibo» para el identificador de la venta y «comprobante de pago» para la constancia de una transferencia. | Camilo Gutiérrez, en la validación (fase 05) | H3-04 · RF-001 |
| **P-06** | ¿Por dónde sale la copia de respaldo del celular sin internet? | El sistema exporta un archivo único que el jefe copia por cable USB a otro equipo; el espacio libre del celular se comprueba en la prueba de validación. | Camilo Gutiérrez, en la validación (fase 05) | H3-08 · RNF-005 |
| **P-07** | ¿El jefe necesita una copia de respaldo exportable? | Sí: lo propone la estrategia de riesgo del acta (sección 6); se formula como NI-18. | Camilo Gutiérrez, en la validación (fase 05) | H3-12 · RNF-005 |
| **P-08** | ¿Cuál es la hora pico y cuánto debe tardar una venta en ese momento? | Hora pico desde las 6 p. m. (dato de la empleada); una venta de hasta 3 productos se registra en 20 segundos o menos y con 6 toques o menos (RNF-004). | Camilo Gutiérrez, en la validación (fase 05) | H3-12 · RNF-004 |

Si el jefe (o, en P-01, quien lo asesore legalmente) responde algo distinto en la fase 05, el supuesto cambia y se registra en esta tabla.

