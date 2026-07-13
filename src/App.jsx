import React, { useState } from 'react'
import AppShell from './shared/infrastructure/ui/layouts/AppShell'
import { apiClient } from './shared/infrastructure/http/apiClient.js'
import { API_ROUTES, API_BASE_URL } from './config/config.js'

/**
 * Componente raiz de JsonLens.
 * - Valida conectividad con el backend via health check
 * - Muestra feedback de exito o error
 */

export default function App() {
  const [healthData, setHealthData] = useState(null)
  const [connectionState, setConnectionState] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

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

  return (
    <AppShell>
      <div style={{ padding: 20 }}>
        <h1>JsonLens</h1>
        <p style={{ marginTop: 8, color: '#666' }}>
          Backend objetivo: <code>{API_BASE_URL}</code>
        </p>
        <button
          onClick={handleHealthCheck}
          disabled={connectionState === 'loading'}
          style={{
            marginTop: 12,
            padding: '8px 14px',
            cursor: connectionState === 'loading' ? 'not-allowed' : 'pointer',
          }}
        >
          {connectionState === 'loading' ? 'Comprobando...' : 'Health'}
        </button>

        {connectionState === 'success' && healthData && (
          <div style={{ marginTop: 12, color: '#1f7a1f' }}>
            Conexion OK con backend
            <pre
              style={{
                marginTop: 8,
                padding: 12,
                background: '#f6f8fa',
                border: '1px solid #e5e7eb',
                borderRadius: 6,
                maxWidth: 720,
                overflowX: 'auto',
              }}
            >
              {JSON.stringify(healthData, null, 2)}
            </pre>
          </div>
        )}

        {connectionState === 'error' && (
          <div style={{ marginTop: 12, color: '#b42318' }}>
            Error de conexion con backend: {errorMessage}
          </div>
        )}
      </div>
    </AppShell>
  )
}
