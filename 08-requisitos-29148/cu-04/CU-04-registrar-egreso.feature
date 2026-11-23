# language: es
Característica: Registrar un egreso
  Para saber cuánto dinero sale del negocio cada día
  Como asesora financiera o jefe
  Quiero registrar cada egreso con su valor, fecha, categoría y método de pago

  Antecedentes:
    Dado que la asesora tiene la sesión iniciada
    Y que existen las categorías "gasto de mercado", "gasto diario" y "otros"

  Escenario: Egreso válido en efectivo
    Cuando registra un egreso de 45000 pesos con categoría "gasto de mercado", método "efectivo" y fecha de hoy
    Entonces el sistema guarda el egreso con su fecha, su categoría, su método de pago y el usuario responsable
    Y el total de egresos del día aumenta en 45000 pesos

  Escenario: Egreso por transferencia con comprobante
    Cuando registra un egreso de 120000 pesos con categoría "gasto diario", método "transferencia" y adjunta el comprobante de pago
    Entonces el sistema guarda el egreso con el comprobante adjunto

  Escenario: Valor igual a cero o negativo
    Cuando intenta registrar un egreso con valor 0
    Entonces el sistema no registra el egreso
    Y le indica que el valor debe ser mayor que cero

  Escenario: Falta un dato obligatorio
    Cuando intenta registrar un egreso sin categoría
    Entonces el sistema no registra el egreso
    Y le indica que falta la categoría

  Escenario: Posible duplicado en los últimos 5 minutos
    Dado que hace 3 minutos se registró un egreso de 45000 pesos con categoría "gasto de mercado" y fecha de hoy
    Cuando intenta registrar otro egreso con el mismo valor, la misma categoría y la misma fecha
    Entonces el sistema le pide confirmación antes de registrarlo

  Escenario: Registro sin conexión a internet
    Dado que el dispositivo no tiene conexión a internet
    Cuando registra un egreso válido
    Entonces el sistema lo guarda en el dispositivo y lo conserva al cerrar y reabrir la aplicación
