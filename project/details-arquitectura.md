# Arquitectura JsonLens (reglas)

JsonLens es **100% frontend**: validar, formatear, comparar y analizar JSON en el navegador.

| Área   | Detalle                                      |
| ------ | -------------------------------------------- |
| Puerto | `5173`                                       |
| Patrón | Capas frontend (`lib` / `components` / `pages` / `data`) |

Consulta rápida de carpetas → `docs.md`  
Ejemplos de código → `details-code.md`  
Referencia completa → `arquitectura-reactjs.md`

---

## Estructura funcional

```text
src/
├── config/          # env, app, flags
├── lib/             # constants, utils, helpers, hooks
├── components/      # layout, router, ui, common
├── pages/           # public + private (por feature)
├── data/            # browser storage (no HTTP de momento)
├── App.jsx
└── main.jsx
```

**Sin backend:** no hay `data/api` ni Redux obligatorios.  
`data/browser` sustituye a services HTTP (localStorage, archivos, clipboard).

---

## Regla clara: dónde va cada cosa

| Tipo | Dónde | Qué es |
| ---- | ----- | ------ |
| **utils** | `lib/utils.js` o futuros `lib/utils/*` | Funciones puras, genéricas, sin React ni negocio |
| **helpers** | `lib/helpers/` | Lógica de negocio JSON/settings |
| **hooks globales** | `lib/hooks/` | Reutilizables en varios módulos |
| **hooks privados** | `pages/.../hooks/` | Solo de una pantalla o feature |
| **data/browser** | `data/browser/` | localStorage, FileReader, clipboard |
| **components/ui** | `components/ui/` | Visual base (shadcn) |
| **components/common** | `components/common/` | Reutilizable con sentido de producto |
| **components/layout** | `components/layout/` | Shell, sidebar, header |
| **page components** | `pages/.../components/` | Solo de esa página |

---

## 4 preguntas (en este orden)

1. ¿Es configuración global? → `config/`
2. ¿Es código compartido sin UI? → `lib/` (utils / helpers / hooks / constants)
3. ¿Toca localStorage, archivos o APIs del navegador? → `data/browser/`
4. ¿Es React?
   - Reutilizable → `components/`
   - De una pantalla → `pages/.../`

---

## Flujo recomendado por pantalla

```text
Page (delgada)
  → hook privado (estado de UI)
  → helper (negocio JSON)
  → data/browser (si hay persistencia)
  → components (ui / common / de página)
```

**Qué NO debe hacer la page:** parsear/validar JSON y escribir en localStorage en el mismo archivo.

---

## Dependencias permitidas

```text
pages → components, lib, data
components → lib, components/ui
lib/helpers → lib/utils, data (opcional)
data → config (opcional)
```

**Prohibido:**

- Lógica JSON pesada dentro de un component visual
- Importar pages desde `lib` o `data`
- Inventar capa HTTP vacía sin backend

---

## Qué no hacer

- Toda la lógica en una page
- Carpetas vacías “por estética”
- Redux/API sin necesidad real
- `localStorage` en diez sitios distintos (centralizar en `data/browser`)
- Mezclar helpers de negocio dentro de `components/ui`

---

## Convenciones de nombres

- Helpers: `format-json.helper.js` → `formatJson`
- Hooks: `useWorkspaceEditor.js`
- Pages: `WorkspacePage.jsx`
- Constants: `routes.constants.js`
- Browser: `localStorageClient.js`

---

## Checklist nueva feature

1. ¿Qué acción hace el usuario?
2. ¿Es lógica reutilizable? → `lib/helpers`
3. ¿Hay que persistir? → `data/browser`
4. ¿Qué muestra React? → `pages/...` + components
5. ¿Hook global o privado?

---

## Ejemplos rápidos de decisión

| Situación | Dónde |
| --------- | ----- |
| Formatear JSON | `lib/helpers/json` |
| Escribir en localStorage | `data/browser` |
| Modal abierto/cerrado | hook privado o state en page |
| Botón shadcn | `components/ui` |
| Lista solo del compare | `pages/private/compare/components` |
| `useDebounce` | `lib/hooks` |

---

## Regla final

No empieces por “¿qué carpetas creo?”. Empieza por “¿qué responsabilidades tiene esta feature?”.

La mejor arquitectura **no** es la que tiene más archivos. Es la que deja claro dónde va cada cosa sin complejidad de más.

**Código:** `details-code.md`
