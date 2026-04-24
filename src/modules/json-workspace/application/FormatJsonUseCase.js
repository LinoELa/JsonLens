// ======================= NOTES ==================================
/**
 * @USECASE FormatJsonUseCase
 * Caso de uso para validar y normalizar texto JSON en formato legible.
 *
 * - Parsea el JSON de entrada
 * - Devuelve salida con indentacion estandar
 * - Lanza error controlado si la entrada no es valida
 */
// ======================= BLOQUE DE FLUJO ==========================
export function FormatJsonUseCase(jsonText){
  try{ return JSON.stringify(JSON.parse(jsonText), null, 2) }
  catch(e){ throw new Error('Invalid JSON') }
}
