import { useState } from 'react';
import { users } from '@mocks/users';
import { Input } from '@shared/ui/primitives/Input';
import { Button } from '@shared/ui/primitives/Button';
import { Stack } from '@shared/ui/primitives/Stack';
import { PageContainer } from '@shared/ui/components/PageContainer';

const currentUser = users[0];

export function PerfilPage() {
  const [name, setName] = useState(currentUser.name);

  return (
    <PageContainer>
      <Stack direction="column" gap="md" as="section" aria-labelledby="perfil-heading">
        <div className="space-y-sm">
          <h1 id="perfil-heading" className="text-2xl font-semibold">
            Perfil
          </h1>
          <p className="text-foreground/70">
            Actualiza tu información personal para que los profesores puedan conocerte mejor.
          </p>
        </div>
        <form className="space-y-md" aria-describedby="perfil-helper">
          <Input
            label="Nombre completo"
            value={name}
            onChange={(event) => setName(event.target.value)}
            helperText="Este nombre será visible para los profesores."
          />
          <Button type="button" onClick={() => alert('Cambios guardados')} className="w-full sm:w-auto">
            Guardar cambios
          </Button>
          <p id="perfil-helper" className="text-xs text-foreground/60">
            Próximamente podrás actualizar foto, bio y preferencias de aprendizaje.
          </p>
        </form>
      </Stack>
    </PageContainer>
  );
}
