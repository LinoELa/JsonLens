# JSON Analyze

## Objetivo

Cubrir la feature `analyze` dentro de `json-tools`.

## Para que sirve

`analyze` inspecciona la estructura del JSON y devuelve informacion util.

## Puede resolver cosas como

- claves principales
- profundidad
- tipos detectados
- arrays y objetos anidados

## Estructura esperada

```text
json-tools/
`-- analyze/
    |-- analyze.container.jsx
    |-- analyze.view.jsx
    |-- analyze.hook.js
    `-- analyze.service.js
```

## Endpoint esperado

- `POST /json/analyze`

## Siguiente paso

La siguiente guia natural es [`08-json-compare.md`](./08-json-compare.md).
