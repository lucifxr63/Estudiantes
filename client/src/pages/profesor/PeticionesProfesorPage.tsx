import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Peticiones para el Profesor
 * Lista de peticiones de alumnos que el profesor puede responder
 */

export function PeticionesProfesorPage() {
  return (
    <Container className="py-lg">
      <h1 className="font-display text-3xl font-bold mb-sm">Peticiones de Alumnos</h1>
      <p className="text-foreground/60 mb-lg">
        Encuentra oportunidades de enseñanza personalizadas
      </p>

      {/* Filtros */}
      <div className="flex gap-sm mb-lg flex-wrap">
        <button className="px-4 py-2 bg-amber-500 text-white rounded-md text-sm font-medium">
          Todas (24)
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Programación (12)
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Diseño (5)
        </button>
        <button className="px-4 py-2 bg-muted/30 text-foreground/70 rounded-md text-sm font-medium hover:bg-muted/50">
          Idiomas (7)
        </button>
      </div>

      {/* Lista de peticiones */}
      <div className="space-y-md">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="border border-foreground/10 rounded-lg p-md hover:border-amber-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-sm">
              <div>
                <h3 className="font-semibold text-lg mb-xs">
                  Necesito profesor de React y TypeScript
                </h3>
                <p className="text-sm text-foreground/60">
                  Publicado hace 2 días • 3 respuestas
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                Nueva
              </span>
            </div>
            
            <p className="text-foreground/70 mb-md">
              Busco un profesor experto en React y TypeScript para aprender conceptos avanzados 
              como custom hooks, context API, y patrones de diseño. Tengo experiencia básica en 
              JavaScript y quiero llevar mis habilidades al siguiente nivel...
            </p>

            <div className="flex items-center gap-md text-sm text-foreground/60 mb-md">
              <span>💰 $30-40/hora</span>
              <span>📍 Remoto</span>
              <span>⏰ 2 horas/semana</span>
              <span>📊 Intermedio</span>
            </div>

            {/* Información del estudiante */}
            <div className="flex items-center gap-sm mb-md p-sm bg-muted/20 rounded-md">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
                J
              </div>
              <div>
                <div className="font-medium text-sm">Juan Pérez</div>
                <div className="text-xs text-foreground/60">Miembro desde 2023 • 5 clases completadas</div>
              </div>
            </div>

            <div className="flex gap-sm">
              <button className="px-4 py-2 bg-amber-500 text-white text-sm rounded-md hover:bg-amber-600">
                Responder Petición
              </button>
              <button className="px-4 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30">
                Ver Perfil
              </button>
              <button className="px-4 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30">
                Guardar
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
