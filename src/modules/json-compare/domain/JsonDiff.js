/**
 * Entidad de dominio para resultado de comparacion JSON.
 * - Referencia de ambos lados y estructura de diferencias
 */

export class JsonDiff {
  constructor({ left, right, diff }) {
    this.left = left
    this.right = right
    this.diff = diff
  }
}
