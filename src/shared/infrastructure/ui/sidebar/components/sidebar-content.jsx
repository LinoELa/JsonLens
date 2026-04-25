import { cn } from "@/lib/utils";

/**
 * @COMPONENT SidebarContentComponent
 * Contenedor principal del contenido navegable del sidebar.
 */
export function SidebarContentComponent({ className, children }) {
  return (
    <div className={cn("flex-1 space-y-4 overflow-auto p-3", className)}>
      {children}
    </div>
  );
}
