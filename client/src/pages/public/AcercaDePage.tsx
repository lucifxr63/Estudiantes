import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página Acerca de
 * Información sobre la plataforma, misión y valores
 */

export function AcercaDePage() {
  return (
    <PageContainer>
      <Container className="py-xl max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-lg text-center">
          Acerca de AlenjandrIA
        </h1>

        <div className="prose max-w-none">
          <section className="mb-xl">
            <p className="text-xl text-foreground/70 mb-lg text-center">
              Como la legendaria Biblioteca de Alejandría preservaba el conocimiento del mundo antiguo,
              AlenjandrIA conecta mentes brillantes para crear, preservar y compartir sabiduría en la era digital.
            </p>
          </section>

          <section className="mb-xl">
            <h2 className="font-display text-2xl font-bold mb-md">Nuestra Misión</h2>
            <p className="text-lg text-foreground/80">
              Construir la biblioteca de conocimiento vivo más grande del mundo, donde cada lección
              es una página que se escribe, cada pregunta es un libro que se abre, y cada estudiante
              es un erudito en formación. Democratizamos el acceso al conocimiento, conectando maestros
              apasionados con estudiantes curiosos.
            </p>
          </section>

          <section className="mb-xl">
            <h2 className="font-display text-2xl font-bold mb-md">¿Por qué AlenjandrIA?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="border border-foreground/10 rounded-lg p-md">
                <h3 className="font-semibold mb-sm">📚 Biblioteca Infinita</h3>
                <p className="text-foreground/70">
                  Conocimiento en todas las disciplinas y áreas del saber
                </p>
              </div>
              <div className="border border-foreground/10 rounded-lg p-md">
                <h3 className="font-semibold mb-sm">🎓 Maestros Apasionados</h3>
                <p className="text-foreground/70">
                  Expertos comprometidos con compartir su sabiduría
                </p>
              </div>
              <div className="border border-foreground/10 rounded-lg p-md">
                <h3 className="font-semibold mb-sm">🤝 Comunidad de Aprendizaje</h3>
                <p className="text-foreground/70">
                  Red colaborativa de estudiantes y profesores
                </p>
              </div>
              <div className="border border-foreground/10 rounded-lg p-md">
                <h3 className="font-semibold mb-sm">✨ Tecnología + Conocimiento</h3>
                <p className="text-foreground/70">
                  Herramientas modernas al servicio del saber
                </p>
              </div>
            </div>
          </section>

          <section className="mb-xl">
            <h2 className="font-display text-2xl font-bold mb-md">Nuestros Números</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-md text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-xs">10K+</div>
                <div className="text-sm text-foreground/60">Estudiantes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-xs">500+</div>
                <div className="text-sm text-foreground/60">Maestros</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-xs">50+</div>
                <div className="text-sm text-foreground/60">Disciplinas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-xs">4.9</div>
                <div className="text-sm text-foreground/60">Calificación</div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </PageContainer>
  );
}
