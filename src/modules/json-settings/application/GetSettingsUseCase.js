export async function GetSettingsUseCase({ settingsRepo }){
  return settingsRepo.get()
}
