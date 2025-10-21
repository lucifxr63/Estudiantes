import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@shared/ui/layouts/DashboardLayout';
import { DashboardAlumnoPage } from './DashboardAlumnoPage';
import { MisClasesAlumnoPage } from './MisClasesAlumnoPage';
import { MisCursosPage } from './MisCursosPage';
import { VisorCursoPage } from './VisorCursoPage';
import { SolicitarClaseParticularPage } from './SolicitarClaseParticularPage';
import { PeticionesAlumnoPage } from './PeticionesAlumnoPage';
import { NuevaPeticionPage } from './NuevaPeticionPage';
import { ComprasAlumnoPage } from './ComprasAlumnoPage';
import { MensajesAlumnoPage } from './MensajesAlumnoPage';
import { NotificacionesAlumnoPage } from './NotificacionesAlumnoPage';
import { PerfilAlumnoPage } from './PerfilAlumnoPage';

/**
 * Rutas del área de Alumno
 * Todas las rutas usan el DashboardLayout con navegación específica
 */

const navItems = [
  { label: 'Inicio', path: '/alumno', icon: '🏠' },
  { label: 'Mis Cursos', path: '/alumno/mis-cursos', icon: '📚' },
  { label: 'Mis Clases', path: '/alumno/clases', icon: '💬' },
  { label: 'Peticiones', path: '/alumno/peticiones', icon: '📢' },
  { label: 'Compras', path: '/alumno/compras', icon: '🛍️' },
  { label: 'Mensajes', path: '/alumno/mensajes', icon: '✉️' },
  { label: 'Notificaciones', path: '/alumno/notificaciones', icon: '🔔' },
  { label: 'Perfil', path: '/alumno/perfil', icon: '👤' },
];

export function AlumnoRoutes() {
  return (
    <DashboardLayout role="alumno" navItems={navItems} userName="Estudiante">
      <Routes>
        <Route index element={<DashboardAlumnoPage />} />
        
        {/* Cursos */}
        <Route path="mis-cursos" element={<MisCursosPage />} />
        <Route path="curso/:id" element={<VisorCursoPage />} />
        
        {/* Clases Particulares */}
        <Route path="clases" element={<MisClasesAlumnoPage />} />
        <Route path="clases/:id" element={<div>Detalle de clase (TODO)</div>} />
        <Route path="clases-particulares/solicitar" element={<SolicitarClaseParticularPage />} />
        
        {/* Peticiones */}
        <Route path="peticiones" element={<PeticionesAlumnoPage />} />
        <Route path="peticiones/nueva" element={<NuevaPeticionPage />} />
        <Route path="peticiones/:id" element={<div>Detalle de petición (TODO)</div>} />
        
        {/* Compras y Facturas */}
        <Route path="compras" element={<ComprasAlumnoPage />} />
        <Route path="compras/:id" element={<div>Detalle de compra (TODO)</div>} />
        <Route path="facturas" element={<div>Facturas (TODO)</div>} />
        
        {/* Comunicación */}
        <Route path="mensajes" element={<MensajesAlumnoPage />} />
        <Route path="chat/:id?" element={<MensajesAlumnoPage />} />
        <Route path="notificaciones" element={<NotificacionesAlumnoPage />} />
        
        {/* Perfil */}
        <Route path="perfil" element={<PerfilAlumnoPage />} />
        
        <Route path="*" element={<Navigate to="/alumno" replace />} />
      </Routes>
    </DashboardLayout>
  );
}
