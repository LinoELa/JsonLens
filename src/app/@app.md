# app/

Bootstrap de la aplicacion: raiz, router y providers.

| Pieza | Rol |
| ----- | --- |
| `App.jsx` | Orquesta layout + `BrowserRouter` / `Routes` |
| `router.jsx` | Lista de rutas (`appRoutes`) |
| `AppLayout` | Marco UI (sidebar). En `shared/ui/layouts/` |

## Flujo

```text
App → AppLayout → Routes → Home | Workspace | Compare
```

## Rutas actuales

| Path | Page |
| ---- | ---- |
| `/` | `pages/public/HomePage` |
| `/workspace` | modulo json-workspace |
| `/compare` | modulo json-compare |
