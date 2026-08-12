/**
 * Formatea JSON con indentacion estandar.
 * - Lanza Error si el texto no es JSON valido
 */

export function formatJson(jsonText) {
  try {
    return JSON.stringify(JSON.parse(jsonText), null, 2);
  } catch {
    throw new Error("Invalid JSON");
  }
}
