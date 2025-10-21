import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@shared/ui/layouts/DashboardLayout';
import { DashboardAdminPage } from './DashboardAdminPage';
import { UsuariosAdminPage } from './UsuariosAdminPage';

/**
 * Rutas del área de Admin
 * Todas las rutas usan el DashboardLayout con navegación específica
 */

const navItems = [
  { label: 'Inicio', path: '/admin', icon: '🏠' },
  { label: 'Usuarios', path: '/admin/usuarios', icon: '👥' },
  { label: 'Clases', path: '/admin/clases', icon: '📚' },
  { label: 'Moderación', path: '/admin/moderacion', icon: '🛡️' },
  { label: 'Reportes', path: '/admin/reportes', icon: '🚨' },
  { label: 'Finanzas', path: '/admin/finanzas', icon: '💰' },
  { label: 'Ajustes', path: '/admin/ajustes', icon: '⚙️' },
];

export function AdminRoutes() {
  return (
    <DashboardLayout role="admin" navItems={navItems} userName="Administrador">
      <Routes>
        <Route index element={<DashboardAdminPage />} />
        <Route path="usuarios" element={<UsuariosAdminPage />} />
        <Route path="usuarios/:id" element={<div>Detalle de usuario (TODO)</div>} />
        <Route path="clases" element={<div>Gestión de clases (TODO)</div>} />
        <Route path="moderacion" element={<div>Herramientas de moderación (TODO)</div>} />
        <Route path="reportes" element={<div>Reportes del sistema (TODO)</div>} />
        <Route path="finanzas" element={<div>Gestión financiera (TODO)</div>} />
        <Route path="ajustes" element={<div>Configuración del sistema (TODO)</div>} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </DashboardLayout>
  );
}
