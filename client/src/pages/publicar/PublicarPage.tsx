import { FormEvent, useState } from 'react';
import { publishRequestSchema } from '@shared/lib/validation';
import { Input } from '@shared/ui/primitives/Input';
import { Button } from '@shared/ui/primitives/Button';
import { Stack } from '@shared/ui/primitives/Stack';
import { PageContainer } from '@shared/ui/components/PageContainer';

export function PublicarPage() {
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    category: '',
    preferredSchedule: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = publishRequestSchema.safeParse(formValues);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path.join('.');
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <PageContainer>
      <Stack direction="column" gap="md" as="section" aria-labelledby="publicar-heading">
        <div className="space-y-sm">
          <h1 id="publicar-heading" className="text-2xl font-semibold">
            Publicar una petición
          </h1>
          <p className="text-foreground/70">
            Describe la clase que necesitas y recibe propuestas de profesores disponibles.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-md" noValidate>
          <Input
            name="title"
            label="Título"
            value={formValues.title}
            onChange={(event) => setFormValues((prev) => ({ ...prev, title: event.target.value }))}
            helperText={errors.title}
            aria-invalid={Boolean(errors.title)}
            required
          />
          <div className="space-y-xs">
            <label htmlFor="description" className="block text-sm font-medium text-foreground/80">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full rounded-md border border-foreground/10 bg-background px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              rows={5}
              value={formValues.description}
              onChange={(event) => setFormValues((prev) => ({ ...prev, description: event.target.value }))}
              aria-invalid={Boolean(errors.description)}
              required
            />
            {errors.description && <p className="text-xs text-foreground/60">{errors.description}</p>}
          </div>
          <Input
            name="category"
            label="Categoría"
            value={formValues.category}
            onChange={(event) => setFormValues((prev) => ({ ...prev, category: event.target.value }))}
            helperText={errors.category}
            aria-invalid={Boolean(errors.category)}
            required
          />
          <Input
            name="preferredSchedule"
            label="Horario preferido"
            value={formValues.preferredSchedule}
            onChange={(event) =>
              setFormValues((prev) => ({ ...prev, preferredSchedule: event.target.value }))
            }
            helperText="Opcional"
          />
          <Button type="submit" className="w-full sm:w-auto">
            Publicar petición
          </Button>
          {submitted && (
            <p role="status" className="text-sm text-accent">
              ¡Tu petición se ha enviado! Pronto recibirás propuestas.
            </p>
          )}
        </form>
      </Stack>
    </PageContainer>
  );
}
