export function CompareDocumentsUseCase(leftText, rightText){
  // implementación muy simple: devuelve diferencia de longitudes
  return { leftLen: leftText.length, rightLen: rightText.length }
}
