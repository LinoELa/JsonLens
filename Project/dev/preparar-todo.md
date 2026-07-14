# prepararTodo

## Que significa "preparar todo"

Cuando en este proyecto se diga prepara todo, no significa hacer solo el cambio puntual.

Significa revisar y cerrar todo el bloque relacionado: codigo, wiring, documentacion, tests y consistencia tecnica del frontend.

## Que se tiene que revisar

- codigo del bloque
- wiring y registro del flujo
- imports y exports
- nombres de funciones y archivos
- tests
- archivos @...md
- README y docs de referencia
- validaciones de entrada en el cliente
- manejo de errores
- coherencia con `project/dev/arquitecture.md` y `project/dev/structure.md`

## Checklist frontend

Referencia: `project/dev/arquitecture.md`

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

| Capa | Que revisar |
| ---- | ----------- |
| **domain** | entidades, reglas, sin dependencias de React |
| **application** | use cases (`*UseCase.js`), logica en el cliente |
| **infrastructure** | storage, `container.js`, wiring completo |
| **ui** | pages, components, hooks; hooks llaman use cases |
| **shared** | storage, layouts, componentes y utils reutilizables |
| **app** | router, providers globales |
| **pages** | rutas publicas vs privadas |

Revisar ademas:

- imports entre capas (sin ciclos: `ui → application → domain`)
- `ui` al mismo nivel que `infrastructure`
- validacion de JSON y archivos en el cliente
- sanitizacion de contenido renderizado (XSS)
- no guardar datos sensibles en localStorage sin necesidad
- carpetas nuevas con su `@...md`

## Seguridad (frontend)

### Validaciones

- validar JSON, archivos y entradas del usuario en el cliente
- mostrar errores claros y accionables
- limitar tamano de archivos si aplica

### Datos y storage

- no guardar secrets en localStorage
- revisar que no se expongan tokens innecesarios
- escapar o sanitizar contenido dinamico renderizado

### Archivos

- validar nombre, tipo y tamano en subida de archivos
- no confiar solo en la extension del archivo
- revisar riesgos de XSS al pintar JSON externo

## Que se tiene que corregir

- errores obvios
- nombres inconsistentes
- comentarios que no encajan con el codigo
- archivos nuevos sin documentar
- carpetas nuevas sin su @...md
- wiring incompleto
- logica de negocio en components o pages en lugar de use cases
- UI dentro de `infrastructure/` cuando debe ir en `ui/`

## Regla de idioma y nombres

- carpetas, archivos, funciones e identificadores en ingles
- comentarios del codigo en espanol

## Referencia madre

El archivo `@project.md` debe reflejar vision, MVP y roadmap del producto.

## Sistema de comentarios

Formato corto:

1. imports arriba (si aplica)
2. JSDoc breve con 1-2 bullets
3. codigo

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

## Seguridad npm

- `.npmrc` en la raiz con `ignore-scripts=true` como minimo
- `.npm-cache/` en `.gitignore`

```ini
ignore-scripts=true
```
