import { cn } from "@/lib/utils";

/**
 * @COMPONENT SidebarMenuComponent
 * Contenedor de lista de acciones del sidebar.
 */
export function SidebarMenuComponent({ className, children }) {
  return <ul className={cn("space-y-1", className)}>{children}</ul>;
}

/**
 * @COMPONENT SidebarMenuItemComponent
 * Item de menu del sidebar.
 */
export function SidebarMenuItemComponent({ className, children }) {
  return <li className={cn(className)}>{children}</li>;
}

/**
 * @COMPONENT SidebarMenuButtonComponent
 * Boton con estilo de item de menu inspirado en shadcn sidebar.
 */
export function SidebarMenuButtonComponent({
  className,
  isActive = false,
  children,
  ...props
}) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
