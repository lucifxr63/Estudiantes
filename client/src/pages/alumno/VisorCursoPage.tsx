import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página Visor de Curso del Alumno
 * Player de video con navegación de módulos/lecciones y tracking de progreso
 */

type Leccion = {
  id: number;
  titulo: string;
  duracion: string;
  completada: boolean;
  videoUrl: string;
};

type Modulo = {
  id: number;
  titulo: string;
  lecciones: Leccion[];
};

export function VisorCursoPage() {
  const { id } = useParams();

  // Mock data del curso
  const curso = {
    id: Number(id),
    titulo: 'React Avanzado',
    profesor: 'Juan Pérez',
    modulos: [
      {
        id: 1,
        titulo: 'Fundamentos',
        lecciones: [
          { id: 1, titulo: 'Introducción al curso', duracion: '5:30', completada: true, videoUrl: 'video1.mp4' },
          { id: 2, titulo: 'Setup del entorno', duracion: '10:00', completada: true, videoUrl: 'video2.mp4' },
          { id: 3, titulo: 'Hooks básicos', duracion: '15:30', completada: false, videoUrl: 'video3.mp4' },
        ],
      },
      {
        id: 2,
        titulo: 'Optimización',
        lecciones: [
          { id: 4, titulo: 'useMemo y useCallback', duracion: '18:00', completada: false, videoUrl: 'video4.mp4' },
          { id: 5, titulo: 'React.memo', duracion: '12:30', completada: false, videoUrl: 'video5.mp4' },
        ],
      },
    ] as Modulo[],
  };

  const [leccionActual, setLeccionActual] = useState(1);
  const [modulosExpandidos, setModulosExpandidos] = useState<number[]>([1]);

  const toggleModulo = (moduloId: number) => {
    if (modulosExpandidos.includes(moduloId)) {
      setModulosExpandidos(modulosExpandidos.filter(id => id !== moduloId));
    } else {
      setModulosExpandidos([...modulosExpandidos, moduloId]);
    }
  };

  const getLeccionActual = () => {
    for (const modulo of curso.modulos) {
      const leccion = modulo.lecciones.find(l => l.id === leccionActual);
      if (leccion) return { leccion, modulo };
    }
    return null;
  };

  const siguienteLeccion = () => {
    let encontrada = false;
    for (const modulo of curso.modulos) {
      for (const leccion of modulo.lecciones) {
        if (encontrada) {
          setLeccionActual(leccion.id);
          return;
        }
        if (leccion.id === leccionActual) {
          encontrada = true;
        }
      }
    }
  };

  const marcarCompletada = () => {
    // TODO: Marcar como completada y avanzar
    console.log('Lección completada');
    siguienteLeccion();
  };

  const data = getLeccionActual();
  const leccion = data?.leccion;
  const modulo = data?.modulo;

  const totalLecciones = curso.modulos.reduce((sum, m) => sum + m.lecciones.length, 0);
  const leccionesCompletadas = curso.modulos.reduce(
    (sum, m) => sum + m.lecciones.filter(l => l.completada).length,
    0
  );
  const progreso = Math.round((leccionesCompletadas / totalLecciones) * 100);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header Fijo */}
      <header className="border-b border-foreground/10 bg-background sticky top-0 z-50">
        <Container className="py-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-md">
              <Link
                to="/alumno/mis-cursos"
                className="px-3 py-1.5 border border-foreground/20 rounded-md hover:bg-muted/30 text-sm"
              >
                ← Volver
              </Link>
              <div>
                <div className="font-semibold">{curso.titulo}</div>
                <div className="text-xs text-foreground/60">Por {curso.profesor}</div>
              </div>
            </div>
            <div className="flex items-center gap-md">
              <div className="text-sm text-foreground/60">
                {leccionesCompletadas} / {totalLecciones} lecciones • {progreso}%
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-emerald-500"
                  style={{ width: `${progreso}%` }}
                />
              </div>
            </div>
          </div>
        </Container>
      </header>

      <div className="flex-1 flex">
        {/* Player Principal */}
        <div className="flex-1 flex flex-col">
          {/* Video Player */}
          <div className="bg-black aspect-video flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl mb-md">▶️</div>
              <div className="text-xl mb-sm">{leccion?.titulo}</div>
              <div className="text-sm text-white/70">
                Video Player: {leccion?.videoUrl}
              </div>
              <div className="mt-md text-sm text-white/50">
                (Aquí iría un player real como Video.js o React Player)
              </div>
            </div>
          </div>

          {/* Controles y Info */}
          <div className="border-t border-foreground/10 p-md bg-background">
            <div className="flex items-center justify-between mb-md">
              <div>
                <h2 className="font-semibold text-lg mb-xs">{leccion?.titulo}</h2>
                <div className="text-sm text-foreground/60">
                  {modulo?.titulo} • Duración: {leccion?.duracion}
                </div>
              </div>
              <div className="flex gap-sm">
                {leccion?.completada ? (
                  <button className="px-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg font-semibold">
                    ✓ Completada
                  </button>
                ) : (
                  <button
                    onClick={marcarCompletada}
                    className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600"
                  >
                    Marcar como Completada
                  </button>
                )}
                <button
                  onClick={siguienteLeccion}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
                >
                  Siguiente →
                </button>
              </div>
            </div>

            {/* Tabs: Descripción, Recursos, Preguntas */}
            <div className="border-t border-foreground/10 pt-md">
              <div className="flex gap-md border-b border-foreground/10 mb-md">
                <button className="px-4 py-2 font-semibold text-primary border-b-2 border-primary">
                  Descripción
                </button>
                <button className="px-4 py-2 text-foreground/60">
                  Recursos (3)
                </button>
                <button className="px-4 py-2 text-foreground/60">
                  Preguntas
                </button>
              </div>
              <div className="text-sm text-foreground/70">
                <p>En esta lección aprenderás sobre {leccion?.titulo.toLowerCase()}. 
                Es fundamental para entender los conceptos avanzados que vienen en los próximos módulos.</p>
                <div className="mt-sm">
                  <h4 className="font-semibold mb-xs">Recursos descargables:</h4>
                  <ul className="space-y-xs">
                    <li className="flex items-center gap-sm hover:text-primary cursor-pointer">
                      <span>📄</span>
                      <span>Guía de referencia.pdf</span>
                    </li>
                    <li className="flex items-center gap-sm hover:text-primary cursor-pointer">
                      <span>💻</span>
                      <span>Código fuente.zip</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Lista de Lecciones */}
        <div className="w-96 border-l border-foreground/10 bg-muted/10 overflow-y-auto">
          <div className="p-md">
            <h3 className="font-semibold mb-md">Contenido del Curso</h3>
            <div className="space-y-sm">
              {curso.modulos.map((modulo) => (
                <div key={modulo.id} className="border border-foreground/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleModulo(modulo.id)}
                    className="w-full bg-muted/30 p-sm text-left hover:bg-muted/50 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-sm">
                      <span>{modulosExpandidos.includes(modulo.id) ? '▼' : '▶'}</span>
                      <span className="font-semibold text-sm">{modulo.titulo}</span>
                    </div>
                    <span className="text-xs text-foreground/60">
                      {modulo.lecciones.filter(l => l.completada).length}/{modulo.lecciones.length}
                    </span>
                  </button>

                  {modulosExpandidos.includes(modulo.id) && (
                    <div className="p-xs space-y-xs">
                      {modulo.lecciones.map((leccion) => (
                        <button
                          key={leccion.id}
                          onClick={() => setLeccionActual(leccion.id)}
                          className={`w-full text-left p-sm rounded hover:bg-muted/50 flex items-center gap-sm ${
                            leccion.id === leccionActual ? 'bg-primary/10 border border-primary' : ''
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {leccion.completada ? (
                              <span className="text-emerald-600">✓</span>
                            ) : leccion.id === leccionActual ? (
                              <span className="text-primary">▶</span>
                            ) : (
                              <span className="text-foreground/40">○</span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm truncate">{leccion.titulo}</div>
                            <div className="text-xs text-foreground/60">{leccion.duracion}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
