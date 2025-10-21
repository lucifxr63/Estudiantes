import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página de peticiones públicas
 * Muestra peticiones de alumnos que buscan profesores
 */

export function PeticionesPage() {
  return (
    <PageContainer>
      <Container className="py-lg">
        <div className="mb-lg">
          <h1 className="font-display text-3xl font-bold mb-sm">Peticiones de Alumnos</h1>
          <p className="text-foreground/60">
            Encuentra oportunidades para enseñar lo que mejor sabes
          </p>
        </div>

        {/* Grid de peticiones */}
        <div className="space-y-md">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="border border-foreground/10 rounded-lg p-md hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-sm">
                <div>
                  <h3 className="font-semibold mb-xs">
                    Necesito profesor de Programación
                  </h3>
                  <p className="text-sm text-foreground/60">
                    Publicado hace 2 horas
                  </p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  Abierta
                </span>
              </div>
              <p className="text-foreground/70 mb-sm">
                Busco profesor para aprender React y TypeScript desde cero...
              </p>
              <div className="flex items-center gap-md text-sm text-foreground/60">
                <span>💰 $20-30/hora</span>
                <span>📍 Remoto</span>
                <span>⏰ 2 horas/semana</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageContainer>
  );
}
