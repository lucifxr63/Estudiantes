import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Dropdown de Notificaciones
 * Componente para mostrar notificaciones en tiempo real
 */

type Notificacion = {
  id: number;
  tipo: 'curso' | 'clase' | 'mensaje' | 'sistema';
  titulo: string;
  descripcion: string;
  fecha: string;
  leida: boolean;
  url: string;
  icono: string;
};

export function NotificacionesDropdown() {
  const [abierto, setAbierto] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock data
  const [notificaciones, setNotificaciones] = useState<Notificacion[]>([
    {
      id: 1,
      tipo: 'curso',
      titulo: 'Nuevo módulo disponible',
      descripcion: 'Se agregó el Módulo 4 en React Avanzado',
      fecha: '2024-01-20T10:30:00',
      leida: false,
      url: '/alumno/curso/1',
      icono: '📚',
    },
    {
      id: 2,
      tipo: 'clase',
      titulo: 'Clase confirmada',
      descripcion: 'Tu clase con Juan Pérez es mañana a las 15:00',
      fecha: '2024-01-19T14:00:00',
      leida: false,
      url: '/alumno/agenda',
      icono: '✅',
    },
    {
      id: 3,
      tipo: 'mensaje',
      titulo: 'Nuevo mensaje',
      descripcion: 'Juan Pérez respondió tu consulta',
      fecha: '2024-01-18T16:45:00',
      leida: true,
      url: '/alumno/mensajes',
      icono: '💬',
    },
    {
      id: 4,
      tipo: 'sistema',
      titulo: 'Certificado disponible',
      descripcion: 'Has completado TypeScript desde Cero',
      fecha: '2024-01-17T09:00:00',
      leida: true,
      url: '/alumno/certificados',
      icono: '🏆',
    },
  ]);

  const noLeidas = notificaciones.filter(n => !n.leida).length;

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAbierto(false);
      }
    };

    if (abierto) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [abierto]);

  const marcarComoLeida = (id: number) => {
    setNotificaciones(notificaciones.map(n =>
      n.id === id ? { ...n, leida: true } : n
    ));
  };

  const marcarTodasComoLeidas = () => {
    setNotificaciones(notificaciones.map(n => ({ ...n, leida: true })));
  };

  const getTiempoRelativo = (fecha: string) => {
    const ahora = new Date();
    const fechaNot = new Date(fecha);
    const diff = ahora.getTime() - fechaNot.getTime();
    
    const minutos = Math.floor(diff / 60000);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    if (minutos < 1) return 'Ahora';
    if (minutos < 60) return `Hace ${minutos}m`;
    if (horas < 24) return `Hace ${horas}h`;
    return `Hace ${dias}d`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón */}
      <button
        onClick={() => setAbierto(!abierto)}
        className="relative p-2 hover:bg-muted/50 rounded-lg transition-colors"
        aria-label="Notificaciones"
      >
        <span className="text-2xl">🔔</span>
        {noLeidas > 0 && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {noLeidas > 9 ? '9+' : noLeidas}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {abierto && (
        <div className="absolute right-0 top-full mt-sm w-96 bg-background border border-foreground/10 rounded-lg shadow-xl z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-md border-b border-foreground/10">
            <h3 className="font-semibold">Notificaciones</h3>
            {noLeidas > 0 && (
              <button
                onClick={marcarTodasComoLeidas}
                className="text-xs text-primary hover:underline"
              >
                Marcar todas como leídas
              </button>
            )}
          </div>

          {/* Lista de Notificaciones */}
          <div className="max-h-96 overflow-y-auto">
            {notificaciones.length === 0 ? (
              <div className="p-lg text-center text-foreground/60">
                <div className="text-4xl mb-sm">🔔</div>
                <p className="text-sm">No tienes notificaciones</p>
              </div>
            ) : (
              notificaciones.map((notif) => (
                <Link
                  key={notif.id}
                  to={notif.url}
                  onClick={() => {
                    marcarComoLeida(notif.id);
                    setAbierto(false);
                  }}
                  className={`flex gap-sm p-md border-b border-foreground/10 hover:bg-muted/30 ${
                    !notif.leida ? 'bg-primary/5' : ''
                  }`}
                >
                  <div className="text-2xl flex-shrink-0">{notif.icono}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-xs">
                      <div className="font-semibold text-sm truncate">{notif.titulo}</div>
                      {!notif.leida && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 ml-sm mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-foreground/60 line-clamp-2">
                      {notif.descripcion}
                    </p>
                    <div className="text-xs text-foreground/60 mt-xs">
                      {getTiempoRelativo(notif.fecha)}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-sm border-t border-foreground/10">
            <Link
              to="/alumno/notificaciones"
              onClick={() => setAbierto(false)}
              className="block text-center text-sm text-primary hover:underline"
            >
              Ver Todas las Notificaciones
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
