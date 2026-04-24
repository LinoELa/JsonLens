// ======================= NOTES ==================================
/**
 * @ENTRY main
 * Punto de arranque del frontend en entorno navegador.
 *
 * - Crea la aplicacion desde el factory de `app`
 * - Monta React sobre el nodo raiz del documento
 */
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
