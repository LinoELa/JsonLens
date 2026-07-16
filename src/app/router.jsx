import HomePage from "@/pages/public/HomePage";
import WorkspacePage from "@/modules/json-workspace/infrastructure/ui/pages/WorkspacePage";
import ComparePage from "@/modules/json-compare/infrastructure/ui/pages/ComparePage";

/**
 * Registro central de rutas de la aplicacion.
 */

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/workspace", element: <WorkspacePage /> },
  { path: "/compare", element: <ComparePage /> },
];
