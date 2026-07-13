import { compareApi } from './http/compareApi.js'

/**
 * Wiring del modulo json-compare.
 * - Conecta el puerto de comparacion con la API HTTP
 */

export const compareContainer = {
  compareRepository: compareApi,
}

export function createCompareModule() {
  return compareContainer
}
