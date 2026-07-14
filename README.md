# JsonLens

Editor y analizador de JSON en el navegador. Validación, formateo, visualización estructural y comparación — todo en el cliente.

## Stack

| Tecnología | Para qué sirve |
| ---------- | -------------- |
| **React + Vite + JS** | Base del frontend |
| **Radix UI** | Tabs, dialogs, menus (UI accesible) |
| **Tailwind CSS** | Estilos |
| **Monaco Editor** | Editor JSON |
| **Ajv** | Validación con schema |
| **jsondiffpatch** | Diff entre documentos |
| **react-resizable-panels** | Layout de paneles |
| **lucide-react** | Iconos |

Detalle completo en `project/@project.md`.

## Puesta en marcha

```bash
npm install
npm run dev
```
  
App en `http://localhost:5173`

## Funcionalidades previstas

- Validación de documentos JSON
- Formateo automático
- Visualización de estructuras jerárquicas
- Comparación entre documentos
- Detección de diferencias y similitudes

## Scripts

```bash
npm run dev      # desarrollo
npm run build    # produccion
npm run preview  # previsualizar build
```

## Estructura

Ver `project/dev/arquitecture.md` y `project/dev/structure.md`.
