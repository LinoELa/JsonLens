# Arquitectura JsonLens Frontend

## ================= Resumen =================

| Área                    | Detalle                                                    |
| ----------------------- | ---------------------------------------------------------- |
| Rol                     | Frontend del ecosistema `JsonLens`                         |
| Stack base              | `React`, `TypeScript`, `Vite`, `CSS`                       |
| Puerto recomendado      | `5173`                                                     |
| Dependencias instaladas | `react`, `react-dom`, `@vitejs/plugin-react`, `typescript` |
| Estado actual           | Repositorio base creado, MVP en desarrollo                 |
| Tipo de repositorio     | Repositorio Git independiente dentro de `JSONLENS-PROJECT` |


## =================  Estructura Modular - Hexagonal + Vertical Slicing ================= 
 
```text
JsonLens/
|-- index.html
|-- package.json
|-- vite.config.js
|-- README.md
|
|-- src/
|   |-- main.jsx                               # Entrada principal
|   |-- App.jsx                                # Componente raiz
|   |
|   |-- app/
|   |   |-- createApp.jsx                      # Monta providers globales (React Router, Context, etc)
|   |   `-- router.jsx                         # Router principal de la app
|   |
|   |-- shared/
|   |   |-- domain/
|   |   |   `-- errors/
|   |   |       `-- AppError.js                # Error reutilizable en toda la app
|   |   |
|   |   `-- infrastructure/
|   |       |-- http/
|   |       |   `-- apiClient.js               # Cliente HTTP compartido (axios/fetch wrapper)
|   |       |-- browser-storage/
|   |       |   `-- localStorageClient.js      # Storage web compartido
|   |       `-- ui/
|   |           |-- layouts/
|   |           |   `-- AppShell.jsx           # Layout base de la aplicacion
|   |           `-- components/
|   |               `-- [componentes reutilizables]
|   |
|   `-- modules/
|       |
|       |-- auth/
|       |   |-- domain/
|       |   |   |-- User.js                    # Entidad de usuario
|       |   |   |-- SessionRepository.js       # Puerto para sesion remota (interfaz)
|       |   |   `-- TokenStore.js              # Puerto para token local (interfaz)
|       |   |
|       |   |-- application/
|       |   |   |-- LoginUserUseCase.js        # Login de usuario
|       |   |   |-- LogoutUserUseCase.js       # Logout
|       |   |   |-- RegisterUserUseCase.js     # Registro de usuario
|       |   |   `-- GetCurrentSessionUseCase.js # Sesion actual
|       |   |
|       |   `-- infrastructure/
|       |       |-- http/
|       |       |   `-- authApi.js             # Cliente remoto de auth (implementa SessionRepository)
|       |       |-- storage/
|       |       |   `-- BrowserTokenStore.js   # Token en browser storage (implementa TokenStore)
|       |       |-- ui/
|       |       |   |-- pages/
|       |       |   |   `-- LoginPage.jsx      # Pantalla de login
|       |       |   |-- components/
|       |       |   |   `-- LoginForm.jsx      # Formulario de login
|       |       |   `-- hooks/
|       |       |       `-- useLoginPage.js    # Estado y logica de la page
|       |       `-- container.js               # Wiring del modulo (inyeccion de dependencias)
|       |
|       |-- json-workspace/
|       |   |-- domain/
|       |   |   |-- JsonDocument.js            # Entidad principal: documento JSON
|       |   |   |-- WorkspaceRepository.js     # Puerto para persistencia del workspace
|       |   |   `-- JsonValidator.js           # Puerto para validacion de JSON
|       |   |
|       |   |-- application/
|       |   |   |-- LoadWorkspaceUseCase.js    # Carga del workspace
|       |   |   |-- FormatJsonUseCase.js       # Formateo de JSON
|       |   |   |-- ValidateJsonUseCase.js     # Validacion de JSON
|       |   |   |-- AnalyzeJsonUseCase.js      # Analisis del documento
|       |   |   `-- SaveWorkspaceUseCase.js    # Guardado del workspace
|       |   |
|       |   `-- infrastructure/
|       |       |-- http/
|       |       |   `-- workspaceApi.js        # Cliente remoto del workspace
|       |       |-- ui/
|       |       |   |-- pages/
|       |       |   |   `-- WorkspacePage.jsx  # Vista principal de trabajo
|       |       |   |-- components/
|       |       |   |   |-- JsonEditor.jsx     # Editor principal
|       |       |   |   |-- AnalysisPanel.jsx  # Panel de analisis
|       |       |   |   `-- ValidationStatus.jsx # Indicador de validacion
|       |       |   `-- hooks/
|       |       |       |-- useWorkspacePage.js # Estado de la page
|       |       |       |-- useJsonValidation.js # Hook de validacion reutilizable
|       |       |       `-- useJsonFormatting.js # Hook de formateo reutilizable
|       |       `-- container.js               # Wiring del modulo
|       |
|       |-- json-compare/
|       |   |-- domain/
|       |   |   |-- JsonDiff.js                # Resultado de comparacion
|       |   |   `-- CompareRepository.js       # Puerto para comparacion remota
|       |   |
|       |   |-- application/
|       |   |   `-- CompareDocumentsUseCase.js # Use case: compara dos documentos JSON
|       |   |
|       |   `-- infrastructure/
|       |       |-- http/
|       |       |   `-- compareApi.js          # Cliente remoto de comparacion
|       |       |-- ui/
|       |       |   |-- pages/
|       |       |   |   `-- ComparePage.jsx    # Vista de comparacion
|       |       |   |-- components/
|       |       |   |   `-- DiffViewer.jsx     # Render del diff
|       |       |   `-- hooks/
|       |       |       `-- useComparePage.js  # Estado de la page
|       |       `-- container.js               # Wiring del modulo
|       |
|       `-- json-settings/
|           |-- domain/
|           |   |-- UserPreferences.js         # Entidad de preferencias
|           |   `-- SettingsRepository.js      # Puerto para persistencia de settings
|           |
|           |-- application/
|           |   |-- UpdateSettingsUseCase.js   # Actualizar preferencias
|           |   `-- GetSettingsUseCase.js      # Obtener preferencias
|           |
|           `-- infrastructure/
|               |-- http/
|               |   `-- settingsApi.js         # Cliente remoto de settings
|               |-- ui/
|               |   |-- pages/
|               |   |   `-- SettingsPage.jsx   # Pantalla de configuracion
|               |   |-- components/
|               |   |   `-- SettingsForm.jsx   # Formulario de settings
|               |   `-- hooks/
|               |       `-- useSettingsPage.js # Estado de la page
|               `-- container.js               # Wiring del modulo
|
|-- assets/
|   `-- [imagenes, iconos, etc]
|
`-- tests/
    |-- auth/
    |-- json-workspace/
    |-- json-compare/
    `-- json-settings/
```

## Patrón de Arquitectura Hexagonal (por módulo/vertical slice)

Cada módulo contiene **3 capas**:

### 1. **Domain** (Núcleo - sin dependencias)
- **Entidades**: Representan conceptos del negocio (`JsonDocument`, `User`, `UserPreferences`)
- **Puertos** (Interfaces): Definen contratos que otras capas deben cumplir
  - `SessionRepository.js` — ¿Cómo obtenemos sesión?
  - `TokenStore.js` — ¿Cómo guardamos tokens?
  - `WorkspaceRepository.js` — ¿Cómo persistimos datos?

### 2. **Application** (Cases de Uso)
- **Use Cases**: Lógica de negocio pura e independiente de tecnología
  - `LoginUserUseCase.js` — Realiza login: valida, usa SessionRepository
  - `FormatJsonUseCase.js` — Formatea JSON sin conocer React ni HTTP
  - `CompareDocumentsUseCase.js` — Compara dos documentos

### 3. **Infrastructure** (Implementaciones concretas)
- **HTTP**: Clients específicos que implementan los puertos del domain
  - `authApi.js` implementa `SessionRepository`
  - `workspaceApi.js` implementa `WorkspaceRepository`
- **UI**: Componentes React, hooks, páginas
  - Componentes son los "adaptadores de entrada"
  - Hooks orquestan use cases y estado
- **Storage**: LocalStorage, IndexedDB, etc.
  - `BrowserTokenStore.js` implementa `TokenStore`
- **Container**: Wiring e inyección de dependencias
  - Ensambla domain + application + infrastructure

## Beneficios de esta estructura

| Beneficio         | Cómo lo logra                                                            |
| ----------------- | ------------------------------------------------------------------------ |
| **Testeable**     | Domain y Application no conocen React/HTTP; se testean con mocks simples |
| **Reusable**      | Use cases pueden usarse desde componentes, CLI, script, etc.             |
| **Independiente** | Reemplazar HTTP por WebSocket, LocalStorage por IndexedDB es trivial     |
| **Escalable**     | Agregar nuevos módulos no toca código existente                          |
| **Mantenible**    | Cada vertical slice es autónoma y clara en responsabilidades             |

# Nomenclatura del proyecto

## 1. Sistema de Nombres por Capa Arquitectónica

### Domain (Entidades y Puertos)

| Tipo                 | Formato      | Ejemplo                                                         |
| -------------------- | ------------ | --------------------------------------------------------------- |
| Entidades            | `PascalCase` | `User.js`, `JsonDocument.js`, `UserPreferences.js`              |
| Puertos (Interfaces) | `PascalCase` | `SessionRepository.js`, `TokenStore.js`, `CompareRepository.js` |
| Excepciones          | `PascalCase` | `InvalidJsonError.js`, `UnauthorizedError.js`                   |

### Application (Use Cases)

| Tipo      | Formato                       | Ejemplo                                       |
| --------- | ----------------------------- | --------------------------------------------- |
| Use Cases | `PascalCase` + `UseCase` sufi | `LoginUserUseCase.js`, `FormatJsonUseCase.js` |

### Infrastructure (Implementaciones concretas)

| Tipo                        | Formato                     | Ejemplo                                                              |
| --------------------------- | --------------------------- | -------------------------------------------------------------------- |
| Implementaciones de puertos | `PascalCase`                | `PrismaUserRepository.js`, `BrowserTokenStore.js`, `AxiosAuthApi.js` |
| Componentes React           | `PascalCase`                | `LoginPage.jsx`, `JsonEditor.jsx`, `DiffViewer.jsx`                  |
| Hooks                       | `camelCase` + `use` prefijo | `useLoginPage.js`, `useJsonValidation.js`, `useComparePage.js`       |
| Clientes HTTP               | `camelCase` + `Api`         | `authApi.js`, `workspaceApi.js`, `compareApi.js`                     |
| Helpers/Utils               | `camelCase`                 | `formatJson.js`, `validateEmail.js`, `parseError.js`                 |
| Otros archivos              | `kebab-case`                | `container.js`, `types.js`                                           |

### 2. Regla General (por defecto)

- `camelCase` → variables, funciones, hooks, servicios, helpers
- `PascalCase` → componentes React, tipos, clases, entidades, puertos, use cases
- `kebab-case` → **archivos y carpetas SOLO para:**
  - Módulos: `auth`, `json-workspace`, `json-compare`, `json-settings`
  - Subcarpetas técnicas: `domain`, `application`, `infrastructure`, `ui`, `http`, `hooks`, `pages`, `components`
- `UPPER_SNAKE_CASE` → constantes globales: `API_BASE_URL`, `MAX_FILE_SIZE_MB`
- `snake_case` → solo si una API externa lo obliga: `created_at`, `user_id`

### 3. Ejemplos de Paths

```
modules/
├── json-workspace/                    # kebab-case (módulo/slice vertical)
│   ├── domain/
│   │   ├── JsonDocument.js            # PascalCase (entidad)
│   │   ├── WorkspaceRepository.js     # PascalCase (puerto/interfaz)
│   │   └── JsonValidator.js           # PascalCase (puerto/interfaz)
│   │
│   ├── application/
│   │   ├── FormatJsonUseCase.js       # PascalCase (use case)
│   │   └── ValidateJsonUseCase.js     # PascalCase (use case)
│   │
│   └── infrastructure/
│       ├── http/
│       │   └── workspaceApi.js        # camelCase (cliente HTTP)
│       ├── ui/
│       │   ├── pages/
│       │   │   └── WorkspacePage.jsx  # PascalCase (componente)
│       │   ├── components/
│       │   │   └── JsonEditor.jsx     # PascalCase (componente)
│       │   └── hooks/
│       │       └── useWorkspacePage.js # useXxx camelCase (hook)
│       └── container.js                # camelCase (wiring)
```

---

# Ejemplos de Implementación

## Ejemplo 1: Módulo `auth` - Login

### 1️⃣ Domain (Entidades y Puertos)

**`modules/auth/domain/User.js`**
```javascript
// Entidad: representa un usuario del negocio
export class User {
  constructor(id, email, password) {
    this.id = id
    this.email = email
    this.password = password // nunca se expone en infrastructure
  }

  isValidEmail() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
  }
}
```

**`modules/auth/domain/SessionRepository.js`**
```javascript
// Puerto: contrato para acceder a la sesión remota
export class SessionRepository {
  async login(email, password) {
    throw new Error('Not implemented')
  }

  async logout() {
    throw new Error('Not implemented')
  }

  async getCurrentSession() {
    throw new Error('Not implemented')
  }
}
```

**`modules/auth/domain/TokenStore.js`**
```javascript
// Puerto: contrato para guardar/recuperar token localmente
export class TokenStore {
  async saveToken(token) {
    throw new Error('Not implemented')
  }

  async getToken() {
    throw new Error('Not implemented')
  }

  async removeToken() {
    throw new Error('Not implemented')
  }
}
```

---

### 2️⃣ Application (Use Cases - Lógica de Negocio)

**`modules/auth/application/LoginUserUseCase.js`**
```javascript
export class LoginUserUseCase {
  constructor(sessionRepository, tokenStore) {
    this.sessionRepository = sessionRepository
    this.tokenStore = tokenStore
  }

  async execute(email, password) {
    // Validar formato de email
    if (!email || !password) {
      throw new Error('Email and password are required')
    }

    // Llama al puerto (no sabe si es HTTP, mock, etc)
    const { token, user } = await this.sessionRepository.login(email, password)

    // Guarda el token en el puerto local (no sabe si es localStorage, indexedDB, etc)
    await this.tokenStore.saveToken(token)

    return { user, token }
  }
}
```

---

### 3️⃣ Infrastructure (Implementaciones concretas)

**`modules/auth/infrastructure/http/authApi.js`**
```javascript
// Implementa el puerto SessionRepository usando fetch/axios
export class AxiosAuthApi {
  constructor(apiClient) {
    this.apiClient = apiClient
  }

  async login(email, password) {
    const response = await this.apiClient.post('/auth/login', { email, password })
    return response.data // { token, user }
  }

  async logout() {
    return this.apiClient.post('/auth/logout')
  }

  async getCurrentSession() {
    return this.apiClient.get('/auth/me')
  }
}
```

**`modules/auth/infrastructure/storage/BrowserTokenStore.js`**
```javascript
// Implementa el puerto TokenStore usando localStorage
export class BrowserTokenStore {
  constructor(storageKey = 'auth_token') {
    this.storageKey = storageKey
  }

  async saveToken(token) {
    localStorage.setItem(this.storageKey, token)
  }

  async getToken() {
    return localStorage.getItem(this.storageKey)
  }

  async removeToken() {
    localStorage.removeItem(this.storageKey)
  }
}
```

**`modules/auth/infrastructure/ui/hooks/useLoginPage.js`**
```javascript
import { useState } from 'react'
import { LoginUserUseCase } from '../../application/LoginUserUseCase'

export function useLoginPage(sessionRepository, tokenStore) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const loginUseCase = new LoginUserUseCase(sessionRepository, tokenStore)

  const handleLogin = async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      const result = await loginUseCase.execute(email, password)
      return result
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { handleLogin, loading, error }
}
```

**`modules/auth/infrastructure/ui/pages/LoginPage.jsx`**
```javascript
import { authContainer } from '../container'
import { useLoginPage } from '../hooks/useLoginPage'
import { LoginForm } from '../components/LoginForm'

export function LoginPage() {
  const { handleLogin, loading, error } = useLoginPage(
    authContainer.sessionRepository,
    authContainer.tokenStore
  )

  const onSubmit = async (email, password) => {
    await handleLogin(email, password)
    // Redirigir, etc...
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <div className="error">{error}</div>}
      <LoginForm onSubmit={onSubmit} isLoading={loading} />
    </div>
  )
}
```

**`modules/auth/infrastructure/container.js`**
```javascript
import { AxiosAuthApi } from './http/authApi'
import { BrowserTokenStore } from './storage/BrowserTokenStore'
import { apiClient } from '../../shared/infrastructure/http/apiClient'

// Wiring: inyección de dependencias
export const authContainer = {
  sessionRepository: new AxiosAuthApi(apiClient),
  tokenStore: new BrowserTokenStore(),
}
```

---

## Ejemplo 2: Módulo `json-workspace` - Formatear JSON

### Domain

**`modules/json-workspace/domain/JsonDocument.js`**
```javascript
export class JsonDocument {
  constructor(id, content, format = 2) {
    this.id = id
    this.content = content // string del JSON
    this.format = format   // espacios de indentacion
  }

  isValidJson() {
    try {
      JSON.parse(this.content)
      return true
    } catch {
      return false
    }
  }
}
```

**`modules/json-workspace/domain/WorkspaceRepository.js`**
```javascript
export class WorkspaceRepository {
  async saveDocument(document) {
    throw new Error('Not implemented')
  }

  async getDocument(id) {
    throw new Error('Not implemented')
  }
}
```

### Application

**`modules/json-workspace/application/FormatJsonUseCase.js`**
```javascript
export class FormatJsonUseCase {
  execute(jsonString, spaces = 2) {
    // Lógica pura: sin dependencias externas
    try {
      const parsed = JSON.parse(jsonString)
      return JSON.stringify(parsed, null, spaces)
    } catch (error) {
      throw new Error(`Invalid JSON: ${error.message}`)
    }
  }
}
```

### Infrastructure

**`modules/json-workspace/infrastructure/ui/components/JsonEditor.jsx`**
```javascript
import { useJsonFormatting } from '../hooks/useJsonFormatting'

export function JsonEditor() {
  const { formatJson, loading } = useJsonFormatting()
  const [json, setJson] = useState('')
  const [formatted, setFormatted] = useState('')

  const handleFormat = async () => {
    try {
      const result = await formatJson(json)
      setFormatted(result)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <textarea value={json} onChange={(e) => setJson(e.target.value)} />
      <button onClick={handleFormat} disabled={loading}>
        Format
      </button>
      <pre>{formatted}</pre>
    </div>
  )
}
```

---

## Ventajas de esta estructura

| Aspecto           | Ventaja                                                     |
| ----------------- | ----------------------------------------------------------- |
| **Testing**       | Use cases se testean sin React, sin HTTP reales             |
| **Reuso**         | Puedes usar `FormatJsonUseCase` desde CLI, API, scripts     |
| **Mantenimiento** | Cambiar HTTP por WebSocket es editar solo `infrastructure/` |
| **Independencia** | Domain → Application → Infrastructure (sin ciclos)          |
| **Escalabilidad** | Agregar módulos no toca código existente                    |
| **Claridad**      | Cada archivo tiene 1 responsabilidad clara                  |