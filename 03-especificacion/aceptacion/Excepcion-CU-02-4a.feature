  # Camino de excepción - cubre la extensión 4a del CU-02 (resolución de OB-1)
  Escenario: anulación de una venta sin conexión a internet
    Dado que existe una venta registrada con el número "V-0231"
    Y que el dispositivo no tiene conexión a internet
    Y que el cajero tiene el permiso de rol necesario para anular ventas
    Cuando el cajero anula la venta "V-0231" y confirma la anulación
    Entonces el sistema guarda la anulación de forma local e inmediata
    Y el sistema ajusta el stock correspondiente sin esperar conexión a internet