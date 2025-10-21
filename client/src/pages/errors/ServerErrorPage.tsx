import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PublicLayout } from '@shared/ui/layouts/PublicLayout';

/**
 * Página 500 - Error del Servidor
 * Error interno del servidor
 */

export function ServerErrorPage() {
  return (
    <PublicLayout>
      <Container className="py-xl">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ilustración */}
          <div className="text-9xl mb-md">⚠️</div>
          
          <h1 className="font-display text-6xl font-bold mb-md">500</h1>
          
          <h2 className="text-2xl font-semibold mb-sm">Error del Servidor</h2>
          
          <p className="text-lg text-foreground/60 mb-lg">
            Algo salió mal en nuestros servidores. Ya estamos trabajando para solucionarlo.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-md mb-lg">
            <p className="text-sm text-amber-800">
              <strong>ID de error:</strong> ERR_{Date.now()}
              <br />
              Por favor, guarda este ID si necesitas contactar con soporte.
            </p>
          </div>

          <div className="mb-lg">
            <p className="text-sm text-foreground/60 mb-sm">¿Qué puedes hacer?</p>
            <ul className="text-sm text-foreground/70 space-y-xs text-left max-w-md mx-auto">
              <li>• Recargar la página en unos minutos</li>
              <li>• Verificar tu conexión a internet</li>
              <li>• Contactar a soporte si el problema persiste</li>
            </ul>
          </div>

          <div className="flex gap-sm justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
            >
              Reintentar
            </button>
            <Link
              to="/"
              className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </Container>
    </PublicLayout>
  );
}
