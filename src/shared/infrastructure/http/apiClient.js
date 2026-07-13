import { API_BASE_URL } from '../../../config/config.js'

/**
 * Cliente HTTP base para comunicacion con backend.
 * - Centraliza metodos HTTP y parseo de respuestas
 * - Homogeneiza manejo de errores
 */

export class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL
  }

  async _request(path, options = {}) {
    const url = path.startsWith('http') ? path : `${this.baseURL}${path}`

    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    const response = await fetch(url, { ...options, headers })
    const contentType = response.headers.get('content-type') || ''

    let data
    if (contentType.includes('application/json')) {
      data = await response.json()
    } else {
      data = await response.text()
    }

    if (!response.ok) {
      const error = new Error(data?.message || `HTTP ${response.status}`)
      error.status = response.status
      error.data = data
      throw error
    }

    return data
  }

  get(path, options = {}) {
    return this._request(path, { ...options, method: 'GET' })
  }

  post(path, body, options = {}) {
    return this._request(path, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  put(path, body, options = {}) {
    return this._request(path, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    })
  }

  patch(path, body, options = {}) {
    return this._request(path, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    })
  }

  delete(path, options = {}) {
    return this._request(path, { ...options, method: 'DELETE' })
  }
}

export const apiClient = new ApiClient(API_BASE_URL)
