import { apiClient } from '../../../shared/infrastructure/http/apiClient.js'

/**
 * Cliente HTTP del modulo json-workspace.
 * - Carga, guardado y utilidades JSON remotas
 */

export const workspaceApi = {
  async loadWorkspace(id) {
    try {
      return await apiClient.get(`/api/workspace/${id}`)
    } catch (error) {
      throw new Error(`Failed to load workspace: ${error.message}`)
    }
  },

  async saveWorkspace(id, document) {
    try {
      return await apiClient.put(`/api/workspace/${id}`, document)
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
