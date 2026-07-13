# prepararTodo

## Que significa "preparar todo"

Cuando en este proyecto se diga prepara todo, no significa hacer solo el cambio puntual.

Significa revisar y cerrar todo el bloque relacionado en frontend y backend, incluyendo seguridad, integracion, documentacion y consistencia tecnica.

## Que se tiene que revisar

Si se pide prepara todo, hay que revisar:

- codigo del bloque
- wiring y registro del flujo
- imports y exports
- nombres de funciones y archivos
- contratos, endpoints y uso de servicios
- tests
- archivos @...md
- README y docs de referencia
- reglas de nombres en nomenclatura
- validaciones de entrada y salida
- seguridad del flujo completo
- manejo de errores y logs
- coherencia con `project/dev/arquitecture.md` y `project/dev/structure.md`

## Checklist por capa

### Frontend JsonLens

`C:\...\JSONLENS-PROJECT\JsonLens`

Referencia de arquitectura: `project/dev/arquitecture.md`

Estructura base:

```text
src/
├── app/              # router, providers
├── shared/           # domain + infrastructure reutilizable
├── pages/            # public / private (rutas transversales)
└── modules/
    └── [modulo]/
        ├── domain/
        ├── application/
        ├── infrastructure/
        └── ui/
```

Revisar por capa:

| Capa | Que revisar |
| ---- | ----------- |
| **domain** | entidades, puertos, errores de dominio, sin dependencias de React/HTTP |
| **application** | use cases (`*UseCase.js`), orquestacion, validaciones de negocio |
| **infrastructure** | APIs (`http/`), storage, `container.js`, wiring completo |
| **ui** | pages, components, hooks; hooks llaman use cases, no logica de negocio directa |
| **shared** | `apiClient`, storage, layouts y componentes reutilizables |
| **app** | router, registro de rutas, providers globales |
| **pages** | rutas publicas vs privadas segun corresponda |

Revisar ademas:

- imports y exports entre capas (sin ciclos: `ui → application → domain`)
- `ui` al mismo nivel que `infrastructure`, no dentro
- paginas de feature en el modulo; paginas transversales en `pages/`
- llamadas HTTP y manejo de errores
- contratos esperados desde backend
- proteccion de rutas si aplica
- control de permisos y visibilidad por rol
- sanitizacion basica de datos mostrados en UI
- no exponer secretos, tokens o datos sensibles en cliente
- revision de variables de entorno usadas en frontend
- carpetas nuevas con su `@...md` (`@modules.md`, `@shared.md`, etc.)

### Backend adminJsonLens

`C:\...\JSONLENS-PROJECT\adminJsonLens`

- modules, controllers, dto y services
- middlewares y utilidades compartidas
- registro en index.module.js y module wiring
- endpoints y codigos HTTP documentados
- validacion de entrada en todos los endpoints
- autorizacion y control de acceso por rol o permiso
- sanitizacion y normalizacion de datos
- manejo seguro de errores
- logs sin exponer datos sensibles
- proteccion de secretos y variables de entorno
- revision de consultas para evitar inyecciones
- revision de ficheros, uploads o rutas dinamicas si existen

## Seguridad, obligatoria en preparar todo

Ademas del cambio funcional, siempre hay que revisar seguridad minima del bloque.

### Validaciones

- validar todos los datos de entrada
- no confiar en datos del frontend
- validar params, query, body y headers
- validar tipos, formatos, enums, ids y rangos
- rechazar campos no esperados si el caso lo requiere

### Autenticacion y autorizacion

- confirmar si el endpoint es publico o privado
- revisar si necesita rol, permiso o ownership
- no dejar endpoints sensibles sin guard o middleware
- revisar que frontend no muestre acciones no permitidas
- comprobar que backend no dependa solo de ocultar botones en UI

### Datos sensibles

- no exponer passwords, tokens, secrets o datos internos
- no devolver stack trace al cliente
- no loggear credenciales, cookies, tokens o datos personales sensibles
- revisar respuestas del backend para no filtrar campos de mas
- revisar mappers o dto de salida

### Variables de entorno y configuracion

- no hardcodear secrets
- usar `.env` solo donde corresponda
- no subir archivos sensibles al repositorio
- revisar `.gitignore`
- documentar nuevas variables en README o archivo de entorno de ejemplo

### Endpoints y servicios

- revisar codigos HTTP correctos
- devolver errores consistentes
- limitar superficie publica innecesaria
- comprobar que un endpoint no permita operaciones no previstas
- revisar dependencias externas, timeouts y manejo de fallo

### Base de datos y persistencia

- evitar consultas inseguras o concatenacion manual
- revisar filtros, paginacion y ordenacion
- validar ids antes de consultar
- comprobar integridad minima del dato antes de guardar
- revisar migraciones o cambios de esquema relacionados

### Archivos y contenido dinamico

- validar nombre, tipo y tamano si hay subida de archivos
- no confiar en extensiones enviadas por cliente
- revisar rutas y accesos a ficheros
- escapar o sanitizar contenido dinamico si puede renderizarse
- revisar posibles riesgos de XSS si se pinta contenido externo

## Que se tiene que corregir

Ademas del cambio principal, tambien hay que corregir:

- errores obvios
- nombres inconsistentes
- comentarios que no encajan con el codigo real
- archivos nuevos sin documentar
- carpetas nuevas sin su @...md
- wiring incompleto (`container.js`, router, registro de modulos)
- validaciones no conectadas
- endpoints no documentados
- permisos no conectados
- respuestas inseguras o demasiado amplias
- logs inseguros
- uso incorrecto de variables sensibles
- logica de negocio metida en componentes o hooks en lugar de use cases
- UI dentro de `infrastructure/` cuando debe ir en `ui/`

## Regla de idioma y nombres

Siempre revisar:

- carpetas, archivos, endpoints, funciones e identificadores en ingles
- comentarios del codigo en espanol
- documentacion interna clara para el equipo

## Referencia madre del proyecto

Si el cambio toca la vision del producto, hay que confirmarlo antes de seguir.

El archivo @project.md debe reflejar:

- vision del producto
- problema que resuelve
- rol de frontend y backend
- MVP real
- roadmap recomendado
- decisiones sensibles de arquitectura y seguridad si afectan al producto

## Sistema de comentarios

La idea no es comentar por comentar.

Cada archivo debe:

- explicar intencion cuando aporte valor
- evitar comentarios obvios
- indicar riesgos o decisiones de seguridad cuando aplique

Formato estandar (corto):

1. imports arriba (si aplica)
2. JSDoc breve con 1-2 bullets
3. codigo

No usar separadores tipo `NOTES`, `IMPORTS`, `BLOQUE DE FLUJO`.

### Ejemplo frontend

```javascript
import App from "../App.jsx";

/**
 * Punto de montaje de la aplicacion React.
 * - Reservado para providers globales (router, context, etc.)
 */

export default function createApp() {
  return <App />;
}
```

### Ejemplo backend

```javascript
import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.js";

/**
 * Rutas de autenticacion del modulo auth.
 * - Registro, login y logout
 */

const router = express.Router();

router.post("/register", validateRequest(registerSchema), registerController);
router.post("/login", validateRequest(loginSchema), loginController);
router.post("/logout", logoutController);

export default router;
```

## Seguridad npm obligatoria

En este proyecto, "preparar todo" tambien incluye asegurar la configuracion de npm a nivel de proyecto.

Reglas obligatorias:

- crear `.npmrc` en la raiz del proyecto, al lado de `package.json`
- mantener como minimo:
  - `ignore-scripts=true`
- aplicar endurecimiento adicional recomendado:
  - `audit=true`
  - `audit-level=high`
  - `save-exact=true`
  - `cache=.npm-cache`
- crear la carpeta local `.npm-cache/`
- agregar `.npm-cache/` en `.gitignore`
- aplicar exactamente la misma politica tambien en `adminJsonLens`

Contenido base obligatorio en `.npmrc`:

```ini
# Seguridad del proyecto:
# evita ejecutar scripts automaticos al instalar dependencias
ignore-scripts=true
```
