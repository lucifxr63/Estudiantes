import { Link, useParams } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PublicLayout } from '@shared/ui/layouts/PublicLayout';

/**
 * Página de Compra Exitosa
 * Confirmación después del pago
 */

export function ExitoPage() {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <PublicLayout>
      <Container className="py-xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-md">
            <span className="text-4xl">✓</span>
          </div>
          
          <h1 className="font-display text-4xl font-bold mb-sm">
            ¡Compra Exitosa!
          </h1>
          
          <p className="text-lg text-foreground/60 mb-lg">
            Tu orden #{orderId} ha sido procesada correctamente
          </p>

          <div className="border border-foreground/10 rounded-lg p-lg mb-lg text-left">
            <h2 className="font-semibold text-lg mb-md">Detalles de la Orden</h2>
            <div className="space-y-sm mb-md">
              <div className="flex justify-between">
                <span>React Avanzado</span>
                <span>$49.99</span>
              </div>
              <div className="flex justify-between">
                <span>TypeScript desde Cero</span>
                <span>$39.99</span>
              </div>
            </div>
            <div className="border-t border-foreground/10 pt-sm flex justify-between font-bold">
              <span>Total</span>
              <span>$104.39</span>
            </div>
          </div>

          <p className="text-sm text-foreground/60 mb-lg">
            Hemos enviado un correo de confirmación a tu email con los detalles de tu compra.
          </p>

          <div className="flex gap-sm justify-center">
            <Link
              to="/alumno/clases"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
            >
              Ver Mis Clases
            </Link>
            <Link
              to="/"
              className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </Container>
    </PublicLayout>
  );
}
