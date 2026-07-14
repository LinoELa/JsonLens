# AGENTS.md — JsonLens

Instrucciones del repositorio para agentes (Cursor, Zed, etc.).

## Producto

- Editor y analizador de JSON **100% frontend** (lógica en el navegador).
- Flujo: cargar/pegar JSON → validar → formatear → analizar → comparar.

## Stack UI previsto

Radix (shell) + Tailwind + Monaco (editor) + Ajv + jsondiffpatch + react-resizable-panels + lucide-react. Ver `project/@project.md`.

## Docs de referencia

| Documento | Contenido |
| --------- | --------- |
| `project/docs.md` | Stack, carpetas, dónde poner archivos |
| `project/details-arquitectura.md` | Reglas de capas, cuándo usar cada una |
| `project/details-code.md` | Ejemplos de código por capa |
| `project/notes.md` | Notas del equipo |

## Reglas generales

- Separar: `domain` → `application` → `infrastructure` / `ui`.
- Lógica JSON en use cases, no en components ni pages.
- Manejar JSON inválido sin romper la UI; errores claros y accionables.
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
