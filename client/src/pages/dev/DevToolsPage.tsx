import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PublicLayout } from '@shared/ui/layouts/PublicLayout';

/**
 * Página de Herramientas de Desarrollo
 * Menú para cambiar roles, índice de rutas y logs
 */

type Route = {
  path: string;
  name: string;
  area: string;
};

const allRoutes: Route[] = [
  // Público
  { path: '/', name: 'Inicio', area: 'Público' },
  { path: '/clases', name: 'Explorar Clases', area: 'Público' },
  { path: '/clases/1', name: 'Detalle de Clase', area: 'Público' },
  { path: '/peticiones', name: 'Peticiones Públicas', area: 'Público' },
  { path: '/acerca-de', name: 'Acerca de', area: 'Público' },
  { path: '/preguntas-frecuentes', name: 'FAQ', area: 'Público' },
  { path: '/contacto', name: 'Contacto', area: 'Público' },
  { path: '/terminos', name: 'Términos', area: 'Público' },
  { path: '/privacidad', name: 'Privacidad', area: 'Público' },
  { path: '/iniciar-sesion', name: 'Iniciar Sesión', area: 'Auth' },
  { path: '/registro', name: 'Registro', area: 'Auth' },
  
  // Alumno
  { path: '/alumno', name: 'Dashboard Alumno', area: 'Alumno' },
  { path: '/alumno/clases', name: 'Mis Clases', area: 'Alumno' },
  { path: '/alumno/peticiones', name: 'Mis Peticiones', area: 'Alumno' },
  { path: '/alumno/peticiones/nueva', name: 'Nueva Petición', area: 'Alumno' },
  { path: '/alumno/compras', name: 'Mis Compras', area: 'Alumno' },
  { path: '/alumno/mensajes', name: 'Mensajes', area: 'Alumno' },
  { path: '/alumno/notificaciones', name: 'Notificaciones', area: 'Alumno' },
  { path: '/alumno/perfil', name: 'Perfil', area: 'Alumno' },
  
  // Profesor
  { path: '/profesor', name: 'Dashboard Profesor', area: 'Profesor' },
  { path: '/profesor/clases', name: 'Mis Clases', area: 'Profesor' },
  { path: '/profesor/clases/nueva', name: 'Nueva Clase', area: 'Profesor' },
  { path: '/profesor/agenda', name: 'Agenda', area: 'Profesor' },
  { path: '/profesor/peticiones', name: 'Peticiones', area: 'Profesor' },
  { path: '/profesor/tareas', name: 'Tareas', area: 'Profesor' },
  { path: '/profesor/ingresos', name: 'Ingresos', area: 'Profesor' },
  { path: '/profesor/informes', name: 'Informes', area: 'Profesor' },
  { path: '/profesor/perfil', name: 'Perfil', area: 'Profesor' },
  
  // Admin
  { path: '/admin', name: 'Dashboard Admin', area: 'Admin' },
  { path: '/admin/usuarios', name: 'Gestión de Usuarios', area: 'Admin' },
  { path: '/admin/clases', name: 'Gestión de Clases', area: 'Admin' },
  { path: '/admin/moderacion', name: 'Moderación', area: 'Admin' },
  { path: '/admin/reportes', name: 'Reportes', area: 'Admin' },
  { path: '/admin/finanzas', name: 'Finanzas', area: 'Admin' },
  { path: '/admin/ajustes', name: 'Ajustes', area: 'Admin' },
  
  // Checkout
  { path: '/carrito', name: 'Carrito', area: 'Checkout' },
  { path: '/comprar', name: 'Proceso de Compra', area: 'Checkout' },
  { path: '/comprar/exito/12345', name: 'Compra Exitosa', area: 'Checkout' },
  
  // Errores
  { path: '/404', name: '404 - No Encontrada', area: 'Errores' },
  { path: '/403', name: '403 - Prohibido', area: 'Errores' },
  { path: '/500', name: '500 - Error del Servidor', area: 'Errores' },
];

export function DevToolsPage() {
  const [filterArea, setFilterArea] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const areas = ['Público', 'Auth', 'Alumno', 'Profesor', 'Admin', 'Checkout', 'Errores'];
  
  const filteredRoutes = allRoutes.filter(route => {
    const matchesArea = !filterArea || route.area === filterArea;
    const matchesSearch = !searchTerm || 
      route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.path.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesArea && matchesSearch;
  });

  return (
    <PublicLayout>
      <Container className="py-lg">
        <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-md mb-lg">
          <h1 className="font-display text-2xl font-bold mb-sm flex items-center gap-sm">
            🔧 Herramientas de Desarrollo
          </h1>
          <p className="text-sm text-foreground/60">
            Esta página solo es visible en modo desarrollo
          </p>
        </div>

        {/* Selector de Roles */}
        <div className="border border-foreground/10 rounded-lg p-md mb-lg">
          <h2 className="font-semibold text-lg mb-md">Cambiar de Rol</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
            <Link
              to="/"
              className="p-md text-center border-2 border-blue-500 bg-blue-50 rounded-lg hover:bg-blue-100"
            >
              <div className="text-2xl mb-xs">🌐</div>
              <div className="text-sm font-medium">Público</div>
            </Link>
            <Link
              to="/alumno"
              className="p-md text-center border-2 border-emerald-500 bg-emerald-50 rounded-lg hover:bg-emerald-100"
            >
              <div className="text-2xl mb-xs">🎓</div>
              <div className="text-sm font-medium">Alumno</div>
            </Link>
            <Link
              to="/profesor"
              className="p-md text-center border-2 border-amber-500 bg-amber-50 rounded-lg hover:bg-amber-100"
            >
              <div className="text-2xl mb-xs">👨‍🏫</div>
              <div className="text-sm font-medium">Profesor</div>
            </Link>
            <Link
              to="/admin"
              className="p-md text-center border-2 border-violet-500 bg-violet-50 rounded-lg hover:bg-violet-100"
            >
              <div className="text-2xl mb-xs">⚙️</div>
              <div className="text-sm font-medium">Admin</div>
            </Link>
          </div>
        </div>

        {/* Índice de Rutas */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Índice de Rutas ({filteredRoutes.length})</h2>
          
          {/* Filtros */}
          <div className="flex gap-sm mb-md flex-wrap">
            <input
              type="search"
              placeholder="Buscar rutas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 min-w-[200px] px-sm py-sm border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={filterArea}
              onChange={(e) => setFilterArea(e.target.value)}
              className="px-sm py-sm border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Todas las áreas</option>
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>

          {/* Lista de rutas */}
          <div className="space-y-xs">
            {filteredRoutes.map((route, i) => (
              <Link
                key={i}
                to={route.path}
                className="flex items-center justify-between p-sm hover:bg-muted/30 rounded-md group"
              >
                <div className="flex items-center gap-md flex-1">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    route.area === 'Público' ? 'bg-blue-100 text-blue-700' :
                    route.area === 'Alumno' ? 'bg-emerald-100 text-emerald-700' :
                    route.area === 'Profesor' ? 'bg-amber-100 text-amber-700' :
                    route.area === 'Admin' ? 'bg-violet-100 text-violet-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {route.area}
                  </span>
                  <span className="font-medium">{route.name}</span>
                </div>
                <code className="text-xs text-foreground/60 group-hover:text-primary">
                  {route.path}
                </code>
              </Link>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md mt-lg">
          {areas.map(area => {
            const count = allRoutes.filter(r => r.area === area).length;
            return (
              <div key={area} className="border border-foreground/10 rounded-lg p-md text-center">
                <div className="text-2xl font-bold text-primary">{count}</div>
                <div className="text-sm text-foreground/60">{area}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </PublicLayout>
  );
}
