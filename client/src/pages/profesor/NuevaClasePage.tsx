import { useNavigate } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página para crear una nueva clase
 * Formulario completo con validación
 */

export function NuevaClasePage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Clase creada (simulado)');
    navigate('/profesor/clases');
  };

  return (
    <Container className="py-lg max-w-4xl">
      <h1 className="font-display text-3xl font-bold mb-sm">Nueva Clase</h1>
      <p className="text-foreground/60 mb-lg">
        Crea una nueva clase para compartir tu conocimiento
      </p>

      <form onSubmit={handleSubmit} className="space-y-lg">
        {/* Información básica */}
        <div className="space-y-md">
          <h2 className="font-semibold text-lg">Información Básica</h2>
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-xs">
              Título de la clase *
            </label>
            <input
              type="text"
              id="title"
              required
              placeholder="Ej: React Avanzado - De Hooks a Patterns"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="subtitle" className="block text-sm font-medium mb-xs">
              Subtítulo
            </label>
            <input
              type="text"
              id="subtitle"
              placeholder="Breve descripción de una línea"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-xs">
              Descripción completa *
            </label>
            <textarea
              id="description"
              required
              rows={6}
              placeholder="Describe qué aprenderán los estudiantes, requisitos previos, objetivos..."
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-md">
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-xs">
                Categoría *
              </label>
              <select
                id="category"
                required
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Selecciona una categoría</option>
                <option value="programming">Programación</option>
                <option value="design">Diseño</option>
                <option value="languages">Idiomas</option>
                <option value="music">Música</option>
                <option value="business">Negocios</option>
              </select>
            </div>

            <div>
              <label htmlFor="level" className="block text-sm font-medium mb-xs">
                Nivel *
              </label>
              <select
                id="level"
                required
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Selecciona un nivel</option>
                <option value="beginner">Principiante</option>
                <option value="intermediate">Intermedio</option>
                <option value="advanced">Avanzado</option>
                <option value="all">Todos los niveles</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contenido del curso */}
        <div className="space-y-md">
          <h2 className="font-semibold text-lg">Contenido del Curso</h2>
          
          <div>
            <label htmlFor="duration" className="block text-sm font-medium mb-xs">
              Duración total (horas)
            </label>
            <input
              type="number"
              id="duration"
              placeholder="12"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-sm">
              Módulos del curso
            </label>
            <div className="space-y-xs mb-sm">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-sm items-center">
                  <input
                    type="text"
                    placeholder={`Módulo ${i}: Título`}
                    className="flex-1 px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button type="button" className="px-3 py-2 text-red-600 hover:bg-red-50 rounded">
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="text-sm text-amber-600 hover:underline font-medium"
            >
              + Agregar módulo
            </button>
          </div>
        </div>

        {/* Precio y modalidad */}
        <div className="space-y-md">
          <h2 className="font-semibold text-lg">Precio y Modalidad</h2>
          
          <div className="grid grid-cols-2 gap-md">
            <div>
              <label htmlFor="price" className="block text-sm font-medium mb-xs">
                Precio por hora (USD) *
              </label>
              <input
                type="number"
                id="price"
                required
                placeholder="49"
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="modality" className="block text-sm font-medium mb-xs">
                Modalidad *
              </label>
              <select
                id="modality"
                required
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Selecciona modalidad</option>
                <option value="remote">Remoto</option>
                <option value="in-person">Presencial</option>
                <option value="hybrid">Híbrido</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="max-students" className="block text-sm font-medium mb-xs">
              Máximo de estudiantes por sesión
            </label>
            <input
              type="number"
              id="max-students"
              placeholder="20"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-sm pt-md border-t border-foreground/10">
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors"
          >
            Publicar Clase
          </button>
          <button
            type="button"
            className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30 transition-colors"
          >
            Guardar como Borrador
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </Container>
  );
}
