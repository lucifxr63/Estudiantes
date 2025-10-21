import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Mis Peticiones del Alumno
 * Lista de peticiones creadas por el alumno
 */

export function PeticionesAlumnoPage() {
  return (
    <Container className="py-lg">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Mis Peticiones</h1>
          <p className="text-foreground/60">
            Solicitudes de clases personalizadas
          </p>
        </div>
        <Link
          to="/alumno/peticiones/nueva"
          className="px-4 py-2 bg-emerald-500 text-white rounded-md font-medium hover:bg-emerald-600 transition-colors"
        >
          + Nueva Petición
        </Link>
      </div>

      {/* Tabs de estado */}
      <div className="border-b border-foreground/10 mb-lg">
        <div className="flex gap-md">
          <button className="pb-sm border-b-2 border-emerald-500 font-semibold">
            Abiertas (3)
          </button>
          <button className="pb-sm border-b-2 border-transparent font-semibold text-foreground/60 hover:text-foreground">
            Resueltas (7)
          </button>
          <button className="pb-sm border-b-2 border-transparent font-semibold text-foreground/60 hover:text-foreground">
            Cerradas (2)
          </button>
        </div>
      </div>

      {/* Lista de peticiones */}
      <div className="space-y-md">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border border-foreground/10 rounded-lg p-md hover:border-emerald-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-sm">
              <div>
                <h3 className="font-semibold text-lg mb-xs">
                  Necesito profesor de TypeScript
                </h3>
                <p className="text-sm text-foreground/60">
                  Creada hace 3 días • 5 respuestas
                </p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
                Abierta
              </span>
            </div>
            
            <p className="text-foreground/70 mb-md">
              Busco un profesor experto en TypeScript para aprender conceptos avanzados...
            </p>

            <div className="flex items-center gap-md text-sm text-foreground/60">
              <span>💰 $25-35/hora</span>
              <span>📍 Remoto</span>
              <span>⏰ 2 horas/semana</span>
            </div>

            <div className="flex gap-sm mt-md pt-md border-t border-foreground/10">
              <Link
                to={`/alumno/peticiones/${i}`}
                className="px-4 py-2 bg-emerald-500 text-white text-sm rounded-md hover:bg-emerald-600"
              >
                Ver Respuestas
              </Link>
              <button className="px-4 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30">
                Editar
              </button>
              <button className="px-4 py-2 border border-foreground/20 text-sm rounded-md hover:bg-red-50 hover:border-red-300 hover:text-red-600">
                Cerrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
