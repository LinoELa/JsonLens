
## =================  01/04/2026 =================
1. Estructurea Front 
2. Conectar Front con Back
3. Crear un endpoint para obtener los datos de la API

**Conexión Frontend-Backend:**
- `src/shared/infrastructure/http/apiClient.js` exporta clase ApiClient que hace fetch a http://localhost:5700
- `.env` define VITE_API_BASE_URL=http://localhost:5700
- `vite.config.js` mapea /api a http://localhost:5700 para dev
- Usar: `import { apiClient } from './shared/infrastructure/http/apiClient'` luego `apiClient.get('/health')`

## =================  02/04/2026 =================
## =================  03/04/2026 =================
## =================  04/04/2026 =================