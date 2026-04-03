

// ============================== IMPORTS =====================================
// Las variables de entorno se cargan automáticamente desde .env

// ============================ RESPOSABILIDADES ===============================
/**
 * @CONFIG - Carga de variables de entorno y configuración global para el frontend
 *
 * Responsabilidades:
 * - Cargar variables de .env específicas para el frontend
 * - Exportar constantes de configuración (puertos, URLs, rutas de API)
 * - Definir la URL base de la API con opción de sobrescribir mediante variable de entorno
 */

// ============================ CARGAR VARIABLES DE ENTORNOS  ===============================
// Carga las variables de entorno específicas para el frontend y backend.
export const FRONTEND_DEV_PORT = import.meta.env.VITE_FRONTEND_DEV_PORT ?? 5600
export const BACKEND_DEV_PORT = import.meta.env.VITE_BACKEND_DEV_PORT ?? 5700
export const DEFAULT_BACKEND_HOST = import.meta.env.VITE_DEFAULT_BACKEND_HOST ?? 'localhost'


const defaultApiBaseUrl = `http://${DEFAULT_BACKEND_HOST}:${BACKEND_DEV_PORT}`
const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL
const normalizedApiBaseUrl =
  typeof rawApiBaseUrl === 'string' ? rawApiBaseUrl.trim() : ''

export const FRONTEND_DEV_URL = `http://127.0.0.1:${FRONTEND_DEV_PORT}`
export const BACKEND_DEV_URL = defaultApiBaseUrl

// Base URL used by apiClient. Can be overridden via VITE_API_BASE_URL.
export const API_BASE_URL = normalizedApiBaseUrl || defaultApiBaseUrl

export const API_ROUTES = {
  health: '/api/health',
  about: '/api/about',
  users: '/api/users',
}
