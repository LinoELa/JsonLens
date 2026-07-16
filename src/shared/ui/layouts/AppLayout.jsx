import { AppSidebar } from "../components/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/ui/shadcn/components/sidebar";
import { TooltipProvider } from "@/shared/ui/shadcn/components/tooltip";

/**
 * Layout raiz con Sidebar de shadcn.
 */

export default function AppLayout({ children }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2  px-4">
            <SidebarTrigger className="-ml-1" />
          </header>
          <main className="flex-1">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
