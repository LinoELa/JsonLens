import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants/routes.constants";
import { FileJson, GitCompare } from "lucide-react";

/**
 * Home publica: elige Workspace o Compare.
 */

export default function HomePage() {
  return (
    <div className="grid min-h-[calc(100vh-3rem)] md:grid-cols-2">
      <section className="flex flex-col items-center justify-center gap-4 border-b border-border p-8 md:border-r md:border-b-0">
        <FileJson className="size-10 text-muted-foreground" aria-hidden />
        <h2 className="text-2xl font-semibold tracking-tight">Workspace</h2>
        <p className="max-w-xs text-center text-sm text-muted-foreground">
          Edita, valida y formatea JSON en el navegador.
        </p>
        <Button asChild size="lg">
          <Link to={ROUTES.workspace}>Abrir Workspace</Link>
        </Button>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 p-8">
        <GitCompare className="size-10 text-muted-foreground" aria-hidden />
        <h2 className="text-2xl font-semibold tracking-tight">Compare</h2>
        <p className="max-w-xs text-center text-sm text-muted-foreground">
          Compara dos documentos JSON y revisa diferencias.
        </p>
        <Button asChild variant="outline" size="lg">
          <Link to={ROUTES.compare}>Abrir Compare</Link>
        </Button>
      </section>
    </div>
  );
}
