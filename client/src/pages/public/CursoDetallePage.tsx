import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';
import { SistemaResenas } from '@shared/ui/components/SistemaResenas';

/**
 * Página de Detalle de Curso
 * Muestra información completa, módulos, lecciones y opciones de compra
 */

export function CursoDetallePage() {
  const { id } = useParams();
  const [moduloExpandido, setModuloExpandido] = useState<number | null>(1);

  // Mock data del curso completo
  const curso = {
    id: Number(id),
    titulo: 'React Avanzado - De Cero a Experto',
    profesor: {
      nombre: 'Juan Pérez',
      foto: '👨‍🏫',
      bio: 'Desarrollador Full Stack con 10 años de experiencia',
      cursos: 8,
      estudiantes: 5420,
      calificacion: 4.8,
    },
    thumbnail: '📚',
    descripcion: 'Domina React desde los fundamentos hasta patrones avanzados, optimización y arquitectura escalable. Aprende con proyectos reales y las mejores prácticas de la industria.',
    categoria: 'Programación',
    precio: 49.99,
    gratis: false,
    estudiantes: 245,
    calificacion: 4.8,
    totalResenas: 67,
    duracionTotal: '12h 30min',
    nivel: 'Avanzado',
    idioma: 'Español',
    actualizacion: '2024-01-15',
    requisitos: [
      'Conocimientos básicos de JavaScript',
      'Familiaridad con HTML y CSS',
      'Opcional: experiencia previa con React',
    ],
    aprenderas: [
      'Hooks avanzados y custom hooks',
      'Optimización de rendimiento con useMemo y useCallback',
      'Context API y gestión de estado global',
      'React Router y navegación compleja',
      'Testing con Jest y React Testing Library',
      'Patrones de diseño y arquitectura escalable',
    ],
    modulos: [
      {
        id: 1,
        titulo: 'Fundamentos',
        descripcion: 'Conceptos básicos y configuración',
        lecciones: [
          { id: 1, titulo: 'Introducción al curso', duracion: '5:30', preview: true },
          { id: 2, titulo: 'Setup del entorno', duracion: '10:00', preview: true },
          { id: 3, titulo: 'Hooks básicos', duracion: '15:30', preview: false },
          { id: 4, titulo: 'Context API', duracion: '20:45', preview: false },
        ],
      },
      {
        id: 2,
        titulo: 'Optimización',
        descripcion: 'Técnicas de rendimiento',
        lecciones: [
          { id: 5, titulo: 'useMemo y useCallback', duracion: '18:00', preview: false },
          { id: 6, titulo: 'React.memo', duracion: '12:30', preview: false },
          { id: 7, titulo: 'Code splitting', duracion: '15:45', preview: false },
        ],
      },
      {
        id: 3,
        titulo: 'Patrones Avanzados',
        descripcion: 'Arquitectura y mejores prácticas',
        lecciones: [
          { id: 8, titulo: 'Compound Components', duracion: '22:15', preview: false },
          { id: 9, titulo: 'Render Props', duracion: '18:30', preview: false },
          { id: 10, titulo: 'Higher Order Components', duracion: '20:00', preview: false },
        ],
      },
    ],
  };

  const totalLecciones = curso.modulos.reduce((sum, m) => sum + m.lecciones.length, 0);

  const toggleModulo = (moduloId: number) => {
    setModuloExpandido(moduloExpandido === moduloId ? null : moduloId);
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5">
        <Container className="py-lg">
          <Link to="/cursos" className="text-sm text-primary hover:underline mb-sm inline-block">
            ← Volver a Cursos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
            {/* Columna Principal */}
            <div className="lg:col-span-2">
              <div className="mb-sm">
                <span className="px-2 py-1 bg-primary/10 text-primary text-sm font-semibold rounded">
                  {curso.categoria}
                </span>
              </div>
              <h1 className="font-display text-4xl font-bold mb-md">{curso.titulo}</h1>
              <p className="text-lg text-foreground/70 mb-md">{curso.descripcion}</p>

              <div className="flex flex-wrap gap-md text-sm text-foreground/60 mb-md">
                <span>⭐ {curso.calificacion} ({curso.totalResenas} reseñas)</span>
                <span>👥 {curso.estudiantes} estudiantes</span>
                <span>⏱️ {curso.duracionTotal}</span>
                <span>📊 {curso.nivel}</span>
                <span>🌍 {curso.idioma}</span>
              </div>

              {/* Profesor */}
              <div className="flex items-center gap-sm border-t border-foreground/10 pt-md">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-2xl">
                  {curso.profesor.foto}
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Creado por</div>
                  <Link to={`/profesores/${curso.profesor.nombre}`} className="font-semibold hover:text-primary">
                    {curso.profesor.nombre}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card de Compra (Sticky en desktop) */}
            <div className="lg:col-span-1">
              <div className="border border-foreground/10 rounded-lg overflow-hidden bg-background shadow-lg lg:sticky lg:top-4">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-7xl">
                  {curso.thumbnail}
                </div>
                <div className="p-md">
                  <div className="flex items-baseline gap-sm mb-md">
                    <div className="text-3xl font-bold">
                      {curso.gratis ? 'Gratis' : `$${curso.precio}`}
                    </div>
                    {!curso.gratis && (
                      <div className="text-sm text-foreground/60 line-through">$79.99</div>
                    )}
                  </div>

                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 mb-sm">
                    {curso.gratis ? 'Inscribirme Gratis' : 'Comprar Curso'}
                  </button>
                  <button className="w-full px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30 mb-md">
                    🛒 Agregar al Carrito
                  </button>

                  <div className="text-xs text-center text-foreground/60 mb-md">
                    Garantía de reembolso de 30 días
                  </div>

                  <div className="border-t border-foreground/10 pt-md">
                    <div className="text-sm font-semibold mb-sm">Este curso incluye:</div>
                    <ul className="text-sm space-y-xs text-foreground/70">
                      <li>✓ {curso.duracionTotal} de video bajo demanda</li>
                      <li>✓ {totalLecciones} lecciones</li>
                      <li>✓ Acceso de por vida</li>
                      <li>✓ Certificado de finalización</li>
                      <li>✓ Materiales descargables</li>
                      <li>✓ Acceso en móvil y TV</li>
                    </ul>
                  </div>

                  <button className="w-full mt-md px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30 text-sm">
                    💬 Solicitar Clase Particular con {curso.profesor.nombre.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Contenido Principal */}
      <Container className="py-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          <div className="lg:col-span-2 space-y-lg">
            {/* Qué Aprenderás */}
            <section className="border border-foreground/10 rounded-lg p-md">
              <h2 className="font-semibold text-xl mb-md">Lo que aprenderás</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                {curso.aprenderas.map((item, i) => (
                  <div key={i} className="flex gap-sm text-sm">
                    <span className="text-emerald-600">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Requisitos */}
            <section>
              <h2 className="font-semibold text-xl mb-md">Requisitos</h2>
              <ul className="list-disc list-inside space-y-xs text-foreground/70">
                {curso.requisitos.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </section>

            {/* Contenido del Curso */}
            <section>
              <h2 className="font-semibold text-xl mb-sm">Contenido del Curso</h2>
              <div className="text-sm text-foreground/60 mb-md">
                {curso.modulos.length} módulos • {totalLecciones} lecciones • {curso.duracionTotal} duración total
              </div>

              <div className="space-y-sm">
                {curso.modulos.map((modulo, moduloIndex) => (
                  <div key={modulo.id} className="border border-foreground/10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleModulo(modulo.id)}
                      className="w-full bg-muted/30 p-md text-left hover:bg-muted/50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-sm flex-1">
                        <span className="text-lg">{moduloExpandido === modulo.id ? '▼' : '▶'}</span>
                        <div>
                          <div className="font-semibold">
                            Módulo {moduloIndex + 1}: {modulo.titulo}
                          </div>
                          <div className="text-sm text-foreground/60">{modulo.descripcion}</div>
                        </div>
                      </div>
                      <div className="text-sm text-foreground/60">
                        {modulo.lecciones.length} lecciones
                      </div>
                    </button>

                    {moduloExpandido === modulo.id && (
                      <div className="p-md space-y-xs">
                        {modulo.lecciones.map((leccion, leccionIndex) => (
                          <div
                            key={leccion.id}
                            className="flex items-center justify-between py-sm px-sm hover:bg-muted/30 rounded"
                          >
                            <div className="flex items-center gap-sm">
                              <span className="text-foreground/60">
                                {leccion.preview ? '▶️' : '🔒'}
                              </span>
                              <div>
                                <div className="text-sm">
                                  {moduloIndex + 1}.{leccionIndex + 1} - {leccion.titulo}
                                </div>
                                {leccion.preview && (
                                  <span className="text-xs text-primary font-semibold">Vista previa</span>
                                )}
                              </div>
                            </div>
                            <div className="text-sm text-foreground/60">{leccion.duracion}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Sistema de Reseñas */}
            <section>
              <SistemaResenas
                tipo="curso"
                id={curso.id}
                calificacionPromedio={curso.calificacion}
                totalResenas={curso.totalResenas}
              />
            </section>
          </div>

          {/* Sidebar - Info del Profesor */}
          <div className="lg:col-span-1">
            <div className="border border-foreground/10 rounded-lg p-md sticky top-4">
              <h3 className="font-semibold text-lg mb-md">Sobre el Instructor</h3>
              <div className="flex items-center gap-sm mb-sm">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-3xl">
                  {curso.profesor.foto}
                </div>
                <div>
                  <Link to="#" className="font-semibold hover:text-primary">
                    {curso.profesor.nombre}
                  </Link>
                  <div className="text-sm text-foreground/60">{curso.profesor.bio}</div>
                </div>
              </div>

              <div className="space-y-xs text-sm text-foreground/70 mb-md">
                <div>⭐ {curso.profesor.calificacion} calificación de instructor</div>
                <div>👥 {curso.profesor.estudiantes.toLocaleString()} estudiantes</div>
                <div>📚 {curso.profesor.cursos} cursos</div>
              </div>

              <button className="w-full px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30">
                Ver Perfil Completo
              </button>
            </div>
          </div>
        </div>
      </Container>
    </PageContainer>
  );
}
