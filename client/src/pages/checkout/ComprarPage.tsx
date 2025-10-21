import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';
import { PublicLayout } from '@shared/ui/layouts/PublicLayout';

/**
 * Página de Proceso de Compra
 * Checkout con múltiples pasos
 */

export function ComprarPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simular procesamiento
      setTimeout(() => {
        navigate('/comprar/exito/12345');
      }, 1500);
    }
  };

  return (
    <PublicLayout>
      <Container className="py-lg max-w-4xl">
        <h1 className="font-display text-3xl font-bold mb-lg">Proceso de Compra</h1>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-lg">
          {[
            { num: 1, label: 'Dirección' },
            { num: 2, label: 'Pago' },
            { num: 3, label: 'Revisión' },
          ].map((s) => (
            <div key={s.num} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s.num
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground/60'
                }`}
              >
                {s.num}
              </div>
              <div className="flex-1 mx-2">
                <div className={`h-1 ${step > s.num ? 'bg-primary' : 'bg-muted'}`} />
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-lg">
          {/* Paso 1: Dirección */}
          {step === 1 && (
            <div className="space-y-md">
              <h2 className="font-semibold text-xl">Dirección de Envío</h2>
              <div className="grid grid-cols-2 gap-md">
                <input
                  type="text"
                  placeholder="Nombre"
                  required
                  className="px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  required
                  className="px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Dirección"
                required
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="grid grid-cols-3 gap-md">
                <input
                  type="text"
                  placeholder="Ciudad"
                  required
                  className="px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Estado"
                  required
                  className="px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="CP"
                  required
                  className="px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          )}

          {/* Paso 2: Pago */}
          {step === 2 && (
            <div className="space-y-md">
              <h2 className="font-semibold text-xl">Método de Pago</h2>
              <div>
                <label className="block text-sm font-medium mb-xs">Número de tarjeta</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div>
                  <label className="block text-sm font-medium mb-xs">Fecha de vencimiento</label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    required
                    className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-xs">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    required
                    className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Paso 3: Revisión */}
          {step === 3 && (
            <div className="space-y-md">
              <h2 className="font-semibold text-xl">Revisar Orden</h2>
              <div className="border border-foreground/10 rounded-lg p-md bg-muted/10">
                <h3 className="font-semibold mb-sm">Resumen de Compra</h3>
                <div className="space-y-xs mb-md">
                  <div className="flex justify-between text-sm">
                    <span>React Avanzado</span>
                    <span>$49.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>TypeScript desde Cero</span>
                    <span>$39.99</span>
                  </div>
                </div>
                <div className="border-t border-foreground/10 pt-sm flex justify-between font-bold">
                  <span>Total</span>
                  <span>$104.39</span>
                </div>
              </div>
              <label className="flex items-start gap-xs">
                <input type="checkbox" required className="mt-1" />
                <span className="text-sm">
                  Acepto los términos y condiciones y la política de privacidad
                </span>
              </label>
            </div>
          )}

          {/* Botones */}
          <div className="flex gap-sm">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30"
              >
                Atrás
              </button>
            )}
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
            >
              {step === 3 ? 'Confirmar Compra' : 'Continuar'}
            </button>
          </div>
        </form>
      </Container>
    </PublicLayout>
  );
}
