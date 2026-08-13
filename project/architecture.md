# Architecture — JsonLens

JsonLens es **100% frontend**. Sin API ni Redux por ahora.

Ejemplos → `code.md` · Features → `backlog.md`

---

## Stack

- **React** — UI por componentes
- **Vite** — Build y dev server
- **JavaScript** — Lenguaje del frontend
- **Shadcn UI** — Componentes accesibles y estilizados
- **Radix UI** — Primitivos accesibles (tabs, dialogs, menus, tooltips)
- **Tailwind CSS** — Estilos rápidos y consistentes
- **Monaco Editor** — Editor de código JSON
- **Ajv** — Validación JSON con schema
- **jsondiffpatch** — Comparación y diff entre documentos
- **react-resizable-panels** — Paneles redimensionables (editor | análisis)
- **lucide-react** — Iconos del toolbar y UI

Puerto: `5173`

> En uso ahora: React, Vite, JS, Router, Tailwind, shadcn/Radix, lucide.  
> Previstos (aún no en `package.json`): Monaco, Ajv, jsondiffpatch, react-resizable-panels.

---

## Carpetas — responsabilidad

| Carpeta | Responsabilidad |
| ------- | --------------- |
| **config** | Valores globales de la app |
| **lib** | Utils, helpers, hooks y constants compartidos |
| **components** | UI reutilizable (layout, ui, common, router) |
| **pages** | Pantallas; hooks/components privados por feature |
| **data** | Persistencia y APIs del navegador (sin backend) |
| **assets** | Recursos importados en componentes |

### Dónde poner UI

- Base shadcn → `components/ui/`
- Layout global → `components/layout/`
- Piezas compartidas con sentido de producto → `components/common/`
- Solo de una pantalla → `pages/private/[feature]/components/`

Config shadcn: `components.json` (aliases `@/components/ui`, `@/lib/utils`, `@/lib/hooks`).

---

## Raíz

```text
JsonLens/
├── project/        # docs (architecture, code, backlog)
├── public/         # favicon, estáticos
├── src/            # código
├── tests/
├── package.json
├── components.json
├── vite.config.js
├── CHANGELOG.md
└── README.md
```

## `src/`

```text
src/
├── main.jsx
├── App.jsx
├── index.css
├── config/              # config global
├── assets/              # imágenes importadas
├── lib/
│   ├── constants/       # rutas, keys…
│   ├── helpers/         # negocio JSON
│   ├── hooks/           # hooks globales
│   └── utils.js         # cn()
├── components/
│   ├── layout/          # shell, sidebar
│   ├── router/          # app-routes
│   ├── ui/              # shadcn
│   └── common/          # ErrorMessage, Placeholder…
├── pages/
│   ├── public/          # Home
│   └── private/         # workspace, compare…
└── data/
    └── browser/         # localStorage, archivos
```

## Rutas

| Path | Archivo |
| ---- | ------- |
| `/` | `pages/public/HomePage.jsx` |
| `/workspace` | `pages/private/workspace/WorkspacePage.jsx` |
| `/compare` | `pages/private/compare/ComparePage.jsx` |

Constantes: `lib/constants/routes.constants.js`  
Registro: `components/router/app-routes.jsx`

---

## Reglas — dónde va cada cosa

```text
utils                 → puro, genérico, sin React ni negocio
helpers               → negocio (validar, formatear, comparar)
hooks globales (lib)  → React en varias pantallas
hooks privados (page) → React de una sola pantalla
data/browser          → localStorage, archivos, clipboard
components/ui         → visual base (shadcn)
components/common     → visual compartido de producto
pages/.../components  → solo de esa pantalla
```

- Compartido de verdad → `lib/`
- Lógica de pantalla → `pages/.../hooks/`
- Si hay HTTP algún día → `data/api/` (no en `lib`)

### 4 preguntas

1. ¿Config global? → `config/`
2. ¿Código sin UI? → `lib/`
3. ¿Storage / archivo / clipboard? → `data/browser/`
4. ¿React?
   - varias pantallas → `components/`
   - una pantalla → `pages/.../`

### Flujo

```text
Botón Formatear
  → WorkspacePage          (delgada)
  → useWorkspacePage       (estado + errores)
  → formatJson             (helper)
  → JsonEditor             (pinta)
```

La page no parsea JSON ni escribe localStorage ella sola.

### Dependencias

```text
pages       → components, lib, data
components  → lib, components/ui
lib/helpers → lib/utils, data (opcional)
```

**No:** lógica JSON dentro de un botón.  
**No:** importar `pages` desde `lib`.

### Nombres

| Pieza | Ejemplo |
| ----- | ------- |
| Helper | `format-json.helper.js` → `formatJson` |
| Hook página | `useWorkspacePage.js` |
| Page | `WorkspacePage.jsx` |
| Rama | `feature/37` |

### Regla final

No empieces por carpetas. Empieza por: **¿qué hace el usuario?**
