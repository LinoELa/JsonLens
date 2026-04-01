// ======================= IMPORTS =========================================
import { apiFetch } from '../../../shared/infrastructure/http/apiClient.js'

// Implementación simple del cliente remoto de auth
export const authApi = {
  async login(credentials){
    return apiFetch('/api/auth/login', { method: 'POST', body: JSON.stringify(credentials), headers: {'Content-Type':'application/json'}})
  },
  async logout(){
    return apiFetch('/api/auth/logout', { method: 'POST' })
  }
}
