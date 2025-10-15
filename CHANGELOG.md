# Changelog

Todas las fechas en formato ISO (AAAA-MM-DD). Seguimos SemVer.

## [0.1.0] - 2024-04-24
### Añadido
- Bootstrap del monorepo con `client/` (Vite + React + TypeScript + Tailwind + Zustand + React Router + Zod + Axios) y `server/` (Express + TypeScript).
- Navegación por tabs con rutas lazy, `AppLayout`, `TabsNav`, `PageContainer`, `EmptyState`, `Loading` y `ErrorBoundary`.
- Sistema de diseño con tokens CSS, theming light/dark, primitives (Stack, Grid, Container, Button, Input, Card, Tabs) y Storybook documentado.
- Estado global UI con persistencia, hooks compartidos y mocks de clases/usuarios.
- Validaciones base con Zod y formulario de publicación.
- Configuración de ESLint/Prettier, Vitest y Testing Library preparada.

## [0.2.0] - 2024-05-xx
### Roadmap
- Autenticación básica, placeholders de login/signup y guards de ruta.

## [0.3.0] - 2024-06-xx
### Roadmap
- CRUD de clases sobre mocks y acciones de reserva.

## [0.4.0] - 2024-07-xx
### Roadmap
- Integración con API Express, contratos compartidos y persistencia real.

## [1.0.0] - 2024-08-xx
### Roadmap
- Release estable con flujos de reserva y publicación completos, monitoreo y métricas en producción.
