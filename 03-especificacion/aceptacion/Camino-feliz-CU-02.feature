  # Camino feliz - cubre los pasos 1 a 5 del CU-02
  Escenario: anulación exitosa de una venta
    Dado que existe una venta registrada con el número "V-0231" por $16.000
    Y que el cajero tiene el permiso de rol necesario para anular ventas
    Cuando el cajero anula la venta "V-0231" y confirma la anulación
    Entonces el sistema marca la venta "V-0231" como anulada
    Y el sistema registra quién y cuándo la anuló
    Y el sistema no elimina la venta del historial