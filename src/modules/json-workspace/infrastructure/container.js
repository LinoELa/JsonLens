import { workspaceApi } from './http/workspaceApi.js'

/**
 * Wiring del modulo json-workspace.
 * - Expone el repositorio HTTP del workspace
 */

export const workspaceContainer = {
  workspaceRepository: workspaceApi,
}

export function createWorkspaceModule() {
  return workspaceContainer
}
