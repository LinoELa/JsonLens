# Cursor — JsonLens

Configuración versionada del agente para este repositorio.

## Estructura

```text
.cursor/
├── rules/           # Reglas always-on
│   └── jsonlens-core.mdc
└── skills/          # Skills invocables por contexto
    ├── jsonlens/
    ├── json-validation/
    └── preparar-todo/
```

## Uso

- **Rules:** se aplican automáticamente en cada conversación.
- **Skills:** el agente las usa cuando la tarea encaja (JSON, arquitectura, "preparar todo").
- **AGENTS.md:** índice principal del repositorio.
