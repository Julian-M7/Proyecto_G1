# Matriz de relevancia de calidad

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 4 · Sesión 4 · 22/11/2026

Escala: 0 no le afecta · 1 le afecta poco · 2 importante · 3 crítica. Interesados (matriz poder-interés): I1 = Empleada (mesera y cajera); I2 = Asesora financiera; I3 = Jefe / propietario (patrocinador); I4 = Equipo de análisis y desarrollo; I5 = Clientes del local. El proyecto tiene cinco interesados.

| Característica | I1 | I2 | I3 | I4 | I5 | Total | N.º de 3 | Justificación |
|---|---|---|---|---|---|---|---|---|
| **Adecuación funcional** | 3 | 3 | 3 | 2 | 1 | 12 | 3 | Un total mal calculado o una venta sin método de pago es justo el descuadre que se quiere eliminar (hallazgos de la empleada y de la asesora); el cliente solo lo nota si se le cobra mal. |
| **Eficiencia de desempeño** | 2 | 1 | 3 | 1 | 2 | 9 | 1 | El cierre manual toma 8 a 15 minutos y el jefe quiere ahorrar tiempo (criterio de éxito 1); en hora pico el cliente espera en caja. A la asesora le afecta poco: consolida al día siguiente. |
| **Compatibilidad** | 0 | 1 | 1 | 1 | 0 | 3 | 0 | La versión 1.0 no se integra con ningún sistema (DIAN, WhatsApp y datáfono quedan fuera del acta). Solo hay un respaldo que se copia a mano. |
| **Capacidad de interacción** | 3 | 2 | 2 | 1 | 2 | 10 | 1 | La empleada atiende en hora pico «de forma empírica» y hoy registra dos veces; la asesora pide ver las cifras «de forma visual». El cliente espera mientras se registra. |
| **Fiabilidad** | 3 | 3 | 3 | 3 | 1 | 13 | 4 | Sin internet y con un solo celular, perder lo registrado es perder la venta del día y la prueba de un descuadre (criterio de éxito 6). El cliente casi no lo nota: se le sigue atendiendo. |
| **Seguridad** | 1 | 2 | 3 | 2 | 0 | 8 | 1 | Hoy no hay usuarios ni se sabe quién registró qué: el descuadre de $50.000 no se pudo rastrear. Para el jefe es crítico; el cliente no se entera. |
| **Mantenibilidad** | 0 | 1 | 2 | 2 | 0 | 5 | 0 | Productos, precios y umbrales cambian por temporada (la asesora planea las compras de diciembre). Se cubre con parámetros que el jefe edita sin programar. |
| **Flexibilidad** | 0 | 0 | 1 | 2 | 0 | 3 | 0 | Un único celular dedicado al local (acta); no hay planes de un segundo local ni de otro dispositivo. |
| **Seguridad física (safety)** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | El sistema no controla equipos, hornos ni neveras ni maneja información de salud: sus fallas son de información, cubiertas por fiabilidad y seguridad. Descartada con justificación. |
| **Total por interesado** | 12 | 13 | 18 | 14 | 6 | — | — | |

## Ranking y decisión

Regla adaptada de la guía a cinco interesados: total ≥ 8 (la mitad del máximo de 15) o al menos un «3» → al menos un RNF; las demás se cubren de otra forma o se descartan con justificación. Adecuación funcional cumple la regla pero se cubre de otra forma, como en el ejemplo del curso: un RNF duplicaría los criterios de aceptación de los RF.

| Puesto | Característica | Total | N.º de 3 | Decisión |
|---|---|---|---|---|
| 1 | Fiabilidad | 13 | 4 | Catalogar: RNF-002 (sin conexión), RNF-003 (integridad), RNF-005 (respaldo) y RNF-006 (persistencia). |
| 2 | Adecuación funcional | 12 | 3 | Cubrir de otra forma: con los criterios de aceptación de RF-001 a RF-023 y sus escenarios .feature; un RNF aparte duplicaría los RF. |
| 3 | Capacidad de interacción | 10 | 1 | Catalogar: RNF-004 (venta en hora pico). Los reportes visuales de la asesora quedan en RF-010 y RF-011. |
| 4 | Eficiencia de desempeño | 9 | 1 | Catalogar: RNF-001 (cierre de caja en 3 minutos o menos). |
| 5 | Seguridad | 8 | 1 | Catalogar (tiene un «3»): RNF-007 (control de acceso por rol y usuario en el historial). |
| 6 | Mantenibilidad | 5 | 0 | Cubrir de otra forma: umbral por producto (RF-004), productos y precios que el jefe crea y edita en el celular (TBD-09) y categorías de egreso parametrizables (TBD-16). Sin «3» ni total ≥ 8. |
| 7 | Compatibilidad | 3 | 0 | Descartar en la versión 1.0, con justificación (sección 5). |
| 8 | Flexibilidad | 3 | 0 | Descartar en la versión 1.0, con justificación (sección 5). |
| 9 | Seguridad física (safety) | 0 | 0 | Descartar con justificación (sección 5). |

## Descartadas

- **Seguridad física (safety):** el sistema no controla equipos ni maneja información de salud; sus fallas son de información. Se reevalúa si una versión futura controla equipos de cocina o registra alérgenos.
- **Compatibilidad:** sin integraciones en la versión 1.0 (DIAN, WhatsApp y datáfono fuera del acta). Se reevalúa si el negocio debe facturar electrónicamente (CS-04).
- **Flexibilidad:** un único celular dedicado; se reevalúa con un segundo dispositivo o punto de venta.

## Lectura

- Filas con un solo «3»: eficiencia de desempeño y seguridad (las dos del jefe): son preocupaciones del patrocinador y por eso entran al catálogo.
- Columna casi en cero: I5 (clientes), que no usan el sistema.

Validación: revisión interna del equipo el 22/11/2026; los puntajes se leen a cada interesado en la fase 05 (supuesto de trabajo).
