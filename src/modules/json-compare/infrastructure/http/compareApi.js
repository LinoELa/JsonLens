// ======================= NOTES ==================================
/**
 * @SERVICE compareApi
 * Implementacion HTTP para comparacion y diff de documentos JSON.
 *
 * - Ejecuta endpoints de comparacion remota
 * - Unifica manejo de errores en operaciones del modulo
 */
// ======================= IMPORTS =========================================
import { apiClient } from '../../../shared/infrastructure/http/apiClient.js'

// ======================= COMPARE API ======================================

/**
 * Cliente HTTP para comparacion de documentos JSON.
 * Implementa el puerto CompareRepository del dominio.
 */
export const compareApi = {
  async compareDocuments(json1, json2) {
    try {
      return await apiClient.post('/api/json/compare', {
        document1: json1,
        document2: json2,
      })
    } catch (error) {
      throw new Error(`Comparison failed: ${error.message}`)
    }
  },

  async getDiff(documentId1, documentId2) {
    try {
      return await apiClient.get(
        `/api/json/diff?doc1=${documentId1}&doc2=${documentId2}`
      )
    } catch (error) {
      throw new Error(`Failed to get diff: ${error.message}`)
    }
  },
}
