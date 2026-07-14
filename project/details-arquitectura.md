# Arquitectura JsonLens (reglas)

JsonLens es **100% frontend**: validar, formatear, comparar y analizar JSON en el navegador.

| Área   | Detalle                      |
| ------ | ---------------------------- |
| Puerto | `5173`                       |
| Patrón | Hexagonal + vertical slicing |

Consulta rápida de carpetas → `docs.md`  
Ejemplos de código → `details-code.md`

---

## Las 4 capas (en una frase)

- **domain** — Qué es la cosa y qué reglas debe cumplir
- **application** — Qué acciones puede hacer el usuario
- **infrastructure** — Cómo se guarda, lee o conecta con el navegador
- **ui** — Pantallas React (pages, components, hooks)

La idea: **no mezclar toda la lógica dentro de un componente o una page**.

---

## Estructura de un módulo

```text
modules/[nombre-modulo]/
├── domain/           # opcional
├── application/
├── infrastructure/   # opcional
│   ├── storage/
│   └── container.js
└── ui/
    ├── pages/
    ├── components/
    └── hooks/
```

**Reglas fijas:**

- `ui` va al mismo nivel que `infrastructure`, **no dentro**.
- La lógica de negocio va en `application/`, no en pages ni components.
- No crear carpetas vacías solo para “cumplir la plantilla”.

---

## 4 preguntas (en este orden)

1. ¿Es una **regla** del proyecto? → `domain`
2. ¿Es una **acción** (formatear, guardar, comparar)? → `application`
3. ¿Toca **localStorage**, archivos o APIs del navegador? → `infrastructure`
4. ¿Es **React** (pantalla, botón, modal)? → `ui`

---

## Hexagonal (en 30 segundos)

La app sabe **qué** necesita (guardar un documento), no **cómo** se guarda (localStorage vs IndexedDB).

```text
SaveDocumentUseCase → DocumentRepository → LocalStorageDocumentRepository
```

Si cambias el almacenamiento, tocas sobre todo `infrastructure`, no toda la app.

---

## Vertical slicing (en 30 segundos)

Cada **feature** vive en su módulo, con sus capas dentro:

```text
modules/formatter/
modules/comparator/
modules/documents/
```

Si arreglas el comparador, trabajas en `modules/comparator/`, no buscas en carpetas globales de hooks o services.

---

## Capa `domain`

**Qué va:** entidades, reglas propias, contratos (repositorios).

**Cuándo SÍ usarla:**

- El documento debe tener id y nombre
- El nombre no puede estar vacío
- El contenido debe ser JSON válido antes de guardarse

**Cuándo NO hace falta:**

- Solo llamas a `JSON.parse()` sin reglas extra → va directo en `application`
- Envolver `JSON.parse` en un “servicio de dominio” sin añadir nada = capa de más

**Pregunta clave:** ¿Esto describe qué es algo o qué reglas debe cumplir?

→ Código de ejemplo en `details-code.md` (sección domain)

---

## Capa `application`

**Qué va:** casos de uso (`*UseCase.js`) — formatear, validar, guardar, comparar…

**Qué hace un use case:** recibe datos, aplica reglas, llama repositorios si hace falta, devuelve resultado.

**Qué NO debe hacer:** `useState`, JSX, modales, toasts.

**Cuándo SÍ:** puedes describirlo con un verbo (formatear, guardar, comparar).

**Cuándo NO:** abrir modal, cambiar pestaña, mostrar/ocultar panel → eso es `ui`.

**Pregunta clave:** ¿Es una acción real del usuario o de la app?

→ Código en `details-code.md` (application)

---

## Capa `infrastructure`

**Qué va:** localStorage, IndexedDB, portapapeles, lectura/descarga de archivos, `container.js`.

**Cuándo NO hace falta:**

- `JSON.parse`, `JSON.stringify`, `.map`, `.filter` → no son infraestructura (no hablan con el exterior)

**Qué es `container.js`:** conecta use cases con implementaciones concretas (wiring).

**Pregunta clave:** ¿Accede a almacenamiento, archivos o servicios del navegador?

→ Código en `details-code.md` (infrastructure)

---

## Capa `ui`

**Qué va:** pages, components, hooks, estado visual.

**El componente** muestra y dispara eventos; **el hook** conecta React con use cases; **la page** une hook + components (delgada).

**Qué puede quedarse en ui:** modal abierto/cerrado, pestaña activa, loading visual.

**Qué NO:** validar reglas de negocio + guardar en localStorage en la misma page.

**Pregunta clave:** ¿Depende de React o de la pantalla?

→ Código en `details-code.md` (ui)

---

## No todas las features necesitan las 4 capas

Adapta la estructura a la complejidad real.

### Formatear JSON → `application` + `ui`

No necesita `domain` (sin reglas propias extra) ni `infrastructure` (`JSON.parse` no es storage).

### Guardar documentos → las 4 capas

Hay reglas (domain), acción (application), localStorage (infrastructure), pantalla (ui).

### Abrir un modal → solo `ui`

`useState(false)` basta. Sin use case ni domain.

### Copiar al portapapeles → `application` + `infrastructure` + `ui`

Acción + API del navegador + botón.

→ Árboles de carpetas en `details-code.md` (features por complejidad)

---

## Cómo construir una pantalla

**Si primero importa cómo se ve:**

```text
Page (boceto) → Components → Hook → Use cases → Page final
```

**Si primero importa la lógica (validar, comparar):**

```text
Use case → Hook → Component → Page
```

**Si hay almacenamiento:**

```text
Contrato → Implementación → Use case → container.js → Hook → UI
```

---

## Dónde va cada página

- Feature concreta → `modules/[modulo]/ui/pages/`
- 404, home, landing → `src/pages/`
- Público/privado lo decide el **router**, no la carpeta del módulo

```text
modules/auth/ui/pages/LoginPage.jsx
src/pages/NotFoundPage.jsx
```

---

## Flujo de una acción (guardar documento)

```text
Botón → Hook → SaveDocumentUseCase → createJsonDocument → Repository → localStorage
```

| Parte          | Responsabilidad      |
| -------------- | -------------------- |
| Button         | Click del usuario    |
| Hook           | Estado y errores     |
| Use case       | Orquesta la acción   |
| Domain         | Reglas del documento |
| Infrastructure | Persistencia real    |

→ Código completo en `details-code.md` (guardar documentos)

---

## Dependencias permitidas

```text
ui → application → domain
ui → infrastructure/container
application → domain
infrastructure → domain
```

**Prohibido:**

- `domain` importando React u otras capas
- `application` importando React o `localStorage` directo
- Lógica de negocio repartida en muchos components

---

## Qué no hacer

- Toda la lógica en una page
- Capas vacías “por estética”
- Un use case por cada función trivial
- `localStorage` en diez sitios distintos
- Reglas de negocio dentro de un component

---

## Convenciones de nombres

- Use cases: `FormatJsonUseCase.js`
- Hooks: `useFormatJson.js`
- Contratos: `DocumentRepository.js`
- Implementaciones: `LocalStorageDocumentRepository.js`
- Pages: `FormatterPage.jsx`

---

## Checklist nueva feature

1. ¿Qué acción hace el usuario?
2. ¿Hay reglas propias? → domain
3. ¿Hay que persistir? → infrastructure
4. ¿Qué muestra React?
5. ¿Page de módulo o transversal?

---

## Ejemplos rápidos de decisión

| Situación                          | Dónde          |
| ---------------------------------- | -------------- |
| Nombre de documento no vacío       | domain         |
| Formatear JSON                     | application    |
| Escribir en localStorage           | infrastructure |
| Modal abierto/cerrado              | ui             |
| Mostrar error en pantalla          | ui             |
| Solo `JSON.parse` sin reglas extra | application    |

---

## Regla final

No empieces por “¿qué carpetas creo?”. Empieza por “¿qué responsabilidades tiene esta feature?”.

La mejor arquitectura **no** es la que tiene más archivos. Es la que deja claro dónde va cada cosa sin complejidad de más.

**Código:** `details-code.md`
