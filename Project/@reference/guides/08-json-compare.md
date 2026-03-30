# JSON Compare

## Objetivo

Cubrir la feature `compare` dentro de `json-tools`.

## Para que sirve

`compare` recibe dos JSON y devuelve diferencias legibles para la UI.

## Puede resolver cosas como

- claves anadidas
- claves eliminadas
- cambios de valor
- cambios de tipo

## Estructura esperada

```text
json-tools/
`-- compare/
    |-- compare.container.jsx
    |-- compare.view.jsx
    |-- compare.hook.js
    `-- compare.service.js
```

## Endpoint esperado

- `POST /json/compare`

## Siguiente paso

La siguiente guia natural es [`09-testing-and-documentation.md`](./09-testing-and-documentation.md).
