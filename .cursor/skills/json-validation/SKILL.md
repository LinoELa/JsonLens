---
name: json-validation
description: Validación, parseo seguro, diagnóstico de errores y análisis estructural de JSON en JsonLens. Usar en use cases de validación, formateo, diff y métricas.
---

# JSON — validación y análisis

## Reglas técnicas

- Parseo con try/catch y errores normalizados.
- Indicar posición o ruta del error cuando sea posible.
- No asumir forma fija del JSON (objetos, arrays, primitivos).
- No mutar el input original durante análisis.

## Resultado esperado

- Validez (válido / inválido) y mensaje legible.
- Métricas útiles: nodos, profundidad, tipos, claves frecuentes.

## Rendimiento

- Un solo recorrido cuando baste.
- Memoizar análisis costosos si el input no cambió.
- Evitar recalcular en cada tecla con archivos grandes.

## Ubicación en el repo

- Lógica: `modules/*/application/*UseCase.js`
- Entidades: `modules/*/domain/`

## Pruebas mínimas

- JSON válido simple y anidado.
- JSON inválido por sintaxis.
- Archivo grande (stress básico).
- Varios archivos con resultados mixtos.
