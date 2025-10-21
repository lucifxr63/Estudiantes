import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Dashboard principal del profesor
 * Métricas: ingresos, estudiantes activos, calificación promedio, próximas clases
 */

export function DashboardProfesorPage() {
  return (
    <Container className="py-lg">
      <h1 className="font-display text-3xl font-bold mb-sm">
        Panel de Profesor
      </h1>
      <p className="text-foreground/60 mb-lg">
        Resumen de tu actividad docente
      </p>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md bg-amber-50/30">
          <div className="text-sm text-foreground/60 mb-xs">Ingresos (mes actual)</div>
          <div className="text-3xl font-bold text-amber-600 mb-xs">$2,450</div>
          <div className="text-xs text-green-600">↑ 15% vs mes anterior</div>
        </div>

        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Estudiantes Activos</div>
          <div className="text-3xl font-bold mb-xs">48</div>
          <div className="text-xs text-foreground/60">En 6 clases</div>
        </div>

        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Calificación Promedio</div>
          <div className="text-3xl font-bold mb-xs">4.9 ⭐</div>
          <div className="text-xs text-foreground/60">De 87 reseñas</div>
        </div>

        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Próximas Clases</div>
          <div className="text-3xl font-bold mb-xs">12</div>
          <div className="text-xs text-foreground/60">Esta semana</div>
        </div>
      </div>

      {/* Grid de widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md mb-lg">
        {/* Widget: Próximas Clases */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-semibold text-lg">📅 Próximas Clases</h2>
            <Link to="/profesor/agenda" className="text-sm text-amber-600 hover:underline">
              Ver agenda completa
            </Link>
          </div>
          <div className="space-y-sm">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-sm p-sm bg-muted/20 rounded-md">
                <div className="text-center">
                  <div className="text-sm font-bold">15</div>
                  <div className="text-xs text-foreground/60">Oct</div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">React Avanzado - Sesión {i}</div>
                  <div className="text-xs text-foreground/60">14:00 - 15:30 • 12 estudiantes</div>
                </div>
                <button className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded">
                  Ir
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Widget: Peticiones Nuevas */}
        <div className="border border-amber-500/50 rounded-lg p-md bg-amber-50/30">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-semibold text-lg">📢 Nuevas Peticiones</h2>
            <span className="px-2 py-1 bg-amber-500 text-white text-xs rounded-full font-medium">
              8 nuevas
            </span>
          </div>
          <div className="space-y-sm mb-md">
            {[1, 2].map((i) => (
              <div key={i} className="text-sm">
                <div className="font-medium mb-xs">Busco profesor de TypeScript</div>
                <div className="text-xs text-foreground/60">💰 $30-40/hora • 📍 Remoto</div>
              </div>
            ))}
          </div>
          <Link
            to="/profesor/peticiones"
            className="block w-full py-2 bg-amber-600 text-white text-center rounded-md text-sm font-medium hover:bg-amber-700 transition-colors"
          >
            Ver Todas las Peticiones
          </Link>
        </div>

        {/* Widget: Tareas Pendientes de Revisar */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-semibold text-lg">📝 Por Calificar</h2>
            <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">
              5 pendientes
            </span>
          </div>
          <div className="space-y-sm">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="text-sm">
                  <div className="font-medium">Ejercicio de Hooks</div>
                  <div className="text-xs text-foreground/60">Juan Pérez • Vence hoy</div>
                </div>
                <Link
                  to="/profesor/tareas"
                  className="text-xs text-amber-600 hover:underline"
                >
                  Revisar
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Widget: Estadísticas Rápidas */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">📊 Esta Semana</h2>
          <div className="space-y-md">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/60">Horas enseñadas</span>
              <span className="font-semibold">18h</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/60">Nuevos estudiantes</span>
              <span className="font-semibold">+7</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/60">Mensajes respondidos</span>
              <span className="font-semibold">34</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/60">Tasa de finalización</span>
              <span className="font-semibold text-green-600">98%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de acceso rápido */}
      <div className="border-t border-foreground/10 pt-lg">
        <h2 className="font-semibold text-lg mb-md">Acceso Rápido</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
          <Link
            to="/profesor/clases/nueva"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-amber-500/50 hover:bg-amber-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">➕</div>
            <div className="text-sm font-medium">Nueva Clase</div>
          </Link>
          <Link
            to="/profesor/sesiones"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-amber-500/50 hover:bg-amber-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">🎥</div>
            <div className="text-sm font-medium">Sesiones</div>
          </Link>
          <Link
            to="/profesor/ingresos"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-amber-500/50 hover:bg-amber-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">💰</div>
            <div className="text-sm font-medium">Ingresos</div>
          </Link>
          <Link
            to="/profesor/informes"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-amber-500/50 hover:bg-amber-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">📈</div>
            <div className="text-sm font-medium">Informes</div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
