---
name: preparar-todo
description: Cerrar un bloque completo en JsonLens — código, wiring, docs, tests, seguridad frontend y consistencia. Usar cuando el usuario diga "preparar todo" o pida cerrar todo el bloque relacionado.
---

# Preparar todo

Significa **no** hacer solo el cambio puntual: revisar y cerrar todo el bloque.

Documento completo: `project/dev/preparar-todo.md`

## Revisar siempre

- Código, wiring (`container.js`, router), imports/exports.
- Coherencia con `arquitecture.md` y `structure.md`.
- Archivos y carpetas nuevas con `@...md`.
- Validación de entradas en cliente.
- Errores accionables; sin lógica de negocio en pages/components.

## Seguridad frontend

- Sanitizar contenido renderizado (XSS).
- Validar archivos subidos (tipo, tamaño).
- No guardar secrets en localStorage.

## Comentarios

Imports → JSDoc breve → código. Sin bloques `NOTES` / `IMPORTS`.

## npm

- `.npmrc` con `ignore-scripts=true` mínimo.
- `.npm-cache/` en `.gitignore`.
