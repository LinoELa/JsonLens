import { cn } from "@/lib/utils";
import { useSidebarContext } from "@/shared/infrastructure/ui/sidebar/context/sidebar-context";
import { SidebarHeaderComponent } from "@/shared/infrastructure/ui/sidebar/components/sidebar-header";
import { SidebarContentComponent } from "@/shared/infrastructure/ui/sidebar/components/sidebar-content";
import { SidebarFooterComponent } from "@/shared/infrastructure/ui/sidebar/components/sidebar-footer";
import {
  SidebarGroupComponent,
  SidebarGroupContentComponent,
  SidebarGroupLabelComponent,
} from "@/shared/infrastructure/ui/sidebar/components/sidebar-group";
import {
  SidebarMenuButtonComponent,
  SidebarMenuComponent,
  SidebarMenuItemComponent,
} from "@/shared/infrastructure/ui/sidebar/components/sidebar-menu";

/**
 * Contenedor estructural del sidebar con comportamiento responsive.
 */
export function SidebarComponent({ className, children }) {
  const { open, setOpen } = useSidebarContext();

  return (
    <>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-label="Cerrar menu"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <aside
        id="app-sidebar"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-transform md:static md:z-auto md:translate-x-0 md:shrink-0",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className,
        )}
      >
        {children}
      </aside>
    </>
  );
}

/**
 * Composicion base de la UI del sidebar de la aplicacion.
 */
export function AppSidebarComponent() {
  return (
    <SidebarComponent>
      <SidebarHeaderComponent>
        <div className="space-y-1">
          <p className="text-sm font-semibold tracking-tight">JsonLens</p>
          <p className="text-xs text-muted-foreground">JSON Workspace Suite</p>
        </div>
      </SidebarHeaderComponent>
      <SidebarContentComponent>
        <SidebarGroupComponent>
          <SidebarGroupLabelComponent>Principal</SidebarGroupLabelComponent>
          <SidebarGroupContentComponent>
            <SidebarMenuComponent>
              <SidebarMenuItemComponent>
                <SidebarMenuButtonComponent isActive>
                  Workspace
                </SidebarMenuButtonComponent>
              </SidebarMenuItemComponent>
              <SidebarMenuItemComponent>
                <SidebarMenuButtonComponent>Compare</SidebarMenuButtonComponent>
              </SidebarMenuItemComponent>
            </SidebarMenuComponent>
          </SidebarGroupContentComponent>
        </SidebarGroupComponent>

        <SidebarGroupComponent>
          <SidebarGroupLabelComponent>Configuración</SidebarGroupLabelComponent>
          <SidebarGroupContentComponent>
            <SidebarMenuComponent>
              <SidebarMenuItemComponent>
                <SidebarMenuButtonComponent>Settings</SidebarMenuButtonComponent>
              </SidebarMenuItemComponent>
            </SidebarMenuComponent>
          </SidebarGroupContentComponent>
        </SidebarGroupComponent>
      </SidebarContentComponent>
      <SidebarFooterComponent>
        <p className="text-xs text-muted-foreground">v0.1 - Sidebar UI</p>
      </SidebarFooterComponent>
    </SidebarComponent>
  );
}
