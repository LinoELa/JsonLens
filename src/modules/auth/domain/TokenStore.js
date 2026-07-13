/**
 * Puerto de dominio para persistencia del token de sesion.
 * - Define lectura, escritura y eliminacion del token
 */

export class TokenStore {
  getToken() {
    throw new Error('not-implemented')
  }
  setToken(token) {
    throw new Error('not-implemented')
  }
  removeToken() {
    throw new Error('not-implemented')
  }
}
