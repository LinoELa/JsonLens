import HomePage from "@/pages/public/HomePage";
import WorkspacePage from "@/pages/private/workspace/WorkspacePage";
import ComparePage from "@/pages/private/compare/ComparePage";
import { ROUTES } from "@/lib/constants/routes.constants";

/**
 * Registro central de rutas de la aplicacion.
 */

export const appRoutes = [
  { path: ROUTES.home, element: <HomePage /> },
  { path: ROUTES.workspace, element: <WorkspacePage /> },
  { path: ROUTES.compare, element: <ComparePage /> },
];
