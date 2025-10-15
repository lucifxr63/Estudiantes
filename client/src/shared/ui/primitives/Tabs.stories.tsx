import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';
import { Stack } from './Stack';

const meta: Meta<typeof Tabs> = {
  title: 'Primitives/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  render: () => (
    <Tabs defaultValue="uno" className="max-w-lg">
      <TabsList>
        <TabsTrigger value="uno">Tab uno</TabsTrigger>
        <TabsTrigger value="dos">Tab dos</TabsTrigger>
        <TabsTrigger value="tres">Tab tres</TabsTrigger>
      </TabsList>
      <TabsContent value="uno">
        <Stack direction="column" gap="sm">
          <h3 className="text-lg font-semibold">Contenido uno</h3>
          <p className="text-sm text-foreground/70">Información detallada del primer tab.</p>
        </Stack>
      </TabsContent>
      <TabsContent value="dos">
        <p className="text-sm text-foreground/70">Contenido alternativo para el segundo tab.</p>
      </TabsContent>
      <TabsContent value="tres">
        <p className="text-sm text-foreground/70">Personaliza y reorganiza los tabs como prefieras.</p>
      </TabsContent>
    </Tabs>
  )
};
