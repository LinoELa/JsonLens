# JSON Validate

## Objetivo

Cubrir la feature `validate` dentro de `json-tools`.

## Para que sirve

`validate` comprueba si el JSON ingresado es valido y muestra errores legibles.

## Estructura esperada

```text
json-tools/
`-- validate/
    |-- validate.container.jsx
    |-- validate.view.jsx
    |-- validate.hook.js
    `-- validate.service.js
```

## Flujo recomendado

1. leer texto JSON del editor
2. validar en cliente con parse seguro
3. opcionalmente validar en backend para reglas extendidas
4. pintar resultado en UI

## Endpoint esperado

- `POST /json/validate`

## Siguiente paso

La siguiente guia natural es [`06-json-format.md`](./06-json-format.md).
