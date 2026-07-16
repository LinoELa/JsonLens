import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/shared/ui/layouts/AppLayout";
import { appRoutes } from "./router";

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
