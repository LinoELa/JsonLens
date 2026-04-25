import {
  SidebarProviderComponent,
  SidebarTriggerComponent,
} from "@/shared/infrastructure/ui/sidebar/context/sidebar-context";
import { AppSidebarComponent } from "@/shared/infrastructure/ui/sidebar/sidebar";

/**
 * @COMPONENT SidebarLayoutComponent
 * Layout funcional del sidebar: monta provider, sidebar y zona principal.
 */
export default function SidebarLayoutComponent({ children }) {
  return (
    <SidebarProviderComponent defaultOpen>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebarComponent />
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-4 md:hidden">
            <SidebarTriggerComponent />
          </div>
          {children}
        </main>
      </div>
    </SidebarProviderComponent>
  );
}
