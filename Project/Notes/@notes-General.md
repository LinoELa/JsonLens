
## =================  02/04/2026 =================
1. Pensar en usar las librerías que usan los demás proyectos como https://github.com/freenandes/actuallyexplain/tree/main
2. Analizar y agregar
3. Sobre la infraestructura, pensar en cómo está y mirar el código de cómo lo han hecho también

1. Estructurar Front
2. Conectar Front con Back
3. Crear un endpoint para obtener los datos de la API

**Conexión Frontend-Backend (3 archivos claves):**
1. **vite.config.js** - proxy de dev que mapea `/api` → backend (http://127.0.0.1:5700)
2. **.env** - define `VITE_API_BASE_URL=http://localhost:5700` y `VITE_API_PROXY_TARGET=http://127.0.0.1:5700`
3. **adminJsonLens/src/app.js** - servidor Express que monta rutas API bajo `/api` con CORS

Uso en componentes:
- `import { apiClient } from './shared/infrastructure/http/apiClient'`
- `apiClient.get('/health')` (proxy convierte a `/api/health` en dev)

## =================  02/04/2026 =================
- Vamos a limpiar el front end y organizarlo mejor.
## =================  03/04/2026 =================
- Entender conexión entre front y back
- Ver video primero de reactjs
- Empezar con el front
- Terminar feature 1
## =================  04/04/2026 =================
