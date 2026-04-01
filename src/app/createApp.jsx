// ======================= IMPORTS =========================================
import App from '../App.jsx'

// ======================= APP FACTORY =====================================

/**
 * Punto de montaje para providers globales.
 * De momento devuelve solo el componente raiz para no depender
 * de librerias que todavia no estan instaladas.
 */
export default function createApp() {
  return <App />
}
