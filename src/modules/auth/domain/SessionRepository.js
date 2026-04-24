// ======================= NOTES ==================================
/**
 * @DOMAIN SessionRepository
 * Puerto de dominio para operaciones remotas de autenticacion.
 *
 * - Define login, logout y consulta de sesion actual
 * - Separa reglas de negocio de la capa HTTP concreta
 */
// ======================= SETUP PRINCIPAL ==========================
// Puerto para session remota (interfaz)
export class SessionRepository {
  async login(credentials){ throw new Error('not-implemented') }
  async logout(){ throw new Error('not-implemented') }
  async getCurrent(){ throw new Error('not-implemented') }
}
