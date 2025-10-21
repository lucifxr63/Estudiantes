import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../primitives/Container';
import { BusquedaGlobal } from '../components/BusquedaGlobal';

/**
 * Layout público para páginas sin autenticación
 * Incluye header con navegación y footer completo
 */

type PublicLayoutProps = {
  children: ReactNode;
};

export function PublicLayout({ children }: PublicLayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container className="flex items-center justify-between py-sm gap-sm">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-bold text-primary">
            AlenjandrIA
          </Link>

          {/* Navegación principal */}
          <nav className="hidden md:flex items-center gap-md">
            <Link
              to="/clases"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/clases') ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              Explorar Clases
            </Link>
            <Link
              to="/cursos"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/cursos') ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              Cursos
            </Link>
            <Link
              to="/peticiones"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/peticiones') ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              Peticiones
            </Link>
            <Link
              to="/acerca-de"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/acerca-de') ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              Acerca de
            </Link>
            <Link
              to="/preguntas-frecuentes"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/preguntas-frecuentes') ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              FAQ
            </Link>
            <Link
              to="/contacto"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contacto') ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Búsqueda Global */}
          <BusquedaGlobal />

          {/* Acciones de autenticación */}
          <div className="flex items-center gap-sm">
            <Link
              to="/iniciar-sesion"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/registro"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Registrarse
            </Link>
          </div>
        </Container>
      </header>

      {/* Contenido principal */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-muted/30 mt-auto">
        <Container className="py-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
            {/* Columna 1: Acerca de */}
            <div>
              <h3 className="font-display font-semibold mb-sm">AlenjandrIA</h3>
              <p className="text-sm text-foreground/60 mb-sm">
                Conectamos estudiantes con los mejores profesores para impulsar tu aprendizaje.
              </p>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div>
              <h4 className="font-semibold mb-sm text-sm">Explorar</h4>
              <ul className="space-y-xs">
                <li>
                  <Link to="/clases" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Clases
                  </Link>
                </li>
                <li>
                  <Link to="/peticiones" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Peticiones
                  </Link>
                </li>
                <li>
                  <Link to="/acerca-de" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Acerca de
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Soporte */}
            <div>
              <h4 className="font-semibold mb-sm text-sm">Soporte</h4>
              <ul className="space-y-xs">
                <li>
                  <Link to="/preguntas-frecuentes" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 4: Legal */}
            <div>
              <h4 className="font-semibold mb-sm text-sm">Legal</h4>
              <ul className="space-y-xs">
                <li>
                  <Link to="/terminos" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link to="/privacidad" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-foreground/10 pt-md text-center text-sm text-foreground/60">
            <p> AlenjandrIA {new Date().getFullYear()}. Todos los derechos reservados.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
