import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página para Editar Información Básica del Curso
 * Permite actualizar título, descripción, precio, categoría, etc.
 */

export function EditarCursoPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data del curso existente
  const cursoExistente = {
    id: Number(id),
    titulo: 'React Avanzado',
    descripcion: 'Domina React desde los fundamentos hasta patrones avanzados',
    categoria: 'programacion',
    precio: 49.99,
    gratis: false,
    nivel: 'avanzado',
    duracionEstimada: '12 horas',
    estado: 'publicado',
    requisitos: ['JavaScript intermedio', 'HTML/CSS básico'],
    aprenderas: ['Hooks avanzados', 'Optimización', 'Context API'],
  };

  const [formData, setFormData] = useState(cursoExistente);
  const [requisitos, setRequisitos] = useState<string[]>(cursoExistente.requisitos);
  const [aprenderas, setAprenderas] = useState<string[]>(cursoExistente.aprenderas);
  const [nuevoRequisito, setNuevoRequisito] = useState('');
  const [nuevoAprendizaje, setNuevoAprendizaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Curso actualizado:', { ...formData, requisitos, aprenderas });
    alert('¡Curso actualizado exitosamente!');
    navigate('/profesor/cursos');
  };

  const agregarRequisito = () => {
    if (nuevoRequisito.trim()) {
      setRequisitos([...requisitos, nuevoRequisito.trim()]);
      setNuevoRequisito('');
    }
  };

  const eliminarRequisito = (index: number) => {
    setRequisitos(requisitos.filter((_, i) => i !== index));
  };

  const agregarAprendizaje = () => {
    if (nuevoAprendizaje.trim()) {
      setAprenderas([...aprenderas, nuevoAprendizaje.trim()]);
      setNuevoAprendizaje('');
    }
  };

  const eliminarAprendizaje = (index: number) => {
    setAprenderas(aprenderas.filter((_, i) => i !== index));
  };

  return (
    <Container className="py-lg max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-lg">
        <div>
          <Link to="/profesor/cursos" className="text-sm text-amber-600 hover:underline mb-xs inline-block">
            ← Volver a Cursos
          </Link>
          <h1 className="font-display text-3xl font-bold mb-sm">Editar Curso</h1>
          <p className="text-foreground/60">
            Actualiza la información de tu curso
          </p>
        </div>
        <div className="flex gap-sm">
          <Link
            to={`/profesor/cursos/${id}/modulos`}
            className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30"
          >
            📚 Gestionar Módulos
          </Link>
          {formData.estado === 'publicado' && (
            <button className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30">
              📊 Ver Estadísticas
            </button>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-lg">
        {/* Información Básica */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Información Básica</h2>
          
          <div className="space-y-md">
            <div>
              <label className="block text-sm font-medium mb-xs">
                Título del Curso <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.titulo}
                onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                required
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-xs">
                Descripción Corta <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                required
                rows={3}
                placeholder="Describe brevemente de qué trata el curso..."
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-md">
              <div>
                <label className="block text-sm font-medium mb-xs">Categoría</label>
                <select
                  value={formData.categoria}
                  onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="programacion">Programación</option>
                  <option value="diseno">Diseño</option>
                  <option value="negocios">Negocios</option>
                  <option value="marketing">Marketing</option>
                  <option value="idiomas">Idiomas</option>
                  <option value="musica">Música</option>
                  <option value="matematicas">Matemáticas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">Nivel</label>
                <select
                  value={formData.nivel}
                  onChange={(e) => setFormData({ ...formData, nivel: e.target.value })}
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Precio */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Precio</h2>
          
          <div className="space-y-md">
            <label className="flex items-center gap-sm">
              <input
                type="checkbox"
                checked={formData.gratis}
                onChange={(e) => setFormData({ ...formData, gratis: e.target.checked, precio: 0 })}
                className="w-4 h-4"
              />
              <span className="text-sm">Este curso es completamente gratuito</span>
            </label>

            {!formData.gratis && (
              <div>
                <label className="block text-sm font-medium mb-xs">Precio (USD)</label>
                <input
                  type="number"
                  value={formData.precio}
                  onChange={(e) => setFormData({ ...formData, precio: Number(e.target.value) })}
                  min="0"
                  step="0.01"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            )}
          </div>
        </div>

        {/* Requisitos */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Requisitos</h2>
          
          <div className="space-y-sm mb-md">
            {requisitos.map((req, index) => (
              <div key={index} className="flex items-center gap-sm p-sm border border-foreground/10 rounded">
                <span className="flex-1">{req}</span>
                <button
                  type="button"
                  onClick={() => eliminarRequisito(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-sm">
            <input
              type="text"
              value={nuevoRequisito}
              onChange={(e) => setNuevoRequisito(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), agregarRequisito())}
              placeholder="Agregar requisito..."
              className="flex-1 px-sm py-sm border border-foreground/20 rounded-lg"
            />
            <button
              type="button"
              onClick={agregarRequisito}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              Agregar
            </button>
          </div>
        </div>

        {/* Lo que aprenderás */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Lo que aprenderás</h2>
          
          <div className="space-y-sm mb-md">
            {aprenderas.map((item, index) => (
              <div key={index} className="flex items-center gap-sm p-sm border border-foreground/10 rounded">
                <span className="flex-1">✓ {item}</span>
                <button
                  type="button"
                  onClick={() => eliminarAprendizaje(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-sm">
            <input
              type="text"
              value={nuevoAprendizaje}
              onChange={(e) => setNuevoAprendizaje(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), agregarAprendizaje())}
              placeholder="Agregar objetivo de aprendizaje..."
              className="flex-1 px-sm py-sm border border-foreground/20 rounded-lg"
            />
            <button
              type="button"
              onClick={agregarAprendizaje}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              Agregar
            </button>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-sm justify-end">
          <button
            type="button"
            onClick={() => navigate('/profesor/cursos')}
            className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </Container>
  );
}
