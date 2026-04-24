// ======================= NOTES ==================================
/**
 * @LAYOUT AppShell
 * Layout base compartido para estructura principal de la aplicacion.
 *
 * - Define contenedor general de pantalla
 * - Mantiene cabecera comun y zona de contenido dinamico
 */
// ======================= IMPORTS =========================================
import React from 'react'

// ======================= APP SHELL =======================================
export default function AppShell({ children }){
  return (
    <div className="app-shell">
      <header style={{padding:12, borderBottom:'1px solid #eee'}}>JsonLens</header>
      <main>{children}</main>
    </div>
  )
}
