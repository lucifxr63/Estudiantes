import { useState } from 'react';
import { Container } from '@shared/ui/primitives/Container';
import { PageContainer } from '@shared/ui/components/PageContainer';

/**
 * Página de Preguntas Frecuentes (FAQ)
 * Acordeón con preguntas y respuestas comunes
 */

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: '¿Cómo puedo registrarme como profesor?',
    answer: 'Haz clic en "Registrarse" en la parte superior, selecciona "Soy Profesor" y completa el formulario de perfil. Nuestro equipo revisará tu solicitud en 24-48 horas.',
  },
  {
    question: '¿Cuánto cuesta usar la plataforma?',
    answer: 'El registro es completamente gratuito tanto para estudiantes como para profesores. Solo cobramos una comisión del 15% sobre las transacciones exitosas.',
  },
  {
    question: '¿Cómo funcionan los pagos?',
    answer: 'Los pagos se procesan de forma segura a través de nuestra plataforma. Los estudiantes pagan por adelantado y los profesores reciben su pago 24 horas después de completar la clase.',
  },
  {
    question: '¿Puedo cancelar una clase?',
    answer: 'Sí, puedes cancelar hasta 24 horas antes del inicio de la clase sin penalización. Las cancelaciones con menos de 24 horas de anticipación no son reembolsables.',
  },
  {
    question: '¿Las clases son en vivo o grabadas?',
    answer: 'Ofrecemos ambas modalidades. Puedes elegir clases en vivo para interacción en tiempo real o clases pregrabadas para aprender a tu ritmo.',
  },
  {
    question: '¿Cómo puedo contactar a un profesor?',
    answer: 'Una vez que te inscribas en una clase o el profesor acepte tu petición, podrás contactarlo directamente a través de nuestro sistema de mensajería interno.',
  },
];

export function PreguntasFrecuentesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageContainer>
      <Container className="py-xl max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-md text-center">
          Preguntas Frecuentes
        </h1>
        <p className="text-center text-foreground/60 mb-xl">
          Encuentra respuestas a las preguntas más comunes
        </p>

        <div className="space-y-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-foreground/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-md py-sm text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-md py-sm bg-muted/10 border-t border-foreground/10">
                  <p className="text-foreground/70">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-xl text-center">
          <p className="text-foreground/60 mb-md">¿No encontraste lo que buscabas?</p>
          <a
            href="/contacto"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contacta con Soporte
          </a>
        </div>
      </Container>
    </PageContainer>
  );
}
