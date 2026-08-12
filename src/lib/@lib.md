# lib/

Código compartido que no depende de una página concreta.

| Carpeta / archivo | Uso |
| ----------------- | --- |
| `constants/` | Rutas y valores fijos |
| `utils.js` | `cn()` y utilidades puras |
| `helpers/` | Lógica de negocio (JSON, settings, errores) |
| `hooks/` | Hooks globales (`useIsMobile`, futuros debounce…) |

Helpers de feature muy específicos pueden vivir en `pages/.../helpers/` si no se reutilizan.
