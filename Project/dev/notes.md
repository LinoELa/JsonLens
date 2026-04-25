# Notas de Sidebar y diagnóstico de `Ctrl+Enter`

## ========== 25/04/2026 ==========
## Mapa contextual de rutas (sin repetición)

Diseño: Contexto - Componente - Layout
- Contexto: lógica.
- Componente: estructura visual (HTML/CSS).
- Layout: composición de contexto + componentes.

```text
src/shared/infrastructure/ui/sidebar/
|-- context/
|   `-- sidebar-context.jsx
|-- components/
|   |-- sidebar-header.jsx
|   |-- sidebar-content.jsx
|   `-- sidebar-footer.jsx
|-- layout/
|   `-- sidebar-layout.jsx
|-- sidebar.jsx
`-- (entrypoints del modulo sidebar)
```
