import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Perfil del Alumno
 * Información personal y preferencias
 */

export function PerfilAlumnoPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Perfil actualizado (simulado)');
  };

  return (
    <Container className="py-lg max-w-3xl">
      <h1 className="font-display text-3xl font-bold mb-sm">Mi Perfil</h1>
      <p className="text-foreground/60 mb-lg">
        Administra tu información personal y preferencias
      </p>

      <form onSubmit={handleSubmit} className="space-y-lg">
        {/* Foto de perfil */}
        <div className="flex items-center gap-md">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            U
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 bg-emerald-500 text-white rounded-md text-sm font-medium hover:bg-emerald-600 mb-xs"
            >
              Cambiar Foto
            </button>
            <p className="text-xs text-foreground/60">
              JPG, PNG o GIF. Máximo 2MB.
            </p>
          </div>
        </div>

        {/* Información básica */}
        <div className="space-y-md">
          <h2 className="font-semibold text-lg">Información Básica</h2>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-xs">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              defaultValue="Juan Pérez"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-xs">
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue="juan@email.com"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-xs">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              defaultValue="+1 (555) 123-4567"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-xs">
              Biografía
            </label>
            <textarea
              id="bio"
              rows={4}
              placeholder="Cuéntanos sobre ti..."
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>
        </div>

        {/* Preferencias de aprendizaje */}
        <div className="space-y-md">
          <h2 className="font-semibold text-lg">Preferencias de Aprendizaje</h2>
          
          <div>
            <label htmlFor="interests" className="block text-sm font-medium mb-xs">
              Áreas de interés
            </label>
            <select
              id="interests"
              multiple
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32"
            >
              <option value="programming">Programación</option>
              <option value="design">Diseño</option>
              <option value="languages">Idiomas</option>
              <option value="music">Música</option>
              <option value="business">Negocios</option>
            </select>
            <p className="text-xs text-foreground/60 mt-xs">
              Mantén presionado Ctrl/Cmd para seleccionar múltiples opciones
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-sm">
              Nivel de experiencia general
            </label>
            <div className="space-y-xs">
              <label className="flex items-center">
                <input type="radio" name="level" value="beginner" className="mr-xs" />
                <span className="text-sm">Principiante</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="level" value="intermediate" className="mr-xs" defaultChecked />
                <span className="text-sm">Intermedio</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="level" value="advanced" className="mr-xs" />
                <span className="text-sm">Avanzado</span>
              </label>
            </div>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="space-y-md">
          <h2 className="font-semibold text-lg">Métodos de Pago</h2>
          <div className="border border-foreground/10 rounded-lg p-md">
            <div className="flex items-center justify-between mb-sm">
              <div className="flex items-center gap-sm">
                <span className="text-2xl">💳</span>
                <div>
                  <div className="font-medium text-sm">Visa •••• 4242</div>
                  <div className="text-xs text-foreground/60">Expira 12/25</div>
                </div>
              </div>
              <button type="button" className="text-sm text-red-600 hover:underline">
                Eliminar
              </button>
            </div>
          </div>
          <button
            type="button"
            className="text-sm text-emerald-600 hover:underline font-medium"
          >
            + Agregar método de pago
          </button>
        </div>

        {/* Botones */}
        <div className="flex gap-sm pt-md border-t border-foreground/10">
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            Guardar Cambios
          </button>
          <button
            type="button"
            className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </Container>
  );
}
