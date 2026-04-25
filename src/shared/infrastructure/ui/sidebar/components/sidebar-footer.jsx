import { cn } from "@/lib/utils";

/**
 * @COMPONENT SidebarFooterComponent
 * Renderiza el pie del sidebar para acciones o estado.
 */
export function SidebarFooterComponent({ className, children }) {
  return (
    <footer className={cn("border-t border-sidebar-border p-3", className)}>
      {children}
    </footer>
  );
}
