import { authApi } from './http/authApi.js'
import { BrowserTokenStore } from './storage/BrowserTokenStore.js'

/**
 * Wiring del modulo auth.
 * - Conecta repositorio de sesion y almacenamiento de token
 */

export const authContainer = {
  sessionRepository: authApi,
  tokenStore: BrowserTokenStore,
}

export function createAuthModule() {
  return authContainer
}
