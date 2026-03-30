# Modular MVP Architecture

## Objetivo

Definir la arquitectura objetivo de `JsonLens` como frontend React para su MVP.

## Resumen rapido

| Area | Detalle |
| --- | --- |
| Rol | Frontend del ecosistema `JsonLens` |
| Stack base | `React`, `Vite`, `JavaScript`, `CSS` |
| Puerto recomendado | `5173` |
| Enfoque | Arquitectura modular por features |
| Bloques principales | `core-ui` y `json-tools` |
| Idioma tecnico | Ingles en codigo y estructura |
| Idioma humano | Espanol en comentarios y docs internas |

## Responsabilidad del frontend

- capturar JSON de entrada
- mostrar errores de validacion de forma clara
- renderizar JSON formateado
- mostrar estructura y diff de manera visual
- orquestar llamadas al backend

## Idea central

El frontend se organiza por capacidades funcionales y no solo por tipo tecnico.

Los dos bloques principales del MVP son:

- `core-ui`
- `json-tools`

## `core-ui`

Guarda shell y estado base de interfaz.

Piezas esperadas:

- layout principal
- header
- estado global liviano
- componentes comunes

## `json-tools`

Guarda el corazon funcional del producto.

Submodulos esperados:

- `validate`
- `format`
- `analyze`
- `compare`

## Fuera de alcance del MVP

- autenticacion compleja
- historial persistente
- colaboracion en tiempo real
- soporte multiarchivo avanzado

## Estructura objetivo

```text
JsonLens/
|-- docs/
|   `-- jsonlens/
|       |-- architecture/
|       |-- guides/
|       `-- Reference/
|-- src/
|   |-- app/
|   |   |-- App.jsx
|   |   `-- main.jsx
|   |-- modules/
|   |   |-- core-ui/
|   |   `-- json-tools/
|   |       |-- validate/
|   |       |-- format/
|   |       |-- analyze/
|   |       `-- compare/
|   |-- services/
|   |-- hooks/
|   `-- utils/
|-- public/
|-- package.json
`-- README.md
```
