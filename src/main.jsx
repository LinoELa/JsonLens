import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import createApp from './app/createApp.jsx'

/**
 * Punto de arranque del frontend.
 * - Monta la app en el nodo raiz del documento
 */

const application = createApp()

createRoot(document.getElementById('root')).render(
  <StrictMode>{application}</StrictMode>,
)
