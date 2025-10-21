import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Dashboard principal del Administrador
 * KPIs y métricas generales de la plataforma
 */

export function DashboardAdminPage() {
  return (
    <Container className="py-lg">
      <h1 className="font-display text-3xl font-bold mb-sm">
        Panel de Administración
      </h1>
      <p className="text-foreground/60 mb-lg">
        Resumen general de la plataforma
      </p>

      {/* KPIs principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md bg-violet-50/30">
          <div className="text-sm text-foreground/60 mb-xs">Total Usuarios</div>
          <div className="text-3xl font-bold text-violet-600 mb-xs">10,234</div>
          <div className="text-xs text-green-600">↑ 12% este mes</div>
        </div>

        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Profesores Activos</div>
          <div className="text-3xl font-bold mb-xs">542</div>
          <div className="text-xs text-foreground/60">89% verificados</div>
        </div>

        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Cursos Activos</div>
          <div className="text-3xl font-bold mb-xs">1,248</div>
          <div className="text-xs text-green-600">+45 esta semana</div>
        </div>

        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Transacciones (mes)</div>
          <div className="text-3xl font-bold mb-xs">$84,320</div>
          <div className="text-xs text-foreground/60">2,145 compras</div>
        </div>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md mb-lg">
        {/* Actividad reciente */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Actividad Reciente</h2>
          <div className="space-y-sm">
            {[
              { icon: '👤', text: 'Nuevo usuario registrado: Juan Pérez', time: 'Hace 5 min' },
              { icon: '📚', text: 'Clase publicada: React Avanzado', time: 'Hace 15 min' },
              { icon: '💰', text: 'Pago procesado: $49.99', time: 'Hace 1 hora' },
              { icon: '🚨', text: 'Reporte recibido: Contenido inapropiado', time: 'Hace 2 horas' },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-sm p-sm bg-muted/20 rounded-md">
                <span className="text-xl">{activity.icon}</span>
                <div className="flex-1">
                  <div className="text-sm">{activity.text}</div>
                  <div className="text-xs text-foreground/60">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reportes pendientes */}
        <div className="border border-violet-500/50 rounded-lg p-md bg-violet-50/30">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-semibold text-lg">Reportes Pendientes</h2>
            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-medium">
              3 urgentes
            </span>
          </div>
          <div className="space-y-sm mb-md">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-sm">
                <div className="font-medium mb-xs">Contenido inapropiado en clase</div>
                <div className="text-xs text-foreground/60">Reportado hace 2 horas</div>
              </div>
            ))}
          </div>
          <Link
            to="/admin/reportes"
            className="block w-full py-2 bg-violet-600 text-white text-center rounded-md text-sm font-medium hover:bg-violet-700"
          >
            Ver Todos los Reportes
          </Link>
        </div>
      </div>

      {/* Acceso rápido */}
      <div>
        <h2 className="font-semibold text-lg mb-md">Acceso Rápido</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
          <Link
            to="/admin/usuarios"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-violet-500/50 hover:bg-violet-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">👥</div>
            <div className="text-sm font-medium">Usuarios</div>
          </Link>
          <Link
            to="/admin/clases"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-violet-500/50 hover:bg-violet-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">📚</div>
            <div className="text-sm font-medium">Clases</div>
          </Link>
          <Link
            to="/admin/finanzas"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-violet-500/50 hover:bg-violet-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">💰</div>
            <div className="text-sm font-medium">Finanzas</div>
          </Link>
          <Link
            to="/admin/ajustes"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-violet-500/50 hover:bg-violet-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">⚙️</div>
            <div className="text-sm font-medium">Ajustes</div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
