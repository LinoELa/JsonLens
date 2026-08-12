# pages/

Pantallas de la aplicación.

| Carpeta | Uso |
| ------- | --- |
| `public/` | Home y rutas públicas |
| `private/[feature]/` | Workspace, compare, settings… |

Por feature privada se pueden añadir:

```text
pages/private/workspace/
├── WorkspacePage.jsx
├── components/     # solo de esta pantalla
└── hooks/          # solo de esta pantalla
```

Constantes de path → `lib/constants/routes.constants.js`.  
Registro de rutas → `components/router/app-routes.jsx`.
