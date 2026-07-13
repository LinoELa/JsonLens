/**
 * Persistencia de token en navegador.
 * - Implementa el puerto TokenStore
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
