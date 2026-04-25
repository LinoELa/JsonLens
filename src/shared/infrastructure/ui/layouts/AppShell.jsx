import SidebarLayoutComponent from "@/shared/infrastructure/ui/sidebar/layout/sidebar-layout";

export default function AppShellLayout({ children }) {
  return <SidebarLayoutComponent>{children}</SidebarLayoutComponent>;
}
