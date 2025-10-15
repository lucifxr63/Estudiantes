# Estudiantes — Plataforma B2C profesores ↔ alumnos

## Visión y objetivo
Estudiantes conecta alumnos con profesores especializados ofreciendo búsquedas por demanda, reservas ágiles y peticiones personalizadas. El objetivo inicial es entregar un frontend modular enfocado en tabs que pueda escalar hacia experiencias completas de marketplace con un backend listo para integrar contratos.

## Arquitectura escalable
El monorepo está dividido en dos paquetes:

- `client/`: aplicación web Vite + React + TypeScript con enfoque **feature-first** y capas (`app/`, `pages/`, `features/`, `entities/`, `shared/`, `store/`, `mocks/`).
- `server/`: esqueleto de API Express + TypeScript preparado para futuras extensiones.

La arquitectura de frontend se basa en:

- **Capas claras** para aislar routing (`app/`), páginas orquestadoras (`pages/`), lógica reutilizable por feature (`features/`), entidades de dominio (`entities/`) y utilidades compartidas (`shared/`).
- **Componentes base** (`AppLayout`, `TabsNav`, `PageContainer`, `EmptyState`, `Loading`, `ErrorBoundary`) que establecen patrones de navegación accesible, manejo de errores y estados vacíos.
- **Estado global ligero** con Zustand en `store/ui.ts` para preferencias UI (tema, ancho de contenedor, flags de navegación).
- **Rutas lazy** (`React.lazy + Suspense`) para cada tab, reduciendo el tiempo de carga inicial.

## Sistema de diseño y theming
- **Tokens** (`src/shared/design/tokens.css`) definen espaciado, tipografías, colores, radios, sombras y breakpoints como CSS variables.
- **Temas**: soporte `data-theme="light" | "dark"`, con valores intercambiables. El cambio de tema es inmediato desde la barra de tabs.
- **Primitives** (`src/shared/ui/primitives/`) ofrecen building blocks (Stack, Grid, Container, Button, Input, Card, Tabs) con props composables y responsivas.
- **Tailwind** extiende utilidades con los tokens (colores, spacing, radius, shadows) y activa container queries.
- **Storybook** documenta primitives clave (Button, Card, Tabs) para facilitar iteraciones de diseño y validar cambios de tema.

Cambiar la apariencia implica ajustar variables en `tokens.css` o extender `tailwind.config.ts`. Los componentes consumen esas abstracciones sin acoplarse a estilos específicos.

## Estructura de carpetas
```
.
├─ client/
│  ├─ src/
│  │  ├─ app/
│  │  ├─ pages/
│  │  ├─ features/
│  │  ├─ entities/
│  │  ├─ shared/
│  │  ├─ store/
│  │  └─ mocks/
│  └─ ...
├─ server/
│  └─ src/
├─ .storybook/
├─ README.md
├─ CONTEXT.md
├─ CHANGELOG.md
└─ REQUIREMENTS.md
```
Consulta la raíz de cada paquete para configuraciones específicas (Vite, Tailwind, TypeScript, ESLint/Prettier).

## Guía de desarrollo
### Frontend (`client/`)
```bash
cd client
npm install
npm run dev           # desarrollo con Vite
npm run build         # build producción (tsc + vite build)
npm run preview       # previsualización del build
npm run test          # vitest
npm run lint          # ESLint (reglas base + TypeScript + React Hooks)
npm run format        # Prettier
npm run storybook     # Storybook en http://localhost:6006
```

### Backend (`server/`)
```bash
cd server
npm install
npm run dev           # ts-node-dev con recarga
npm run build         # compila a dist/
npm run start         # ejecuta build compilado
npm run lint          # ESLint
npm run format        # Prettier
```

## Roadmap (alto nivel)
- **0.1.0**: Bootstrap escalable con tabs lazy, tokens/temas, primitives, Tailwind y Storybook.
- **0.2.0**: Autenticación básica (placeholder) y guards de ruta.
- **0.3.0**: CRUD de clases sobre mocks con formularios validados por Zod.
- **0.4.0**: Integración con API `server/` (contratos y fetch vía Axios).
- **1.0.0**: Release estable con flujos de reserva y publicación en producción.

## Criterios de calidad
- **Accesibilidad**: navegación por teclado en tabs (`role=tablist` + atajos), foco visible, contraste validado, aria-labels en navegación y estados.
- **Rendimiento**: rutas lazy, Suspense para loaders, assets diferidos, posibilidad de bundle analysis con `vite build --analyze`.
- **Testing**: base lista para Vitest + Testing Library; los primitives tienen historias en Storybook para visual regression.
- **Estilo**: ESLint y Prettier configurados, TypeScript estricto en ambos paquetes.
- **DX**: alias de importaciones, tokens centralizados y mocks listos para desarrollar sin backend.
