import { useEffect, useState } from 'react'
import './App.css'

const API_ENDPOINT = '/api/health'

function App() {
  const [apiState, setApiState] = useState({
    loading: true,
    data: null,
    error: '',
  })

  async function loadBackendStatus(signal) {
    setApiState((currentState) => ({
      ...currentState,
      loading: true,
      error: '',
    }))

    try {
      const response = await fetch(API_ENDPOINT, { signal })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = await response.json()

      setApiState({
        loading: false,
        data,
        error: '',
      })
    } catch (error) {
      if (error.name === 'AbortError') {
        return
      }

      setApiState({
        loading: false,
        data: null,
        error: 'No se pudo conectar con adminJsonLens. Revisa que el backend este corriendo en el puerto 5700.',
      })
    }
  }

  useEffect(() => {
    const controller = new AbortController()

    loadBackendStatus(controller.signal)

    return () => {
      controller.abort()
    }
  }, [])

  const connectionState = apiState.loading
    ? 'loading'
    : apiState.error
      ? 'error'
      : 'success'

  const connectionLabel = {
    loading: 'Consultando backend',
    error: 'Sin conexion',
    success: 'Conexion activa',
  }[connectionState]

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">JsonLens + adminJsonLens</p>
          <h1>React ya esta conectado con Express.</h1>
          <p className="lead">
            El frontend consulta <code>{API_ENDPOINT}</code> y Vite redirige la
            peticion al backend en <code>http://localhost:5700</code>.
          </p>
        </div>

        <div className={`status-pill status-pill--${connectionState}`}>
          {connectionLabel}
        </div>
      </section>

      <section className="content-grid">
        <article className="card">
          <h2>Conexion actual</h2>
          <p className="card-copy">
            Ya no necesitas pegar la URL completa del backend en React. Todas las
            llamadas a <code>/api</code> pasan por el proxy de Vite en desarrollo.
          </p>

          <div className="facts">
            <div className="fact">
              <span>Frontend</span>
              <strong>http://localhost:5600</strong>
            </div>
            <div className="fact">
              <span>Backend</span>
              <strong>http://localhost:5700</strong>
            </div>
            <div className="fact">
              <span>Endpoint</span>
              <strong>{API_ENDPOINT}</strong>
            </div>
          </div>

          <button
            className="refresh-button"
            onClick={() => loadBackendStatus()}
            disabled={apiState.loading}
          >
            {apiState.loading ? 'Probando...' : 'Probar conexion otra vez'}
          </button>
        </article>

        <article className="card">
          <h2>Respuesta del backend</h2>
          <p className="card-copy">
            Este bloque muestra el JSON real que devuelve Express.
          </p>

          {apiState.error ? (
            <p className="error-text">{apiState.error}</p>
          ) : (
            <pre>
              <code>
                {apiState.loading
                  ? 'Cargando respuesta del backend...'
                  : JSON.stringify(apiState.data, null, 2)}
              </code>
            </pre>
          )}
        </article>
      </section>
    </main>
  )
}

export default App
