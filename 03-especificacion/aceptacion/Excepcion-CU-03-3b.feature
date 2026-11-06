  # Camino de excepción - cubre la extensión 3b del CU-03 (resolución de OB-1)
  Escenario: registro de un movimiento de inventario sin conexión a internet
    Dado que el dispositivo no tiene conexión a internet
    Y que el producto "Colaciones de Maíz" tiene un stock actual de 10 unidades
    Cuando el encargado registra el ingreso de 20 unidades de "Colaciones de Maíz"
    Entonces el sistema guarda el movimiento de forma local e inmediata
    Y el sistema actualiza el stock de "Colaciones de Maíz" sin esperar conexión a internet