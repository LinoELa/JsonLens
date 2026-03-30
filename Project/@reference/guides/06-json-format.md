# JSON Format

## Objetivo

Cubrir la feature `format` dentro de `json-tools`.

## Para que sirve

`format` recibe un JSON y devuelve una version legible y bien indentada.

## Estructura esperada

```text
json-tools/
`-- format/
    |-- format.container.jsx
    |-- format.view.jsx
    |-- format.hook.js
    `-- format.service.js
```

## Flujo recomendado

1. validar entrada
2. parsear JSON
3. aplicar pretty print
4. renderizar salida

## Endpoint esperado

- `POST /json/format`

## Siguiente paso

La siguiente guia natural es [`07-json-analyze.md`](./07-json-analyze.md).
