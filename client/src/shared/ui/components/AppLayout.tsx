import { ReactNode } from 'react';
import { useUIStore } from '@store/ui';
import { Container } from '../primitives/Container';
import { TabsNav } from './TabsNav';

const containerWidths = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl'
};

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const containerWidth = useUIStore((state) => state.containerWidth);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-foreground/10">
        <Container className="flex items-center justify-between py-sm gap-sm flex-wrap">
          <div className="font-display text-lg">Estudiantes</div>
          <TabsNav />
        </Container>
      </header>
      <main className={`mx-auto w-full px-sm py-md ${containerWidths[containerWidth]}`}>
        {children}
      </main>
    </div>
  );
}
