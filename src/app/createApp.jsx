// ======================= NOTES ==================================
/**
 * @FACTORY createApp
 * Fabrica principal de aplicacion para montar providers globales.
 *
 * - Centraliza composicion del arbol raiz de React
 * - Permite extender setup sin tocar el punto de entrada
 */
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
