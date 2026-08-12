/**
 * Errores compartidos de la aplicacion.
 * - Placeholder hasta definir jerarquia comun
 */

export class AppError extends Error {
  constructor(message, code = "APP_ERROR") {
    super(message);
    this.name = "AppError";
    this.code = code;
  }
}
