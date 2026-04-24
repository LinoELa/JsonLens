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

## Checklist por capa

### Frontend JsonLens

C:-------\JSONLENS-PROJECT\adminJsonLens

- features, components, hooks, services y utils
- paginas y estado de UI
- llamadas HTTP y manejo de errores
- contratos esperados desde backend
- proteccion de rutas si aplica
- control de permisos y visibilidad por rol
- sanitizacion basica de datos mostrados en UI
- no exponer secretos, tokens o datos sensibles en cliente
- revision de variables de entorno usadas en frontend

### Backend adminJsonLens

C:---------\JSONLENS-PROJECT\JsonLens

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
- wiring incompleto
- validaciones no conectadas
- endpoints no documentados
- permisos no conectados
- respuestas inseguras o demasiado amplias
- logs inseguros
- uso incorrecto de variables sensibles

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
- marcar decisiones importantes del flujo
- evitar comentarios obvios
- indicar riesgos o decisiones de seguridad cuando aplique

Patron visual estandar para todo el proyecto:

1. separador de bloque para imports
2. separador de bloque para setup principal
3. bloque JSDoc corto con intencion del archivo
4. separador de bloque para rutas o flujo principal
5. comentarios de linea solo en pasos importantes

Formato recomendado:

- usar separadores con iguales para ubicar secciones grandes
- usar etiquetas de contexto en JSDoc como @ROUTER, @SERVICE, @CONTROLLER, @USECASE
- mantener bullets cortos dentro del JSDoc
- si un archivo toca seguridad, dejarlo indicado en el comentario del archivo

Ejemplo de orden esperado:

- IMPORTS
- SETUP PRINCIPAL
- BLOQUE DE FLUJO
- EXPORT

Regla de alcance:

- este formato aplica por igual a frontend y backend
- si un archivo es pequeno, se puede simplificar, pero mantener la misma idea

### Estructura definida

```text

// ======================= NOTES ==================================
/**
 * Comenta el siguiente archivo de forma clara y concisa.
 *
 * - Describe el propósito general del archivo
 * - Explica qué responsabilidades tiene dentro del módulo
 * - Resume las funciones o componentes principales sin entrar en demasiado detalle
 * - Mantén los comentarios cortos, profesionales y fáciles de leer
 * - Usa un estilo genérico que pueda reutilizarse en otros archivos
 * - No repitas el código, solo explica su intención
 *
 * Devuelve únicamente el bloque de comentario inicial en formato JSDoc.
 */
// ======================= IMPORTS =========================================
import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.js";


// ======================= CODEBASE ============================

/*enroutamiento princpal*/
const router = express.Router();


/* Registro de usuarios nuevos.*/
router.post("/register", validateRequest(registerSchema), registerController);

/* Login y generacion del token JWT. */
router.post("/login", validateRequest(loginSchema), loginController);

/* Logout y limpieza de la cookie del token. */
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
