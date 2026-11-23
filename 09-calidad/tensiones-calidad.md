# Tensiones entre características

Proyecto: Sistema de gestión de ventas, inventario y finanzas para Martin Pescador (cafetería) · Unidad 4 · Sesión 4 · 22/11/2026

## Tensión 1

- **RNF en conflicto:** RNF-007 (seguridad) vs. RNF-004 (capacidad de interacción): iniciar sesión agrega pasos a cada venta en hora pico.
- **Opciones evaluadas:** (A) Pedir usuario y contraseña en cada venta. (B) Iniciar sesión una vez al abrir el turno con un PIN de 4 dígitos; la sesión queda abierta durante el turno y se cierra al cerrar la caja o tras 30 minutos sin uso. (C) Sin sesión: un solo usuario para todos.
- **Decisión:** Opción B: conserva el usuario en el historial (RNF-007) sin agregar pasos a la venta (RNF-004). (A) rompe los 20 segundos; (C) repite el problema del descuadre sin responsable.
- **Quién decidió:** Equipo de análisis, 22/11/2026 (supuesto de trabajo); el patrocinador (Camilo Gutiérrez) lo valida en la fase 05.

## Tensión 2

- **RNF en conflicto:** RNF-005 (respaldo) vs. la restricción del acta de no añadir carga operativa (y RNF-001, tiempo de cierre).
- **Opciones evaluadas:** (A) Que el jefe exporte la copia a mano cada noche. (B) Copia automática al cerrar la caja, guardada en el celular, y copia por USB a otro equipo una vez por semana. (C) Sin respaldo.
- **Decisión:** Opción B: el respaldo diario no le cuesta tiempo a nadie y la copia externa semanal es una tarea de 5 minutos del jefe. (A) añade carga diaria; (C) deja el riesgo del acta sin tratar.
- **Quién decidió:** Equipo de análisis, 22/11/2026 (supuesto de trabajo); el patrocinador (Camilo Gutiérrez) lo valida en la fase 05.

## Tensión 3

- **RNF en conflicto:** RNF-001 (cierre en 3 minutos) vs. RNF-003 (integridad): verificar cada registro al cerrar haría el cierre más lento.
- **Opciones evaluadas:** (A) Recalcular y verificar todo el día al cerrar. (B) Cada operación queda completa en el momento en que se registra (RNF-003) y el cierre solo suma registros ya confirmados.
- **Decisión:** Opción B: la integridad se garantiza en cada operación y el cierre se reduce a una suma. Decisión técnica, sin efecto en otros interesados.
- **Quién decidió:** Equipo técnico (Julián Murcia y Nicolás Bastidas), 22/11/2026.

Palancas usadas: segmentar el escenario (tensión 1), compensar con otra característica y automatizar (tensión 2), y garantizar la propiedad donde nace el dato (tensión 3).
