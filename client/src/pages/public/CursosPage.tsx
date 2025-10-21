import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';
import { CATEGORIAS, GRUPOS_CATEGORIAS } from '@shared/constants/categorias';

/**
 * Página Pública de Cursos
 * Grid de cursos disponibles para comprar
 */

export function CursosPage() {
  const [categoria, setCategoria] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  const [soloGratis, setSoloGratis] = useState(false);
  const [modalidad, setModalidad] = useState<'todos' | 'online' | 'presencial'>('todos');

  // Mock data
  const cursos = [
    {
      id: 1,
      titulo: 'React Avanzado',
      profesor: 'Juan Pérez',
      thumbnail: '📚',
      descripcion: 'Domina React con hooks, optimización y patrones avanzados',
      categoria: 'Programación',
      precio: 49.99,
      gratis: false,
      estudiantes: 245,
      calificacion: 4.8,
      duracion: '12h 30min',
      modulos: 5,
      lecciones: 24,
      nivel: 'Avanzado',
      modalidades: { online: true, presencial: false },
    },
    {
      id: 2,
      titulo: 'TypeScript desde Cero',
      profesor: 'Juan Pérez',
      thumbnail: '💻',
      descripcion: 'Aprende TypeScript desde fundamentos hasta tipos avanzados',
      categoria: 'Programación',
      precio: 0,
      gratis: true,
      estudiantes: 512,
      calificacion: 4.9,
      duracion: '8h 15min',
      modulos: 4,
      lecciones: 18,
      nivel: 'Principiante',
      modalidades: { online: true, presencial: false },
    },
    {
      id: 3,
      titulo: 'Diseño UX/UI Profesional',
      profesor: 'María González',
      thumbnail: '🎨',
      descripcion: 'Crea experiencias de usuario increíbles con Figma',
      categoria: 'Diseño',
      precio: 39.99,
      gratis: false,
      estudiantes: 189,
      calificacion: 4.7,
      duracion: '10h 00min',
      modulos: 6,
      lecciones: 30,
      nivel: 'Intermedio',
      modalidades: { online: true, presencial: false },
    },
    {
      id: 4,
      titulo: 'Marketing Digital Completo',
      profesor: 'Carlos Ramírez',
      thumbnail: '📊',
      descripcion: 'Estrategias de marketing digital que funcionan',
      categoria: 'Marketing',
      precio: 59.99,
      gratis: false,
      estudiantes: 334,
      calificacion: 4.6,
      duracion: '15h 45min',
      modulos: 8,
      lecciones: 42,
      nivel: 'Intermedio',
      modalidades: { online: true, presencial: false },
    },
    {
      id: 5,
      titulo: 'Guitarra Acústica para Principiantes',
      profesor: 'Luis Martínez',
      thumbnail: '🎸',
      descripcion: 'Aprende guitarra desde cero con clases presenciales',
      categoria: 'Música',
      precio: 79.99,
      gratis: false,
      estudiantes: 89,
      calificacion: 4.9,
      duracion: '8 semanas',
      modulos: 8,
      lecciones: 16,
      nivel: 'Principiante',
      modalidades: { online: false, presencial: true },
    },
    {
      id: 6,
      titulo: 'Calistenia y Entrenamiento Funcional',
      profesor: 'Ana Rodríguez',
      thumbnail: '💪',
      descripcion: 'Entrena tu cuerpo sin equipo, clases presenciales en parque',
      categoria: 'Fitness',
      precio: 59.99,
      gratis: false,
      estudiantes: 156,
      calificacion: 4.8,
      duracion: '12 semanas',
      modulos: 12,
      lecciones: 36,
      nivel: 'Intermedio',
      modalidades: { online: false, presencial: true },
    },
  ];

  // Usar categorías del sistema
  const categoriasLista = ['Todas', ...CATEGORIAS.map(c => c.nombre)];

  const cursosFiltrados = cursos.filter(curso => {
    const matchCategoria = !categoria || categoria === 'Todas' || curso.categoria === categoria;
    const matchBusqueda = !busqueda || 
      curso.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      curso.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const matchPrecio = !precioMax || curso.precio <= Number(precioMax);
    const matchGratis = !soloGratis || curso.gratis;
    const matchModalidad = modalidad === 'todos' || 
      (modalidad === 'online' && curso.modalidades?.online) ||
      (modalidad === 'presencial' && curso.modalidades?.presencial);
    
    return matchCategoria && matchBusqueda && matchPrecio && matchGratis && matchModalidad;
  });

  return (
    <PageContainer>
      <Container className="py-lg">
        {/* Header */}
        <div className="mb-lg text-center">
          <h1 className="font-display text-4xl font-bold mb-sm">Explora Nuestros Cursos</h1>
          <p className="text-lg text-foreground/70">
            Aprende a tu ritmo con cursos grabados de alta calidad
          </p>
        </div>

        {/* Filtros */}
        <div className="border border-foreground/10 rounded-lg p-md mb-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
            {/* Búsqueda */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-xs">Buscar</label>
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Título o palabra clave..."
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-sm font-medium mb-xs">Categoría</label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Todas las categorías</option>
                {Object.entries(GRUPOS_CATEGORIAS).map(([grupoId, grupo]) => (
                  <optgroup key={grupoId} label={`${grupo.icono} ${grupo.nombre}`}>
                    {CATEGORIAS.filter(cat => cat.grupo === grupoId).map(cat => (
                      <option key={cat.id} value={cat.nombre}>
                        {cat.nombre}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Precio Máximo */}
            <div>
              <label className="block text-sm font-medium mb-xs">Precio Máx.</label>
              <input
                type="number"
                value={precioMax}
                onChange={(e) => setPrecioMax(e.target.value)}
                placeholder="$"
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="mt-sm flex gap-md">
            <label className="flex items-center gap-sm cursor-pointer">
              <input
                type="checkbox"
                checked={soloGratis}
                onChange={(e) => setSoloGratis(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm">Solo cursos gratuitos</span>
            </label>
            
            <div className="flex gap-sm">
              <button
                onClick={() => setModalidad('todos')}
                className={`px-3 py-1 text-xs rounded-md ${
                  modalidad === 'todos' ? 'bg-primary text-primary-foreground' : 'border border-foreground/20'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setModalidad('online')}
                className={`px-3 py-1 text-xs rounded-md ${
                  modalidad === 'online' ? 'bg-primary text-primary-foreground' : 'border border-foreground/20'
                }`}
              >
                🌐 Online
              </button>
              <button
                onClick={() => setModalidad('presencial')}
                className={`px-3 py-1 text-xs rounded-md ${
                  modalidad === 'presencial' ? 'bg-primary text-primary-foreground' : 'border border-foreground/20'
                }`}
              >
                📍 Presencial
              </button>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-md flex items-center justify-between">
          <div className="text-sm text-foreground/60">
            {cursosFiltrados.length} curso{cursosFiltrados.length !== 1 ? 's' : ''} encontrado{cursosFiltrados.length !== 1 ? 's' : ''}
          </div>
          <select className="px-sm py-sm text-sm border border-foreground/20 rounded-md">
            <option>Más populares</option>
            <option>Mejor valorados</option>
            <option>Más recientes</option>
            <option>Precio: menor a mayor</option>
            <option>Precio: mayor a menor</option>
          </select>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {cursosFiltrados.map((curso) => (
            <Link
              key={curso.id}
              to={`/cursos/${curso.id}`}
              className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center text-6xl">
                {curso.thumbnail}
              </div>

              {/* Contenido */}
              <div className="p-md">
                <div className="flex items-start justify-between mb-xs">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded">
                    {curso.categoria}
                  </span>
                  {curso.gratis && (
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                      GRATIS
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-lg mb-xs line-clamp-2">{curso.titulo}</h3>
                <p className="text-sm text-foreground/60 mb-sm line-clamp-2">{curso.descripcion}</p>

                <div className="flex items-center gap-xs text-xs text-foreground/60 mb-sm">
                  <span>👤 {curso.profesor}</span>
                </div>

                <div className="flex items-center gap-xs text-xs text-foreground/60 mb-sm">
                  <span>⭐ {curso.calificacion}</span>
                  <span>•</span>
                  <span>👥 {curso.estudiantes} estudiantes</span>
                  <span>•</span>
                  <span>⏱️ {curso.duracion}</span>
                </div>

                <div className="text-xs text-foreground/60 mb-md">
                  {curso.modulos} módulos • {curso.lecciones} lecciones • {curso.nivel}
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-bold text-xl">
                    {curso.gratis ? 'Gratis' : `$${curso.precio}`}
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90">
                    Ver Curso
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {cursosFiltrados.length === 0 && (
          <div className="text-center py-xl">
            <div className="text-6xl mb-md">🔍</div>
            <h3 className="font-semibold text-xl mb-sm">No se encontraron cursos</h3>
            <p className="text-foreground/60">
              Intenta ajustar los filtros o buscar con otros términos
            </p>
          </div>
        )}
      </Container>
    </PageContainer>
  );
}
