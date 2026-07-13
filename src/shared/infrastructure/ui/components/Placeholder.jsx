import React from 'react'

/**
 * Contenedor visual temporal para secciones en construccion.
 * - Bloque reutilizable de placeholder
 */

export default function Placeholder({ children }) {
  return <div style={{ padding: 8, border: '1px dashed #ddd' }}>{children}</div>
}
