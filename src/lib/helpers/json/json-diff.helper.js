/**
 * Modelo de resultado de comparacion JSON.
 */

export class JsonDiff {
  constructor({ left, right, diff }) {
    this.left = left;
    this.right = right;
    this.diff = diff;
  }
}
