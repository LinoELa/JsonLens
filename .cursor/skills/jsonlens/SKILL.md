---
name: jsonlens
description: Desarrollo de JsonLens — arquitectura modular, UI del editor, flujo de carga/edición/análisis de JSON en el cliente. Usar en tareas de frontend, pages, hooks y helpers.
---

# JsonLens — desarrollo

Lee primero si aplica: `project/details-arquitectura.md`, `project/docs.md`.

## Arquitectura

```text
src/
├── config/
├── lib/            # constants, utils, helpers, hooks
├── components/     # layout, router, ui, common
├── pages/          # public + private/[feature]
└── data/browser/   # localStorage y APIs del navegador
```

## Construir una pantalla

```text
Page (boceto) → Components → Hook privado → Helpers → Page (final delgada)
```

Lógica pesada: `helper → hook → component → page`.

## Reglas

- Helpers en `lib/helpers/`; hooks de pantalla en `pages/.../hooks/`.
- Pages públicas/privadas en `src/pages/`.
- Preferir cambios mínimos al estilo existente.
- No inventar `data/api` ni Redux sin necesidad.

## Checklist rápido

- Respeta carpetas y flujo (`pages → lib/helpers → data/browser`).
- Validación y errores en cliente.
- Sin dependencias pesadas sin motivo.
- Carpetas nuevas con su `@...md`.
