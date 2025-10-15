import { ReactNode } from 'react';
import { Button } from '../primitives/Button';
import { Stack } from '../primitives/Stack';

type EmptyStateProps = {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: ReactNode;
};

export function EmptyState({ title, description, action, icon }: EmptyStateProps) {
  return (
    <Stack as="section" direction="column" align="center" gap="md" className="text-center py-lg">
      {icon && <div aria-hidden>{icon}</div>}
      <Stack direction="column" gap="sm">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-foreground/70 max-w-md">{description}</p>
      </Stack>
      {action && (
        <Button onClick={action.onClick} variant="primary">
          {action.label}
        </Button>
      )}
    </Stack>
  );
}
