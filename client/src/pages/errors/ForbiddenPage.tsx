import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PublicLayout } from '@shared/ui/layouts/PublicLayout';

/**
 * Página 403 - Acceso Prohibido
 * Cuando el usuario no tiene permisos suficientes
 */

export function ForbiddenPage() {
  return (
    <PublicLayout>
      <Container className="py-xl">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ilustración */}
          <div className="text-9xl mb-md">🚫</div>
          
          <h1 className="font-display text-6xl font-bold mb-md">403</h1>
          
          <h2 className="text-2xl font-semibold mb-sm">Acceso Prohibido</h2>
          
          <p className="text-lg text-foreground/60 mb-lg">
            No tienes permisos para acceder a esta página.
          </p>

          <div className="bg-muted/30 rounded-lg p-md mb-lg">
            <p className="text-sm text-foreground/70">
              Si crees que esto es un error, por favor contacta con soporte o
              verifica que hayas iniciado sesión con la cuenta correcta.
            </p>
          </div>

          <div className="flex gap-sm justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
            >
              Volver al Inicio
            </Link>
            <Link
              to="/contacto"
              className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </Container>
    </PublicLayout>
  );
}
