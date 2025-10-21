import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PublicLayout } from '@shared/ui/layouts/PublicLayout';

/**
 * Página de Carrito de Compras
 * Lista de items seleccionados antes del checkout
 */

export function CarritoPage() {
  const items = [
    { id: 1, name: 'React Avanzado', price: 49.99, instructor: 'Juan Pérez' },
    { id: 2, name: 'TypeScript desde Cero', price: 39.99, instructor: 'María García' },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  return (
    <PublicLayout>
      <Container className="py-lg">
        <h1 className="font-display text-3xl font-bold mb-lg">Carrito de Compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          {/* Items del carrito */}
          <div className="lg:col-span-2 space-y-md">
            {items.map((item) => (
              <div key={item.id} className="flex gap-md p-md border border-foreground/10 rounded-lg">
                <div className="w-24 h-24 bg-muted/50 rounded-md" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-xs">{item.name}</h3>
                  <p className="text-sm text-foreground/60 mb-sm">Por {item.instructor}</p>
                  <button className="text-sm text-red-600 hover:underline">Eliminar</button>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">${item.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen */}
          <div className="border border-foreground/10 rounded-lg p-md h-fit sticky top-4">
            <h2 className="font-semibold text-lg mb-md">Resumen</h2>
            <div className="space-y-sm mb-md">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>IVA (16%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-foreground/10 pt-sm flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/comprar"
              className="block w-full py-3 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:bg-primary/90"
            >
              Proceder al Pago
            </Link>
          </div>
        </div>
      </Container>
    </PublicLayout>
  );
}
