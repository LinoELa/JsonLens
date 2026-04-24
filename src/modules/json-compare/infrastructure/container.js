// ======================= NOTES ==================================
/**
 * @CONTAINER compareContainer
 * Registro de dependencias del modulo de comparacion JSON.
 *
 * - Conecta puerto de comparacion con implementacion HTTP
 * - Deja un punto unico de wiring para el modulo
 */
// ======================= IMPORTS =========================================
import { compareApi } from './http/compareApi.js'

// ======================= CONTAINER =======================================

/**
 * Inyeccion de dependencias del modulo json-compare.
 * Ensambla los servicios HTTP.
 */
export const compareContainer = {
  compareRepository: compareApi,
}

export function createCompareModule() {
  return compareContainer
}
