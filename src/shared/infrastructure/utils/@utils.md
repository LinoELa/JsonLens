# Utils

Helpers genericos reutilizables entre modulos (formatDate, debounce, parseError, etc.).

| Que va aqui | Que NO va aqui |
| ----------- | -------------- |
| funciones puras sin logica de negocio de un modulo | use cases, componentes React, reglas de dominio |

Si la logica pertenece a una feature concreta, va en `modules/[modulo]/application/` o `domain/`.
