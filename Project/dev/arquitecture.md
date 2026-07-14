# Arquitectura JsonLens Frontend



| Área    | Detalle                              |
| ------- | ------------------------------------ |
| Puerto  | `5173`                               |
| Patrón  | Hexagonal + vertical slicing         |
| Alcance | 100% frontend (lógica en el navegador) |

## Stack

| Tecnología | Para qué sirve |
| ---------- | -------------- |
| **React** | UI por componentes |
| **Vite** | Build y dev server |
| **JavaScript** | Lenguaje del frontend |
| **Radix UI** | Primitivos accesibles (tabs, dialogs, menus, tooltips) |
| **Tailwind CSS** | Estilos rápidos y consistentes |
| **Monaco Editor** | Editor de código JSON |
| **Ajv** | Validación JSON con schema |
| **jsondiffpatch** | Comparación y diff entre documentos |
| **react-resizable-panels** | Paneles redimensionables (editor \| análisis) |
| **lucide-react** | Iconos del toolbar y UI |

Ver también: [`structure.md`](./structure.md) (carpetas del repo).

---

## Estructura de un módulo

Todo módulo repite la misma forma. Solo cambia el nombre.

```text
modules/[nombre-modulo]/
├── domain/           # qué es y qué reglas tiene
├── application/      # qué acciones se pueden hacer
├── infrastructure/   # storage, wiring
│   ├── storage/      # opcional
│   └── container.js
└── ui/               # React
    ├── pages/
    ├── components/
    └── hooks/
```

| Capa | Qué va aquí |
| ---- | ----------- |
| **domain** | Entidades, reglas, contratos |
| **application** | Use cases (`*UseCase.js`) |
| **infrastructure** | localStorage, `container.js` |
| **ui** | Pages, components, hooks |

**Reglas:**

- `ui` va al mismo nivel que `infrastructure`, no dentro.
- La lógica de negocio va en `application/`, no en pages ni components.
- Toda la lógica JSON (validar, formatear, comparar) se ejecuta en el cliente.

---

## Cómo construir una pantalla

Orden habitual en JsonLens:

```text
1. Page (boceto)    → layout y zonas de la pantalla
2. Components       → piezas visuales reutilizables
3. Hook             → estado + llamadas a use cases
4. Page (final)     → solo conecta hook + components
```

Si la feature es sobre todo lógica (validar, comparar, analizar JSON):

```text
Use case → Hook → Component → Page
```

La page debe quedar delgada:

```javascript
// ui/pages/WorkspacePage.jsx
export function WorkspacePage() {
  const { format, error } = useFormatJson();
  return <JsonEditor onFormat={format} error={error} />;
}
```

---

## Dónde va cada página

| Tipo | Cuándo | Dónde |
| ---- | ------ | ----- |
| **De módulo** | Pertenece a una feature concreta | `modules/[modulo]/ui/pages/` |
| **Transversal** | Navegación global, errores, landing | `src/pages/` |
| **Pública** | Sin sesión | `pages/public/` o en el módulo |
| **Privada** | Con sesión | `pages/private/` o en el módulo |

**Regla:** si la página existe por una funcionalidad concreta → módulo. Si es general (404, home) → `src/pages/`.

```text
modules/auth/ui/pages/LoginPage.jsx
src/pages/NotFoundPage.jsx
```

---

## Ejemplo mínimo

```javascript
// application/FormatJsonUseCase.js
export function FormatJsonUseCase(content) {
  return JSON.stringify(JSON.parse(content), null, 2);
}

// ui/hooks/useFormatJson.js
export function useFormatJson() {
  const format = (content) => FormatJsonUseCase(content);
  return { format };
}

// ui/components/JsonEditor.jsx
export function JsonEditor({ onFormat }) {
  return <button onClick={() => onFormat('{"a":1}')}>Formatear</button>;
}

// ui/pages/WorkspacePage.jsx
export function WorkspacePage() {
  const { format } = useFormatJson();
  return <JsonEditor onFormat={format} />;
}
```
