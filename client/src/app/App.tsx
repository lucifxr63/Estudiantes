import { AppProviders } from './providers';
import { AppLayout } from '@shared/ui/components/AppLayout';
import { ErrorBoundary } from '@shared/ui/components/ErrorBoundary';
import { AppRoutes } from './routes';

export function App() {
  return (
    <AppProviders>
      <ErrorBoundary>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </ErrorBoundary>
    </AppProviders>
  );
}
