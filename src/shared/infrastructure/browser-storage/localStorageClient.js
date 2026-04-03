// ======================= IMPORTS =========================================
// Pequeño cliente para interactuar con localStorage

export const localStorageClient = {
  get(key){
    try{ return JSON.parse(localStorage.getItem(key)) }catch{ return null }
  },
  set(key, value){
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove(key){ localStorage.removeItem(key) }
}
//  # Storage web compartido

