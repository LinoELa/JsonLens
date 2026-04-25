import * as React from "react";

import { cn } from "@/lib/utils";

const SidebarStateContext = React.createContext(null);

/**
 * Hook de lectura del contexto del sidebar.
 */
export function useSidebarContext() {
  const ctx = React.useContext(SidebarStateContext);
  if (!ctx) {
    throw new Error("useSidebarContext debe usarse dentro de <SidebarProviderComponent />");
  }
  return ctx;
}

export function SidebarProviderComponent({
  className,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const value = React.useMemo(() => ({ open, setOpen }), [open]);

  return (
    <SidebarStateContext.Provider value={value}>
      <div className={cn("min-h-screen w-full", className)}>{children}</div>
    </SidebarStateContext.Provider>
  );
}

/**
 * Boton trigger para abrir/cerrar el sidebar.
 */
export function SidebarTriggerComponent({ className, ...props }) {
  const { open, setOpen } = useSidebarContext();

  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted",
        className,
      )}
      aria-expanded={open}
      aria-controls="app-sidebar"
      onClick={() => setOpen((v) => !v)}
      {...props}
    >
      Menu
    </button>
  );
}
