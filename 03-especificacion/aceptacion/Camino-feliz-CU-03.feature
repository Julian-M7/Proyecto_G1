  # Camino feliz - cubre los pasos 1 a 4 del CU-03
  Escenario: registro exitoso de entrada de mercancía
    Dado que el producto "Cafe Martin Pescador 125g" tiene un stock actual de 10 unidades
    Cuando el encargado registra el ingreso de 20 unidades de "Cafe Martin Pescador 125g"
    Entonces el sistema actualiza el stock de "Cafe Martin Pescador 125g" a 30 unidades
    Y el sistema registra el movimiento en el historial con fecha y responsable