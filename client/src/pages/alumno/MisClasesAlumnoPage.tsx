import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Mis Clases del Alumno
 * Muestra todas las clases matriculadas con filtros
 */

export function MisClasesAlumnoPage() {
  return (
    <Container className="py-lg">
      <h1 className="font-display text-3xl font-bold mb-sm">Mis Clases</h1>
      <p className="text-foreground/60 mb-lg">
        Gestiona todas las clases en las que estás inscrito
      </p>

      {/* Filtros */}
      <div className="flex gap-sm mb-lg">
        <button className="px-4 py-2 bg-emerald-500 text-white rounded-md text-sm font-medium">
          Todas
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          En Progreso
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Completadas
        </button>
      </div>

      {/* Grid de clases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="border border-foreground/10 rounded-lg p-md hover:border-emerald-500/50 transition-colors"
          >
            <div className="aspect-video bg-muted/50 rounded-md mb-sm" />
            <h3 className="font-semibold mb-xs">Clase de React {i}</h3>
            <p className="text-sm text-foreground/60 mb-sm">
              Prof. Juan Pérez
            </p>
            
            {/* Barra de progreso */}
            <div className="mb-sm">
              <div className="flex justify-between text-xs text-foreground/60 mb-xs">
                <span>Progreso</span>
                <span>65%</span>
              </div>
              <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: '65%' }} />
              </div>
            </div>

            <div className="flex gap-xs">
              <button className="flex-1 py-2 bg-emerald-500 text-white text-sm rounded-md hover:bg-emerald-600">
                Continuar
              </button>
              <button className="px-3 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30">
                💬
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
