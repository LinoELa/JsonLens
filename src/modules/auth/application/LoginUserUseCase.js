/**
 * Caso de uso para autenticar usuario.
 * - Delega en el repositorio de sesion inyectado
 */

export async function LoginUserUseCase({ sessionRepo }, credentials) {
  return sessionRepo.login(credentials)
}
