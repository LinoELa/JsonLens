// ======================= NOTES ==================================
/**
 * @CONFIG Vite
 * Configuracion de desarrollo para frontend React con proxy a backend.
 *
 * - Define plugin de React y parametros del dev server
 * - Redirige trafico `/api` al destino configurado por entorno
 */
// ======================= IMPORTS =========================================
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// ======================= VITE CONFIG =====================================

/**
 * Configura Vite para levantar el frontend en el puerto 5600
 * y reenviar todo lo que empiece por /api al backend Express.
 *
 * Variable opcional:
 * VITE_API_PROXY_TARGET=http://127.0.0.1:5700
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiProxyTarget = env.VITE_API_PROXY_TARGET || 'http://127.0.0.1:5700'

  return {
    plugins: [react()],
    server: {
      host: '127.0.0.1',
      port: 5600,
      strictPort: true,
      proxy: {
        '/api': {
          target: apiProxyTarget,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
