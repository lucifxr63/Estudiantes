import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página de Contacto
 * Formulario para enviar mensajes al equipo de soporte
 */

export function ContactoPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar envío de formulario
    alert('Mensaje enviado (simulado)');
  };

  return (
    <PageContainer>
      <Container className="py-xl max-w-2xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-md text-center">
          Contacto
        </h1>
        <p className="text-center text-foreground/60 mb-xl">
          ¿Tienes alguna pregunta? Estamos aquí para ayudarte
        </p>

        <div className="bg-muted/30 rounded-lg p-lg">
          <h2 className="font-semibold text-xl mb-md">Información de Contacto</h2>
          <div className="space-y-sm">
            <p className="flex items-center gap-sm">
              <span className="font-medium">Email:</span>
              <span>soporte@alejandria.com</span>
            </p>
            <p className="flex items-center gap-sm">
              <span className="font-medium">Teléfono:</span>
              <span>+1 (555) 123-4567</span>
            </p>
            <p className="flex items-center gap-sm">
              <span className="font-medium">Horario:</span>
              <span>Lunes a Viernes, 9:00 - 18:00</span>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-xs">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-xs">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-xs">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              required
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-xs">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={6}
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </Container>
    </PageContainer>
  );
}
