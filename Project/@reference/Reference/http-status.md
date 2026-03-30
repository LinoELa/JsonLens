# HTTP Status

## Que son

Los codigos HTTP indican el resultado de una peticion del frontend al backend.

## Codigos mas utiles para `JsonLens`

### `200 OK`

La peticion fue correcta y hay respuesta util.

### `201 Created`

Se creo un recurso nuevo.

No es central en el MVP actual, pero puede aparecer en futuras features.

### `204 No Content`

La operacion salio bien y no hace falta body.

### `400 Bad Request`

El frontend envio una request mal formada.

### `401 Unauthorized`

El usuario no esta autenticado o la sesion no es valida.

### `403 Forbidden`

La cuenta existe pero no tiene permisos suficientes.

### `404 Not Found`

La ruta o recurso no existe.

### `422 Unprocessable Entity`

La request tiene forma valida, pero los datos no cumplen el contrato.

### `429 Too Many Requests`

Hay rate limit temporal.

### `500 Internal Server Error`

Error interno del backend.

### `503 Service Unavailable`

Servicio temporalmente no disponible.

## Regla practica para el frontend

En `JsonLens`, el frontend debe mapear estos codigos a mensajes claros para la UI:

- mensaje tecnico para desarrollo
- mensaje legible para personas usuarias
- accion sugerida cuando aplique
