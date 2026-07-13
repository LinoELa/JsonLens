/**
 * Adaptador minimo para persistencia en navegador.
 * - Encapsula acceso a localStorage con JSON
 */

export const localStorageClient = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch {
      return null
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove(key) {
    localStorage.removeItem(key)
  },
}
