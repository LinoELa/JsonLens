// ======================= NOTES ==================================
/**
 * @COMPONENT App
 * Punto de entrada visual de JsonLens para validar conectividad con el backend.
 *
 * - Coordina el estado de conexion del health check
 * - Muestra feedback de exito o error para diagnostico rapido
 * - Expone el backend objetivo configurado por entorno
 */
// ======================= IMPORTS ==================================
import React, { useState } from 'react'
import AppShell from './shared/infrastructure/ui/layouts/AppShell'
import { apiClient } from './shared/infrastructure/http/apiClient.js'
import { API_ROUTES, API_BASE_URL } from './config/config.js'

// ======================= SETUP PRINCIPAL ==========================
export default function App() {
  const [healthData, setHealthData] = useState(null)
  const [connectionState, setConnectionState] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Dispara el health check y estandariza el estado de respuesta en UI.
  async function handleHealthCheck() {
    try {
      setConnectionState('loading')
      setErrorMessage('')
      const response = await apiClient.get(API_ROUTES.health)
      setHealthData(response)
      setConnectionState('success')
    } catch (error) {
      setHealthData(null)
      setConnectionState('error')
      setErrorMessage(error?.message || 'No se pudo conectar con el backend')
    }
  }

  // ======================= BLOQUE DE FLUJO ==========================
  return (
    <AppShell>
      <div className="mx-auto w-full max-w-3xl space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">JsonLens</h1>

        <p className="text-sm text-muted-foreground">
          Backend objetivo:{' '}
          <code className="rounded-md border bg-muted px-1.5 py-0.5 text-xs">
            {API_BASE_URL}
          </code>
        </p>

        <div>
          <button
            type="button"
            onClick={handleHealthCheck}
            disabled={connectionState === 'loading'}
            className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-50"
          >
            {connectionState === 'loading' ? 'Comprobando...' : 'Health'}
          </button>
        </div>

        {/* Estado exitoso: respuesta del backend serializada para inspeccion rapida. */}
        {connectionState === 'success' && healthData && (
          <div className="space-y-2 text-sm text-green-700 dark:text-green-400">
            <div className="font-medium">Conexion OK con backend</div>
            <pre className="max-w-full overflow-x-auto rounded-lg border bg-muted p-3 text-xs">
              {JSON.stringify(healthData, null, 2)}
            </pre>
          </div>
        )}

        {/* Estado de error: se muestra mensaje controlado sin romper la pantalla. */}
        {connectionState === 'error' && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
            Error de conexion con backend: {errorMessage}
          </div>
        )}
      </div>
    </AppShell>
  )
}
