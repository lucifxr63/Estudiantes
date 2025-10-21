import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Agenda del Profesor
 * Vista de calendario con sesiones programadas
 */

export function AgendaProfesorPage() {
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  
  return (
    <Container className="py-lg">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Agenda</h1>
          <p className="text-foreground/60">
            Octubre 2024
          </p>
        </div>
        <div className="flex gap-sm">
          <button className="px-4 py-2 border border-foreground/20 rounded-md hover:bg-muted/30">
            ← Anterior
          </button>
          <button className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600">
            Hoy
          </button>
          <button className="px-4 py-2 border border-foreground/20 rounded-md hover:bg-muted/30">
            Siguiente →
          </button>
        </div>
      </div>

      {/* Vista de calendario */}
      <div className="border border-foreground/10 rounded-lg overflow-hidden mb-lg">
        {/* Header de días */}
        <div className="grid grid-cols-7 bg-muted/30">
          {days.map((day) => (
            <div key={day} className="p-sm text-center font-semibold text-sm border-r border-foreground/10 last:border-r-0">
              {day}
            </div>
          ))}
        </div>

        {/* Grid de días */}
        <div className="grid grid-cols-7">
          {Array.from({ length: 35 }, (_, i) => (
            <div
              key={i}
              className="min-h-[100px] p-xs border-r border-b border-foreground/10 last:border-r-0 hover:bg-muted/20 cursor-pointer"
            >
              <div className="text-sm font-medium mb-xs">{i + 1}</div>
              {/* Eventos del día (placeholder) */}
              {i % 3 === 0 && (
                <div className="text-xs bg-amber-100 text-amber-700 rounded p-xs mb-xs">
                  14:00 React Avanzado
                </div>
              )}
              {i % 5 === 0 && (
                <div className="text-xs bg-blue-100 text-blue-700 rounded p-xs">
                  16:00 TypeScript
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lista de próximas sesiones */}
      <div>
        <h2 className="font-semibold text-lg mb-md">Próximas Sesiones</h2>
        <div className="space-y-sm">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-md border border-foreground/10 rounded-lg hover:border-amber-500/50"
            >
              <div className="flex items-center gap-md">
                <div className="text-center">
                  <div className="text-lg font-bold">15</div>
                  <div className="text-xs text-foreground/60">Oct</div>
                </div>
                <div>
                  <div className="font-semibold">React Avanzado - Sesión {i}</div>
                  <div className="text-sm text-foreground/60">
                    14:00 - 15:30 • 12 estudiantes
                  </div>
                </div>
              </div>
              <div className="flex gap-xs">
                <button className="px-4 py-2 bg-amber-500 text-white text-sm rounded-md hover:bg-amber-600">
                  Unirse
                </button>
                <button className="px-3 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30">
                  ⋮
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
