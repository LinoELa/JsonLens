// ======================= NOTES ==================================
/**
 * @DOMAIN JsonDiff
 * Entidad de dominio para el resultado de comparacion entre documentos JSON.
 *
 * - Conserva referencia del lado izquierdo y derecho
 * - Transporta la estructura de diferencias para su renderizado
 */
// ======================= SETUP PRINCIPAL ==========================
export class JsonDiff {
  constructor({ left, right, diff }){
    this.left = left
    this.right = right
    this.diff = diff
  }
}
