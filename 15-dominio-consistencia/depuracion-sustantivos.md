# Depuración de sustantivos (taller 1: vocabulario)

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

> Convención de esta entrega: los talleres de la Unidad 5 se hicieron como talleres internos del equipo el 22/11/2026, usando como casos y como voz de los interesados las tres entrevistas de la Unidad 3 (17 y 19/09/2026 y la del jefe). La lectura en voz alta y la confirmación de cada interesado se hacen en la validación de la fase 05 (12/12/2026, acción AM-01); hasta entonces el estado de cada modelo es «propuesto».

| Sustantivo (quién lo dijo) | Decisión | Razón |
|---|---|---|
| venta, orden (empleada, jefe) | Clase Venta | Tiene identidad (número de recibo) y ciclo de vida |
| producto, ítem, insumo (los tres) | Clase Producto | Un solo término (glosario v2) |
| cuaderno (empleada, asesora) | Descartado | Desaparece en el TO-BE |
| celular, aplicación (empleada) | Descartado | Es el sistema o su soporte |
| caja (empleada, jefe) | Turno y CierreCaja | H-07: dos conceptos con una palabra |
| comprobante (empleada, jefe) | ComprobantePago y numeroRecibo | Dos conceptos (H3-04) |
| hoja del saldo (empleada) | Atributo conteoApertura y CierreCaja | La hoja desaparece |
| gasto (jefe, asesora) | Egreso + CategoriaEgreso | «Gasto» es una categoría |
| descuadre (empleada) | Atributo diferencia | No tiene identidad propia |
| combo, temporada (jefe, asesora) | Descartado en v1.0 | Fuera del alcance |
| cliente (todos) | Descartado | No usa el sistema ni se registra |
| permiso, dueño (empleada) | Perfil y Usuario | Apéndice B del SRS |
