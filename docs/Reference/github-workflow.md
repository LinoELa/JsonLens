# GitHub Workflow

## Idea principal

En `JsonLens` trabajamos por bloques pequenos y cerrados.

## Alcance

Las reglas de Git se aplican por repositorio.

- frontend: `JsonLens`
- backend: `adminJsonLens`

## Regla interna

Cuando se diga `preparar todo`, hay que seguir la regla de [`preparar-todo.md`](./preparar-todo.md).

## Git flow recomendado

### `main`

- contiene codigo estable
- no se trabaja directamente aqui
- recibe cambios desde `dev` o `hotfix/*`

### `dev`

- rama de integracion
- las features nacen desde `dev`
- los bugfix normales nacen desde `dev`

### `feature/*`

Patron recomendado:

```text
feature/<nombre-del-bloque>
```

Ejemplos:

- `feature/editor-json`
- `feature/tree-view`
- `feature/json-compare-ui`

### `bugfix/*`

Patron recomendado:

```text
bugfix/<nombre-del-problema>
```

Ejemplos:

- `bugfix/editor-parse-error`
- `bugfix/diff-render-crash`

### `hotfix/*`

Patron recomendado:

```text
hotfix/<nombre-del-problema>
```

## Fases de trabajo recomendadas

1. `01-nodejs-and-express-setup` (equivalente frontend: base React + Vite)
2. `02-app-server-and-config`
3. `03-modular-wiring`
4. `04-core-about-and-health`
5. `05-json-validate`
6. `06-json-format`
7. `07-json-analyze`
8. `08-json-compare`
9. `09-testing-and-documentation`
