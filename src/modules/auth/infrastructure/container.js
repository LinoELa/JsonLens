// ======================= NOTES ==================================
/**
 * @CONTAINER authContainer
 * Registro de dependencias del modulo de autenticacion.
 *
 * - Vincula repositorio de sesion y almacenamiento de token
 * - Define ensamblaje de infraestructura para casos de uso
 */
// ======================= IMPORTS =========================================
import { authApi } from './http/authApi.js'
import { BrowserTokenStore } from './storage/BrowserTokenStore.js'

// ======================= CONTAINER =======================================

/**
 * Inyeccion de dependencias del modulo auth.
 * Ensambla los servicios HTTP con el almacenamiento local.
 */
export const authContainer = {
  sessionRepository: authApi,
  tokenStore: BrowserTokenStore,
}

export function createAuthModule() {
  return authContainer
}
