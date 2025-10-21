import { Container } from '@shared/ui/primitives/Container';
import { Link } from 'react-router-dom';

/**
 * Página de Mis Compras del Alumno
 * Historial de transacciones y acceso a facturas
 */

export function ComprasAlumnoPage() {
  return (
    <Container className="py-lg">
      <h1 className="font-display text-3xl font-bold mb-sm">Mis Compras</h1>
      <p className="text-foreground/60 mb-lg">
        Historial completo de tus transacciones
      </p>

      {/* Tabs */}
      <div className="border-b border-foreground/10 mb-lg">
        <div className="flex gap-md">
          <button className="pb-sm border-b-2 border-emerald-500 font-semibold">
            Todas
          </button>
          <button className="pb-sm border-b-2 border-transparent font-semibold text-foreground/60 hover:text-foreground">
            Completadas
          </button>
          <button className="pb-sm border-b-2 border-transparent font-semibold text-foreground/60 hover:text-foreground">
            Pendientes
          </button>
        </div>
      </div>

      {/* Lista de compras */}
      <div className="space-y-md">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="border border-foreground/10 rounded-lg p-md hover:border-emerald-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-sm">
              <div>
                <h3 className="font-semibold mb-xs">
                  Orden #{1000 + i}
                </h3>
                <p className="text-sm text-foreground/60">
                  {new Date().toLocaleDateString('es-ES')} • 15:30
                </p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
                Completada
              </span>
            </div>

            {/* Items de la orden */}
            <div className="space-y-xs mb-md">
              <div className="flex items-center justify-between text-sm">
                <span>Curso de React Avanzado</span>
                <span className="font-medium">$49.99</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>TypeScript desde Cero</span>
                <span className="font-medium">$39.99</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-md border-t border-foreground/10 mb-md">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">$89.98</span>
            </div>

            {/* Acciones */}
            <div className="flex gap-sm">
              <Link
                to={`/alumno/compras/${i}`}
                className="px-4 py-2 bg-emerald-500 text-white text-sm rounded-md hover:bg-emerald-600"
              >
                Ver Detalle
              </Link>
              <Link
                to={`/alumno/facturas`}
                className="px-4 py-2 border border-foreground/20 text-sm rounded-md hover:bg-muted/30"
              >
                Descargar Factura
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
