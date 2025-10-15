import { lazy, Suspense } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { Loading } from '@shared/ui/components/Loading';

const ExplorarPage = lazy(() => import('../pages/explorar/ExplorarPage').then((module) => ({ default: module.ExplorarPage })));
const MisClasesPage = lazy(() => import('../pages/mis-clases/MisClasesPage').then((module) => ({ default: module.MisClasesPage })));
const PublicarPage = lazy(() => import('../pages/publicar/PublicarPage').then((module) => ({ default: module.PublicarPage })));
const PerfilPage = lazy(() => import('../pages/perfil/PerfilPage').then((module) => ({ default: module.PerfilPage })));

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/explorar" replace /> },
  {
    path: '/explorar',
    element: (
      <Suspense fallback={<Loading label="Cargando clases" />}>
        <ExplorarPage />
      </Suspense>
    )
  },
  {
    path: '/mis-clases',
    element: (
      <Suspense fallback={<Loading label="Cargando tus clases" />}>
        <MisClasesPage />
      </Suspense>
    )
  },
  {
    path: '/publicar',
    element: (
      <Suspense fallback={<Loading label="Preparando formulario" />}>
        <PublicarPage />
      </Suspense>
    )
  },
  {
    path: '/perfil',
    element: (
      <Suspense fallback={<Loading label="Cargando perfil" />}>
        <PerfilPage />
      </Suspense>
    )
  }
];

export function AppRoutes() {
  return useRoutes(routes);
}
