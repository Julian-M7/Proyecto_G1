  # Camino de excepción - cubre la extensión 1a del CU-02
  Escenario: intento de anulación sin el permiso de rol necesario
    Dado que existe una venta registrada con el número "V-0231"
    Y que el usuario tiene el rol "empleado" sin permiso para anular ventas
    Cuando el usuario intenta anular la venta "V-0231"
    Entonces el sistema rechaza la operación
    Y la venta "V-0231" permanece sin cambios