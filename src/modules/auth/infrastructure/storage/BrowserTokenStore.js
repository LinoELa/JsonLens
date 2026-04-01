import { localStorageClient } from '../../../shared/infrastructure/browser-storage/localStorageClient.js'

export const BrowserTokenStore = {
  getToken(){ return localStorageClient.get('auth.token') },
  setToken(t){ localStorageClient.set('auth.token', t) },
  removeToken(){ localStorageClient.remove('auth.token') }
}
