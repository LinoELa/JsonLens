/**
 * Configuracion global del frontend: entorno y rutas de API.
 * - Normaliza variables de entorno relevantes
 * - Expone URLs y endpoints compartidos
 */

export const FRONTEND_DEV_PORT = import.meta.env.VITE_FRONTEND_DEV_PORT ?? 5600
export const BACKEND_DEV_PORT = import.meta.env.VITE_BACKEND_DEV_PORT ?? 5700
export const DEFAULT_BACKEND_HOST = import.meta.env.VITE_DEFAULT_BACKEND_HOST ?? 'localhost'

const defaultApiBaseUrl = `http://${DEFAULT_BACKEND_HOST}:${BACKEND_DEV_PORT}`
const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL
const normalizedApiBaseUrl =
  typeof rawApiBaseUrl === 'string' ? rawApiBaseUrl.trim() : ''

export const FRONTEND_DEV_URL = `http://127.0.0.1:${FRONTEND_DEV_PORT}`
export const BACKEND_DEV_URL = defaultApiBaseUrl
export const API_BASE_URL = normalizedApiBaseUrl || defaultApiBaseUrl

export const API_ROUTES = {
  health: '/api/health',
  about: '/api/about',
  users: '/api/users',
}
