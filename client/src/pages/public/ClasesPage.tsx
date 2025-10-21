import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página de catálogo de clases públicas
 * Lista todas las clases disponibles con filtros en UI
 */

export function ClasesPage() {
  return (
    <PageContainer>
      <Container className="py-lg">
        <div className="mb-lg">
          <h1 className="font-display text-3xl font-bold mb-sm">Explora Clases</h1>
          <p className="text-foreground/60">
            Descubre clases de profesores expertos en múltiples áreas
          </p>
        </div>

        {/* Filtros (placeholder) */}
        <div className="bg-muted/30 rounded-lg p-md mb-lg">
          <p className="text-sm text-foreground/60">
            🔍 Filtros de búsqueda: Categoría, Nivel, Precio, Idioma
          </p>
        </div>

        {/* Grid de clases (placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="border border-foreground/10 rounded-lg p-md hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="aspect-video bg-muted/50 rounded-md mb-sm" />
              <h3 className="font-semibold mb-xs">Clase de Ejemplo {i}</h3>
              <p className="text-sm text-foreground/60 mb-sm">
                Descripción breve de la clase...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">$25/hora</span>
                <span className="text-xs text-foreground/50">⭐ 4.8</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageContainer>
  );
}
