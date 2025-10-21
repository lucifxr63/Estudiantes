import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página de Registro
 * Mock de creación de cuenta (sin backend por ahora)
 */

export function RegistroPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar registro real
    alert('Registro simulado');
  };

  return (
    <PageContainer>
      <Container className="py-xl">
        <div className="max-w-md mx-auto">
          <h1 className="font-display text-3xl font-bold mb-md text-center">
            Crear Cuenta
          </h1>
          <p className="text-center text-foreground/60 mb-lg">
            ¿Ya tienes cuenta?{' '}
            <Link to="/iniciar-sesion" className="text-primary font-semibold hover:underline">
              Inicia sesión aquí
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-xs">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Juan Pérez"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-xs">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-xs">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium mb-xs">
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirm-password"
                required
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-sm">
                ¿Cómo quieres usar Estudiantes?
              </label>
              <div className="space-y-sm">
                <label className="flex items-start p-sm border border-foreground/20 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                  <input type="radio" name="role" value="student" className="mt-1 mr-sm" defaultChecked />
                  <div>
                    <div className="font-semibold">Soy Estudiante</div>
                    <div className="text-sm text-foreground/60">Quiero aprender de profesores expertos</div>
                  </div>
                </label>
                <label className="flex items-start p-sm border border-foreground/20 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                  <input type="radio" name="role" value="teacher" className="mt-1 mr-sm" />
                  <div>
                    <div className="font-semibold">Soy Profesor</div>
                    <div className="text-sm text-foreground/60">Quiero enseñar y compartir mi conocimiento</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="terms" required className="mt-1 mr-xs" />
              <label htmlFor="terms" className="text-sm text-foreground/70">
                Acepto los{' '}
                <Link to="/terminos" className="text-primary hover:underline">
                  Términos y Condiciones
                </Link>{' '}
                y la{' '}
                <Link to="/privacidad" className="text-primary hover:underline">
                  Política de Privacidad
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Crear Cuenta
            </button>
          </form>

          <div className="mt-lg">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-foreground/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-sm bg-background text-foreground/60">O regístrate con</span>
              </div>
            </div>

            <div className="mt-md grid grid-cols-2 gap-sm">
              <button className="flex items-center justify-center gap-xs px-sm py-sm border border-foreground/20 rounded-lg hover:bg-muted/30 transition-colors">
                <span>🔵</span>
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-xs px-sm py-sm border border-foreground/20 rounded-lg hover:bg-muted/30 transition-colors">
                <span>⚫</span>
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </PageContainer>
  );
}
