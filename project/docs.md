# Estructura del repositorio JsonLens

Documentación ampliada:

- Reglas de arquitectura → `details-arquitectura.md`
- Ejemplos de código → `details-code.md`
- Referencia de carpetas → `arquitectura-reactjs.md`

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

---

## Raíz del proyecto

```text
JsonLens/
├── project/        # documentacion del producto (no codigo)
├── public/         # archivos estaticos servidos tal cual
├── src/            # codigo fuente de la app
├── tests/          # pruebas
├── index.html      # entrada HTML de Vite
├── package.json
├── components.json # aliases shadcn
└── vite.config.js
```

---

## public/ — estaticos publicos

```text
public/
├── favicon.svg
└── icons.svg
```

---

## src/ — codigo de la aplicacion

```text
src/
├── main.jsx                 # arranque React
├── App.jsx                  # providers, layout y rutas
├── index.css                # estilos globales
├── config/                  # configuracion global (env, app)
├── assets/                  # imagenes/iconos importados desde codigo
├── lib/                     # codigo compartido (sin dependencia de una page)
│   ├── constants/           # rutas y valores fijos
│   ├── utils.js             # cn() y utilidades puras (shadcn)
│   ├── helpers/             # logica de negocio JSON / settings
│   └── hooks/               # hooks globales reutilizables
├── components/              # componentes reutilizables
│   ├── layout/              # shell, sidebar, header
│   ├── router/              # registro de rutas
│   ├── ui/                  # shadcn / radix base
│   └── common/              # piezas de negocio compartidas
├── pages/                   # pantallas
│   ├── public/              # home y rutas publicas
│   └── private/             # workspace, compare, settings…
└── data/                    # acceso a datos del navegador
    └── browser/             # localStorage, FileReader, clipboard
```

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

### Rutas

| Path | Page |
| ---- | ---- |
| `/` | `pages/public/HomePage.jsx` |
| `/workspace` | `pages/private/workspace/WorkspacePage.jsx` |
| `/compare` | `pages/private/compare/ComparePage.jsx` |

Constantes: `lib/constants/routes.constants.js`.
Registro: `components/router/app-routes.jsx`.
