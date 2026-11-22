 # Camino de excepción - cubre la extensión 1a del CU-01
  Escenario: intento de venta de un producto que no existe en el catálogo local
    Dado que el producto "Ceviche" no está en el catálogo local del dispositivo
    Cuando el cajero intenta registrar una venta que incluye "Ceviche"
    Entonces el sistema no registra la venta con ese producto
    Y el sistema informa al cajero que el producto no está disponible localmente
