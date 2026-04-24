// ======================= NOTES ==================================
/**
 * @DOMAIN TokenStore
 * Puerto de dominio para persistencia del token de sesion.
 *
 * - Define operaciones de lectura y escritura del token
 * - Obliga a la infraestructura a implementar el contrato
 */
// ======================= SETUP PRINCIPAL ==========================
// Puerto para token local (interfaz)
export class TokenStore {
  getToken(){ throw new Error('not-implemented') }
  setToken(token){ throw new Error('not-implemented') }
  removeToken(){ throw new Error('not-implemented') }
}
