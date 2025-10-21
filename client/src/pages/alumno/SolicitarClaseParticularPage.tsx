import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página para Solicitar Clase Particular
 * Formulario para que el alumno solicite una clase 1-a-1 con un profesor
 */

export function SolicitarClaseParticularPage() {
  const navigate = useNavigate();

  // Mock data de profesores disponibles
  const profesores = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      foto: '👨‍🏫',
      especialidad: 'React, TypeScript, Node.js',
      precioHora: 50,
      calificacion: 4.8,
      clasesImpartidas: 120,
    },
    {
      id: 2,
      nombre: 'María González',
      foto: '👩‍🏫',
      especialidad: 'Diseño UX/UI, Figma',
      precioHora: 45,
      calificacion: 4.9,
      clasesImpartidas: 85,
    },
    {
      id: 3,
      nombre: 'Carlos Ramírez',
      foto: '👨‍💼',
      especialidad: 'Marketing Digital, SEO',
      precioHora: 55,
      calificacion: 4.7,
      clasesImpartidas: 95,
    },
  ];

  const [formData, setFormData] = useState({
    profesorId: '',
    tema: '',
    mensaje: '',
    presupuesto: '',
    fechaPreferida: '',
    archivos: [] as File[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Solicitud enviada:', formData);
    alert('¡Solicitud enviada! El profesor te responderá pronto.');
    navigate('/alumno/clases-particulares');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, archivos: Array.from(e.target.files) });
    }
  };

  const profesorSeleccionado = profesores.find(p => p.id === Number(formData.profesorId));

  return (
    <Container className="py-lg max-w-4xl">
      <div className="mb-lg">
        <h1 className="font-display text-3xl font-bold mb-sm">Solicitar Clase Particular</h1>
        <p className="text-foreground/60">
          Conecta con un profesor para recibir ayuda personalizada
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-lg">
        {/* Selección de Profesor */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Selecciona un Profesor</h2>
          
          <div className="space-y-sm">
            {profesores.map((profesor) => (
              <label
                key={profesor.id}
                className={`flex items-center gap-md p-sm border rounded-lg cursor-pointer transition-colors ${
                  Number(formData.profesorId) === profesor.id
                    ? 'border-primary bg-primary/5'
                    : 'border-foreground/10 hover:bg-muted/30'
                }`}
              >
                <input
                  type="radio"
                  name="profesor"
                  value={profesor.id}
                  checked={Number(formData.profesorId) === profesor.id}
                  onChange={(e) => setFormData({ ...formData, profesorId: e.target.value })}
                  className="w-4 h-4"
                  required
                />
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {profesor.foto}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{profesor.nombre}</div>
                  <div className="text-sm text-foreground/60">{profesor.especialidad}</div>
                  <div className="text-xs text-foreground/60 mt-xs">
                    ⭐ {profesor.calificacion} • {profesor.clasesImpartidas} clases impartidas
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-lg">${profesor.precioHora}/hr</div>
                  <div className="text-xs text-foreground/60">Precio aprox.</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Detalles de la Solicitud */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">Detalles de tu Solicitud</h2>
          
          <div className="space-y-md">
            <div>
              <label className="block text-sm font-medium mb-xs">
                ¿Sobre qué tema necesitas ayuda? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.tema}
                onChange={(e) => setFormData({ ...formData, tema: e.target.value })}
                required
                placeholder="Ej: React Hooks, Debugging, Proyecto personal..."
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-xs">
                Describe tu necesidad <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                required
                rows={5}
                placeholder="Explica qué necesitas, qué has intentado, y qué esperas lograr con la clase..."
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-foreground/60 mt-xs">
                Sé específico para que el profesor pueda preparar mejor la clase
              </p>
            </div>

            <div className="grid grid-cols-2 gap-md">
              <div>
                <label className="block text-sm font-medium mb-xs">
                  Tu presupuesto (USD)
                </label>
                <input
                  type="number"
                  value={formData.presupuesto}
                  onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                  placeholder="50"
                  min="0"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {profesorSeleccionado && (
                  <p className="text-xs text-foreground/60 mt-xs">
                    Precio sugerido: ${profesorSeleccionado.precioHora}/hora
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">
                  Fecha preferida (opcional)
                </label>
                <input
                  type="date"
                  value={formData.fechaPreferida}
                  onChange={(e) => setFormData({ ...formData, fechaPreferida: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-xs">
                Adjuntar archivos (opcional)
              </label>
              <div className="border-2 border-dashed border-foreground/20 rounded-lg p-lg text-center hover:bg-muted/10 cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.jpg,.png,.zip,.txt"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-4xl mb-sm">📎</div>
                  <div className="text-sm font-medium mb-xs">
                    Haz clic para adjuntar archivos
                  </div>
                  <div className="text-xs text-foreground/60">
                    PDFs, imágenes, código (máx. 10MB por archivo)
                  </div>
                </label>
              </div>
              {formData.archivos.length > 0 && (
                <div className="mt-sm">
                  <div className="text-sm font-medium mb-xs">Archivos seleccionados:</div>
                  <ul className="text-sm space-y-xs">
                    {formData.archivos.map((file, i) => (
                      <li key={i} className="flex items-center gap-sm">
                        <span>📄</span>
                        <span>{file.name}</span>
                        <span className="text-foreground/60">({(file.size / 1024).toFixed(1)} KB)</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Resumen */}
        {profesorSeleccionado && (
          <div className="border border-primary/20 bg-primary/5 rounded-lg p-md">
            <h3 className="font-semibold mb-sm">Resumen de tu Solicitud</h3>
            <div className="text-sm space-y-xs">
              <div className="flex justify-between">
                <span className="text-foreground/60">Profesor:</span>
                <span className="font-semibold">{profesorSeleccionado.nombre}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Tema:</span>
                <span>{formData.tema || 'No especificado'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Presupuesto:</span>
                <span>{formData.presupuesto ? `$${formData.presupuesto}` : 'A negociar'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Botones */}
        <div className="flex gap-sm justify-end">
          <button
            type="button"
            onClick={() => navigate('/alumno/clases-particulares')}
            className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
          >
            Enviar Solicitud
          </button>
        </div>
      </form>

      {/* Información Adicional */}
      <div className="mt-lg border border-foreground/10 rounded-lg p-md bg-muted/10">
        <h3 className="font-semibold mb-sm">📝 ¿Cómo funciona?</h3>
        <ol className="text-sm space-y-sm text-foreground/70">
          <li>1. Completa el formulario con tus necesidades</li>
          <li>2. El profesor recibirá tu solicitud y te responderá con una propuesta</li>
          <li>3. Negociarán precio, duración y fecha por chat</li>
          <li>4. Una vez acordado, confirmas y pagas</li>
          <li>5. Recibirás el link de la videollamada antes de la clase</li>
        </ol>
      </div>
    </Container>
  );
}
