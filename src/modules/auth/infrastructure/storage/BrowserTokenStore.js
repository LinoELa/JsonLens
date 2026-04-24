// ======================= NOTES ==================================
/**
 * @SERVICE BrowserTokenStore
 * Implementacion de persistencia de token en navegador.
 *
 * - Guarda, obtiene y elimina token de autenticacion
 * - Cumple el contrato de TokenStore en infraestructura cliente
 */
// ======================= TOKEN STORE ======================================
/**
 * Almacena tokens en localStorage para persistencia entre sesiones.
 * Implementa el puerto TokenStore del dominio.
 */
export const BrowserTokenStore = {
  async saveToken(token) {
    if (!token) throw new Error('Token cannot be empty')
    localStorage.setItem('auth_token', token)
  },
  async getToken() {
    return localStorage.getItem('auth_token') || null
  },
  async removeToken() {
    localStorage.removeItem('auth_token')
  },
  async hasToken() {
    return !!localStorage.getItem('auth_token')
  },
}
