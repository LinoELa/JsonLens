# Arquitectura JsonLens Frontend

## Resumen

| Área                    | Detalle                                                    |
| ----------------------- | ---------------------------------------------------------- |
| Rol                     | Frontend del ecosistema `JsonLens`                         |
| Stack base              | `React`, `TypeScript`, `Vite`, `CSS`                       |
| Puerto recomendado      | `5173`                                                     |
| Dependencias instaladas | `react`, `react-dom`, `@vitejs/plugin-react`, `typescript` |
| Estado actual           | Repositorio base creado, MVP en desarrollo                 |
| Tipo de repositorio     | Repositorio Git independiente dentro de `JSONLENS-PROJECT` |


## Estructura Modular

```text
JsonLens/
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|   |-- config/
|   |   `-- constants.js
|   |-- features/
|   |   |-- json-process/
|   |   |   |-- components/
|   |   |   |-- hooks/
|   |   |   |-- services/
|   |   |   `-- types/
|   |   `-- settings/
|   |       |-- components/
|   |       `-- hooks/
|   |-- shared/
|   |   |-- components/
|   |   |-- hooks/
|   |   |-- services/
|   |   `-- utils/
|   |-- assets/
|   |-- pages/
|   |   |-- private/
|   |   `-- public/
|   `-- styles/
|       |-- App.css
|       `-- index.css
|-- package.json
|-- vite.config.js
|-- index.html
`-- README.md
```

## Patrón por Feature

Cada feature agrupa:
- **components/** — Componentes React
- **hooks/** — Hooks custom
- **services/** — Llamadas a API
- **types/** — Tipos/interfaces

## Shared

Uso comun en toda la app:
- Componentes reutilizables
- Hooks generales
- Utilidades compartidas

# Nomenclatura del proyecto

## 1. Sistema

### Regla corta

La regla por defecto es esta:

- `camelCase` dentro del codigo
- `PascalCase` para tipos y componentes
- `kebab-case` para archivos y carpetas
- `UPPER_SNAKE_CASE` para constantes globales
- `snake_case` solo cuando una integracion externa lo exija

Si no hay una razon fuerte para romper esta regla, no se rompe.

### Sistema de nomenclatura base

Este es el sistema recomendado y por defecto.

| Caso                        | Formato            | Uso recomendado                                                  | Ejemplo                                                 |
| --------------------------- | ------------------ | ---------------------------------------------------------------- | ------------------------------------------------------- |
| Variables y funciones       | `camelCase`        | valores, funciones, helpers, hooks, servicios internos           | `requestBody`, `useLoginPage`                           |
| Clases, tipos y componentes | `PascalCase`       | clases, errores, entidades, React components, DTOs tipados       | `AppError`,`UserSession`                                |
| Archivos y carpetas         | `kebab-case`       | nombres de archivos y directorios tecnicos                       | `json-processing`, `login-page.tsx`, `error-handler.ts` |
| Constantes globales         | `UPPER_SNAKE_CASE` | env vars, flags estaticos, constantes globales                   | `API_BASE_URL`, `DEFAULT_TIMEOUT_MS`                    |
| Casos especiales externos   | `snake_case`       | solo si la BD, API externa o contrato externo ya obliga a usarlo | `created_at`, `user_id`                                 |