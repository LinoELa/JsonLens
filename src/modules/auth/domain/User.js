// ======================= NOTES ==================================
/**
 * @DOMAIN User
 * Entidad de dominio para representar usuario autenticado.
 *
 * - Modela datos basicos de identidad del usuario
 * - Sirve como contrato entre aplicacion y capa de infraestructura
 */
// ======================= IMPORTS =========================================
// Entidad de usuario simple

export class User {
  constructor({ id, email, name }){
    this.id = id
    this.email = email
    this.name = name
  }
}
