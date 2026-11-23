# Acta de revisión del SRS — SGMP v0.1 → v0.2 → v1.0

| Campo | Valor |
|---|---|
| Revisión | SRS de SGMP (Martin Pescador) con el checklist de las ocho características |
| Preparación | Pre-auditoría con IA (Claude): 19/11/2026 (versión 0.2) y 21/11/2026 (versión 1.0) |
| Modalidad de la confirmación | Pull request de la Sesión 2 en GitHub |
| Moderador | Nicolás Bastidas Medina |
| Autor | Julián Estiven Murcia Rodriguez |
| Revisores | Sandy Katherin Hurtado Suárez (perspectiva de desarrollo) y Nicolás Bastidas Medina (perspectiva de pruebas) |
| Invitado | Camilo Gutiérrez (jefe y propietario): valida el glosario y los supuestos en la fase 05 |
| Material | `srs-martin-pescador-v1.0.docx` y `checklist-8-caracteristicas.docx` |
| Muestra revisada | RF-001, RF-002, RF-003, RF-004, RF-005, RF-006, RNF-001, RNF-002 y pase por documento |

## 1. Glosario
Se validan con el jefe las definiciones de 1.3 que fijan un valor o un criterio: **saldo del día y saldo en efectivo** (TBD-07), **umbral mínimo de 5 unidades** (TBD-05), **formato del número de recibo** AAAAMMDD-NNN (TBD-17), **categorías de egreso** (TBD-16) y **tarjeta fuera de los métodos de pago** (TBD-14). El glosario completo está en `08-requisitos-29148/glosario.md` (versión 2).

## 2. Consolidación de hallazgos
La pre-auditoría registró **18 hallazgos (12 mayores y 6 menores)** que cubren las ocho características (checklist, parte 3). Los de mayor efecto y su cierre:

| ID | Requisito | Característica | Resumen | Cierre en v1.0 |
|---|---|---|---|---|
| H-01 | RF-001 | Correcto | HU-01 cancela la venta si falla la conexión; OB-1 y el acta exigen guardarla local | Se guarda local; HU-01 se corrige (correcciones-fuentes.md) |
| H-06 | RF-003 | Consistente | HU-03 rechaza ventas por stock insuficiente; CU-01 no lo contempla | Advertir y permitir (RF-023, TBD-03) |
| H-08 | RF-004 | Consistente | Umbral: 10 implícito en HU-04, 5 en el .feature, configurable en CU-03 | Parámetro por producto, valor inicial 5, límite inclusivo (TBD-05) |
| H-10 | RF-006 | Completo | El cierre de caja no tenía HU ni CU | HU-11 en el backlog |
| H-13 | RNF-002 | Consistente | CU-01 1a exige conexión para productos nuevos | Los productos se crean sin conexión (TBD-09) |

Los 18 hallazgos quedan cerrados: 10 con corrección directa y 8 con un supuesto de trabajo del apéndice C.

## 3. Decisiones
- D1. La sección 3 se organiza por característica (G1 ventas, G2 inventario, G3 finanzas y cierre, G4 accesos y auditoría).
- D2. El umbral de bajo stock es un parámetro por producto (H-17).
- D3. Se corrigen en sus fuentes HU-01 (escenario 2), CU-01 (tarjeta y 1a), CU-02 (motivo), CU-03 y CU-04 (meta G5): ver `08-requisitos-29148/correcciones-fuentes.md`.
- D4. La versión 1.0 se acepta como línea base del SRS con las condiciones de la conclusión del checklist (parte 6).

## 4. Supuestos
17 supuestos de trabajo con quién los valida y cuándo, en el apéndice C del SRS (TBD-01 a TBD-17). Quien valida casi todos es Camilo Gutiérrez en la fase 05.

## APARCADO
Ideas que no entran en esta versión: consumo automático de insumos por receta (fuera de la versión 1.0, P-03 de la Sesión 3) y cola de atención por orden de llegada (NI-14, Won't).

## 5. Seguimiento
Segundo pase humano: Nicolás Bastidas Medina, sobre las subsecciones afectadas y los requisitos con ✓*, en el pull request. Hallazgos mayores cerrados: 12 de 12 (8 en el texto y 4 con un supuesto: H-06, H-08, H-11 y H-13).

| Autor del SRS | Moderador de la revisión |
|---|---|
| Julián Estiven Murcia Rodriguez | Nicolás Bastidas Medina |

| Patrocinador |
|---|
| Camilo Gutiérrez (jefe y propietario): recibe la versión 1.0 y valida las reglas de negocio en la fase 05 |
