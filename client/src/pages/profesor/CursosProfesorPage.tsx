import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Gestión de Cursos del Profesor
 * Lista todos los cursos grabados (asíncronos) que ha creado
 */

export function CursosProfesorPage() {
  // Mock data
  const cursos = [
    {
      id: 1,
      titulo: 'React Avanzado',
      thumbnail: '📚',
      modulos: 5,
      lecciones: 24,
      duracionTotal: '12h 30min',
      estudiantes: 45,
      ingresos: 2205,
      precio: 49.99,
      estado: 'publicado',
      gratis: false,
    },
    {
      id: 2,
      titulo: 'TypeScript desde Cero',
      thumbnail: '💻',
      modulos: 4,
      lecciones: 18,
      duracionTotal: '8h 15min',
      estudiantes: 32,
      ingresos: 0,
      precio: 0,
      estado: 'publicado',
      gratis: true,
    },
    {
      id: 3,
      titulo: 'Node.js y Express',
      thumbnail: '🟢',
      modulos: 3,
      lecciones: 12,
      duracionTotal: '6h 00min',
      estudiantes: 0,
      ingresos: 0,
      precio: 39.99,
      estado: 'borrador',
      gratis: false,
    },
  ];

  const totalIngresos = cursos.reduce((sum, c) => sum + c.ingresos, 0);
  const totalEstudiantes = cursos.reduce((sum, c) => sum + c.estudiantes, 0);

  return (
    <Container className="py-lg">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Mis Cursos</h1>
          <p className="text-foreground/60">
            Gestiona tus cursos grabados y contenido asíncrono
          </p>
        </div>
        <Link
          to="/profesor/cursos/nuevo"
          className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
        >
          + Nuevo Curso
        </Link>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Total Cursos</div>
          <div className="text-2xl font-bold">{cursos.length}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Total Estudiantes</div>
          <div className="text-2xl font-bold">{totalEstudiantes}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Ingresos Totales</div>
          <div className="text-2xl font-bold text-amber-600">${totalIngresos.toLocaleString()}</div>
        </div>
      </div>

      {/* Lista de cursos */}
      <div className="space-y-md">
        {cursos.map((curso) => (
          <div key={curso.id} className="border border-foreground/10 rounded-lg p-md hover:shadow-md transition-shadow">
            <div className="flex gap-md">
              {/* Thumbnail */}
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                {curso.thumbnail}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-sm">
                  <div>
                    <h3 className="font-semibold text-lg mb-xs">{curso.titulo}</h3>
                    <div className="flex gap-md text-sm text-foreground/60">
                      <span>{curso.modulos} módulos</span>
                      <span>•</span>
                      <span>{curso.lecciones} lecciones</span>
                      <span>•</span>
                      <span>{curso.duracionTotal}</span>
                    </div>
                  </div>
                  <div className="flex gap-xs">
                    {curso.gratis && (
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                        GRATIS
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      curso.estado === 'publicado'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {curso.estado === 'publicado' ? 'PUBLICADO' : 'BORRADOR'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-md mb-sm">
                  <div>
                    <div className="text-xs text-foreground/60">Precio</div>
                    <div className="font-semibold">{curso.gratis ? 'Gratis' : `$${curso.precio}`}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/60">Estudiantes</div>
                    <div className="font-semibold">{curso.estudiantes}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/60">Ingresos</div>
                    <div className="font-semibold text-amber-600">${curso.ingresos}</div>
                  </div>
                </div>

                <div className="flex gap-sm">
                  <Link
                    to={`/profesor/cursos/${curso.id}`}
                    className="px-3 py-1.5 text-sm border border-foreground/20 rounded-md hover:bg-muted/30"
                  >
                    ✏️ Editar Curso
                  </Link>
                  <Link
                    to={`/profesor/cursos/${curso.id}/modulos`}
                    className="px-3 py-1.5 text-sm border border-foreground/20 rounded-md hover:bg-muted/30"
                  >
                    📚 Módulos & Lecciones
                  </Link>
                  <Link
                    to={`/profesor/cursos/${curso.id}/estudiantes`}
                    className="px-3 py-1.5 text-sm border border-foreground/20 rounded-md hover:bg-muted/30"
                  >
                    👥 Ver Estudiantes ({curso.estudiantes})
                  </Link>
                  {curso.estado === 'borrador' && (
                    <button className="px-3 py-1.5 text-sm bg-amber-500 text-white rounded-md hover:bg-amber-600">
                      🚀 Publicar
                    </button>
                  )}
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
            Crea tu primer curso grabado y comparte tu conocimiento con el mundo
          </p>
          <Link
            to="/profesor/cursos/nuevo"
            className="inline-block px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
          >
            Crear Primer Curso
          </Link>
        </div>
      )}
    </Container>
  );
}
