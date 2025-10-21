import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Gestión de Usuarios
 * Administración completa de usuarios con filtros y acciones
 */

export function UsuariosAdminPage() {
  return (
    <Container className="py-lg">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Gestión de Usuarios</h1>
          <p className="text-foreground/60">Administra todos los usuarios de la plataforma</p>
        </div>
        <button className="px-4 py-2 bg-violet-500 text-white rounded-md font-medium hover:bg-violet-600">
          Exportar CSV
        </button>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex gap-sm mb-lg flex-wrap">
        <input
          type="search"
          placeholder="Buscar usuarios..."
          className="flex-1 min-w-[200px] px-sm py-sm border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <select className="px-sm py-sm border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500">
          <option>Todos los roles</option>
          <option>Estudiantes</option>
          <option>Profesores</option>
          <option>Administradores</option>
        </select>
        <select className="px-sm py-sm border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500">
          <option>Todos los estados</option>
          <option>Activos</option>
          <option>Suspendidos</option>
          <option>Pendientes</option>
        </select>
      </div>

      {/* Tabla de usuarios */}
      <div className="border border-foreground/10 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/30">
            <tr>
              <th className="text-left p-sm text-sm font-semibold">Usuario</th>
              <th className="text-left p-sm text-sm font-semibold">Email</th>
              <th className="text-left p-sm text-sm font-semibold">Rol</th>
              <th className="text-left p-sm text-sm font-semibold">Estado</th>
              <th className="text-left p-sm text-sm font-semibold">Registro</th>
              <th className="text-right p-sm text-sm font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, i) => (
              <tr key={i} className="border-t border-foreground/10 hover:bg-muted/20">
                <td className="p-sm">
                  <div className="flex items-center gap-sm">
                    <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      U
                    </div>
                    <span className="text-sm font-medium">Usuario {i + 1}</span>
                  </div>
                </td>
                <td className="p-sm text-sm">usuario{i + 1}@email.com</td>
                <td className="p-sm">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Estudiante
                  </span>
                </td>
                <td className="p-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Activo
                  </span>
                </td>
                <td className="p-sm text-sm text-foreground/60">15 Oct 2024</td>
                <td className="p-sm text-right">
                  <button className="text-sm text-violet-600 hover:underline mr-sm">Ver</button>
                  <button className="text-sm text-violet-600 hover:underline mr-sm">Editar</button>
                  <button className="text-sm text-red-600 hover:underline">Suspender</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex items-center justify-between mt-md">
        <div className="text-sm text-foreground/60">Mostrando 10 de 10,234 usuarios</div>
        <div className="flex gap-xs">
          <button className="px-3 py-2 border border-foreground/20 rounded-md hover:bg-muted/30">←</button>
          <button className="px-3 py-2 bg-violet-500 text-white rounded-md">1</button>
          <button className="px-3 py-2 border border-foreground/20 rounded-md hover:bg-muted/30">2</button>
          <button className="px-3 py-2 border border-foreground/20 rounded-md hover:bg-muted/30">3</button>
          <button className="px-3 py-2 border border-foreground/20 rounded-md hover:bg-muted/30">→</button>
        </div>
      </div>
    </Container>
  );
}
