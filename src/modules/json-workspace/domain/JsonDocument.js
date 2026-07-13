/**
 * Entidad de dominio para documento JSON del workspace.
 * - Encapsula identificador y contenido fuente
 */

export class JsonDocument {
  constructor({ id, content }) {
    this.id = id
    this.content = content
  }
}
