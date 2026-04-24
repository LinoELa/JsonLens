// ======================= NOTES ==================================
/**
 * @COMPONENT Placeholder
 * Contenedor visual temporal para marcar secciones en construccion.
 *
 * - Estandariza un bloque de placeholder reutilizable
 * - Evita duplicar estilos de "pendiente de implementar"
 */
// ======================= IMPORTS ==================================
import React from 'react'

// ======================= SETUP PRINCIPAL ==========================
export default function Placeholder({ children }){
  // Render simple para indicar estado temporal en UI.
  return <div style={{padding:8, border:'1px dashed #ddd'}}>{children}</div>
}
