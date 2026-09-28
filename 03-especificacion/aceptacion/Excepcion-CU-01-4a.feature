  # Camino de excepción - cubre la extensión 4a del CU-01
  Escenario: registro de una venta sin conexión a internet
    Dado que el dispositivo no tiene conexión a internet
    Y que el catálogo local tiene registrado el producto "Panelada" a $3.000
    Cuando el cajero registra la venta de "Panelada" con método de pago "efectivo"
    Entonces el sistema guarda la venta de forma local e inmediata
    Y el sistema actualiza el stock disponible sin esperar conexión a internet