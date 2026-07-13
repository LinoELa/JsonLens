/**
 * Entidad de dominio para usuario autenticado.
 * - Datos basicos de identidad
 */

export class User {
  constructor({ id, email, name }) {
    this.id = id
    this.email = email
    this.name = name
  }
}
