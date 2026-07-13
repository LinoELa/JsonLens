# Arquitectura JsonLens Frontend

| Área   | Detalle                              |
| ------ | ------------------------------------ |
| Stack  | `React`, `JavaScript`, `Vite`, `CSS` |
| Puerto | `5173`                               |
| Patrón | Hexagonal + vertical slicing         |

## Estructura de un módulo
```text
Ver tambien: `project/dev/structure.md` (carpetas del repo: `project/`, `public/`, `src/`).
```


Todo módulo sigue la misma forma. Solo cambia el nombre.

```text
modules/[nombre-modulo]/
├── domain/           # QUÉ es y QUÉ reglas tiene
├── application/      # QUÉ acciones se pueden hacer
├── infrastructure/   # CÓMO se conecta con el exterior (API, storage)
│   ├── http/
│   ├── storage/      # opcional
│   └── container.js  # conecta todo (inyección)
└── ui/               # React: pantallas, componentes, hooks
    ├── pages/
    ├── components/
    └── hooks/
```

| Capa               | Responsabilidad          | Contiene                                            |
| ------------------ | ------------------------ | --------------------------------------------------- |
| **domain**         | Lógica pura del concepto | Entidades, puertos (interfaces), errores de dominio |
| **application**    | Coordinar acciones       | Use cases (`*UseCase.js`)                           |
| **infrastructure** | Detalles técnicos        | APIs, localStorage, wiring                          |
| **ui**             | Presentación             | Pages, components, hooks                            |

**Reglas prácticas:**

- `infrastructure` solo para detalles externos (HTTP, storage, container).
- `ui` va al mismo nivel, no dentro de `infrastructure`.
- Puertos y repositorios solo cuando hay más de una implementación o backend real.

---

## Páginas: público vs privado

| Tipo        | Cuándo                 | Ubicación                                            |
| ----------- | ---------------------- | ---------------------------------------------------- |
| **Pública** | Acceso sin sesión      | `pages/public/` o dentro del módulo si es específica |
| **Privada** | Requiere autenticación | `pages/private/` o dentro del módulo                 |

**Regla práctica:** si la página pertenece a una feature concreta (ej. workspace), va en su módulo. Si es transversal (404, landing), va en `pages/`.

---

## Ejemplos por capa

### domain — entidad y puerto

```javascript
// domain/JsonDocument.js
export class JsonDocument {
  constructor(content) {
    this.content = content;
  }
  isValid() {
    try {
      JSON.parse(this.content);
      return true;
    } catch {
      return false;
    }
  }
}

// domain/WorkspaceRepository.js (solo si hay persistencia remota)
export class WorkspaceRepository {
  async save(doc) {
    throw new Error("Not implemented");
  }
}
```

### application — caso de uso

```javascript
// application/FormatJsonUseCase.js
export function FormatJsonUseCase(content) {
  try {
    return JSON.stringify(JSON.parse(content), null, 2);
  } catch {
    throw new Error("Invalid JSON");
  }
}
```

### infrastructure — API, storage y wiring

```javascript
// infrastructure/http/workspaceApi.js
export class WorkspaceApi {
  async save(doc) {
    return fetch("/api/workspace", {
      method: "POST",
      body: JSON.stringify(doc),
    });
  }
}

// infrastructure/storage/BrowserTokenStore.js
export class BrowserTokenStore {
  save(token) {
    localStorage.setItem("token", token);
  }
  get() {
    return localStorage.getItem("token");
  }
}

// infrastructure/container.js
import { WorkspaceApi } from "./http/workspaceApi.js";
export const workspaceContainer = { repository: new WorkspaceApi() };
```

### ui — page, component y hook

```javascript
// ui/hooks/useFormatJson.js
import { useState } from "react";
import { FormatJsonUseCase } from "../../application/FormatJsonUseCase.js";

export function useFormatJson() {
  const [error, setError] = useState(null);
  const format = (content) => {
    try {
      setError(null);
      return FormatJsonUseCase(content);
    } catch (e) {
      setError(e.message);
      return null;
    }
  };
  return { format, error };
}

// ui/components/JsonEditor.jsx
import { useFormatJson } from "../hooks/useFormatJson.js";

export function JsonEditor() {
  const { format, error } = useFormatJson();
  return (
    <div>
      <button onClick={() => format('{"a":1}')}>Formatear</button>
      {error && <span>{error}</span>}
    </div>
  );
}

// ui/pages/WorkspacePage.jsx
import { JsonEditor } from "../components/JsonEditor.jsx";

export function WorkspacePage() {
  return <JsonEditor />;
}
```
