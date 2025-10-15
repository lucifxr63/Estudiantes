import { Card } from '@shared/ui/primitives/Card';
import { Stack } from '@shared/ui/primitives/Stack';
import { Button } from '@shared/ui/primitives/Button';
import { Clase } from '../types';

export function ClassCard({ clase }: { clase: Clase }) {
  return (
    <Card className="flex flex-col gap-sm">
      <Stack direction="column" gap="xs">
        <h3 className="text-lg font-semibold text-foreground">{clase.title}</h3>
        <p className="text-sm text-foreground/70">{clase.description}</p>
      </Stack>
      <Stack direction="row" justify="between" align="center">
        <div className="text-sm text-foreground/80">
          <span className="font-medium">{clase.tutor}</span> · {clase.modality === 'online' ? 'Online' : 'Presencial'}
          <span className="ml-2 text-foreground/60">⭐ {clase.rating.toFixed(1)}</span>
        </div>
        <Button size="sm" variant="primary" aria-label={`Reservar clase ${clase.title}`}>
          Reservar · ${clase.pricePerHour}/h
        </Button>
      </Stack>
    </Card>
  );
}
