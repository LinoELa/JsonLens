---
name: jsonlens
description: Desarrollo de JsonLens — arquitectura modular, UI del editor, flujo de carga/edición/análisis de JSON en el cliente. Usar en tareas de frontend, módulos, pages, hooks y use cases.
---

# JsonLens — desarrollo

Lee primero si aplica: `project/dev/arquitecture.md`, `project/dev/structure.md`.

## Arquitectura por módulo

```text
modules/[modulo]/
├── domain/
├── application/
├── infrastructure/   # storage, container.js
└── ui/               # pages, components, hooks
```

## Construir una pantalla

```text
Page (boceto) → Components → Hook → Page (final delgada)
```

Lógica pesada: `Use case → Hook → Component → Page`.

## Reglas

- Use cases en `application/`; hooks orquestan, no duplican lógica.
- Pages transversales (404, home) en `src/pages/`.
- Pages de feature en `modules/[modulo]/ui/pages/`.
- Preferir cambios mínimos al estilo existente.

## Checklist rápido

- Respeta capas y flujo de dependencias (`ui → application → domain`).
- Validación y errores en cliente.
- Sin dependencias pesadas sin motivo.
- Carpetas nuevas con su `@...md`.
