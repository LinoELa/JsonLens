# Modular Wiring

## Objetivo

Explicar como conectar la arquitectura modular por features en el frontend.

## Idea central

El frontend no se organiza solo por carpetas globales de tipo tecnico.

La organizacion principal va por dominio funcional.

## Piezas clave

- `src/App.jsx`
- `src/modules/core-ui`
- `src/modules/json-tools`

## Patron base

Cada feature puede seguir este patron:

```text
feature-name/
|-- feature-name.container.jsx
|-- feature-name.view.jsx
|-- feature-name.hook.js
|-- feature-name.service.js
`-- feature-name.css
```

## Regla importante

- `App.jsx` monta modulos
- la feature orquesta estado y flujo
- la vista renderiza UI
- el servicio consume API

## Siguiente paso

La siguiente guia natural es [`04-core-about-and-health.md`](./04-core-about-and-health.md).
