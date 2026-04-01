// ======================= IMPORTS =========================================
import { authApi } from './http/authApi.js'
import { BrowserTokenStore } from './storage/BrowserTokenStore.js'

// ======================= CONTAINER =======================================
export function createAuthModule(){
  return {
    sessionRepo: authApi,
    tokenStore: BrowserTokenStore
  }
}
