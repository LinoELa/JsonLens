# Code — ejemplos

Arquitectura y carpetas → `architecture.md`

Cada bloque: **qué es** y **por qué**.

---

### Utils — genérico

`src/lib/utils.js`

```js
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

Sin React. Sin JSON. Solo utilidad.

---

### Helper — negocio

`src/lib/helpers/json/format-json.helper.js`

```js
export function formatJson(jsonText) {
  try {
    return JSON.stringify(JSON.parse(jsonText), null, 2);
  } catch {
    throw new Error("Invalid JSON");
  }
}
```

Sabe de JSON → helper, no utils.

---

### Hook global — varias pantallas

`src/lib/hooks/use-mobile.js` → `useIsMobile()`

Vale para layout/sidebar, no solo para Workspace.

---

### Hook privado — una pantalla

`src/pages/private/workspace/hooks/useWorkspacePage.js`

```js
import { useState } from "react";
import { formatJson } from "@/lib/helpers/json";

export function useWorkspacePage() {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  function format() {
    try {
      setText(formatJson(text));
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  return { text, setText, error, format };
}
```

Solo Workspace → junto a la page.

---

### data/browser — navegador

`src/data/browser/localStorageClient.js`

```js
export const localStorageClient = {
  get(key) {},
  set(key, value) {},
};
```

Aquí no hay “service HTTP”. Esto es el equivalente local.

---

### Page — orquesta

`src/pages/private/workspace/WorkspacePage.jsx`

```jsx
import { useWorkspacePage } from "./hooks/useWorkspacePage";
import ErrorMessage from "@/components/common/ErrorMessage";

export default function WorkspacePage() {
  const { text, setText, error, format } = useWorkspacePage();

  return (
    <section>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={format}>Formatear</button>
      <ErrorMessage>{error}</ErrorMessage>
    </section>
  );
}
```

No lleva `JSON.parse` dentro.

---

### UI base

```jsx
import { Button } from "@/components/ui/button";
```

Solo visual.
