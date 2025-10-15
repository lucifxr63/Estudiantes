import { ReactNode, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useUIStore } from '@store/ui';

export function AppProviders({ children }: { children: ReactNode }) {
  const theme = useUIStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <BrowserRouter>{children}</BrowserRouter>;
}
