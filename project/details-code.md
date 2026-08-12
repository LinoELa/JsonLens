# Ejemplos de código

Reglas y decisiones → `details-arquitectura.md`  
Carpetas del repo → `docs.md`

---

## 1. Flujo mínimo (formatear JSON)

```javascript
// lib/helpers/json/format-json.helper.js
export function formatJson(content) {
  return JSON.stringify(JSON.parse(content), null, 2);
}

// pages/private/workspace/hooks/useFormatJson.js
import { formatJson } from "@/lib/helpers/json";

export function useFormatJson() {
  const format = (content) => formatJson(content);
  return { format };
}

// pages/private/workspace/components/JsonEditor.jsx
export function JsonEditor({ onFormat }) {
  return <button onClick={() => onFormat('{"a":1}')}>Formatear</button>;
}

// pages/private/workspace/WorkspacePage.jsx
import { useFormatJson } from "./hooks/useFormatJson";
import { JsonEditor } from "./components/JsonEditor";

export default function WorkspacePage() {
  const { format } = useFormatJson();
  return <JsonEditor onFormat={format} />;
}
```

---

## 2. Helper de negocio

```javascript
// lib/helpers/json/format-json.helper.js
export function formatJson(jsonText) {
  try {
    return JSON.stringify(JSON.parse(jsonText), null, 2);
  } catch {
    throw new Error("Invalid JSON");
  }
}
```

---

## 3. Persistencia en navegador

```javascript
// data/browser/localStorageClient.js
export const localStorageClient = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
```

---

## 4. Constantes de rutas

```javascript
// lib/constants/routes.constants.js
export const ROUTES = {
  home: "/",
  workspace: "/workspace",
  compare: "/compare",
};
```

---

## 5. Componente UI base

```jsx
// components/ui/button.jsx — generado por shadcn
// Importar desde @/components/ui/button
```

---

## 6. Componente common

```jsx
// components/common/ErrorMessage.jsx
export default function ErrorMessage({ children }) {
  if (!children) return null;
  return (
    <p role="alert" className="text-sm text-destructive">
      {children}
    </p>
  );
}
```

---

## 7. Página privada

```jsx
// pages/private/compare/ComparePage.jsx
import Placeholder from "@/components/common/Placeholder";

export default function ComparePage() {
  return (
    <div className="p-5">
      <h2 className="mb-3 text-lg font-semibold">Compare</h2>
      <Placeholder>Comparador JSON</Placeholder>
    </div>
  );
}
```

---

## 8. Router

```jsx
// components/router/app-routes.jsx
import HomePage from "@/pages/public/HomePage";
import WorkspacePage from "@/pages/private/workspace/WorkspacePage";
import ComparePage from "@/pages/private/compare/ComparePage";
import { ROUTES } from "@/lib/constants/routes.constants";

export const appRoutes = [
  { path: ROUTES.home, element: <HomePage /> },
  { path: ROUTES.workspace, element: <WorkspacePage /> },
  { path: ROUTES.compare, element: <ComparePage /> },
];
```
