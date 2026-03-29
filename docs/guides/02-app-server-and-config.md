# App, Entry and Config

## Objetivo

Esta guia explica la base tecnica que arranca el frontend.

## Archivos clave

- `src/main.jsx`
- `src/App.jsx`
- `vite.config.js`

## Responsabilidad de cada archivo

### `main.jsx`

- arranca React
- monta `App` en el nodo raiz
- aplica estilos globales

### `App.jsx`

- organiza el layout base de la aplicacion
- monta modulos o secciones principales

### `vite.config.js`

- configura entorno de desarrollo
- permite definir proxy para API de `adminJsonLens`

## Resultado esperado de esta fase

Al cerrar esta fase, la app ya debe arrancar y renderizar la pantalla base.

## Siguiente paso

La siguiente guia natural es [`03-modular-wiring.md`](./03-modular-wiring.md).
