/**
 * Marcador visual para secciones en construccion.
 */

export default function Placeholder({ children }) {
  return (
    <div className="rounded-md border border-dashed border-border p-2 text-muted-foreground">
      {children}
    </div>
  );
}
