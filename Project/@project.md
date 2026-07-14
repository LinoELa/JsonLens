# JsonLens - Proyecto

## Stack

| Tecnología | Para qué sirve |
| ---------- | -------------- |
| **React** | UI por componentes |
| **Vite** | Build y dev server |
| **JavaScript** | Lenguaje del frontend |
| **Radix UI** | Primitivos accesibles (tabs, dialogs, menus, tooltips) |
| **Tailwind CSS** | Estilos rápidos y consistentes |
| **Monaco Editor** | Editor de código JSON |
| **Ajv** | Validación JSON con schema |
| **jsondiffpatch** | Comparación y diff entre documentos |
| **react-resizable-panels** | Paneles redimensionables (editor \| análisis) |
| **lucide-react** | Iconos del toolbar y UI |

Toda la lógica se ejecuta en el cliente (sin backend).

## Descripción

Analizador inteligente de JSON en el navegador. Herramienta para validar, formatear, analizar y comparar archivos JSON con soporte visual.

## Objetivos

| Feature           | Descripción                              |
| ----------------- | ---------------------------------------- |
| **Validación**    | Detectar errores de formato JSON         |
| **Formateo**      | Pretty print, minificar, indentar        |
| **Análisis**      | Mostrar estructura en árbol              |
| **Comparación**   | Diff entre dos o más JSON                |
| **Diferencias**   | Campos añadidos, eliminados, modificados |
| **Similaridad**   | Calcular porcentaje de coincidencia      |
| **Visualización** | UI clara con árbol jerárquico            |

## MVP

- Validar JSON
- Formatear JSON
- Ver estructura en árbol
- Comparar dos documentos
- Mostrar diferencias básicas

## Expansiones futuras

- Comparar múltiples JSON
- Exportar reportes
- Soporte para archivos grandes
- Temas visuales
- Historial local
