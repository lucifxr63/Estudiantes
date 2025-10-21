import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Gestión de Módulos y Lecciones
 * Permite crear/editar/ordenar módulos y sus lecciones con videos
 */

type Leccion = {
  id: number;
  titulo: string;
  duracion: string;
  videoUrl?: string;
  descripcion: string;
  materiales: string[];
  orden: number;
};

type Modulo = {
  id: number;
  titulo: string;
  descripcion: string;
  orden: number;
  lecciones: Leccion[];
  quiz?: boolean;
};

export function GestionModulosPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data del curso
  const curso = {
    id: Number(id),
    titulo: 'React Avanzado',
    estado: 'borrador',
  };

  // Mock data de módulos
  const [modulos, setModulos] = useState<Modulo[]>([
    {
      id: 1,
      titulo: 'Fundamentos',
      descripcion: 'Conceptos básicos de React',
      orden: 1,
      quiz: true,
      lecciones: [
        {
          id: 1,
          titulo: 'Introducción a Hooks',
          duracion: '15:30',
          videoUrl: 'https://...',
          descripcion: 'Aprende sobre useState y useEffect',
          materiales: ['hooks-guide.pdf'],
          orden: 1,
        },
        {
          id: 2,
          titulo: 'Context API',
          duracion: '20:45',
          videoUrl: 'https://...',
          descripcion: 'Gestión de estado global',
          materiales: [],
          orden: 2,
        },
      ],
    },
    {
      id: 2,
      titulo: 'Optimización',
      descripcion: 'Técnicas de rendimiento',
      orden: 2,
      quiz: false,
      lecciones: [
        {
          id: 3,
          titulo: 'useMemo y useCallback',
          duracion: '18:00',
          descripcion: 'Evita re-renderizados innecesarios',
          materiales: [],
          orden: 1,
        },
      ],
    },
  ]);

  const [moduloExpandido, setModuloExpandido] = useState<number | null>(1);
  const [editandoModulo, setEditandoModulo] = useState<number | null>(null);
  const [editandoLeccion, setEditandoLeccion] = useState<number | null>(null);

  const toggleModulo = (moduloId: number) => {
    setModuloExpandido(moduloExpandido === moduloId ? null : moduloId);
  };

  const agregarModulo = () => {
    const nuevoModulo: Modulo = {
      id: Date.now(),
      titulo: 'Nuevo Módulo',
      descripcion: '',
      orden: modulos.length + 1,
      lecciones: [],
      quiz: false,
    };
    setModulos([...modulos, nuevoModulo]);
    setEditandoModulo(nuevoModulo.id);
    setModuloExpandido(nuevoModulo.id);
  };

  const agregarLeccion = (moduloId: number) => {
    const modulo = modulos.find(m => m.id === moduloId);
    if (!modulo) return;

    const nuevaLeccion: Leccion = {
      id: Date.now(),
      titulo: 'Nueva Lección',
      duracion: '00:00',
      descripcion: '',
      materiales: [],
      orden: modulo.lecciones.length + 1,
    };

    setModulos(modulos.map(m => 
      m.id === moduloId 
        ? { ...m, lecciones: [...m.lecciones, nuevaLeccion] }
        : m
    ));
    setEditandoLeccion(nuevaLeccion.id);
  };

  const eliminarModulo = (moduloId: number) => {
    if (confirm('¿Eliminar este módulo y todas sus lecciones?')) {
      setModulos(modulos.filter(m => m.id !== moduloId));
    }
  };

  const eliminarLeccion = (moduloId: number, leccionId: number) => {
    if (confirm('¿Eliminar esta lección?')) {
      setModulos(modulos.map(m =>
        m.id === moduloId
          ? { ...m, lecciones: m.lecciones.filter(l => l.id !== leccionId) }
          : m
      ));
    }
  };

  const totalLecciones = modulos.reduce((sum, m) => sum + m.lecciones.length, 0);
  const duracionTotal = '12h 30min'; // Calculado desde las lecciones

  return (
    <Container className="py-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-lg">
        <div>
          <Link to="/profesor/cursos" className="text-sm text-amber-600 hover:underline mb-xs inline-block">
            ← Volver a Cursos
          </Link>
          <h1 className="font-display text-3xl font-bold mb-sm">
            {curso.titulo} - Módulos y Lecciones
          </h1>
          <p className="text-foreground/60">
            Estructura tu curso en módulos y lecciones con videos
          </p>
        </div>
        <div className="flex gap-sm">
          <button
            onClick={() => navigate(`/profesor/cursos/${id}`)}
            className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30"
          >
            ⚙️ Editar Info Curso
          </button>
          {curso.estado === 'borrador' && (
            <button className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600">
              🚀 Publicar Curso
            </button>
          )}
        </div>
      </div>

      {/* Resumen */}
      <div className="grid grid-cols-3 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Módulos</div>
          <div className="text-2xl font-bold">{modulos.length}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Lecciones</div>
          <div className="text-2xl font-bold">{totalLecciones}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Duración Total</div>
          <div className="text-2xl font-bold">{duracionTotal}</div>
        </div>
      </div>

      {/* Botón Agregar Módulo */}
      <button
        onClick={agregarModulo}
        className="w-full mb-md py-3 border-2 border-dashed border-foreground/20 rounded-lg hover:bg-muted/30 font-semibold"
      >
        + Agregar Módulo
      </button>

      {/* Lista de Módulos */}
      <div className="space-y-md">
        {modulos.map((modulo, moduloIndex) => (
          <div key={modulo.id} className="border border-foreground/10 rounded-lg overflow-hidden">
            {/* Header del Módulo */}
            <div className="bg-muted/30 p-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-md flex-1">
                  <button
                    onClick={() => toggleModulo(modulo.id)}
                    className="text-xl hover:bg-muted/50 w-8 h-8 flex items-center justify-center rounded"
                  >
                    {moduloExpandido === modulo.id ? '▼' : '▶'}
                  </button>
                  {editandoModulo === modulo.id ? (
                    <div className="flex-1 space-y-sm">
                      <input
                        type="text"
                        defaultValue={modulo.titulo}
                        placeholder="Título del módulo"
                        className="w-full px-sm py-sm border border-foreground/20 rounded-md font-semibold"
                        onBlur={(e) => {
                          setModulos(modulos.map(m =>
                            m.id === modulo.id ? { ...m, titulo: e.target.value } : m
                          ));
                          setEditandoModulo(null);
                        }}
                        autoFocus
                      />
                      <input
                        type="text"
                        defaultValue={modulo.descripcion}
                        placeholder="Descripción breve"
                        className="w-full px-sm py-sm text-sm border border-foreground/20 rounded-md"
                        onBlur={(e) => {
                          setModulos(modulos.map(m =>
                            m.id === modulo.id ? { ...m, descripcion: e.target.value } : m
                          ));
                        }}
                      />
                    </div>
                  ) : (
                    <div className="flex-1">
                      <div className="flex items-center gap-sm mb-xs">
                        <h3 className="font-semibold text-lg">
                          Módulo {moduloIndex + 1}: {modulo.titulo}
                        </h3>
                        {modulo.quiz && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                            CON QUIZ
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-foreground/60">{modulo.descripcion}</p>
                      <div className="text-xs text-foreground/60 mt-xs">
                        {modulo.lecciones.length} lecciones
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex gap-xs">
                  <button
                    onClick={() => setEditandoModulo(modulo.id)}
                    className="px-3 py-1.5 text-sm border border-foreground/20 rounded-md hover:bg-muted/50"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => agregarLeccion(modulo.id)}
                    className="px-3 py-1.5 text-sm bg-amber-500 text-white rounded-md hover:bg-amber-600"
                  >
                    + Lección
                  </button>
                  <button
                    onClick={() => eliminarModulo(modulo.id)}
                    className="px-3 py-1.5 text-sm border border-red-500 text-red-600 rounded-md hover:bg-red-50"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>

            {/* Lecciones (colapsable) */}
            {moduloExpandido === modulo.id && (
              <div className="p-md space-y-sm">
                {modulo.lecciones.length === 0 ? (
                  <div className="text-center py-lg text-foreground/60">
                    <div className="text-3xl mb-sm">📹</div>
                    <p className="text-sm">No hay lecciones. Haz clic en "+ Lección" para agregar.</p>
                  </div>
                ) : (
                  modulo.lecciones.map((leccion, leccionIndex) => (
                    <div key={leccion.id} className="border border-foreground/10 rounded-lg p-sm hover:shadow-md">
                      {editandoLeccion === leccion.id ? (
                        <div className="space-y-sm">
                          <input
                            type="text"
                            defaultValue={leccion.titulo}
                            placeholder="Título de la lección"
                            className="w-full px-sm py-sm border border-foreground/20 rounded-md font-semibold"
                            onBlur={(e) => {
                              setModulos(modulos.map(m =>
                                m.id === modulo.id
                                  ? {
                                      ...m,
                                      lecciones: m.lecciones.map(l =>
                                        l.id === leccion.id ? { ...l, titulo: e.target.value } : l
                                      )
                                    }
                                  : m
                              ));
                              setEditandoLeccion(null);
                            }}
                            autoFocus
                          />
                          <textarea
                            defaultValue={leccion.descripcion}
                            placeholder="Descripción de la lección"
                            rows={2}
                            className="w-full px-sm py-sm text-sm border border-foreground/20 rounded-md"
                            onBlur={(e) => {
                              setModulos(modulos.map(m =>
                                m.id === modulo.id
                                  ? {
                                      ...m,
                                      lecciones: m.lecciones.map(l =>
                                        l.id === leccion.id ? { ...l, descripcion: e.target.value } : l
                                      )
                                    }
                                  : m
                              ));
                            }}
                          />
                          <div className="flex gap-sm">
                            <input
                              type="text"
                              defaultValue={leccion.duracion}
                              placeholder="Duración (ej: 15:30)"
                              className="flex-1 px-sm py-sm text-sm border border-foreground/20 rounded-md"
                            />
                            <input
                              type="text"
                              defaultValue={leccion.videoUrl}
                              placeholder="URL del video o ID de YouTube"
                              className="flex-1 px-sm py-sm text-sm border border-foreground/20 rounded-md"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start justify-between">
                          <div className="flex gap-sm flex-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded flex items-center justify-center text-xl flex-shrink-0">
                              {leccion.videoUrl ? '▶️' : '📹'}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold mb-xs">
                                {moduloIndex + 1}.{leccionIndex + 1} - {leccion.titulo}
                              </div>
                              <p className="text-sm text-foreground/60 mb-xs">{leccion.descripcion}</p>
                              <div className="flex gap-md text-xs text-foreground/60">
                                <span>⏱️ {leccion.duracion}</span>
                                {leccion.videoUrl && <span>✅ Video subido</span>}
                                {leccion.materiales.length > 0 && (
                                  <span>📎 {leccion.materiales.length} materiales</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-xs">
                            <button
                              onClick={() => setEditandoLeccion(leccion.id)}
                              className="px-2 py-1 text-sm border border-foreground/20 rounded hover:bg-muted/50"
                            >
                              ✏️
                            </button>
                            <button className="px-2 py-1 text-sm border border-foreground/20 rounded hover:bg-muted/50">
                              📤 Video
                            </button>
                            <button
                              onClick={() => eliminarLeccion(modulo.id, leccion.id)}
                              className="px-2 py-1 text-sm border border-red-500 text-red-600 rounded hover:bg-red-50"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}

                {/* Configuración de Quiz */}
                <div className="border-t border-foreground/10 pt-sm mt-sm">
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={modulo.quiz}
                      onChange={(e) => {
                        setModulos(modulos.map(m =>
                          m.id === modulo.id ? { ...m, quiz: e.target.checked } : m
                        ));
                      }}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">
                      Agregar quiz al final de este módulo (opcional)
                    </span>
                  </label>
                  {modulo.quiz && (
                    <button className="mt-sm px-3 py-1.5 text-sm border border-foreground/20 rounded-md hover:bg-muted/30">
                      ⚙️ Configurar Quiz
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Ayuda */}
      <div className="mt-lg border border-blue-200 bg-blue-50 rounded-lg p-md">
        <h3 className="font-semibold mb-sm">💡 Tips para organizar tu curso:</h3>
        <ul className="text-sm space-y-xs text-foreground/70">
          <li>• Mantén los módulos entre 3-7 lecciones para mejor digestión</li>
          <li>• Videos entre 5-20 minutos tienen mejor retención</li>
          <li>• Agrega materiales descargables desde tu Biblioteca</li>
          <li>• Los quizzes ayudan a reforzar el aprendizaje</li>
        </ul>
      </div>
    </Container>
  );
}
