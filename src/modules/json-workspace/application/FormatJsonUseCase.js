/**
 * Caso de uso para formatear JSON legible.
 * - Parsea y devuelve salida con indentacion estandar
 */

export function FormatJsonUseCase(jsonText) {
  try {
    return JSON.stringify(JSON.parse(jsonText), null, 2)
  } catch {
    throw new Error('Invalid JSON')
  }
}
