import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Clases Particulares del Profesor
 * Configuración de oferta de clases 1-a-1 y gestión de solicitudes
 */

export function ClasesParticularesPage() {
  const [configuracion, setConfiguracion] = useState({
    activo: true,
    precioHora: 50,
    duracionMin: 1,
    duracionMax: 2,
    temas: ['React', 'TypeScript', 'Node.js'],
    disponibilidad: 'Lunes a Viernes, 9:00 - 18:00',
  });

  const [editando, setEditando] = useState(false);

  // Mock data de solicitudes
  const solicitudes = [
    {
      id: 1,
      estudiante: 'Ana García',
      fecha: '2024-01-15',
      tema: 'React Hooks',
      mensaje: 'Necesito ayuda con useCallback y useMemo...',
      estado: 'pendiente',
      presupuesto: 50,
    },
    {
      id: 2,
      estudiante: 'Carlos López',
      fecha: '2024-01-14',
      tema: 'TypeScript Avanzado',
      mensaje: 'Quiero aprender sobre tipos genéricos...',
      estado: 'en_negociacion',
      presupuesto: 60,
    },
    {
      id: 3,
      estudiante: 'María Fernández',
      fecha: '2024-01-13',
      tema: 'Otro',
      mensaje: 'Necesito ayuda con mi proyecto final...',
      estado: 'aceptada',
      presupuesto: 100,
    },
  ];

  const pendientes = solicitudes.filter(s => s.estado === 'pendiente').length;
  const enNegociacion = solicitudes.filter(s => s.estado === 'en_negociacion').length;
  const aceptadas = solicitudes.filter(s => s.estado === 'aceptada').length;

  const handleGuardar = () => {
    console.log('Guardar configuración:', configuracion);
    setEditando(false);
    alert('Configuración guardada exitosamente');
  };

  return (
    <Container className="py-lg">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Clases Particulares 1-a-1</h1>
          <p className="text-foreground/60">
            Configura tu oferta de clases personalizadas y gestiona solicitudes
          </p>
        </div>
        {configuracion.activo ? (
          <span className="px-4 py-2 bg-emerald-100 text-emerald-700 font-semibold rounded-lg">
            ✓ Oferta Activa
          </span>
        ) : (
          <span className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg">
            ⏸ Oferta Pausada
          </span>
        )}
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Solicitudes Pendientes</div>
          <div className="text-2xl font-bold text-amber-600">{pendientes}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">En Negociación</div>
          <div className="text-2xl font-bold">{enNegociacion}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Clases Confirmadas</div>
          <div className="text-2xl font-bold text-emerald-600">{aceptadas}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Ingresos Mes Actual</div>
          <div className="text-2xl font-bold text-amber-600">$350</div>
        </div>
      </div>

      {/* Configuración de Oferta */}
      <div className="border border-foreground/10 rounded-lg p-md mb-lg">
        <div className="flex items-center justify-between mb-md">
          <h2 className="font-semibold text-lg">Mi Oferta de Clases Particulares</h2>
          {!editando ? (
            <button
              onClick={() => setEditando(true)}
              className="px-4 py-2 text-sm border border-foreground/20 rounded-md hover:bg-muted/30"
            >
              ✏️ Editar
            </button>
          ) : (
            <div className="flex gap-sm">
              <button
                onClick={() => setEditando(false)}
                className="px-4 py-2 text-sm border border-foreground/20 rounded-md hover:bg-muted/30"
              >
                Cancelar
              </button>
              <button
                onClick={handleGuardar}
                className="px-4 py-2 text-sm bg-amber-500 text-white rounded-md hover:bg-amber-600"
              >
                Guardar
              </button>
            </div>
          )}
        </div>

        {editando ? (
          <div className="space-y-md">
            <label className="flex items-center gap-sm">
              <input
                type="checkbox"
                checked={configuracion.activo}
                onChange={(e) => setConfiguracion({ ...configuracion, activo: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm">Oferta activa (visible para estudiantes)</span>
            </label>

            <div className="grid grid-cols-2 gap-md">
              <div>
                <label className="block text-sm font-medium mb-xs">Precio por hora (USD)</label>
                <input
                  type="number"
                  value={configuracion.precioHora}
                  onChange={(e) => setConfiguracion({ ...configuracion, precioHora: Number(e.target.value) })}
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-xs">Duración típica</label>
                <select
                  value={`${configuracion.duracionMin}-${configuracion.duracionMax}`}
                  onChange={(e) => {
                    const [min, max] = e.target.value.split('-').map(Number);
                    setConfiguracion({ ...configuracion, duracionMin: min, duracionMax: max });
                  }}
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                >
                  <option value="0.5-1">30min - 1hr</option>
                  <option value="1-2">1hr - 2hrs</option>
                  <option value="2-3">2hrs - 3hrs</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-xs">Temas que enseño</label>
              <input
                type="text"
                value={configuracion.temas.join(', ')}
                onChange={(e) => setConfiguracion({ ...configuracion, temas: e.target.value.split(',').map(t => t.trim()) })}
                placeholder="React, TypeScript, Node.js"
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-xs">Disponibilidad general</label>
              <textarea
                value={configuracion.disponibilidad}
                onChange={(e) => setConfiguracion({ ...configuracion, disponibilidad: e.target.value })}
                rows={2}
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-sm">
            <div className="flex gap-md">
              <div className="flex-1">
                <div className="text-sm text-foreground/60 mb-xs">Precio</div>
                <div className="font-semibold text-lg">${configuracion.precioHora}/hora</div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-foreground/60 mb-xs">Duración</div>
                <div className="font-semibold">{configuracion.duracionMin}-{configuracion.duracionMax} horas</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-foreground/60 mb-xs">Temas</div>
              <div className="flex flex-wrap gap-xs">
                {configuracion.temas.map((tema, i) => (
                  <span key={i} className="px-2 py-1 bg-amber-100 text-amber-700 text-sm rounded">
                    {tema}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm text-foreground/60 mb-xs">Disponibilidad</div>
              <div className="text-sm">{configuracion.disponibilidad}</div>
            </div>
          </div>
        )}
      </div>

      {/* Lista de Solicitudes */}
      <div>
        <div className="flex items-center justify-between mb-md">
          <h2 className="font-semibold text-lg">Solicitudes de Estudiantes</h2>
          <select className="px-sm py-sm text-sm border border-foreground/20 rounded-md">
            <option value="todas">Todas</option>
            <option value="pendientes">Pendientes</option>
            <option value="en_negociacion">En Negociación</option>
            <option value="aceptadas">Aceptadas</option>
            <option value="rechazadas">Rechazadas</option>
          </select>
        </div>

        <div className="space-y-sm">
          {solicitudes.map((solicitud) => (
            <div key={solicitud.id} className="border border-foreground/10 rounded-lg p-md hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-sm">
                <div className="flex-1">
                  <div className="flex items-center gap-sm mb-xs">
                    <h3 className="font-semibold">{solicitud.estudiante}</h3>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
                      solicitud.estado === 'pendiente' ? 'bg-amber-100 text-amber-700' :
                      solicitud.estado === 'en_negociacion' ? 'bg-blue-100 text-blue-700' :
                      solicitud.estado === 'aceptada' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {solicitud.estado === 'pendiente' ? 'PENDIENTE' :
                       solicitud.estado === 'en_negociacion' ? 'EN NEGOCIACIÓN' :
                       solicitud.estado === 'aceptada' ? 'ACEPTADA' : 'RECHAZADA'}
                    </span>
                  </div>
                  <div className="text-sm text-foreground/60 mb-xs">
                    Tema: <span className="text-foreground">{solicitud.tema}</span> • 
                    Presupuesto: <span className="text-foreground">${solicitud.presupuesto}</span> • 
                    Fecha: {new Date(solicitud.fecha).toLocaleDateString()}
                  </div>
                  <p className="text-sm text-foreground/70">{solicitud.mensaje}</p>
                </div>
              </div>
              <div className="flex gap-sm">
                <Link
                  to={`/profesor/clases-particulares/${solicitud.id}/negociar`}
                  className="px-3 py-1.5 text-sm bg-amber-500 text-white rounded-md hover:bg-amber-600"
                >
                  💬 {solicitud.estado === 'pendiente' ? 'Responder' : 'Ver Conversación'}
                </Link>
                {solicitud.estado === 'pendiente' && (
                  <button className="px-3 py-1.5 text-sm border border-red-500 text-red-600 rounded-md hover:bg-red-50">
                    Rechazar
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
