import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Mis Clases del Profesor
 * Gestión completa de clases publicadas
 */

export function ClasesProfesorPage() {
  return (
    <Container className="py-lg">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Mis Clases</h1>
          <p className="text-foreground/60">
            Administra tus clases publicadas
          </p>
        </div>
        <Link
          to="/profesor/clases/nueva"
          className="px-4 py-2 bg-amber-500 text-white rounded-md font-medium hover:bg-amber-600 transition-colors"
        >
          + Nueva Clase
        </Link>
      </div>

      {/* Filtros */}
      <div className="flex gap-sm mb-lg">
        <button className="px-4 py-2 bg-amber-500 text-white rounded-md text-sm font-medium">
          Todas (6)
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Activas (4)
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Borradores (2)
        </button>
      </div>

      {/* Grid de clases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="border border-foreground/10 rounded-lg p-md hover:border-amber-500/50 transition-colors"
          >
            <div className="aspect-video bg-muted/50 rounded-md mb-sm relative">
              <span className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                Activa
              </span>
            </div>
            
            <h3 className="font-semibold mb-xs">React Avanzado {i}</h3>
            <p className="text-sm text-foreground/60 mb-sm">
              48 estudiantes inscritos
            </p>
            
            {/* Estadísticas */}
            <div className="flex items-center gap-md text-xs text-foreground/60 mb-md">
              <span>⭐ 4.9</span>
              <span>💰 $49/hora</span>
              <span>🕐 12h total</span>
            </div>

            {/* Acciones */}
            <div className="flex gap-xs">
              <Link
                to={`/profesor/clases/${i}/editar`}
                className="flex-1 py-2 bg-amber-500 text-white text-sm text-center rounded-md hover:bg-amber-600"
              >
                Editar
              </Link>
              <Link
                to={`/profesor/clases/${i}/estadisticas`}
                className="px-3 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30"
                title="Estadísticas"
              >
                📊
              </Link>
              <button
                className="px-3 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30"
                title="Más opciones"
              >
                ⋮
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
