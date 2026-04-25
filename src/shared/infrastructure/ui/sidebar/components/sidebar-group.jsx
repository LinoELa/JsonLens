import { cn } from "@/lib/utils";

/**
 * @COMPONENT SidebarGroupComponent
 * Agrupa secciones funcionales del sidebar.
 */
export function SidebarGroupComponent({ className, children }) {
  return <section className={cn("space-y-2", className)}>{children}</section>;
}

/**
 * @COMPONENT SidebarGroupLabelComponent
 * Etiqueta superior de cada grupo del sidebar.
 */
export function SidebarGroupLabelComponent({ className, children }) {
  return (
    <p
      className={cn(
        "px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * @COMPONENT SidebarGroupContentComponent
 * Contenedor de contenido para un grupo de sidebar.
 */
export function SidebarGroupContentComponent({ className, children }) {
  return <div className={cn("space-y-1", className)}>{children}</div>;
}
