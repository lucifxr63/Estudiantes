import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página de Iniciar Sesión
 * Mock de autenticación (sin backend por ahora)
 */

export function IniciarSesionPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar autenticación real
    alert('Inicio de sesión simulado');
  };

  return (
    <PageContainer>
      <Container className="py-xl">
        <div className="max-w-md mx-auto">
          <h1 className="font-display text-3xl font-bold mb-md text-center">
            Iniciar Sesión
          </h1>
          <p className="text-center text-foreground/60 mb-lg">
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="text-primary font-semibold hover:underline">
              Regístrate aquí
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-md">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-xs" />
                <span className="text-sm">Recordarme</span>
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-lg">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-foreground/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-sm bg-background text-foreground/60">O continúa con</span>
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

          {/* Links de desarrollo para testing */}
          <div className="mt-xl p-md bg-muted/30 rounded-lg border-2 border-dashed border-foreground/20">
            <p className="text-sm font-semibold mb-sm">🔧 Acceso rápido (Desarrollo)</p>
            <div className="space-y-xs">
              <Link
                to="/alumno"
                className="block text-sm text-primary hover:underline"
              >
                → Ir a Dashboard de Alumno
              </Link>
              <Link
                to="/profesor"
                className="block text-sm text-primary hover:underline"
              >
                → Ir a Dashboard de Profesor
              </Link>
              <Link
                to="/admin"
                className="block text-sm text-primary hover:underline"
              >
                → Ir a Panel de Admin
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </PageContainer>
  );
}
