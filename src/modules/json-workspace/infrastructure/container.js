// ======================= IMPORTS =========================================
import { workspaceApi } from './http/workspaceApi.js'

// ======================= CONTAINER =======================================

/**
 * Inyeccion de dependencias del modulo json-workspace.
 * Ensambla los servicios HTTP.
 */
export const workspaceContainer = {
  workspaceRepository: workspaceApi,
}

export function createWorkspaceModule() {
  return workspaceContainer
}
