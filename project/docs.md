# Estructura del repositorio JsonLens

Documentación ampliada:

- Reglas de arquitectura → `details-arquitectura.md`
- Ejemplos de código → `details-code.md`

## Stack

- **React** — UI por componentes
- **Vite** — Build y dev server
- **JavaScript** — Lenguaje del frontend
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
├── main.jsx              # arranque React
├── App.jsx               # componente raiz
├── app/                  # router, createApp, providers
├── config/               # env y constantes globales
├── shared/               # piezas reutilizables entre modulos
├── pages/                # rutas transversales (public / private)
├── modules/              # features (auth, json-workspace, etc.)
└── assets/               # imagenes importadas desde codigo
```

| Carpeta     | Responsabilidad                                             |
| ----------- | ----------------------------------------------------------- |
| **app**     | bootstrap, router, providers                                |
| **config**  | configuracion global                                        |
| **shared**  | storage, UI comun, utils, errores compartidos               |
| **pages**   | paginas transversales (404, landing)                        |
| **modules** | cada feature con domain / application / infrastructure / ui |
| **assets**  | recursos importados en componentes                          |

**No usar `src/components/` suelto.** Los componentes van en `shared/infrastructure/ui/components/` (global) o en `modules/[modulo]/ui/components/` (de feature).

---
