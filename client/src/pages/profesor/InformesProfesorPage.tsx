import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Informes del Profesor
 * Generación de reportes de progreso de estudiantes
 */

export function InformesProfesorPage() {
  return (
    <Container className="py-lg">
      <h1 className="font-display text-3xl font-bold mb-sm">Informes y Reportes</h1>
      <p className="text-foreground/60 mb-lg">
        Genera reportes detallados del progreso de tus estudiantes
      </p>

      {/* Filtros para generar reporte */}
      <div className="border border-foreground/10 rounded-lg p-md mb-lg">
        <h2 className="font-semibold text-lg mb-md">Generar Nuevo Reporte</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-md">
          <div>
            <label className="block text-sm font-medium mb-xs">Clase</label>
            <select className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Todas las clases</option>
              <option>React Avanzado</option>
              <option>TypeScript desde Cero</option>
              <option>Node.js Backend</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-xs">Estudiante</label>
            <select className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Todos los estudiantes</option>
              <option>Juan Pérez</option>
              <option>María García</option>
              <option>Carlos López</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-xs">Período</label>
            <select className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Último mes</option>
              <option>Últimos 3 meses</option>
              <option>Último año</option>
              <option>Todo el tiempo</option>
            </select>
          </div>
        </div>
        <button className="px-6 py-2 bg-amber-500 text-white rounded-md font-medium hover:bg-amber-600">
          Generar Reporte
        </button>
      </div>

      {/* Reportes guardados */}
      <div className="mb-lg">
        <h2 className="font-semibold text-lg mb-md">Reportes Recientes</h2>
        <div className="space-y-sm">
          {[
            { name: 'Progreso General - Octubre 2024', date: '15 Oct 2024', students: 48 },
            { name: 'React Avanzado - Grupo 3', date: '10 Oct 2024', students: 12 },
            { name: 'Evaluación Trimestral', date: '1 Oct 2024', students: 48 },
          ].map((report, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-md border border-foreground/10 rounded-lg hover:border-amber-500/50"
            >
              <div>
                <div className="font-semibold mb-xs">{report.name}</div>
                <div className="text-sm text-foreground/60">
                  Generado el {report.date} • {report.students} estudiantes
                </div>
              </div>
              <div className="flex gap-xs">
                <button className="px-4 py-2 bg-amber-500 text-white text-sm rounded-md hover:bg-amber-600">
                  Ver
                </button>
                <button className="px-4 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30">
                  Descargar PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div>
        <h2 className="font-semibold text-lg mb-md">Estadísticas Generales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          <div className="border border-foreground/10 rounded-lg p-md">
            <div className="text-sm text-foreground/60 mb-xs">Tasa de Finalización</div>
            <div className="text-2xl font-bold text-green-600">98%</div>
          </div>

          <div className="border border-foreground/10 rounded-lg p-md">
            <div className="text-sm text-foreground/60 mb-xs">Promedio de Calificaciones</div>
            <div className="text-2xl font-bold">8.7/10</div>
          </div>

          <div className="border border-foreground/10 rounded-lg p-md">
            <div className="text-sm text-foreground/60 mb-xs">Asistencia Promedio</div>
            <div className="text-2xl font-bold">94%</div>
          </div>

          <div className="border border-foreground/10 rounded-lg p-md">
            <div className="text-sm text-foreground/60 mb-xs">Satisfacción</div>
            <div className="text-2xl font-bold">4.9/5</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
