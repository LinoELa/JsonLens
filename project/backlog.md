# Project Management — JsonLens

Fuente única de trabajo del proyecto. **Sustituye a Trello.**  
Ramas y PRs: `feature/{id}` (ejemplo: `feature/37`).

Arquitectura vigente → `architecture.md`

---

## Cómo usar este archivo

| Campo            | Significado                                         |
| ---------------- | --------------------------------------------------- |
| **status**       | `done` · `doing` · `todo` · `backlog` · `cancelled` |
| **feature/{id}** | ID estable (viene de Trello `idShort`)              |
| Checklist        | `- [ ]` pendiente · `- [x]` hecho                   |

Orden de trabajo recomendado (MVP → producto):

1. `feature/37` Validar entrada JSON
2. `feature/38` Formatear
3. `feature/39` Árbol
4. `feature/40` Análisis
5. `feature/41` Comparar + clasificar diff
6. `feature/43` UI del diff
7. `feature/44` Similitud
8. `feature/45` Extras
9. `feature/47` Calidad

**MVP útil:** pegar → validar → formatear → árbol → comparar básico.

---

## Tablero rápido

### Doing

- [feature/37 — Entrada y validación JSON](#feature37--entrada-y-validación-json)

### Todo (siguiente)

- [feature/38 — Formateador JSON](#feature38--formateador-json)

### Backlog

- [feature/39 — Visualización en árbol](#feature39--visualización-en-árbol)
- [feature/40 — Análisis estructural](#feature40--análisis-estructural)
- [feature/41 — Comparación y clasificación](#feature41--comparación-y-clasificación)
- [feature/43 — UI de diferencias](#feature43--ui-de-diferencias)
- [feature/44 — Similitud entre JSON](#feature44--similitud-entre-json)
- [feature/45 — Extras de producto](#feature45--extras-de-producto)
- [feature/47 — Calidad del proyecto](#feature47--calidad-del-proyecto)

### Done

- [feature/36 — Base del proyecto](#feature36--base-del-proyecto)

### Cancelled (no hacer)

- ~~feature/46 Backend de análisis~~ — JsonLens es 100% frontend
- ~~feature/48 Front-Back primero~~ — absorbido por `feature/37` (vertical slice en cliente)
- ~~feature/35 Meta backlog~~ — este documento lo sustituye
- ~~feature/49 Fase 2 dónde empiezo~~ — fusionado en `feature/37`
- Hábitos / días (flexiones, vaso de agua, lunes…) — fuera de JsonLens (no migrados)

---

## Features

### feature/36 — Base del proyecto

|            |                                   |
| ---------- | --------------------------------- |
| **status** | `done`                            |
| **rama**   | — (ya en main / feature actuales) |

Checklist (histórico Trello + realidad actual):

- [x] Definir objetivo del MVP
- [x] Stack frontend: React + Vite + JS
- [x] Repositorio creado
- [x] Estructura frontend base
- [x] Página inicial + rutas
- [x] Lint básico
- [x] Arquitectura modular (`lib` / `components` / `pages` / `data`)
- [x] ~~Backend + conexión FE/BE~~ — **cancelado a propósito** (solo cliente)

---

### feature/37 — Entrada y validación JSON

|             |                                           |
| ----------- | ----------------------------------------- |
| **status**  | `doing`                                   |
| **rama**    | `feature/37`                              |
| **fusiona** | Trello #37 + #49 (+ idea de slice de #48) |

Pantalla: `src/pages/private/workspace/`  
Lógica: `src/lib/helpers/json/`  
UI común: `src/components/`

Checklist:

- [ ] Área para pegar / editar JSON (textarea primero; Monaco después si hace falta)
- [ ] Subir archivo `.json`
- [ ] Leer contenido del archivo
- [ ] Validar si el texto es JSON válido (`lib/helpers`)
- [ ] Error claro si es inválido (mensaje accionable)
- [ ] Mensaje de éxito si es válido
- [ ] Guardar texto (+ parse opcional) en estado del hook de página
- [ ] Layout workspace: toolbar + panel editor + panel resultado/errores
- [ ] Hook privado `useWorkspacePage` (orquesta UI ↔ helpers)
- [ ] Componentes de página: `JsonEditor`, `Toolbar`, `StatusBar` (o equivalentes)

Notas de diseño (MVP):

```text
[ Validar ] [ Formatear ] …

┌─────────────────────┬─────────────────────┐
│ JSON Input          │ Resultado / errores │
└─────────────────────┴─────────────────────┘
```

shadcn útil: `button`, `textarea`/`card`, `alert`, `tabs`, `resizable`.  
Editor serio más adelante: `@monaco-editor/react`.

---

### feature/38 — Formateador JSON

|            |              |
| ---------- | ------------ |
| **status** | `todo`       |
| **rama**   | `feature/38` |

Base ya existe: `lib/helpers/json/format-json.helper.js` (`formatJson`).

Checklist:

- [ ] Botón Formatear en toolbar del workspace
- [ ] Parse + pretty print con indentación
- [ ] Mostrar JSON limpio en el editor / panel
- [ ] Copiar resultado
- [ ] Limpiar contenido
- [ ] Errores si JSON inválido (reutilizar validación de `feature/37`)
- [ ] Elegir indentación (2 / 4 espacios)

---

### feature/39 — Visualización en árbol

|            |              |
| ---------- | ------------ |
| **status** | `backlog`    |
| **rama**   | `feature/39` |

Checklist:

- [ ] Recorrer el JSON recursivamente
- [ ] Detectar claves y tipos
- [ ] Representación jerárquica (árbol)
- [ ] Expandir / colapsar nodos
- [ ] Diferenciar object, array, string, number, boolean, null
- [ ] Mostrar profundidad / nivel
- [ ] Legibilidad visual en el panel derecho

---

### feature/40 — Análisis estructural

|            |              |
| ---------- | ------------ |
| **status** | `backlog`    |
| **rama**   | `feature/40` |

Checklist:

- [ ] Extraer rutas (`user.name`, etc.)
- [ ] Tipo de cada campo
- [ ] Lista plana de estructura
- [ ] Resumen de claves
- [ ] Total de nodos
- [ ] Profundidad máxima
- [ ] Detectar arrays y su forma interna
- [ ] Preparar datos para comparación (`feature/41`)

---

### feature/41 — Comparación y clasificación

|             |                  |
| ----------- | ---------------- |
| **status**  | `backlog`        |
| **rama**    | `feature/41`     |
| **fusiona** | Trello #41 + #42 |

Pantalla: `src/pages/private/compare/`  
Helper stub: `lib/helpers/json/compare-documents.helper.js`

Checklist:

- [ ] Segunda entrada de JSON (A / B)
- [ ] Validar ambos por separado
- [ ] Parsear ambos documentos
- [ ] Claves solo en A / solo en B / comunes
- [ ] Comparar tipos y valores
- [ ] Clasificar: añadido, eliminado, modificado, cambio de tipo, igual
- [ ] Ruta exacta de cada diferencia
- [ ] Separar diff estructural vs de valor
- [ ] Resumen final del diff (modelo de datos; UI en `feature/43`)

---

### feature/43 — UI de diferencias

|             |              |
| ----------- | ------------ |
| **status**  | `backlog`    |
| **rama**    | `feature/43` |
| **depende** | `feature/41` |

Checklist:

- [ ] Panel de resultados
- [ ] Resaltar añadidos / eliminados / modificados
- [ ] Comparación lado a lado
- [ ] Filtros (solo cambios, solo añadidos…)
- [ ] Expandir zonas con diferencias
- [ ] Lectura clara del diff

---

### feature/44 — Similitud entre JSON

|            |              |
| ---------- | ------------ |
| **status** | `backlog`    |
| **rama**   | `feature/44` |

Checklist:

- [ ] Definir qué es “similitud” en JsonLens
- [ ] Similitud estructural / claves / tipos / valores
- [ ] Porcentaje final comprensible
- [ ] Explicar cómo se calcula (sin métricas engañosas)

---

### feature/45 — Extras de producto

|            |              |
| ---------- | ------------ |
| **status** | `backlog`    |
| **rama**   | `feature/45` |

Checklist:

- [ ] Copiar JSON formateado
- [ ] Descargar JSON formateado
- [ ] Descargar informe de diferencias
- [ ] Ejemplos precargados
- [ ] Modo oscuro
- [ ] Historial temporal en sesión (`data/browser`)
- [ ] Drag & drop de archivos
- [ ] (Opcional) comparar más de dos JSON

---

### feature/47 — Calidad del proyecto

|            |              |
| ---------- | ------------ |
| **status** | `backlog`    |
| **rama**   | `feature/47` |

Checklist:

- [ ] Refactor de componentes / helpers repetidos
- [ ] Tests de funciones críticas (parse, format, compare)
- [ ] Casos extremos + JSON grandes
- [ ] Revisar UX básica
- [ ] Documentar arquitectura (mantener `project/` al día)
- [ ] ~~Documentar endpoints~~ — N/A sin backend

---

## Fuera de alcance (referencia)

| ID antiguo              | Motivo                                          |
| ----------------------- | ----------------------------------------------- |
| #46 Backend             | Producto 100% frontend; lógica en `lib/helpers` |
| #48 Front-Back          | Estrategia obsoleta; el slice es en Workspace   |
| #49 Dónde empiezo       | Duplicado de #37; paths viejos `modules/…`      |
| #35 Meta backlog        | Sustituido por este archivo                     |
| Listas Jueves/Viernes/… | Hábitos personales, no JsonLens                 |

---

## Historial de limpieza (2026-08-13)

- Migrado desde `trellojsonlens.json`.
- Fusionados duplicados: `#37` + `#49` → `feature/37`; `#41` + `#42` → `feature/41`.
- Cancelado backend y plan FE/BE.
- Eliminado ruido no relacionado con el producto.
- Archivo Trello de export eliminado del repo tras la migración.
