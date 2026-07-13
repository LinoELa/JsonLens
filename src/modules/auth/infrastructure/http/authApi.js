import { apiClient } from '../../../shared/infrastructure/http/apiClient.js'

/**
 * Cliente HTTP de autenticacion.
 * - Implementa el puerto SessionRepository
 */

export const authApi = {
  async login(email, password) {
    try {
      return await apiClient.post('/api/auth/login', { email, password })
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`)
    }
  },

  async logout() {
    try {
      await apiClient.post('/api/auth/logout', {})
      localStorage.removeItem('auth_token')
    } catch (error) {
      throw new Error(`Logout failed: ${error.message}`)
    }
  },

  async getCurrentSession() {
    try {
      return await apiClient.get('/api/auth/me')
    } catch (error) {
      if (error.status === 401) {
        localStorage.removeItem('auth_token')
        return null
      }
      throw error
    }
  },
}
