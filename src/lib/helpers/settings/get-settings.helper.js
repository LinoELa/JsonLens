/**
 * Obtiene preferencias del usuario.
 * - Delega en el repositorio inyectado
 */

export async function getSettings({ settingsRepo }) {
  return settingsRepo.get();
}
