# JsonLens

Estructura inicial del frontend JsonLens. Contiene módulos, utilidades compartidas y archivos de ejemplo.

Para iniciar (desde la carpeta JsonLens):

```bash
npm install
npm run dev
```
# JsonLens

`JsonLens` es la interfaz frontend del proyecto.

## Puertos recomendados

Para evitar conflictos en desarrollo, usa esta convención desde el inicio:

- Backend `adminJsonLens`: `http://localhost:5700`
- Frontend `JsonLens`: `http://localhost:5600`

Regla práctica:

- Backend: `57xx`
- Frontend: `56xx`

Su objetivo es ofrecer una herramienta visual, clara y práctica para trabajar con archivos JSON. La aplicación está orientada a facilitar la validación, el formateo, la visualización estructural y la comparación de documentos desde una experiencia sencilla e intuitiva.

## Funcionalidades previstas

El frontend está planteado para cubrir las siguientes capacidades:

- Validación de documentos JSON
- Formateo automático de contenido JSON
- Visualización de estructuras jerárquicas
- Comparación entre varios documentos JSON
- Detección de diferencias de estructura y valores
- Identificación de campos añadidos, eliminados o modificados
- Visualización de similitudes entre documentos JSON

## Objetivo del proyecto

El objetivo de `JsonLens` es convertirse en una aplicación web moderna para analizar y comparar documentos JSON de forma visual. La propuesta busca ofrecer una experiencia más clara, útil y accesible que la de herramientas tradicionales, apoyándose en una interfaz cómoda y en resultados fáciles de interpretar.

## Stack tecnológico

- React
- Vite
- JavaScript
- Monaco Editor
- Ajv
- jsondiffpatch

## Estado actual

El proyecto se encuentra en una fase inicial de desarrollo.

La primera meta es construir un MVP funcional que permita:

1. Pegar o cargar un JSON
2. Validarlo
3. Formatearlo
4. Visualizar su estructura
5. Comparar dos documentos JSON y mostrar diferencias básicas

## Puesta en marcha

### Instalar dependencias

```bash
npm install
```

### Iniciar en desarrollo

```bash
npm run dev
```

### Generar build de producción

```bash
npm run build
```

### Previsualizar build

```bash
npm run preview
```

## Estructura inicial recomendada

```bash
src/
  components/
  pages/
  hooks/
  services/
  utils/
  App.jsx
  main.jsx
```

## Relación con el proyecto

`JsonLens` forma parte del ecosistema principal y trabaja junto al backend `adminJsonLens`, encargado de la validación, el análisis y la comparación de archivos JSON.
