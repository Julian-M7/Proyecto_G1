  # Camino feliz - cubre los pasos 1 a 5 del CU-01
  Escenario: registro exitoso de una venta con dos productos
    Dado que el catálogo local tiene registrado el producto "Empanada" a $3.000
    Y que el catálogo local tiene registrado el producto "Panelada" a $3.000
    Y que el cajero tiene una sesión abierta con permiso de rol "empleado"
    Cuando el cajero registra la venta de "Empanada" y "Panelada" con método de pago "efectivo"
    Entonces el sistema registra la venta con un valor total de $6.000
    Y el sistema actualiza el stock disponible de ambos productos