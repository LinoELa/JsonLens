# Estructura del repositorio JsonLens

Referencia complementaria a `arquitecture.md` (arquitectura por módulo).

---

## Raíz del proyecto

```text
JsonLens/
├── project/        # documentacion del producto (no codigo)
├── public/         # archivos estaticos servidos tal cual
├── src/            # codigo fuente de la app
├── tests/          # pruebas
├── index.html      # entrada HTML de Vite
├── package.json
└── vite.config.js
```

---

## public/ — estaticos publicos

```text
public/
├── favicon.svg
└── icons.svg
```

---

## src/ — codigo de la aplicacion

```text
src/
├── main.jsx              # arranque React
├── App.jsx               # componente raiz
├── app/                  # router, createApp, providers
├── config/               # env y constantes globales
├── shared/               # piezas reutilizables entre modulos
├── pages/                # rutas transversales (public / private)
├── modules/              # features (auth, json-workspace, etc.)
└── assets/               # imagenes importadas desde codigo
```

| Carpeta | Responsabilidad |
| ------- | --------------- |
| **app** | bootstrap, router, providers |
| **config** | configuracion global |
| **shared** | storage, UI comun, utils, errores compartidos |
| **pages** | paginas transversales (404, landing) |
| **modules** | cada feature con domain / application / infrastructure / ui |
| **assets** | recursos importados en componentes |

**No usar `src/components/` suelto.** Los componentes van en `shared/infrastructure/ui/components/` (global) o en `modules/[modulo]/ui/components/` (de feature).

---

## Regla rapida: donde pongo X?

| Archivo | Ubicacion |
| ------- | --------- |
| `LoginPage.jsx` | `modules/auth/ui/pages/` |
| `JsonEditor.jsx` | `modules/json-workspace/ui/components/` |
| `Button` reutilizable | `shared/infrastructure/ui/components/` |
| `localStorageClient.js` | `shared/infrastructure/browser-storage/` |
| `config.js` | `src/config/` |
| `formatDate.js` | `shared/infrastructure/utils/` |
| `FormatJsonUseCase.js` | `modules/json-workspace/application/` |
| `favicon.svg` | `public/` |
