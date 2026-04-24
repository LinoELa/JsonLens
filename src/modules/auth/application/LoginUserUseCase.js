// ======================= NOTES ==================================
/**
 * @USECASE LoginUserUseCase
 * Caso de uso para autenticar usuario mediante el repositorio de sesion.
 *
 * - Recibe dependencias por inyeccion para mantener testabilidad
 * - Centraliza el punto de entrada del flujo de login
 */
// ======================= BLOQUE DE FLUJO ==========================
// ======================= IMPORTS =========================================
// Use case: login simple

export async function LoginUserUseCase({ sessionRepo }, credentials){
  return sessionRepo.login(credentials)
}
