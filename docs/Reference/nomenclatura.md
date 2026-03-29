# Nomenclatura del proyecto

## Sistema

Regla por defecto:

- `camelCase` para variables, funciones y hooks
- `PascalCase` para componentes React
- `kebab-case` para carpetas y archivos
- `UPPER_SNAKE_CASE` para constantes globales

## Objetivo

Definir un sistema de nombres consistente para el frontend `JsonLens`.

## Regla principal

En este proyecto:

- codigo y estructura tecnica en ingles
- comentarios y documentacion interna en espanol

## Que debe ir en ingles

Estas piezas usan ingles:

- componentes y hooks
- servicios y utilidades
- nombres de carpetas en `src/`
- funciones, variables y constantes

Ejemplos correctos:

- `json-editor`
- `JsonEditor.jsx`
- `useJsonValidation`
- `api-client.js`
- `buildJsonDiff`

## Regla para carpetas

Ejemplos recomendados:

- `components`
- `features`
- `hooks`
- `services`
- `utils`

## Regla para archivos

### Componentes React

```text
component-name.jsx
```

### Hooks

```text
use-feature-name.js
```

### Servicios

```text
feature-name.service.js
```

### Estilos

```text
component-name.css
```

## Regla practica

Si dos archivos representan la misma responsabilidad, deben seguir el mismo patron de nombres.
