/**
 * Caso de uso para obtener preferencias del usuario.
 * - Delega en el repositorio inyectado
 */

export async function GetSettingsUseCase({ settingsRepo }) {
  return settingsRepo.get()
}
