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
