// ======================= NOTES ==================================
/**
 * @CONTAINER workspaceContainer
 * Registro de dependencias del modulo de workspace JSON.
 *
 * - Expone la implementacion del repositorio de workspace
 * - Centraliza el wiring de infraestructura del modulo
 */
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
