// ======================= IMPORTS =========================================
import { apiClient } from '../../../shared/infrastructure/http/apiClient.js'

// ======================= WORKSPACE API ====================================

/**
 * Cliente HTTP para operaciones de workspace JSON.
 * Implementa el puerto WorkspaceRepository del dominio.
 */
export const workspaceApi = {
  async loadWorkspace(id) {
    try {
      const path = `/api/workspace/${id}`
      return await apiClient.get(path)
    } catch (error) {
      throw new Error(`Failed to load workspace: ${error.message}`)
    }
  },

  async saveWorkspace(id, document) {
    try {
      const path = `/api/workspace/${id}`
      return await apiClient.put(path, document)
    } catch (error) {
      throw new Error(`Failed to save workspace: ${error.message}`)
    }
  },

  async validateJson(jsonString) {
    try {
      return await apiClient.post('/api/json/validate', { content: jsonString })
    } catch (error) {
      throw new Error(`Validation failed: ${error.message}`)
    }
  },

  async formatJson(jsonString, spaces = 2) {
    try {
      return await apiClient.post('/api/json/format', { content: jsonString, spaces })
    } catch (error) {
      throw new Error(`Format failed: ${error.message}`)
    }
  },

  async analyzeJson(jsonString) {
    try {
      return await apiClient.post('/api/json/analyze', { content: jsonString })
    } catch (error) {
      throw new Error(`Analysis failed: ${error.message}`)
    }
  },
}
