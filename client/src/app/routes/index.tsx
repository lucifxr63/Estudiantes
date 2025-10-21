import { lazy, Suspense } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { Loading } from '@shared/ui/components/Loading';
import { PublicLayout } from '@shared/ui/layouts/PublicLayout';
import { DevToolsPage } from '@/pages/dev/DevToolsPage';
import { HerramientasEspecializadasPage } from '@/pages/demo/HerramientasEspecializadasPage';

/**
 * Sistema de rutas de la aplicación
 * Organizado por áreas: Público, Alumno, Profesor, Admin, Checkout, Errores
 * 
 * Todas las páginas usan lazy loading para optimizar el bundle
 */

// ============================================
// ÁREA PÚBLICA - Páginas sin autenticación
// ============================================

const HomePage = lazy(() => import('../../pages/public/HomePage').then(m => ({ default: m.HomePage })));
const ClasesPage = lazy(() => import('../../pages/public/ClasesPage').then(m => ({ default: m.ClasesPage })));
const ClaseDetallePage = lazy(() => import('../../pages/public/ClaseDetallePage').then(m => ({ default: m.ClaseDetallePage })));
const PeticionesPage = lazy(() => import('../../pages/public/PeticionesPage').then(m => ({ default: m.PeticionesPage })));
const AcercaDePage = lazy(() => import('../../pages/public/AcercaDePage').then(m => ({ default: m.AcercaDePage })));
const PreguntasFrecuentesPage = lazy(() => import('../../pages/public/PreguntasFrecuentesPage').then(m => ({ default: m.PreguntasFrecuentesPage })));
const ContactoPage = lazy(() => import('../../pages/public/ContactoPage').then(m => ({ default: m.ContactoPage })));
const TerminosPage = lazy(() => import('../../pages/public/TerminosPage').then(m => ({ default: m.TerminosPage })));
const PrivacidadPage = lazy(() => import('../../pages/public/PrivacidadPage').then(m => ({ default: m.PrivacidadPage })));

// Autenticación
const IniciarSesionPage = lazy(() => import('../../pages/auth/IniciarSesionPage').then(m => ({ default: m.IniciarSesionPage })));
const RegistroPage = lazy(() => import('../../pages/auth/RegistroPage').then(m => ({ default: m.RegistroPage })));

// Checkout
const CarritoPage = lazy(() => import('../../pages/checkout').then(m => ({ default: m.CarritoPage })));
const ComprarPage = lazy(() => import('../../pages/checkout').then(m => ({ default: m.ComprarPage })));
const ExitoPage = lazy(() => import('../../pages/checkout').then(m => ({ default: m.ExitoPage })));

// Errores
const NotFoundPage = lazy(() => import('../../pages/errors').then(m => ({ default: m.NotFoundPage })));

// Dev Tools
const DevToolsPage = lazy(() => import('../../pages/dev').then(m => ({ default: m.DevToolsPage })));

/**
 * Componente wrapper para páginas públicas
 */
function PublicPage({ children }: { children: React.ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>;
}

/**
 * Helper para lazy load con suspense
 */
function lazyLoad(Component: React.LazyExoticComponent<() => JSX.Element>, label: string = 'Cargando...') {
  return (
    <Suspense fallback={<Loading label={label} />}>
      <Component />
    </Suspense>
  );
}

/**
 * Definición de rutas
 */
const routes: RouteObject[] = [
  // ============================================
  // ÁREA PÚBLICA
  // ============================================
  {
    path: '/',
    element: <PublicPage>{lazyLoad(HomePage, 'Cargando página de inicio')}</PublicPage>,
  },
  {
    path: '/clases',
    element: <PublicPage>{lazyLoad(ClasesPage, 'Cargando clases')}</PublicPage>,
  },
  {
    path: '/clases/:id',
    element: <PublicPage>{lazyLoad(ClaseDetallePage, 'Cargando detalle')}</PublicPage>,
  },
  {
    path: '/peticiones',
    element: <PublicPage>{lazyLoad(PeticionesPage, 'Cargando peticiones')}</PublicPage>,
  },
  {
    path: '/acerca-de',
    element: <PublicPage>{lazyLoad(AcercaDePage, 'Cargando información')}</PublicPage>,
  },
  {
    path: '/preguntas-frecuentes',
    element: <PublicPage>{lazyLoad(PreguntasFrecuentesPage, 'Cargando FAQ')}</PublicPage>,
  },
  {
    path: '/contacto',
    element: <PublicPage>{lazyLoad(ContactoPage, 'Cargando formulario')}</PublicPage>,
  },
  {
    path: '/terminos',
    element: <PublicPage>{lazyLoad(TerminosPage, 'Cargando términos')}</PublicPage>,
  },
  {
    path: '/privacidad',
    element: <PublicPage>{lazyLoad(PrivacidadPage, 'Cargando política')}</PublicPage>,
  },

  // ============================================
  // AUTENTICACIÓN
  // ============================================
  {
    path: '/iniciar-sesion',
    element: <PublicPage>{lazyLoad(IniciarSesionPage, 'Cargando inicio de sesión')}</PublicPage>,
  },
  {
    path: '/registro',
    element: <PublicPage>{lazyLoad(RegistroPage, 'Cargando registro')}</PublicPage>,
  },

  // ============================================
  // ÁREA ALUMNO
  // ============================================
  {
    path: '/alumno/*',
    element: lazyLoad(
      lazy(() => import('../../pages/alumno').then(m => ({ default: m.AlumnoRoutes }))),
      'Cargando dashboard de alumno'
    ),
  },

  // ============================================
  // ÁREA PROFESOR
  // ============================================
  {
    path: '/profesor/*',
    element: lazyLoad(
      lazy(() => import('../../pages/profesor').then(m => ({ default: m.ProfesorRoutes }))),
      'Cargando dashboard de profesor'
    ),
  },

  // ============================================
  // ÁREA ADMIN
  // ============================================
  {
    path: '/admin/*',
    element: lazyLoad(
      lazy(() => import('../../pages/admin').then(m => ({ default: m.AdminRoutes }))),
      'Cargando panel de administración'
    ),
  },

  // ============================================
  // CHECKOUT
  // ============================================
  {
    path: '/carrito',
    element: lazyLoad(CarritoPage, 'Cargando carrito'),
  },
  {
    path: '/comprar',
    element: lazyLoad(ComprarPage, 'Cargando checkout'),
  },
  {
    path: '/comprar/exito/:orderId',
    element: lazyLoad(ExitoPage, 'Cargando confirmación'),
  },

  // ============================================
  // HERRAMIENTAS DE DESARROLLO
  // ============================================
  {
    path: '/dev-tools',
    element: lazyLoad(DevToolsPage, 'Cargando herramientas'),
  },
  {
    path: '/demo/herramientas',
    element: lazyLoad(HerramientasEspecializadasPage, 'Cargando demo'),
  },

  // ============================================
  // 404 - Página no encontrada
  // ============================================
  {
    path: '*',
    element: lazyLoad(NotFoundPage, 'Cargando...'),
  },
];

/**
 * Componente principal de rutas
 */
export function AppRoutes() {
  const element = useRoutes(routes);
  
  // Log de navegación para desarrollo
  if (import.meta.env.DEV) {
    console.log('📍 Ruta actual:', window.location.pathname);
  }
  
  return element;
}
