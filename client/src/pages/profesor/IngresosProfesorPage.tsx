import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Ingresos del Profesor
 * Desglose de ganancias y estadísticas financieras
 */

export function IngresosProfesorPage() {
  return (
    <Container className="py-lg">
      <h1 className="font-display text-3xl font-bold mb-sm">Ingresos</h1>
      <p className="text-foreground/60 mb-lg">
        Resumen de tus ganancias y transacciones
      </p>

      {/* Resumen de ingresos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md bg-amber-50/30">
          <div className="text-sm text-foreground/60 mb-xs">Balance Disponible</div>
          <div className="text-3xl font-bold text-amber-600 mb-xs">$1,280.50</div>
          <button className="text-sm text-amber-600 hover:underline font-medium">
            Solicitar retiro →
          </button>
        </div>

        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Ingresos del mes</div>
          <div className="text-3xl font-bold mb-xs">$2,450.00</div>
          <div className="text-xs text-green-600">↑ 15% vs mes anterior</div>
        </div>

        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Total histórico</div>
          <div className="text-3xl font-bold mb-xs">$18,340.00</div>
          <div className="text-xs text-foreground/60">Desde enero 2023</div>
        </div>
      </div>

      {/* Gráfico de ingresos (placeholder) */}
      <div className="border border-foreground/10 rounded-lg p-md mb-lg">
        <h2 className="font-semibold text-lg mb-md">Ingresos por mes</h2>
        <div className="h-64 bg-muted/20 rounded-md flex items-center justify-center text-foreground/60">
          📊 Gráfico de ingresos (placeholder)
        </div>
      </div>

      {/* Desglose por clase */}
      <div className="mb-lg">
        <h2 className="font-semibold text-lg mb-md">Ingresos por Clase</h2>
        <div className="border border-foreground/10 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left p-sm text-sm font-semibold">Clase</th>
                <th className="text-right p-sm text-sm font-semibold">Estudiantes</th>
                <th className="text-right p-sm text-sm font-semibold">Horas</th>
                <th className="text-right p-sm text-sm font-semibold">Ingresos</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'React Avanzado', students: 48, hours: 24, earnings: 1176 },
                { name: 'TypeScript desde Cero', students: 32, hours: 16, earnings: 640 },
                { name: 'Node.js Backend', students: 25, hours: 12, earnings: 450 },
                { name: 'Next.js Completo', students: 18, hours: 8, earnings: 184 },
              ].map((clase, i) => (
                <tr key={i} className="border-t border-foreground/10 hover:bg-muted/20">
                  <td className="p-sm text-sm">{clase.name}</td>
                  <td className="p-sm text-sm text-right">{clase.students}</td>
                  <td className="p-sm text-sm text-right">{clase.hours}h</td>
                  <td className="p-sm text-sm text-right font-semibold">${clase.earnings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Historial de transacciones */}
      <div>
        <h2 className="font-semibold text-lg mb-md">Historial de Transacciones</h2>
        <div className="space-y-sm">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-md border border-foreground/10 rounded-lg hover:bg-muted/20"
            >
              <div>
                <div className="font-medium text-sm mb-xs">
                  Pago por clase - React Avanzado
                </div>
                <div className="text-xs text-foreground/60">
                  15 Oct 2024 • Juan Pérez
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-600">+$49.00</div>
                <div className="text-xs text-foreground/60">Completado</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
