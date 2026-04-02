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
