import { useMemo } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../primitives/Button';
import { useUIStore } from '@store/ui';

const tabs = [
  { to: '/explorar', label: 'Explorar Clases' },
  { to: '/mis-clases', label: 'Mis Clases' },
  { to: '/publicar', label: 'Publicar Petición' },
  { to: '/perfil', label: 'Perfil' }
];

export function TabsNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const toggleTheme = useUIStore((state) => state.toggleTheme);

  const activeIndex = useMemo(
    () => tabs.findIndex((tab) => location.pathname.startsWith(tab.to)),
    [location.pathname]
  );
  const focusIndex = activeIndex >= 0 ? activeIndex : 0;

  return (
    <nav className="flex items-center gap-sm" aria-label="Navegación principal">
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex flex-wrap gap-2 rounded-md bg-foreground/5 p-1"
      >
        {tabs.map((tab, index) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            role="tab"
            aria-selected={activeIndex === index}
            tabIndex={focusIndex === index ? 0 : -1}
            className={({ isActive }) =>
              `rounded-md px-3 py-1 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors ${
                isActive ? 'bg-primary text-background' : 'text-foreground/70 hover:text-foreground'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Cambiar tema">
        Tema
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => navigate('/publicar')}
        aria-label="Publicar una nueva petición"
      >
        Publicar
      </Button>
    </nav>
  );
}
