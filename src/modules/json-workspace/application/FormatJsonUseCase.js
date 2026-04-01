export function FormatJsonUseCase(jsonText){
  try{ return JSON.stringify(JSON.parse(jsonText), null, 2) }
  catch(e){ throw new Error('Invalid JSON') }
}
