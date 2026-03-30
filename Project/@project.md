# JsonLens - Proyecto Completo

## Descripción

Analizador inteligente de JSON. Herramienta para validar, formatear, analizar y comparar archivos JSON con soporte visual avanzado.

## Objetivos

| Feature | Descripción |
| --- | --- |
| **Validación** | Detectar errores de formato JSON |
| **Formateo** | Pretty print, minificar, indentar |
| **Análisis** | Mostrar estructura en árbol |
| **Comparación** | Diff entre dos o más JSON |
| **Diferencias** | Campos añadidos, eliminados, modificados |
| **Similaridad** | Calcular porcentaje de coincidencia |
| **Visualización** | UI clara con árbol jerárquico |

## Alcance Completo

### Core (MVP)
- Validar JSON
- Formatear JSON
- Ver estructura en árbol
- Comparar dos documentos
- Mostrar diferencias básicas

### Expansiones Futuras
- Comparar múltiples JSON simultáneamente
- Calcular porcentaje de similaridad
- Exportar reportes de análisis
- Detectar patrones recurrentes
- Soporte para archivos grandes
- Historial de análisis
- Exportar a CSV/HTML
- Temas visuales personalizables
- API pública para integraciones

## Stack General

### Backend (adminJsonLens)
- Node.js, Express, JavaScript
- Módulos: core, json-processing
- Rutas RESTful para cada operación

### Frontend (JsonLens)
- React, Vite, JavaScript
- Features: json-process, settings
- UI modular y responsiva