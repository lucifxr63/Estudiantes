import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página de Términos y Condiciones
 * Información legal sobre el uso de la plataforma
 */

export function TerminosPage() {
  return (
    <PageContainer>
      <Container className="py-xl max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-md">
          Términos y Condiciones
        </h1>
        <p className="text-lg text-foreground/70 mb-lg">
          Última actualización: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-lg max-w-none space-y-lg">
          <section>
            <h2 className="font-semibold text-2xl mb-md">1. Aceptación de los Términos</h2>
            <p className="text-foreground/70">
              Al acceder y utilizar AlenjandrIA, nuestra biblioteca de conocimiento digital, aceptas estar sujeto a estos términos y condiciones, todas las leyes y regulaciones aplicables, y aceptas que eres responsable del cumplimiento de todas las leyes locales aplicables.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">2. Uso de la Plataforma</h2>
            <p className="text-foreground/80 mb-sm">
              Los usuarios se comprometen a:
            </p>
            <ul className="list-disc pl-md space-y-xs text-foreground/80">
              <li>Proporcionar información veraz y actualizada</li>
              <li>Mantener la confidencialidad de sus credenciales</li>
              <li>No utilizar la plataforma para fines ilegales</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">3. Servicios Ofrecidos</h2>
            <p className="text-foreground/80">
              Estudiantes actúa como intermediario entre profesores y alumnos, facilitando la conexión y 
              proporcionando herramientas para la gestión de clases. No somos responsables del contenido 
              educativo proporcionado por los profesores.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">4. Pagos y Reembolsos</h2>
            <p className="text-foreground/80">
              Los pagos se procesan de forma segura a través de proveedores externos. Las políticas de 
              reembolso están sujetas a los términos específicos de cada clase y deben ser consultadas 
              antes de realizar una compra.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">5. Limitación de Responsabilidad</h2>
            <p className="text-foreground/80">
              Estudiantes no será responsable por daños directos, indirectos, incidentales o consecuentes 
              que resulten del uso o la imposibilidad de usar la plataforma.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">6. Modificaciones</h2>
            <p className="text-foreground/80">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
              entrarán en vigor inmediatamente después de su publicación en la plataforma.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">7. Contacto</h2>
            <p className="text-foreground/80">
              Para cualquier pregunta sobre estos términos, por favor contacta a: legal@estudiantes.com
            </p>
          </section>
        </div>
      </Container>
    </PageContainer>
  );
}
