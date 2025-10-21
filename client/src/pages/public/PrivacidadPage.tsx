import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página de Política de Privacidad
 * Información sobre el manejo de datos personales
 */

export function PrivacidadPage() {
  return (
    <PageContainer>
      <Container className="py-xl max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-md">
          Política de Privacidad
        </h1>
        <p className="text-foreground/60 mb-xl">
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>

        <div className="prose prose-lg max-w-none space-y-lg">
          <section>
            <h2 className="font-semibold text-2xl mb-md">1. Información que Recopilamos</h2>
            <p className="text-foreground/70">
              En AlenjandrIA, recopilamos información que nos proporcionas directamente cuando te registras en nuestra plataforma de conocimiento.
            </p>
            <ul className="list-disc pl-md space-y-xs text-foreground/80">
              <li>Información de perfil (nombre, email, foto)</li>
              <li>Información de pago (procesada de forma segura)</li>
              <li>Datos de uso de la plataforma</li>
              <li>Cookies y tecnologías similares</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">2. Cómo Usamos tu Información</h2>
            <p className="text-foreground/80 mb-sm">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-md space-y-xs text-foreground/80">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Procesar transacciones y pagos</li>
              <li>Enviar notificaciones importantes</li>
              <li>Personalizar tu experiencia</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">3. Compartir Información</h2>
            <p className="text-foreground/80">
              No vendemos tu información personal. Solo compartimos datos con:
            </p>
            <ul className="list-disc pl-md space-y-xs text-foreground/80">
              <li>Proveedores de servicios (procesadores de pago, hosting)</li>
              <li>Cuando sea requerido por ley</li>
              <li>Con tu consentimiento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">4. Seguridad de Datos</h2>
            <p className="text-foreground/80">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información 
              contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún método de transmisión 
              por Internet es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">5. Tus Derechos</h2>
            <p className="text-foreground/80 mb-sm">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-md space-y-xs text-foreground/80">
              <li>Acceder a tu información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tu información</li>
              <li>Exportar tus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">6. Cookies</h2>
            <p className="text-foreground/80">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia. Puedes configurar 
              tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad de la plataforma.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">7. Cambios a esta Política</h2>
            <p className="text-foreground/80">
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre 
              cambios significativos mediante un aviso prominente en la plataforma.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-md">8. Contacto</h2>
            <p className="text-foreground/80">
              Para preguntas sobre privacidad, contacta a: privacidad@estudiantes.com
            </p>
          </section>
        </div>
      </Container>
    </PageContainer>
  );
}
