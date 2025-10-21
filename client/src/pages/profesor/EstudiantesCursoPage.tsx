import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Estudiantes del Curso (Profesor)
 * Muestra lista de estudiantes inscritos con su progreso
 */

export function EstudiantesCursoPage() {
  const { id } = useParams();
  const [filtro, setFiltro] = useState('todos');

  // Mock data
  const curso = {
    id: Number(id),
    titulo: 'React Avanzado',
    totalLecciones: 24,
  };

  const estudiantes = [
    {
      id: 1,
      nombre: 'Ana García',
      email: 'ana@example.com',
      foto: '👩',
      inscripcion: '2024-01-10',
      progreso: 75,
      leccionesVistas: 18,
      ultimaActividad: '2024-01-20',
      tiempoTotal: '8h 30min',
      certificadoObtenido: false,
    },
    {
      id: 2,
      nombre: 'Carlos López',
      email: 'carlos@example.com',
      foto: '👨',
      inscripcion: '2024-01-08',
      progreso: 100,
      leccionesVistas: 24,
      ultimaActividad: '2024-01-18',
      tiempoTotal: '12h 45min',
      certificadoObtenido: true,
    },
    {
      id: 3,
      nombre: 'María Fernández',
      email: 'maria@example.com',
      foto: '👩‍💼',
      inscripcion: '2024-01-12',
      progreso: 25,
      leccionesVistas: 6,
      ultimaActividad: '2024-01-15',
      tiempoTotal: '2h 15min',
      certificadoObtenido: false,
    },
  ];

  const estudiantesFiltrados = estudiantes.filter(e => {
    if (filtro === 'activos') return e.progreso > 0 && e.progreso < 100;
    if (filtro === 'completados') return e.progreso === 100;
    if (filtro === 'inactivos') {
      const diasInactivo = Math.floor((Date.now() - new Date(e.ultimaActividad).getTime()) / (1000 * 60 * 60 * 24));
      return diasInactivo > 7;
    }
    return true;
  });

  const promedioProgreso = Math.round(
    estudiantes.reduce((sum, e) => sum + e.progreso, 0) / estudiantes.length
  );

  return (
    <Container className="py-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-lg">
        <div>
          <Link to={`/profesor/cursos`} className="text-sm text-amber-600 hover:underline mb-xs inline-block">
            ← Volver a Cursos
          </Link>
          <h1 className="font-display text-3xl font-bold mb-sm">
            Estudiantes - {curso.titulo}
          </h1>
          <p className="text-foreground/60">
            Monitorea el progreso de tus estudiantes
          </p>
        </div>
        <Link
          to={`/profesor/cursos/${id}/modulos`}
          className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30"
        >
          📚 Ver Módulos
        </Link>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Total Estudiantes</div>
          <div className="text-2xl font-bold">{estudiantes.length}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Progreso Promedio</div>
          <div className="text-2xl font-bold text-amber-600">{promedioProgreso}%</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Completados</div>
          <div className="text-2xl font-bold text-emerald-600">
            {estudiantes.filter(e => e.progreso === 100).length}
          </div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Certificados</div>
          <div className="text-2xl font-bold">
            {estudiantes.filter(e => e.certificadoObtenido).length}
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex gap-sm mb-md">
        <button
          onClick={() => setFiltro('todos')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filtro === 'todos'
              ? 'bg-amber-500 text-white'
              : 'bg-muted hover:bg-muted/70'
          }`}
        >
          Todos ({estudiantes.length})
        </button>
        <button
          onClick={() => setFiltro('activos')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filtro === 'activos'
              ? 'bg-amber-500 text-white'
              : 'bg-muted hover:bg-muted/70'
          }`}
        >
          Activos ({estudiantes.filter(e => e.progreso > 0 && e.progreso < 100).length})
        </button>
        <button
          onClick={() => setFiltro('completados')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filtro === 'completados'
              ? 'bg-amber-500 text-white'
              : 'bg-muted hover:bg-muted/70'
          }`}
        >
          Completados ({estudiantes.filter(e => e.progreso === 100).length})
        </button>
        <button
          onClick={() => setFiltro('inactivos')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filtro === 'inactivos'
              ? 'bg-amber-500 text-white'
              : 'bg-muted hover:bg-muted/70'
          }`}
        >
          Inactivos
        </button>
      </div>

      {/* Lista de Estudiantes */}
      <div className="border border-foreground/10 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/30">
            <tr>
              <th className="px-md py-sm text-left text-sm font-semibold">Estudiante</th>
              <th className="px-md py-sm text-left text-sm font-semibold">Inscripción</th>
              <th className="px-md py-sm text-left text-sm font-semibold">Progreso</th>
              <th className="px-md py-sm text-left text-sm font-semibold">Lecciones</th>
              <th className="px-md py-sm text-left text-sm font-semibold">Última Actividad</th>
              <th className="px-md py-sm text-left text-sm font-semibold">Tiempo</th>
              <th className="px-md py-sm text-left text-sm font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantesFiltrados.map((estudiante) => (
              <tr key={estudiante.id} className="border-t border-foreground/10 hover:bg-muted/20">
                <td className="px-md py-md">
                  <div className="flex items-center gap-sm">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl">
                      {estudiante.foto}
                    </div>
                    <div>
                      <div className="font-semibold">{estudiante.nombre}</div>
                      <div className="text-xs text-foreground/60">{estudiante.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-md py-md text-sm">
                  {new Date(estudiante.inscripcion).toLocaleDateString()}
                </td>
                <td className="px-md py-md">
                  <div className="flex items-center gap-sm">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-[80px]">
                      <div
                        className={`h-2 rounded-full ${
                          estudiante.progreso === 100 ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${estudiante.progreso}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold min-w-[45px]">
                      {estudiante.progreso}%
                    </span>
                  </div>
                </td>
                <td className="px-md py-md text-sm">
                  {estudiante.leccionesVistas}/{curso.totalLecciones}
                </td>
                <td className="px-md py-md text-sm">
                  {new Date(estudiante.ultimaActividad).toLocaleDateString()}
                </td>
                <td className="px-md py-md text-sm">
                  {estudiante.tiempoTotal}
                </td>
                <td className="px-md py-md">
                  <div className="flex gap-xs">
                    <button
                      title="Ver detalles"
                      className="px-2 py-1 text-sm border border-foreground/20 rounded hover:bg-muted/30"
                    >
                      👁️
                    </button>
                    <button
                      title="Enviar mensaje"
                      className="px-2 py-1 text-sm border border-foreground/20 rounded hover:bg-muted/30"
                    >
                      💬
                    </button>
                    {estudiante.certificadoObtenido && (
                      <button
                        title="Certificado"
                        className="px-2 py-1 text-sm bg-emerald-100 text-emerald-700 rounded"
                      >
                        🏆
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {estudiantesFiltrados.length === 0 && (
        <div className="text-center py-xl text-foreground/60">
          <div className="text-4xl mb-sm">👥</div>
          <p>No hay estudiantes en esta categoría</p>
        </div>
      )}

      {/* Acciones Masivas */}
      <div className="mt-md flex gap-sm">
        <button className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30">
          📧 Enviar Anuncio a Todos
        </button>
        <button className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30">
          📊 Exportar Datos
        </button>
      </div>
    </Container>
  );
}
