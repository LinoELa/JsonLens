/**
 * Modelo de dominio para preferencias de usuario.
 * - Agrupa configuraciones de la experiencia
 */

export class UserPreferences {
  constructor(values = {}) {
    this.values = values
  }
}
