// ======================= IMPORTS =========================================
// Use case: login simple

export async function LoginUserUseCase({ sessionRepo }, credentials){
  return sessionRepo.login(credentials)
}
