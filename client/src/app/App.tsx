import { AppProviders } from './providers';
import { ErrorBoundary } from '@shared/ui/components/ErrorBoundary';
import { AppRoutes } from './routes';

/**
 * Componente raíz de la aplicación
 * Envuelve la app con providers y error boundary
 */

export function App() {
  return (
    <AppProviders>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </AppProviders>
  );
}
