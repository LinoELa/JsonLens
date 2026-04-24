// ======================= NOTES ==================================
/**
 * @DOMAIN UserPreferences
 * Modelo de dominio para preferencias de usuario en JsonLens.
 *
 * - Agrupa configuraciones funcionales de la experiencia
 * - Centraliza el estado de preferencias para su reutilizacion
 */
// ======================= SETUP PRINCIPAL ==========================
export class UserPreferences {
  constructor(values = {}){
    this.values = values
  }
}
