# Audit and Mapping

## Objetivo

Comparar la estructura actual de `JsonLens` con la estructura objetivo del MVP frontend React.

## Estructura actual visible

Hoy el frontend tiene piezas base:

- `src/App.jsx`
- `src/main.jsx`
- `src/index.css`
- `src/App.css`
- `src/assets/`

## Estructura objetivo

La estructura objetivo para el MVP es:

- `features/editor`
- `features/validate`
- `features/format`
- `features/analyze`
- `features/compare`
- `components/common`
- `hooks`
- `services`
- `utils`

## Mapeo practico

```text
src/App.jsx
  -> se mantiene como shell principal de la app

src/main.jsx
  -> se mantiene como entrypoint de React

src/assets/
  -> se mantiene para recursos visuales

src/App.css y src/index.css
  -> puede separarse por dominio (layout, componentes, utilidades)
```

## Regla de limpieza

Si aparece codigo de plantilla que no aporta al MVP de JSON, se elimina o se reemplaza.
