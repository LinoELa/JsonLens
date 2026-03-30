# Modular Rules

## Regla 1

La unidad principal del frontend es la feature, no la carpeta tecnica global.

## Regla 2

La orquestacion de pantallas y flujos vive en contenedores de feature.

## Regla 3

Los componentes de presentacion no deben concentrar logica de negocio pesada.

## Regla 4

Los hooks resuelven estado, efectos y coordinacion con servicios.

## Regla 5

Los servicios encapsulan llamadas HTTP y normalizan respuestas.

## Regla 6

Las utilidades compartidas viven en `utils/` solo cuando las usa mas de una feature.

## Regla 7

Nombres tecnicos en ingles y documentacion interna en espanol.

## Regla 8

Si un archivo nuevo no encaja claramente en `core-ui`, `json-tools`, `services`, `hooks` o `utils`, hay que revisar arquitectura antes de crearlo.
