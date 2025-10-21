import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Mis Cursos del Alumno
 * Muestra cursos comprados con tracking de progreso
 */

export function MisCursosPage() {
  // Mock data de cursos comprados
  const cursos = [
    {
      id: 1,
      titulo: 'React Avanzado',
      profesor: 'Juan Pérez',
      thumbnail: '📚',
      progreso: 45,
      ultimaLeccion: 'Módulo 2: Lección 3 - useMemo y useCallback',
      ultimaVez: '2024-01-15',
      totalLecciones: 24,
      leccionesVistas: 11,
      duracionTotal: '12h 30min',
      certificadoDisponible: false,
    },
    {
      id: 2,
      titulo: 'TypeScript desde Cero',
      profesor: 'Juan Pérez',
      thumbnail: '💻',
      progreso: 100,
      ultimaLeccion: 'Completado',
      ultimaVez: '2024-01-10',
      totalLecciones: 18,
      leccionesVistas: 18,
      duracionTotal: '8h 15min',
      certificadoDisponible: true,
    },
    {
      id: 3,
      titulo: 'Diseño UX/UI Profesional',
      profesor: 'María González',
      thumbnail: '🎨',
      progreso: 12,
      ultimaLeccion: 'Módulo 1: Lección 2 - Principios de diseño',
      ultimaVez: '2024-01-12',
      totalLecciones: 30,
      leccionesVistas: 4,
      duracionTotal: '10h 00min',
      certificadoDisponible: false,
    },
  ];

  const enProgreso = cursos.filter(c => c.progreso > 0 && c.progreso < 100);
  const completados = cursos.filter(c => c.progreso === 100);

  return (
    <Container className="py-lg">
      <div className="mb-lg">
        <h1 className="font-display text-3xl font-bold mb-sm">Mis Cursos</h1>
        <p className="text-foreground/60">
          Continúa tu aprendizaje donde lo dejaste
        </p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Cursos Activos</div>
          <div className="text-2xl font-bold">{cursos.length}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">En Progreso</div>
          <div className="text-2xl font-bold">{enProgreso.length}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Completados</div>
          <div className="text-2xl font-bold text-emerald-600">{completados.length}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Certificados</div>
          <div className="text-2xl font-bold">{completados.length}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-sm mb-md border-b border-foreground/10">
        <button className="px-4 py-2 font-semibold text-primary border-b-2 border-primary">
          Todos ({cursos.length})
        </button>
        <button className="px-4 py-2 text-foreground/60 hover:text-foreground">
          En Progreso ({enProgreso.length})
        </button>
        <button className="px-4 py-2 text-foreground/60 hover:text-foreground">
          Completados ({completados.length})
        </button>
      </div>

      {/* Lista de Cursos */}
      <div className="space-y-md">
        {cursos.map((curso) => (
          <div key={curso.id} className="border border-foreground/10 rounded-lg p-md hover:shadow-md transition-shadow">
            <div className="flex gap-md">
              {/* Thumbnail */}
              <Link
                to={`/alumno/curso/${curso.id}`}
                className="w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center text-5xl flex-shrink-0 hover:scale-105 transition-transform"
              >
                {curso.thumbnail}
              </Link>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-sm">
                  <div className="flex-1">
                    <Link
                      to={`/alumno/curso/${curso.id}`}
                      className="font-semibold text-lg hover:text-primary mb-xs block"
                    >
                      {curso.titulo}
                    </Link>
                    <div className="text-sm text-foreground/60 mb-xs">
                      Por {curso.profesor}
                    </div>
                  </div>
                  {curso.certificadoDisponible && (
                    <button className="px-3 py-1.5 bg-emerald-500 text-white rounded-md text-sm font-semibold hover:bg-emerald-600">
                      🏆 Descargar Certificado
                    </button>
                  )}
                </div>

                {/* Barra de Progreso */}
                <div className="mb-sm">
                  <div className="flex items-center justify-between text-sm mb-xs">
                    <span className="text-foreground/60">
                      {curso.leccionesVistas} de {curso.totalLecciones} lecciones completadas
                    </span>
                    <span className="font-semibold text-emerald-600">
                      {curso.progreso}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        curso.progreso === 100 ? 'bg-emerald-500' : 'bg-primary'
                      }`}
                      style={{ width: `${curso.progreso}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-foreground/60">
                    {curso.progreso === 100 ? (
                      <span className="text-emerald-600 font-semibold">✓ Completado</span>
                    ) : (
                      <>
                        Última vez: {new Date(curso.ultimaVez).toLocaleDateString()} • {curso.ultimaLeccion}
                      </>
                    )}
                  </div>
                  <Link
                    to={`/alumno/curso/${curso.id}`}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90"
                  >
                    {curso.progreso === 0 ? 'Comenzar' : curso.progreso === 100 ? 'Revisar' : 'Continuar'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cursos.length === 0 && (
        <div className="text-center py-xl">
          <div className="text-6xl mb-md">📚</div>
          <h3 className="font-semibold text-xl mb-sm">No tienes cursos aún</h3>
          <p className="text-foreground/60 mb-md">
            Explora nuestro catálogo y comienza tu aprendizaje
          </p>
          <Link
            to="/cursos"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
          >
            Explorar Cursos
          </Link>
        </div>
      )}
    </Container>
  );
}
