# GitHub: Estructura de gestión

En GitHub gestiono el código del proyecto mediante una estrategia simple de ramas.

La idea es separar:

* código en producción
* código en desarrollo
* desarrollo de nuevas funcionalidades
* corrección de errores

Esto permite mantener el proyecto organizado y con un historial claro.

---

# Estructura de ramas

El repositorio utiliza estas ramas:

```text
main
dev
feature/*
bugfix/*
hotfix/*
```

---

# Rama main

La rama `main` representa la versión estable del proyecto.

## Reglas

* Solo contiene código listo para producción
* No se desarrolla directamente aquí
* Solo recibe cambios desde `dev` o `hotfix`

## Ejemplo

```text
main
```

---

# Rama dev

La rama `dev` es la rama principal de desarrollo.

Aquí se integran todas las funcionalidades antes de pasar a producción.

## Estructura

```text
main
↑
dev
```

## Reglas

* Todas las features se crean desde `dev`
* Las features se fusionan primero en `dev`
* Cuando todo está estable, `dev` se mergea a `main`

---

# Feature branches

Las nuevas funcionalidades se desarrollan en ramas `feature`.

## Ejemplos

```text
feature/1-setup-project
feature/2-json-validation
feature/3-json-formatter
```

## Subfases posibles

```text
feature/1.1-project-structure
feature/1.2-frontend-setup
feature/1.3-backend-setup
```

## Flujo

```text
dev
↑
feature/*
```

## Cuando termina

```text
feature → merge → dev
```

---

# Bugfix branches

Las correcciones de errores detectados durante desarrollo se hacen en `bugfix`.

## Ejemplos

```text
bugfix/json-parse-error
bugfix/editor-crash
```

## Flujo

```text
dev
↑
bugfix/*
```

## Luego

```text
bugfix → merge → dev
```

---

# Hotfix branches

Los `hotfix` corrigen errores críticos en producción.

Se crean directamente desde `main`.

## Ejemplos

```text
hotfix/security-error
hotfix/api-crash
```

## Flujo

```text
main
↑
hotfix/*
```

## Luego

```text
hotfix → merge → main
hotfix → merge → dev
```

Esto mantiene sincronizadas ambas ramas.

---

# Convención de commits

## Formato

```text
type: descripción corta
```

## Tipos comunes

```text
feat: nueva funcionalidad
fix: corrección de errores
docs: cambios en documentación
refactor: refactorización
chore: tareas internas
test: pruebas
```

## Ejemplos

```text
feat: implement JSON formatter
fix: handle invalid JSON input
```

---

# Flujo general del proyecto

```text
main (producción)
↑
dev (integración)
↑
feature / bugfix

hotfix → directamente desde main
```

---

# Comandos Git útiles

## Clonar repositorio

```bash
git clone <repo>
```

## Cambiar de rama

```bash
git checkout nombre-rama
```

## Crear rama feature

```bash
git checkout dev
git pull
git checkout -b feature/nombre-feature
```

## Crear rama bugfix

```bash
git checkout dev
git pull
git checkout -b bugfix/nombre-bug
```

## Crear rama hotfix

```bash
git checkout main
git pull
git checkout -b hotfix/nombre-fix
```

## Añadir cambios

```bash
git add .
```

## Crear commit

```bash
git commit -m "feat: descripción del cambio"
```

## Subir rama al repositorio

```bash
git push origin nombre-rama
```

## Merge de feature a dev

```bash
git checkout dev
git pull
git merge feature/nombre-feature
git push
```

## Merge de dev a main

```bash
git checkout main
git pull
git merge dev
git push
```

## Merge de hotfix

```bash
git checkout main
git merge hotfix/nombre-fix
git push

git checkout dev
git merge hotfix/nombre-fix
git push
```

---

# Resumen visual

```text
main (producción)
↑
dev (integración)
↑
feature / bugfix

hotfix → desde main
```

---

# Ventajas de este flujo

```text
desarrollo organizado
corrección de errores separada
producción estable
historial limpio del proyecto
```
