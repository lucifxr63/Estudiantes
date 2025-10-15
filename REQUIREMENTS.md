# Requerimientos de instalación

## Herramientas globales
- Node.js 20.x o superior (`nvm install 20` recomendado)
- npm 10.x (incluido con Node 20) o pnpm 8.x
- Git 2.40+

Verifica versiones:
```bash
node -v
npm -v
git --version
```

## Frontend (`client/`)
### Dependencias clave
- `react`, `react-dom`
- `react-router-dom`
- `zustand`
- `zod`
- `axios`

### Dependencias de desarrollo
- `typescript`
- `vite`, `@vitejs/plugin-react`
- `tailwindcss`, `postcss`, `autoprefixer`, `@tailwindcss/container-queries`
- `@types/react`, `@types/react-dom`
- `eslint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-config-prettier`, `eslint-plugin-react-hooks`
- `prettier`
- `vitest`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`
- `storybook`, `@storybook/react-vite`, `@storybook/addon-essentials`
- `clsx`

### Instalación
```bash
cd client
npm install
```

### Scripts
```bash
npm run dev            # servidor Vite
npm run build          # build producción
npm run preview        # vista previa del build
npm run test           # Vitest + Testing Library
npm run lint           # ESLint
npm run format         # Prettier
npm run storybook      # Storybook en http://localhost:6006
npm run build-storybook
```

## Backend (`server/`)
### Dependencias clave
- `express`
- `cors`
- `helmet`

### Dependencias de desarrollo
- `typescript`
- `ts-node-dev`
- `@types/express`, `@types/node`
- `eslint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-config-prettier`
- `prettier`

### Instalación
```bash
cd server
npm install
```

### Scripts
```bash
npm run dev        # ts-node-dev con recarga
npm run build      # compila a dist/
npm run start      # ejecuta build compilado
npm run lint       # ESLint
npm run format     # Prettier
```

## Estándares de calidad
- **Accesibilidad**: navegación por teclado en tabs (`role=tablist`, `aria-selected`), foco visible y contraste suficiente.
- **Rendimiento**: code-splitting por ruta con `React.lazy`, posibilidad de ejecutar `vite build --analyze` para revisar bundle.
- **Tipado**: TypeScript estricto, evitar `any`, contratos compartidos en `server/src/types`.
- **Testing**: base configurada para Vitest + Testing Library; Storybook cubre primitives para visual QA.
- **Diseño**: tokens y temas deben reflejarse en componentes y en Storybook.
