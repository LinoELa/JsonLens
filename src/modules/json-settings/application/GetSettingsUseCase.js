// ======================= NOTES ==================================
/**
 * @USECASE GetSettingsUseCase
 * Caso de uso para obtener preferencias desde el repositorio configurado.
 *
 * - Delega el acceso a infraestructura en el puerto recibido
 * - Mantiene desacoplado el dominio de la fuente de datos
 */
// ======================= BLOQUE DE FLUJO ==========================
export async function GetSettingsUseCase({ settingsRepo }){
  return settingsRepo.get()
}
