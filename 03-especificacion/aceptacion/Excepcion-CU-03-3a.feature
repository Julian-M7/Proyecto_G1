
  # Camino de excepción - cubre la extensión 3a del CU-03
  Escenario: el movimiento deja el stock por debajo del umbral mínimo
    Dado que el producto "Chocolatina de Cacao Oscuro al 70%" tiene un umbral mínimo configurado de 5 unidades
    Y que el producto "Chocolatina de Cacao Oscuro al 70%" tiene un stock actual de 8 unidades
    Cuando el encargado registra la salida de 5 unidades de "Chocolatina de Cacao Oscuro al 70%"
    Entonces el sistema actualiza el stock de "Chocolatina de Cacao Oscuro al 70%" a 3 unidades
    Y el sistema genera una notificación de bajo stock para "Chocolatina de Cacao Oscuro al 70%"
