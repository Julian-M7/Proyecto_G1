# Casos reales instanciados en el modelo de dominio

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 5 · Sesión 5 · 22/11/2026

Cinco casos anonimizados de las entrevistas. DCL-03 dibuja el caso 2.

| Caso | Objetos | ¿Cupo? | Qué no cupo |
|---|---|---|---|
| 1 · Venta de dos tintos en efectivo | Venta(Registrada) con 1 LineaVenta (cantidad 2) → Producto «tinto» | Sí | — |
| 2 · Descuadre de $50.000 | Turno, CierreCaja(diferencia −50.000, observación), Ventas con usuario | Sí | Antes de RF-025 no había dónde guardar el conteo |
| 3 · Venta por transferencia con foto | Venta + ComprobantePago | Sí | — |
| 4 · Llegada de café por libra | MovimientoInventario(entrada) → Producto «café por libra» | Sí | La presentación (cuarto, 340 g) es un producto distinto: confirmado con el glosario |
| 5 · Gasto de mercado del día | Egreso → CategoriaEgreso «gasto de mercado» | Sí | ¿Quién crea las categorías? (H-05) |
