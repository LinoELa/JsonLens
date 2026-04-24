// ======================= NOTES ==================================
/**
 * @DOMAIN JsonDocument
 * Entidad de dominio para representar un documento JSON del workspace.
 *
 * - Encapsula identificador y contenido fuente
 * - Funciona como contrato minimo entre capas del modulo
 */
// ======================= SETUP PRINCIPAL ==========================
export class JsonDocument {
  constructor({ id, content }){
    this.id = id
    this.content = content
  }
}
