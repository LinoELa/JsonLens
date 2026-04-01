// ======================= IMPORTS =========================================
// Simple fetch wrapper para llamadas HTTP compartidas

export async function apiFetch(path, options = {}){
  const res = await fetch(path, options)
  const contentType = res.headers.get('content-type') || ''
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  if (contentType.includes('application/json')) return res.json()
  return res.text()
}
// # Cliente HTTP compartido (axios/fetch wrapper)