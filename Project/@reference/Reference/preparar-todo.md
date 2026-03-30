# prepararTodo

## Que significa "prepara todo"

Cuando en este proyecto se diga `preparar todo`, no significa hacer solo el cambio puntual.

Significa cerrar todo el bloque relacionado con esa feature del frontend.

## Que se tiene que revisar

Si se pide `preparar todo`, hay que revisar:

- codigo del bloque
- rutas y wiring de pantallas/componentes
- hooks, servicios y utilidades implicadas
- imports y exports
- manejo de errores y estados de carga
- estilos y responsive basico
- accesibilidad minima (labels, focus, contraste)
- tests del bloque
- documentacion y archivos `@...md`

## Que se tiene que corregir

Ademas del cambio principal:

- nombres inconsistentes
- componentes sin documentar
- flujo UX roto o incompleto
- estado sin reset cuando cambia el input
- errores de API sin feedback claro

## Referencia madre del proyecto

Si el cambio afecta la vision general del producto, hay que actualizar [`@project.md`](../@project.md).

## Regla de idioma y nombres

- estructura tecnica y codigo en ingles
- comentarios y docs internas en espanol
