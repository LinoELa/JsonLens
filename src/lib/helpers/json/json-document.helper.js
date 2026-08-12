/**
 * Modelo de documento JSON del workspace.
 */

export class JsonDocument {
  constructor({ id, content }) {
    this.id = id;
    this.content = content;
  }
}
