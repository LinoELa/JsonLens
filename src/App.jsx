import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { appRoutes } from "@/components/router/app-routes";

/**
 * Raiz de JsonLens: layout + rutas.
 */

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
