import { useParams, Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página de detalle de una clase específica
 * Muestra información completa con tabs: contenido, profesor, reseñas
 */

export function ClaseDetallePage() {
  const { id } = useParams<{ id: string }>();

  return (
    <PageContainer>
      <Container className="py-lg">
        {/* Breadcrumb */}
        <nav className="text-sm text-foreground/60 mb-md">
          <Link to="/clases" className="hover:text-foreground">Clases</Link>
          {' / '}
          <span className="text-foreground">Clase #{id}</span>
        </nav>

        {/* Header de la clase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-lg">
          <div className="lg:col-span-2">
            <h1 className="font-display text-3xl font-bold mb-sm">
              Nombre de la Clase
            </h1>
            <p className="text-foreground/60 mb-md">
              Descripción detallada de la clase y lo que aprenderás
            </p>
            <div className="flex items-center gap-md flex-wrap">
              <span className="text-sm">⭐ 4.8 (120 reseñas)</span>
              <span className="text-sm">👥 450 estudiantes</span>
              <span className="text-sm">🕐 8 horas</span>
            </div>
          </div>

          {/* Card de compra */}
          <div className="border border-foreground/10 rounded-lg p-md sticky top-20 h-fit">
            <div className="aspect-video bg-muted/50 rounded-md mb-md" />
            <div className="text-3xl font-bold mb-md">$25/hora</div>
            <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold mb-sm hover:bg-primary/90 transition-colors">
              Comprar Ahora
            </button>
            <button className="w-full py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30 transition-colors">
              Agregar al Carrito
            </button>
          </div>
        </div>

        {/* Tabs de contenido */}
        <div className="border-b border-foreground/10 mb-lg">
          <div className="flex gap-md">
            <button className="pb-sm border-b-2 border-primary font-semibold">
              Contenido
            </button>
            <button className="pb-sm border-b-2 border-transparent font-semibold text-foreground/60 hover:text-foreground">
              Profesor
            </button>
            <button className="pb-sm border-b-2 border-transparent font-semibold text-foreground/60 hover:text-foreground">
              Reseñas
            </button>
          </div>
        </div>

        {/* Contenido del tab activo */}
        <div className="prose max-w-none">
          <h2>¿Qué aprenderás?</h2>
          <ul>
            <li>Concepto 1 importante</li>
            <li>Concepto 2 importante</li>
            <li>Concepto 3 importante</li>
          </ul>
        </div>
      </Container>
    </PageContainer>
  );
}
