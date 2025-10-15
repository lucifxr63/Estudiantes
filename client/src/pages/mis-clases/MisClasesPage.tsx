import { PageContainer } from '@shared/ui/components/PageContainer';
import { EmptyState } from '@shared/ui/components/EmptyState';

export function MisClasesPage() {
  return (
    <PageContainer>
      <header className="space-y-sm">
        <h1 className="text-2xl font-semibold">Mis clases</h1>
        <p className="text-foreground/70">Gestiona tus clases reservadas y próximas sesiones.</p>
      </header>
      <EmptyState
        title="Aún no tienes clases reservadas"
        description="Explora nuevas clases y reserva tu primera sesión con un profesor verificado."
        action={{ label: 'Explorar clases', onClick: () => (window.location.href = '/explorar') }}
      />
    </PageContainer>
  );
}
