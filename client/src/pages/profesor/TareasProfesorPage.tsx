import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Tareas del Profesor
 * Gestión y calificación de tareas de estudiantes
 */

export function TareasProfesorPage() {
  return (
    <Container className="py-lg">
      <h1 className="font-display text-3xl font-bold mb-sm">Tareas Pendientes</h1>
      <p className="text-foreground/60 mb-lg">
        Revisa y califica las entregas de tus estudiantes
      </p>

      {/* Filtros */}
      <div className="flex gap-sm mb-lg">
        <button className="px-4 py-2 bg-amber-500 text-white rounded-md text-sm font-medium">
          Pendientes (5)
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Calificadas (23)
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Vencidas (1)
        </button>
      </div>

      {/* Lista de tareas */}
      <div className="space-y-md">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="border border-foreground/10 rounded-lg p-md hover:border-amber-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-sm">
              <div>
                <h3 className="font-semibold mb-xs">
                  Ejercicio de Hooks en React
                </h3>
                <p className="text-sm text-foreground/60">
                  React Avanzado • Módulo 3
                </p>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full font-medium">
                Vence hoy
              </span>
            </div>

            {/* Información del estudiante */}
            <div className="flex items-center gap-sm mb-md">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                J
              </div>
              <div>
                <div className="font-medium text-sm">Juan Pérez</div>
                <div className="text-xs text-foreground/60">Entregado hace 2 horas</div>
              </div>
            </div>

            {/* Archivos adjuntos */}
            <div className="bg-muted/20 rounded-md p-sm mb-md">
              <div className="text-xs text-foreground/60 mb-xs">Archivos adjuntos:</div>
              <div className="flex items-center gap-xs">
                <span className="text-sm">📄 ejercicio-hooks.zip</span>
                <span className="text-xs text-foreground/60">(2.3 MB)</span>
              </div>
            </div>

            <div className="flex gap-sm">
              <button className="px-4 py-2 bg-amber-500 text-white text-sm rounded-md hover:bg-amber-600">
                Revisar y Calificar
              </button>
              <button className="px-4 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30">
                Descargar
              </button>
              <button className="px-4 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30">
                Mensaje
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
