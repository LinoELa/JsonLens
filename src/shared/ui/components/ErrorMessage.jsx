/**
 * Mensaje de error reutilizable en la UI.
 */

export default function ErrorMessage({ children }) {
  if (!children) return null;

  return (
    <p role="alert" className="text-sm text-destructive">
      {children}
    </p>
  );
}
