import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Dashboard principal del alumno
 * Widgets: cursos en progreso, próximas clases, tareas pendientes, chatbot
 */

export function DashboardAlumnoPage() {
  return (
    <Container className="py-lg">
      <h1 className="font-display text-3xl font-bold mb-sm">
        ¡Bienvenido de vuelta!
      </h1>
      <p className="text-foreground/60 mb-lg">
        Aquí tienes un resumen de tu actividad académica
      </p>

      {/* Grid de widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md mb-lg">
        {/* Widget: Cursos en Progreso */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-semibold text-lg">📚 Cursos en Progreso</h2>
            <Link to="/alumno/clases" className="text-sm text-emerald-600 hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="space-y-sm">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-sm">
                <div className="w-12 h-12 bg-muted/50 rounded-md" />
                <div className="flex-1">
                  <div className="font-medium text-sm">React Avanzado</div>
                  <div className="text-xs text-foreground/60">65% completado</div>
                </div>
                <div className="text-xs font-medium text-emerald-600">En curso</div>
              </div>
            ))}
          </div>
        </div>

        {/* Widget: Próximas Clases */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-semibold text-lg">🗓️ Próximas Clases</h2>
            <button className="text-sm text-emerald-600 hover:underline">Ver agenda</button>
          </div>
          <div className="space-y-sm">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-start gap-sm p-sm bg-muted/20 rounded-md">
                <div className="text-center">
                  <div className="text-sm font-bold">15</div>
                  <div className="text-xs text-foreground/60">Oct</div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Clase de TypeScript</div>
                  <div className="text-xs text-foreground/60">14:00 - 15:30 con Prof. Juan</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Widget: Tareas Pendientes */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-semibold text-lg">📝 Tareas Pendientes</h2>
            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">
              3 pendientes
            </span>
          </div>
          <div className="space-y-sm">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-sm">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <div className="font-medium text-sm">Ejercicio de Hooks</div>
                  <div className="text-xs text-foreground/60">Vence en 2 días</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Widget: Chatbot */}
        <div className="border border-emerald-500/50 rounded-lg p-md bg-emerald-50/30">
          <div className="flex items-center gap-sm mb-sm">
            <span className="text-2xl">🤖</span>
            <h2 className="font-semibold text-lg">Asistente Virtual</h2>
          </div>
          <p className="text-sm text-foreground/70 mb-md">
            ¿Necesitas ayuda? Nuestro asistente puede responder tus preguntas 24/7
          </p>
          <button className="w-full py-2 bg-emerald-600 text-white rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors">
            Iniciar Chat
          </button>
        </div>
      </div>

      {/* Sección de acceso rápido */}
      <div className="border-t border-foreground/10 pt-lg">
        <h2 className="font-semibold text-lg mb-md">Acceso Rápido</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
          <Link
            to="/alumno/peticiones/nueva"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">📢</div>
            <div className="text-sm font-medium">Nueva Petición</div>
          </Link>
          <Link
            to="/alumno/mensajes"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">💬</div>
            <div className="text-sm font-medium">Mensajes</div>
          </Link>
          <Link
            to="/alumno/compras"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">🛍️</div>
            <div className="text-sm font-medium">Mis Compras</div>
          </Link>
          <Link
            to="/alumno/perfil"
            className="p-md text-center border border-foreground/10 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-50/30 transition-colors"
          >
            <div className="text-2xl mb-xs">👤</div>
            <div className="text-sm font-medium">Mi Perfil</div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
