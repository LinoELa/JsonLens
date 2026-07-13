/**
 * Caso de uso base para comparar dos documentos JSON.
 * - Salida minima temporal hasta integrar diff estructural
 */

export function CompareDocumentsUseCase(leftText, rightText) {
  return { leftLen: leftText.length, rightLen: rightText.length }
}
