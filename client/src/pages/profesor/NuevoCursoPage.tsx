import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { CATEGORIAS, GRUPOS_CATEGORIAS } from '@shared/constants/categorias';
import type { Modalidad, EquipoRequerido } from '@shared/types/modalidades';

/**
 * Página para Crear Nuevo Curso
 * Formulario con información básica del curso
 */

export function NuevoCursoPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    categoria: '',
    precio: '',
    gratis: false,
    nivel: 'principiante',
    duracionEstimada: '',
    modalidades: {
      online: true,
      presencial: false,
      hibrido: false,
    },
  });

  const [equipoRequerido, setEquipoRequerido] = useState<EquipoRequerido[]>([]);
  const [nuevoEquipo, setNuevoEquipo] = useState({ nombre: '', obligatorio: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Guardar curso
    console.log('Crear curso:', formData);
    alert('¡Curso creado! Ahora puedes agregar módulos y lecciones.');
    navigate('/profesor/cursos/1/modulos'); // Simular ID 1
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <Container className="py-lg max-w-3xl">
      <div className="mb-lg">
        <h1 className="font-display text-3xl font-bold mb-sm">Crear Nuevo Curso</h1>
        <p className="text-foreground/60">
          Completa la información básica de tu curso. Podrás agregar módulos y lecciones después.
        </p>
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
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
                placeholder="Ej: React Avanzado - De Cero a Experto"
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-xs">
                Descripción <span className="text-red-500">*</span>
              </label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Describe qué aprenderán los estudiantes..."
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-md">
              <div>
                <label className="block text-sm font-medium mb-xs">
                  Categoría <span className="text-red-500">*</span>
                </label>
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Selecciona una categoría...</option>
                  {Object.entries(GRUPOS_CATEGORIAS).map(([grupoId, grupo]) => (
                    <optgroup key={grupoId} label={`${grupo.icono} ${grupo.nombre}`}>
                      {CATEGORIAS.filter(cat => cat.grupo === grupoId).map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.icono} {cat.nombre}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {formData.categoria && (
                  <p className="text-xs text-foreground/60 mt-xs">
                    {CATEGORIAS.find(c => c.id === formData.categoria)?.descripcion}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">
                  Nivel <span className="text-red-500">*</span>
                </label>
                <select
                  name="nivel"
                  value={formData.nivel}
                  onChange={handleChange}
                  required
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
                name="gratis"
                checked={formData.gratis}
                onChange={handleChange}
                className="w-4 h-4 text-amber-500 focus:ring-amber-500"
              />
              <span className="text-sm">Este curso es completamente gratuito</span>
            </label>

            {!formData.gratis && (
              <div>
                <label className="block text-sm font-medium mb-xs">
                  Precio (USD) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
                  <input
                    type="number"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    required={!formData.gratis}
                    min="0"
                    step="0.01"
                    placeholder="49.99"
                    className="w-full pl-8 pr-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <p className="text-xs text-foreground/60 mt-xs">
                  Sugerencia: Cursos entre $29-$79 tienen mejor conversión
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Duración Estimada */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Duración</h2>
          
          <div>
            <label className="block text-sm font-medium mb-xs">
              Duración Total Estimada <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="duracionEstimada"
              value={formData.duracionEstimada}
              onChange={handleChange}
              required
              placeholder="Ej: 12 horas, 8 semanas, 24 lecciones"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <p className="text-xs text-foreground/60 mt-xs">
              Ayuda a los estudiantes a entender el compromiso de tiempo
            </p>
          </div>
        </div>

        {/* NUEVO: Modalidades */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Modalidad del Curso</h2>
          
          <div className="space-y-sm">
            <label className="flex items-start gap-sm cursor-pointer p-sm border border-foreground/10 rounded-lg hover:bg-muted/30">
              <input
                type="checkbox"
                checked={formData.modalidades.online}
                onChange={(e) => setFormData({
                  ...formData,
                  modalidades: { ...formData.modalidades, online: e.target.checked }
                })}
                className="w-4 h-4 mt-1"
              />
              <div>
                <div className="font-semibold text-sm">🌐 Online</div>
                <div className="text-xs text-foreground/60">
                  Los estudiantes pueden tomar el curso desde cualquier lugar
                </div>
              </div>
            </label>

            <label className="flex items-start gap-sm cursor-pointer p-sm border border-foreground/10 rounded-lg hover:bg-muted/30">
              <input
                type="checkbox"
                checked={formData.modalidades.presencial}
                onChange={(e) => setFormData({
                  ...formData,
                  modalidades: { ...formData.modalidades, presencial: e.target.checked }
                })}
                className="w-4 h-4 mt-1"
              />
              <div>
                <div className="font-semibold text-sm">📍 Presencial</div>
                <div className="text-xs text-foreground/60">
                  Requiere presencia física del estudiante (ej: deportes, música)
                </div>
              </div>
            </label>

            <label className="flex items-start gap-sm cursor-pointer p-sm border border-foreground/10 rounded-lg hover:bg-muted/30">
              <input
                type="checkbox"
                checked={formData.modalidades.hibrido}
                onChange={(e) => setFormData({
                  ...formData,
                  modalidades: { ...formData.modalidades, hibrido: e.target.checked }
                })}
                className="w-4 h-4 mt-1"
              />
              <div>
                <div className="font-semibold text-sm">🔄 Híbrido</div>
                <div className="text-xs text-foreground/60">
                  Combina sesiones online y presenciales
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* NUEVO: Equipo Requerido */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Equipo o Materiales Necesarios</h2>
          
          {equipoRequerido.length > 0 && (
            <div className="space-y-sm mb-md">
              {equipoRequerido.map((equipo, index) => (
                <div key={index} className="flex items-center gap-sm p-sm border border-foreground/10 rounded">
                  <span className="text-lg">{equipo.obligatorio ? '✓' : '~'}</span>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{equipo.nombre}</div>
                    {equipo.obligatorio ? (
                      <div className="text-xs text-red-600">Obligatorio</div>
                    ) : (
                      <div className="text-xs text-foreground/60">Opcional pero recomendado</div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setEquipoRequerido(equipoRequerido.filter((_, i) => i !== index))}
                    className="text-red-600 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-sm">
            <div className="flex gap-sm">
              <input
                type="text"
                value={nuevoEquipo.nombre}
                onChange={(e) => setNuevoEquipo({ ...nuevoEquipo, nombre: e.target.value })}
                placeholder="Ej: Guitarra acústica, Colchoneta de yoga..."
                className="flex-1 px-sm py-sm border border-foreground/20 rounded-lg"
              />
              <select
                value={nuevoEquipo.obligatorio ? 'obligatorio' : 'opcional'}
                onChange={(e) => setNuevoEquipo({ ...nuevoEquipo, obligatorio: e.target.value === 'obligatorio' })}
                className="px-sm py-sm border border-foreground/20 rounded-lg"
              >
                <option value="obligatorio">Obligatorio</option>
                <option value="opcional">Opcional</option>
              </select>
              <button
                type="button"
                onClick={() => {
                  if (nuevoEquipo.nombre.trim()) {
                    setEquipoRequerido([...equipoRequerido, { ...nuevoEquipo, descripcion: '' }]);
                    setNuevoEquipo({ nombre: '', obligatorio: true });
                  }
                }}
                className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
              >
                Agregar
              </button>
            </div>
            <p className="text-xs text-foreground/60">
              Lista todo el equipo que el estudiante necesitará para el curso
            </p>
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
            Crear Curso
          </button>
        </div>
      </form>

      {/* Próximos pasos */}
      <div className="mt-lg border-t border-foreground/10 pt-lg">
        <h3 className="font-semibold mb-sm">Próximos pasos después de crear el curso:</h3>
        <ol className="list-decimal list-inside space-y-xs text-sm text-foreground/70">
          <li>Agregar módulos y lecciones con contenido de video</li>
          <li>Subir materiales complementarios (PDFs, ejercicios)</li>
          <li>Configurar quizzes opcionales (si deseas)</li>
          <li>Previsualizar cómo lo verán los estudiantes</li>
          <li>Publicar cuando esté listo</li>
        </ol>
      </div>
    </Container>
  );
}
