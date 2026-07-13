/**
 * Puerto de dominio para operaciones remotas de autenticacion.
 * - Define login, logout y consulta de sesion
 */

export class SessionRepository {
  async login(credentials) {
    throw new Error('not-implemented')
  }
  async logout() {
    throw new Error('not-implemented')
  }
  async getCurrent() {
    throw new Error('not-implemented')
  }
}
