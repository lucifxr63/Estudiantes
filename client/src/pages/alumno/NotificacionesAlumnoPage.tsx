import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Notificaciones del Alumno
 * Centro de notificaciones con filtros y preferencias
 */

export function NotificacionesAlumnoPage() {
  return (
    <Container className="py-lg max-w-4xl">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Notificaciones</h1>
          <p className="text-foreground/60">
            Mantente al día con tus clases y actividades
          </p>
        </div>
        <button className="text-sm text-emerald-600 hover:underline">
          Marcar todo como leído
        </button>
      </div>

      {/* Filtros */}
      <div className="flex gap-sm mb-lg">
        <button className="px-4 py-2 bg-emerald-500 text-white rounded-md text-sm font-medium">
          Todas (12)
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Sin leer (5)
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Clases
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Mensajes
        </button>
      </div>

      {/* Lista de notificaciones */}
      <div className="space-y-sm">
        {/* Notificación sin leer */}
        <div className="flex gap-sm p-md bg-emerald-50/50 border border-emerald-500/30 rounded-lg">
          <div className="text-2xl">📚</div>
          <div className="flex-1">
            <div className="font-semibold mb-xs">
              Nueva tarea asignada en "React Avanzado"
            </div>
            <p className="text-sm text-foreground/70 mb-xs">
              El profesor ha publicado una nueva tarea que vence en 3 días
            </p>
            <div className="text-xs text-foreground/60">Hace 2 horas</div>
          </div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
        </div>

        {/* Notificación leída */}
        <div className="flex gap-sm p-md border border-foreground/10 rounded-lg hover:bg-muted/20">
          <div className="text-2xl">💬</div>
          <div className="flex-1">
            <div className="font-semibold mb-xs">
              Nuevo mensaje de Prof. Juan Pérez
            </div>
            <p className="text-sm text-foreground/70 mb-xs">
              Te ha respondido sobre tu consulta de TypeScript
            </p>
            <div className="text-xs text-foreground/60">Hace 5 horas</div>
          </div>
        </div>

        <div className="flex gap-sm p-md border border-foreground/10 rounded-lg hover:bg-muted/20">
          <div className="text-2xl">🎉</div>
          <div className="flex-1">
            <div className="font-semibold mb-xs">
              ¡Completaste el 50% de "TypeScript desde Cero"!
            </div>
            <p className="text-sm text-foreground/70 mb-xs">
              Sigue así, estás haciendo un gran progreso
            </p>
            <div className="text-xs text-foreground/60">Ayer</div>
          </div>
        </div>

        <div className="flex gap-sm p-md border border-foreground/10 rounded-lg hover:bg-muted/20">
          <div className="text-2xl">🗓️</div>
          <div className="flex-1">
            <div className="font-semibold mb-xs">
              Recordatorio: Clase en 1 hora
            </div>
            <p className="text-sm text-foreground/70 mb-xs">
              Tu clase de "React Avanzado" comienza a las 14:00
            </p>
            <div className="text-xs text-foreground/60">Hace 2 días</div>
          </div>
        </div>
      </div>

      {/* Preferencias */}
      <div className="mt-xl pt-lg border-t border-foreground/10">
        <h2 className="font-semibold text-lg mb-md">Preferencias de Notificaciones</h2>
        <div className="space-y-sm">
          <label className="flex items-center justify-between p-sm hover:bg-muted/30 rounded-md cursor-pointer">
            <span className="text-sm">Notificaciones de nuevas tareas</span>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </label>
          <label className="flex items-center justify-between p-sm hover:bg-muted/30 rounded-md cursor-pointer">
            <span className="text-sm">Mensajes de profesores</span>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </label>
          <label className="flex items-center justify-between p-sm hover:bg-muted/30 rounded-md cursor-pointer">
            <span className="text-sm">Recordatorios de clases</span>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </label>
          <label className="flex items-center justify-between p-sm hover:bg-muted/30 rounded-md cursor-pointer">
            <span className="text-sm">Logros y progreso</span>
            <input type="checkbox" className="w-5 h-5" />
          </label>
        </div>
      </div>
    </Container>
  );
}
