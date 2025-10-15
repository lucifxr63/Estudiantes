import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Stack } from './Stack';

const meta: Meta<typeof Card> = {
  title: 'Primitives/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-md">
      <Stack direction="column" gap="sm">
        <h3 className="text-lg font-semibold">Ficha de clase</h3>
        <p className="text-sm text-foreground/70">
          Usa el componente Card para agrupar información relevante dentro de superficies elevadas.
        </p>
      </Stack>
    </Card>
  )
};
