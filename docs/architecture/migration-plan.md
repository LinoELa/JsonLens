# Migration Plan

## Objetivo

Describir como pasar del estado actual (plantilla Vite React) a la arquitectura MVP de `JsonLens`.

## Fase 1

Conservar y ordenar la base existente:

- `src/main.jsx`
- `src/App.jsx`
- estilos globales

## Fase 2

Crear bloques funcionales del MVP:

- `validate`
- `format`
- `analyze`
- `compare`

## Fase 3

Extraer piezas comunes:

- componentes reutilizables
- hooks compartidos
- cliente API unico

## Fase 4

Mejorar calidad y consistencia:

- tests del flujo principal
- mensajes de error estandar
- documentacion de arquitectura

## Regla de migracion

No mover por mover.

Cada cambio debe mejorar al menos una de estas tres cosas:

- claridad
- consistencia
- escalabilidad
