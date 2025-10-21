import { useNavigate } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página para crear una nueva petición
 * Formulario completo con validación
 */

export function NuevaPeticionPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar creación de petición
    alert('Petición creada (simulado)');
    navigate('/alumno/peticiones');
  };

  return (
    <Container className="py-lg max-w-3xl">
      <h1 className="font-display text-3xl font-bold mb-sm">Nueva Petición</h1>
      <p className="text-foreground/60 mb-lg">
        Describe qué necesitas aprender y los profesores te contactarán
      </p>

      <form onSubmit={handleSubmit} className="space-y-lg">
        {/* Título */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-xs">
            Título de la petición *
          </label>
          <input
            type="text"
            id="title"
            required
            placeholder="Ej: Necesito profesor de React avanzado"
            className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-xs">
            Descripción detallada *
          </label>
          <textarea
            id="description"
            required
            rows={6}
            placeholder="Describe qué quieres aprender, tu nivel actual, objetivos..."
            className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
        </div>

        {/* Categoría */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-xs">
            Categoría *
          </label>
          <select
            id="category"
            required
            className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Selecciona una categoría</option>
            <option value="programming">Programación</option>
            <option value="design">Diseño</option>
            <option value="languages">Idiomas</option>
            <option value="music">Música</option>
            <option value="other">Otro</option>
          </select>
        </div>

        {/* Presupuesto */}
        <div className="grid grid-cols-2 gap-md">
          <div>
            <label htmlFor="budget-min" className="block text-sm font-medium mb-xs">
              Presupuesto mínimo (USD/hora)
            </label>
            <input
              type="number"
              id="budget-min"
              placeholder="20"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="budget-max" className="block text-sm font-medium mb-xs">
              Presupuesto máximo (USD/hora)
            </label>
            <input
              type="number"
              id="budget-max"
              placeholder="40"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Modalidad y frecuencia */}
        <div className="grid grid-cols-2 gap-md">
          <div>
            <label htmlFor="modality" className="block text-sm font-medium mb-xs">
              Modalidad
            </label>
            <select
              id="modality"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="remote">Remoto</option>
              <option value="in-person">Presencial</option>
              <option value="hybrid">Híbrido</option>
            </select>
          </div>
          <div>
            <label htmlFor="frequency" className="block text-sm font-medium mb-xs">
              Frecuencia (horas/semana)
            </label>
            <input
              type="number"
              id="frequency"
              placeholder="2"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-sm pt-md">
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            Publicar Petición
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
