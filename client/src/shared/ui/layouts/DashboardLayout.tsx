import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../primitives/Container';
import { NotificacionesDropdown } from '../components/NotificacionesDropdown';

/**
 * Layout para dashboards autenticados
 * Soporta múltiples roles con navegación y estilos personalizados
 */

type NavItem = {
  label: string;
  path: string;
  icon: string;
};

type DashboardLayoutProps = {
  children: ReactNode;
  role: 'alumno' | 'profesor' | 'admin';
  navItems: NavItem[];
  userName?: string;
};

const roleConfig = {
  alumno: {
    color: 'emerald',
    bgClass: 'bg-emerald-500',
    textClass: 'text-emerald-600',
    borderClass: 'border-emerald-500',
    hoverClass: 'hover:bg-emerald-50',
    activeClass: 'bg-emerald-50 text-emerald-600 font-semibold',
  },
  profesor: {
    color: 'amber',
    bgClass: 'bg-amber-500',
    textClass: 'text-amber-600',
    borderClass: 'border-amber-500',
    hoverClass: 'hover:bg-amber-50',
    activeClass: 'bg-amber-50 text-amber-600 font-semibold',
  },
  admin: {
    color: 'violet',
    bgClass: 'bg-violet-500',
    textClass: 'text-violet-600',
    borderClass: 'border-violet-500',
    hoverClass: 'hover:bg-violet-50',
    activeClass: 'bg-violet-50 text-violet-600 font-semibold',
  },
};

export function DashboardLayout({ children, role, navItems, userName = 'Usuario' }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const config = roleConfig[role];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background">
        <Container className="flex items-center justify-between py-sm">
          {/* Logo y toggle del sidebar */}
          <div className="flex items-center gap-md">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-muted/50 rounded-md"
              aria-label="Toggle menu"
            >
              <span className="text-xl">☰</span>
            </button>
            <Link to="/" className="font-display text-xl font-bold">
              AlenjandrIA
            </Link>
          </div>

          {/* Usuario y Notificaciones */}
          <div className="flex items-center gap-sm">
            <NotificacionesDropdown />
            <span className="text-sm text-foreground/60 hidden sm:inline">
              {userName}
            </span>
            <div className={`w-8 h-8 rounded-full ${config.bgClass} flex items-center justify-center text-white font-semibold`}>
              {userName[0].toUpperCase()}
            </div>
          </div>
        </Container>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-[57px] left-0 bottom-0 z-40
            w-64 bg-background border-r border-foreground/10
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <nav className="p-md space-y-xs">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-sm px-sm py-sm rounded-md transition-colors
                  ${isActive(item.path) ? config.activeClass : `text-foreground/70 ${config.hoverClass}`}
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Footer del sidebar */}
          <div className="absolute bottom-0 left-0 right-0 p-md border-t border-foreground/10">
            <Link
              to="/"
              className="flex items-center gap-sm px-sm py-sm text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <span>←</span>
              <span>Volver al inicio</span>
            </Link>
          </div>
        </aside>

        {/* Overlay para móvil */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Contenido principal */}
        <main className="flex-1 min-h-[calc(100vh-57px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
