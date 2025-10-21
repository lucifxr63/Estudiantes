import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@shared/ui/layouts/DashboardLayout';
import { DashboardProfesorPage } from './DashboardProfesorPage';
import { ClasesProfesorPage } from './ClasesProfesorPage';
import { NuevaClasePage } from './NuevaClasePage';
import { CursosProfesorPage } from './CursosProfesorPage';
import { NuevoCursoPage } from './NuevoCursoPage';
import { EditarCursoPage } from './EditarCursoPage';
import { GestionModulosPage } from './GestionModulosPage';
import { EstudiantesCursoPage } from './EstudiantesCursoPage';
import { ClasesParticularesPage } from './ClasesParticularesPage';
import { ChatNegociacionPage } from './ChatNegociacionPage';
import { BibliotecaPage } from './BibliotecaPage';
import { ConfiguracionUbicacionPage } from './ConfiguracionUbicacionPage';
import { PortfolioPage } from './PortfolioPage';
import { CertificacionesPage } from './CertificacionesPage';
import { AgendaProfesorPage } from './AgendaProfesorPage';
import { PeticionesProfesorPage } from './PeticionesProfesorPage';
import { TareasProfesorPage } from './TareasProfesorPage';
import { IngresosProfesorPage } from './IngresosProfesorPage';
import { InformesProfesorPage } from './InformesProfesorPage';
import { PerfilProfesorPage } from './PerfilProfesorPage';

/**
 * Rutas del área de Profesor
 * Todas las rutas usan el DashboardLayout con navegación específica
 */

const navItems = [
  { label: 'Inicio', path: '/profesor', icon: '🏠' },
  { label: 'Cursos', path: '/profesor/cursos', icon: '📚' },
  { label: 'Clases 1-a-1', path: '/profesor/clases-particulares', icon: '💬' },
  { label: 'Biblioteca', path: '/profesor/biblioteca', icon: '📁' },
  { label: 'Portfolio', path: '/profesor/portfolio', icon: '🎨' },
  { label: 'Certificaciones', path: '/profesor/certificaciones', icon: '🎓' },
  { label: 'Ubicación', path: '/profesor/ubicacion', icon: '📍' },
  { label: 'Agenda', path: '/profesor/agenda', icon: '📅' },
  { label: 'Peticiones', path: '/profesor/peticiones', icon: '📢' },
  { label: 'Tareas', path: '/profesor/tareas', icon: '📝' },
  { label: 'Ingresos', path: '/profesor/ingresos', icon: '💰' },
  { label: 'Informes', path: '/profesor/informes', icon: '📊' },
  { label: 'Perfil', path: '/profesor/perfil', icon: '👤' },
];

export function ProfesorRoutes() {
  return (
    <DashboardLayout role="profesor" navItems={navItems} userName="Profesor">
      <Routes>
        <Route index element={<DashboardProfesorPage />} />
        
        {/* Cursos Grabados (Asíncronos) */}
        <Route path="cursos" element={<CursosProfesorPage />} />
        <Route path="cursos/nuevo" element={<NuevoCursoPage />} />
        <Route path="cursos/:id" element={<EditarCursoPage />} />
        <Route path="cursos/:id/modulos" element={<GestionModulosPage />} />
        <Route path="cursos/:id/estudiantes" element={<EstudiantesCursoPage />} />
        
        {/* Clases Particulares (Síncronas 1-a-1) */}
        <Route path="clases-particulares" element={<ClasesParticularesPage />} />
        <Route path="clases-particulares/:id/negociar" element={<ChatNegociacionPage />} />
        
        {/* Biblioteca de Materiales */}
        <Route path="biblioteca" element={<BibliotecaPage />} />
        
        {/* Portfolio y Credenciales */}
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="certificaciones" element={<CertificacionesPage />} />
        <Route path="ubicacion" element={<ConfiguracionUbicacionPage />} />
        
        {/* Páginas existentes */}
        <Route path="clases" element={<ClasesProfesorPage />} />
        <Route path="clases/nueva" element={<NuevaClasePage />} />
        <Route path="clases/:id/editar" element={<div>Editar clase (TODO)</div>} />
        <Route path="agenda" element={<AgendaProfesorPage />} />
        <Route path="peticiones" element={<PeticionesProfesorPage />} />
        <Route path="peticiones/:id" element={<div>Responder petición (TODO)</div>} />
        <Route path="tareas" element={<TareasProfesorPage />} />
        <Route path="tareas/:id/calificar" element={<div>Calificar tarea (TODO)</div>} />
        <Route path="informes" element={<InformesProfesorPage />} />
        <Route path="ingresos" element={<IngresosProfesorPage />} />
        <Route path="perfil" element={<PerfilProfesorPage />} />
        <Route path="*" element={<Navigate to="/profesor" replace />} />
      </Routes>
    </DashboardLayout>
  );
}
