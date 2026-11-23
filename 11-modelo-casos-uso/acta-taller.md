# Acta del taller de modelado de casos de uso

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 1 · 22/11/2026

> Convención de esta entrega: los talleres de la Unidad 5 se hicieron como talleres internos del equipo el 22/11/2026, usando como casos y como voz de los interesados las tres entrevistas de la Unidad 3 (17 y 19/09/2026 y la del jefe). La lectura en voz alta y la confirmación de cada interesado se hacen en la validación de la fase 05 (12/12/2026, acción AM-01); hasta entonces el estado de cada modelo es «propuesto».

| Campo | Valor |
|---|---|
| Fecha, hora y modalidad | 22/11/2026 · 2:00 a 3:30 p. m. · virtual (equipo de análisis) |
| Roles | Facilitador: Nicolás Bastidas Medina · Dibujante: Julián Estiven Murcia Rodriguez · Relatora: Sandy Katherin Hurtado Suárez · Guardián del límite: Nicolás Bastidas Medina |
| Insumos | Árbol KAOS, backlog (HU-01 a HU-15), glosario v2, las tres entrevistas como voz de cada interesado |
| Objetivo | Obtener actores, casos de uso y límite del sistema; dibujar la v0.1 y leerla en voz alta |

## Lo que pasó (guion de 90 minutos)

1. **Apertura (0–10):** límite provisional: «lo que pasa en el celular del local». Al parqueadero: DIAN, WhatsApp, datáfono, recetas.
2. **Actores (10–25):** empleada, jefe, asesora, clientes, el celular, la base de datos, el cuaderno. Se descartan clientes (no usan el sistema), el celular (es el medio) y la base de datos (componente interno). El cuaderno desaparece en el TO-BE. Aparece el equipo del jefe que recibe la copia (Equipo de respaldo).
3. **Metas por actor (25–55):** con «¿qué hace un lunes?» leyendo las entrevistas. Del jefe sale «crear un producto nuevo», que ningún RF tenía (**H-01**).
4. **Dibujo (55–70):** v0.1 de DCU-02a (`dcu-02a-v0.1-errores.puml`), con «Gestionar ventas» y el historial como «include».
5. **Lectura en voz alta (70–85):** «el jefe puede gestionar ventas» no se entiende: ¿registrar, editar o anular? Se divide. La lista de verificación encuentra H-03 a H-06.
6. **Cierre (85–90):** acuerdos y preguntas abiertas.

## Decisiones

- **D-01** Empleado, Jefe y Asesora heredan de Usuario para CU-13.
- **D-02** La alerta de bajo stock es una extensión (CU-10) de CU-01 y CU-03, con Jefe y Asesora como receptores.
- **D-03** El historial es transversal (RF-015); solo la consulta es caso de uso (CU-16).
- **D-04** No hay actor temporal en la versión 1.0 (ficha del Planificador).

## Desacuerdo registrado

- **Anular ventas de otro turno.** Posición A (relatora, con la voz de la empleada): la empleada debe poder corregir cualquier venta porque es quien atiende. Posición B (facilitador, con la voz del jefe): solo el jefe, para que el descuadre tenga un responsable. Dueño de la decisión: el jefe. Mientras decide: supuesto P-04 (empleada, solo su turno). Pregunta PA-U5-01.

## Parqueadero

Facturación electrónica · pedidos por WhatsApp · datáfono · recetas e insumos automáticos · cola por orden de llegada.

## Acuerdos

| Acuerdo | Responsable | Fecha |
|---|---|---|
| Proponer RF-024 y HU-17 (catálogo de productos) | Sandy Katherin Hurtado Suárez | 22/11/2026 |
| Proponer HU-16 (respaldo) | Nicolás Bastidas Medina | 22/11/2026 |
| Leer los diagramas con el jefe, la empleada y la asesora (AM-01) | Sandy Katherin Hurtado Suárez | 12/12/2026 |
| Resolver PA-U5-01 y PA-U5-02 con el jefe | Nicolás Bastidas Medina | 12/12/2026 |

Versión que salió del taller: v0.1 → v1.0 tras la lista de verificación.

## Registro de validación

| Versión | Fecha | Interesado | Resultado | Cambios o pendientes |
|---|---|---|---|---|
| v0.1 DCU-02a | 22/11/2026 | Equipo (taller interno): Nicolás Bastidas, facilitador; Julián Murcia, dibujante; Sandy Hurtado, relatora | Validado con cambios | H-03 a H-06 y H-10 a H-13 corregidos en v1.0 |
| v1.0 DCU-01 a 02c | 22/11/2026 | Sandy Hurtado (revisora, voz de la asesora según su entrevista) | Validado con cambios | H-01 y H-02: requisito e historia propuestos |
| v1.0 | 12/12/2026 | Camilo Gutiérrez — Jefe (dueño de H-01, H-07, H-08) | Programada (fase 05) | Confirmar RF-024, HU-16 y las preguntas PA-U5-01 y PA-U5-02 |
| v1.0 | 12/12/2026 | La empleada — Empleado | Programada (fase 05) | Leer DCU-02a: ¿falta algo que haga un lunes? |
| v1.0 | 12/12/2026 | Jennifer Adriana Rodríguez Cetina — Asesora | Programada (fase 05) | Leer DCU-02b; cerrar también la validación pendiente desde el 20/09/2026 |
| v1.0 | 12/12/2026 | Equipo de respaldo (lo representa el jefe) | Programada (fase 05) | Confirmar el medio (USB) del supuesto P-06 |
| v1.1 (prevista) | Tras la fase 05 | Los tres interesados | Programada | Incorporar las respuestas; el silencio no cuenta como aprobación |
