import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Perfil del Profesor
 * Información profesional y configuración
 */

export function PerfilProfesorPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Perfil actualizado (simulado)');
  };

  return (
    <Container className="py-lg max-w-3xl">
      <h1 className="font-display text-3xl font-bold mb-sm">Perfil de Profesor</h1>
      <p className="text-foreground/60 mb-lg">
        Administra tu información profesional y credenciales
      </p>

      <form onSubmit={handleSubmit} className="space-y-lg">
        {/* Foto de perfil y banner */}
        <div>
          <div className="h-32 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg mb-md" />
          <div className="flex items-end gap-md -mt-16 ml-md">
            <div className="w-24 h-24 bg-amber-500 rounded-full border-4 border-background flex items-center justify-center text-white text-3xl font-bold">
              P
            </div>
            <button
              type="button"
              className="px-4 py-2 bg-amber-500 text-white rounded-md text-sm font-medium hover:bg-amber-600 mb-2"
            >
              Cambiar Foto
            </button>
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
              defaultValue="Prof. Juan Pérez"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-xs">
              Título profesional
            </label>
            <input
              type="text"
              id="title"
              defaultValue="Desarrollador Full Stack Senior"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-xs">
              Biografía profesional
            </label>
            <textarea
              id="bio"
              rows={6}
              defaultValue="Desarrollador con más de 10 años de experiencia en React, TypeScript y Node.js..."
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            />
          </div>
        </div>

        {/* Especialidades */}
        <div className="space-y-md">
          <h2 className="font-semibold text-lg">Especialidades</h2>
          
          <div>
            <label className="block text-sm font-medium mb-sm">
              Áreas de experiencia
            </label>
            <div className="flex flex-wrap gap-xs mb-sm">
              {['React', 'TypeScript', 'Node.js', 'Next.js', 'GraphQL'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium"
                >
                  {tag} ✕
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Agregar especialidad..."
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Credenciales */}
        <div className="space-y-md">
          <h2 className="font-semibold text-lg">Credenciales y Certificaciones</h2>
          
          <div className="space-y-sm">
            {[
              { title: 'Certificación React Advanced', org: 'Meta', year: '2023' },
              { title: 'AWS Certified Developer', org: 'Amazon', year: '2022' },
            ].map((cert, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-sm border border-foreground/10 rounded-md"
              >
                <div>
                  <div className="font-medium text-sm">{cert.title}</div>
                  <div className="text-xs text-foreground/60">
                    {cert.org} • {cert.year}
                  </div>
                </div>
                <button type="button" className="text-sm text-red-600 hover:underline">
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          
          <button
            type="button"
            className="text-sm text-amber-600 hover:underline font-medium"
          >
            + Agregar certificación
          </button>
        </div>

        {/* Configuración de pagos */}
        <div className="space-y-md">
          <h2 className="font-semibold text-lg">Configuración de Pagos</h2>
          
          <div>
            <label htmlFor="bank-account" className="block text-sm font-medium mb-xs">
              Cuenta bancaria para retiros
            </label>
            <input
              type="text"
              id="bank-account"
              defaultValue="•••• •••• •••• 4242"
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="tax-id" className="block text-sm font-medium mb-xs">
              Número de identificación fiscal
            </label>
            <input
              type="text"
              id="tax-id"
              placeholder="RFC / Tax ID"
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
