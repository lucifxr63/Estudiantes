import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PublicLayout } from '@shared/ui/layouts/PublicLayout';

/**
 * Página 404 - No Encontrada
 * Con ilustración y búsqueda integrada
 */

export function NotFoundPage() {
  return (
    <PublicLayout>
      <Container className="py-xl">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ilustración */}
          <div className="text-9xl mb-md">🔍</div>
          
          <h1 className="font-display text-6xl font-bold mb-md">404</h1>
          
          <h2 className="text-2xl font-semibold mb-sm">Página no encontrada</h2>
          
          <p className="text-lg text-foreground/60 mb-lg">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>

          {/* Búsqueda */}
          <div className="mb-lg">
            <input
              type="search"
              placeholder="¿Qué estás buscando?"
              className="w-full max-w-md px-md py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Enlaces útiles */}
          <div className="mb-lg">
            <h3 className="font-semibold mb-md">Enlaces útiles:</h3>
            <div className="flex flex-wrap gap-sm justify-center">
              <Link to="/" className="px-4 py-2 bg-muted/30 rounded-md hover:bg-muted/50">
                Inicio
              </Link>
              <Link to="/clases" className="px-4 py-2 bg-muted/30 rounded-md hover:bg-muted/50">
                Explorar Clases
              </Link>
              <Link to="/peticiones" className="px-4 py-2 bg-muted/30 rounded-md hover:bg-muted/50">
                Peticiones
              </Link>
              <Link to="/contacto" className="px-4 py-2 bg-muted/30 rounded-md hover:bg-muted/50">
                Contacto
              </Link>
            </div>
          </div>

          <Link
            to="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
          >
            Volver al Inicio
          </Link>
        </div>
      </Container>
    </PublicLayout>
  );
}
