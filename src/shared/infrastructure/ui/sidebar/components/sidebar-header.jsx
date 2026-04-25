import { cn } from "@/lib/utils";

/**
 * @COMPONENT SidebarHeaderComponent
 * Renderiza la cabecera visual del sidebar.
 */
export function SidebarHeaderComponent({ className, children }) {
  return (
    <header className={cn("border-b border-sidebar-border p-3", className)}>
      {children}
    </header>
  );
}
