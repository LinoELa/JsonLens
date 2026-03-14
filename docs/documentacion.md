# Estructura de documentación y gestión del proyecto

## Gestión del proyecto

Para organizar el desarrollo del proyecto utilizo tres herramientas principales:

- Trello  
  Para la gestión de tareas y seguimiento del progreso.

- Notion  
  Para la documentación del proyecto y la base de conocimiento.

- GitHub  
  Para el control de versiones del código y la gestión de funcionalidades mediante branches.

---

## Trello

En Trello organizo el proyecto por **fases de desarrollo**.

Cada fase representa una parte importante del proyecto, por ejemplo:

Fase 1  
Fase 2  
Fase 3

Dentro de cada fase hay **checklists con las tareas específicas** que deben completarse.

Ejemplo:

Fase 1

- Crear repositorios
- Configurar proyecto frontend
- Configurar proyecto backend
- Preparar estructura inicial
- Configurar entorno de desarrollo

Esto permite ver fácilmente el progreso del proyecto.

---

## Notion

En Notion documento todo el conocimiento relacionado con el proyecto.

Incluye:

- Conceptos de software
- Decisiones técnicas
- Arquitectura del proyecto
- Stack tecnológico
- Notas de aprendizaje
- Ideas futuras

Funciona como una **base de conocimiento del proyecto**.

---


## GitHub

En GitHub gestiono el código del proyecto y las funcionalidades mediante branches.

Cada **fase del proyecto corresponde a una feature**.

Ejemplo:

Fase 1 → feature 1

Las ramas siguen una estructura como:

- feature/1-setup-project
- feature/2-json-validation
- feature/3-json-formatter

También se pueden crear ramas más específicas dentro de una fase:

- feature/1.1-project-structure
- feature/1.2-frontend-setup
- feature/1.3-backend-setup

Esto permite trabajar cada funcionalidad de forma organizada y mantener un historial claro de desarrollo.

**Los commits dentro de cada branch** deben representar acciones concretas y seguir una convención clara.

Formato recomendado:

type: descripción corta

Tipos comunes:

- feat: nueva funcionalidad
- fix: corrección de errores
- docs: cambios en documentación
- refactor: refactorización de código
- chore: tareas internas o configuración
- test: pruebas

Ejemplo:

Branch

feature/1-setup-project

Commits dentro de esa branch:

feat: initialize frontend project with Vite
feat: create base project structure
feat: configure eslint and prettier
feat: add basic README documentation

De esta forma, cada branch agrupa una funcionalidad o fase concreta, y cada commit refleja un paso específico dentro de ese trabajo.
