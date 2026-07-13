import { apiClient } from '../../../shared/infrastructure/http/apiClient.js'

/**
 * Cliente HTTP del modulo json-compare.
 * - Comparacion y diff de documentos JSON
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
        `/api/json/diff?doc1=${documentId1}&doc2=${documentId2}`,
      )
    } catch (error) {
      throw new Error(`Failed to get diff: ${error.message}`)
    }
  },
}
