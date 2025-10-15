import { ChangeEvent } from 'react';
import { Input } from '@shared/ui/primitives/Input';
import { Stack } from '@shared/ui/primitives/Stack';

type SearchBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export function SearchBar({ query, onQueryChange }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  return (
    <Stack as="form" direction="column" gap="sm" role="search">
      <Input
        label="Buscar clases"
        placeholder="Matemáticas, guitarra, programación..."
        value={query}
        onChange={handleChange}
        aria-label="Buscar clases"
      />
    </Stack>
  );
}
