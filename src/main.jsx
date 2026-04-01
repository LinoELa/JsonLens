// ======================= IMPORTS =========================================
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import createApp from './app/createApp.jsx'

// ======================= APPLICATION ENTRY ===============================

/**
 * Punto de entrada principal del frontend.
 * Monta la aplicacion creada en src/app/createApp.jsx.
 */
const application = createApp()

createRoot(document.getElementById('root')).render(
  <StrictMode>{application}</StrictMode>,
)
