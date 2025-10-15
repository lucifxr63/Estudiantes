import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '../primitives/Button';
import { Stack } from '../primitives/Stack';

interface ErrorBoundaryProps {
  children: ReactNode;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Stack direction="column" gap="md" align="center" className="py-lg text-center">
          <h2 className="text-xl font-semibold">Algo salió mal</h2>
          <p className="max-w-md text-foreground/70">
            Hemos encontrado un error inesperado. Intenta recargar la página o vuelve a intentarlo más
            tarde.
          </p>
          <Button onClick={this.handleReset} variant="primary">
            Reintentar
          </Button>
        </Stack>
      );
    }

    return this.props.children;
  }
}
