/**
 * Configuracion global del frontend.
 * - Puerto de desarrollo y constantes de la app
 */

export const FRONTEND_DEV_PORT = import.meta.env.VITE_FRONTEND_DEV_PORT ?? 5173
export const FRONTEND_DEV_URL = `http://127.0.0.1:${FRONTEND_DEV_PORT}`
