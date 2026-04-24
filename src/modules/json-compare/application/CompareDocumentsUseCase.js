// ======================= NOTES ==================================
/**
 * @USECASE CompareDocumentsUseCase
 * Caso de uso base para comparar dos documentos de texto JSON.
 *
 * - Calcula una salida minima de comparacion para pruebas iniciales
 * - Sirve como contrato temporal mientras se integra diff estructural
 */
// ======================= BLOQUE DE FLUJO ==========================
export function CompareDocumentsUseCase(leftText, rightText){
  // implementación muy simple: devuelve diferencia de longitudes
  return { leftLen: leftText.length, rightLen: rightText.length }
}
