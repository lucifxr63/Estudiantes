import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de inicio pública
 * Hero section con CTAs y sección de características destacadas
 */

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-2xl">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-md">
              Tu biblioteca de conocimiento infinito
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-lg max-w-2xl mx-auto">
              Como la legendaria Biblioteca de Alejandría, conectamos profesores y estudiantes para preservar y compartir el conocimiento
            </p>
            <div className="flex flex-col sm:flex-row gap-sm justify-center">
              <Link
                to="/clases"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Explorar Clases
              </Link>
              <Link
                to="/registro"
                className="px-6 py-3 bg-background border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Comenzar Gratis
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-xl">
        <Container>
          <h2 className="font-display text-3xl font-bold text-center mb-lg">
            ¿Por qué Estudiantes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-md">
                <div className="text-4xl mb-sm">👨‍🏫</div>
              </div>
              <h3 className="font-semibold text-lg mb-xs">Maestros del Conocimiento</h3>
              <p className="text-foreground/60">Expertos apasionados por enseñar y compartir</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-md">
                <div className="text-4xl mb-sm">📚</div>
              </div>
              <h3 className="font-semibold text-lg mb-xs">Biblioteca Infinita</h3>
              <p className="text-foreground/60">Miles de clases en diferentes disciplinas del conocimiento</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-md">
                <div className="text-4xl mb-sm">🎓</div>
              </div>
              <h3 className="font-semibold text-lg mb-xs">Aprendizaje Personalizado</h3>
              <p className="text-foreground/60">Tu camino único hacia el conocimiento</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-xl">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-md">
              ¿Listo para comenzar?
            </h2>
            <p className="text-lg text-foreground/70 mb-lg">
              Únete a miles de estudiantes que ya están aprendiendo con nosotros
            </p>
            <Link
              to="/registro"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              Registrarse Ahora
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
