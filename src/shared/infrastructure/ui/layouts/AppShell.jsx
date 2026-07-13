import React from 'react'

/**
 * Layout base compartido de la aplicacion.
 * - Cabecera comun y zona de contenido dinamico
 */

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>JsonLens</header>
      <main>{children}</main>
    </div>
  )
}
