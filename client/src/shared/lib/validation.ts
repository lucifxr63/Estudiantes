import { z } from 'zod';

export const publishRequestSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  description: z.string().min(10, 'La descripción debe ser más detallada'),
  category: z.string().min(1, 'Selecciona una categoría'),
  preferredSchedule: z.string().optional()
});

export type PublishRequestInput = z.infer<typeof publishRequestSchema>;
