# Changelog

Cambios notables de **JsonLens**.  
Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).  
Versionado: [SemVer](https://semver.org/lang/es/).

## [Unreleased]

### Added

- `CHANGELOG.md` del proyecto.
- `project/architecture.md` — stack, carpetas, rutas y reglas (doc único).
- `project/code.md` — ejemplos (utils / helpers / hooks / page).
- `project/backlog.md` — features `feature/{id}` (sustituye Trello).
- ESLint: exports shadcn (`buttonVariants`, `useSidebar`) permitidos.

### Changed

- Docs consolidados: todo el mapa del repo vive en `architecture.md`.
- README y AGENTS alineados con la doc actual.
- `useIsMobile` sin `setState` síncrono en el effect.

### Removed

- `project/docs.md`, `notes.md`, `details-arquitectura.md`, `details-code.md`.
- `project/arquitectura-reactjs.md` (plantilla ajena DOSAccess).
- Plantilla incorrecta `CHANELOG.md`.

## [0.0.0] - 2026-08-13

### Added

- Base del repo (React + Vite + Tailwind + shadcn).
- Estructura modular `src/`: `config`, `lib`, `components`, `pages`, `data/browser`.

[unreleased]: https://github.com/LinoELa/JsonLens/compare/v0.0.0...HEAD
[0.0.0]: https://github.com/LinoELa/JsonLens/releases/tag/v0.0.0
