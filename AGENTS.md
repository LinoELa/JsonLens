# AGENTS.md — JsonLens

Instrucciones del repositorio para agentes (Cursor, Zed, etc.).

## Producto

- Editor y analizador de JSON **100% frontend** (lógica en el navegador).
- Flujo: cargar/pegar JSON → validar → formatear → analizar → comparar.

## Stack UI previsto

Radix (shell) + Tailwind + Monaco (editor) + Ajv + jsondiffpatch + react-resizable-panels + lucide-react. Ver `project/architecture.md`.

## Docs de referencia

| Documento | Contenido |
| --------- | --------- |
| `project/architecture.md` | Stack, carpetas y reglas de arquitectura |
| `project/code.md` | Ejemplos de código |
| `project/backlog.md` | Features (`feature/{id}`) — sustituye Trello |
| `CHANGELOG.md` | Historial de cambios |

## Reglas generales

- Seguir `project/architecture.md`.
- Separar: `lib` (helpers/utils/hooks) → `data/browser` → `components` / `pages`.
- Lógica JSON en `lib/helpers`, no en components ni pages.
- Manejar JSON inválido sin romper la UI; errores claros y accionables.
- Sin capa HTTP/Redux vacía: no hay backend todavía.
- No dependencias pesadas sin justificar impacto en bundle.
- No afirmar pruebas o ejecuciones no realizadas.
- Responder en español técnico y directo.

## Skills del proyecto

Configuración en `.cursor/skills/`:

| Skill | Cuándo usarla |
| ----- | ------------- |
| `jsonlens` | Arquitectura, UI, flujo del editor |
| `json-validation` | Parseo, validación, análisis estructural |
| `preparar-todo` | Cuando pidan cerrar un bloque completo |

## Comentarios en código

Formato corto: imports → JSDoc breve (1–2 bullets) → código. Sin separadores `NOTES` / `IMPORTS`.
