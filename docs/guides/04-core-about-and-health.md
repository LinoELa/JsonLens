# Core About and Health

## Objetivo

Cubrir el bloque base de interfaz y estado para informacion de servicio.

## Que entra en `core-ui`

- seccion `about` del producto
- indicador de estado `health` del backend

## `about`

Sirve para mostrar contexto del producto en la UI:

- que hace `JsonLens`
- que herramientas ofrece
- estado MVP

## `health`

Sirve para mostrar si `adminJsonLens` esta disponible.

Ejemplos de datos utiles:

- `status`
- `uptime`
- timestamp

## Estructura esperada

```text
core-ui/
|-- about/
|   |-- about.view.jsx
|   `-- about.service.js
`-- health/
    |-- health-badge.jsx
    `-- health.service.js
```

## Siguiente paso

La siguiente guia natural es [`05-json-validate.md`](./05-json-validate.md).
