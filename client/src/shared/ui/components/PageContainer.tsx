import { ReactNode } from 'react';
import { Container } from '../primitives/Container';

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <Container className="space-y-md" data-testid="page-container">
      {children}
    </Container>
  );
}
