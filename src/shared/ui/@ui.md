# shared/ui

UI compartida de JsonLens.

| Carpeta | Contenido |
| ------- | --------- |
| `layouts/` | Marcos de app (`AppLayout` + Sidebar) |
| `components/` | Componentes compuestos (`AppSidebar`, Placeholder…) |
| `shadcn/` | Primitivos del CLI (`sidebar`, `button`…) |

**Regla:** `npx shadcn add` → `shadcn/components/`. Lo compuesto a mano → `layouts` / `components`.

Navegacion global: **Sidebar** de shadcn (no toolbar).
