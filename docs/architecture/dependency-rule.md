# Dependency Rule

## Idea principal

Las dependencias del frontend deben ser simples y predecibles.

## Flujo permitido

```text
main.jsx
  -> App.jsx
  -> pages / features
  -> components
  -> hooks
  -> services
  -> utils
```

## Dependencias validas

### `main.jsx`

Puede depender de:

- React
- ReactDOM
- `App.jsx`
- estilos globales

### `App.jsx`

Puede depender de:

- layout general
- routing (si se agrega)
- modulos de feature

### `components/*`

Puede depender de:

- hooks
- utilidades
- estilos del componente

### `hooks/*`

Puede depender de:

- React hooks
- servicios API
- utilidades puras

### `services/*`

Puede depender de:

- `fetch` / cliente HTTP
- configuracion de entorno

### `utils/*`

Debe ser agnostico de React cuando sea posible.

## Dependencias que debemos evitar

- que un componente de presentacion llame fetch directo si ya existe servicio
- que un hook dependa de detalles visuales concretos
- que `utils` importe componentes React
- dependencias circulares entre features

## Regla practica

Si un archivo necesita demasiadas dependencias cruzadas, probablemente esta mal ubicado.
