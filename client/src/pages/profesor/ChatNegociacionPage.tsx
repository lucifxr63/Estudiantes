import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Chat de Negociación
 * Conversación entre profesor y estudiante para acordar detalles de clase particular
 */

type Mensaje = {
  id: number;
  autor: 'profesor' | 'estudiante';
  contenido: string;
  fecha: string;
  propuesta?: {
    precio: number;
    duracion: number;
    fechas: string[];
  };
};

export function ChatNegociacionPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data de la solicitud
  const solicitud = {
    id: Number(id),
    estudiante: 'Ana García',
    tema: 'React Hooks',
    mensajeInicial: 'Necesito ayuda con useCallback y useMemo, tengo un proyecto que se siente lento...',
    presupuesto: 50,
    fecha: '2024-01-15',
    estado: 'en_negociacion',
  };

  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: 1,
      autor: 'estudiante',
      contenido: 'Hola! Necesito ayuda con useCallback y useMemo, tengo un proyecto que se siente lento y creo que tengo muchos re-renderizados innecesarios. ¿Podrías ayudarme?',
      fecha: '2024-01-15 10:30',
    },
    {
      id: 2,
      autor: 'profesor',
      contenido: '¡Hola Ana! Claro que sí, es un tema común. Revisemos tu código juntos. Te propongo una sesión de 1.5 horas para analizar tu proyecto y optimizarlo.',
      fecha: '2024-01-15 11:00',
      propuesta: {
        precio: 75,
        duracion: 1.5,
        fechas: ['2024-01-18 15:00', '2024-01-19 10:00', '2024-01-20 16:00'],
      },
    },
    {
      id: 3,
      autor: 'estudiante',
      contenido: 'Perfecto! Me viene bien el viernes 19 a las 10am. ¿Necesitas que te envíe mi código antes?',
      fecha: '2024-01-15 11:15',
    },
  ]);

  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [mostrarFormPropuesta, setMostrarFormPropuesta] = useState(false);
  const [propuesta, setPropuesta] = useState({
    precio: 50,
    duracion: 1,
    fechas: ['', '', ''],
  });

  const enviarMensaje = () => {
    if (!nuevoMensaje.trim()) return;

    const mensaje: Mensaje = {
      id: Date.now(),
      autor: 'profesor',
      contenido: nuevoMensaje,
      fecha: new Date().toISOString(),
    };

    setMensajes([...mensajes, mensaje]);
    setNuevoMensaje('');
  };

  const enviarPropuesta = () => {
    if (!propuesta.fechas.some(f => f.trim())) {
      alert('Debes agregar al menos una fecha disponible');
      return;
    }

    const mensaje: Mensaje = {
      id: Date.now(),
      autor: 'profesor',
      contenido: `He enviado una propuesta formal:`,
      fecha: new Date().toISOString(),
      propuesta: {
        precio: propuesta.precio,
        duracion: propuesta.duracion,
        fechas: propuesta.fechas.filter(f => f.trim()),
      },
    };

    setMensajes([...mensajes, mensaje]);
    setMostrarFormPropuesta(false);
    setPropuesta({ precio: 50, duracion: 1, fechas: ['', '', ''] });
  };

  const aceptarSolicitud = () => {
    if (confirm('¿Confirmar clase con Ana García?')) {
      alert('¡Clase confirmada! Se ha enviado notificación al estudiante.');
      navigate('/profesor/clases-particulares');
    }
  };

  const rechazarSolicitud = () => {
    if (confirm('¿Rechazar esta solicitud?')) {
      alert('Solicitud rechazada.');
      navigate('/profesor/clases-particulares');
    }
  };

  return (
    <Container className="py-lg max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-lg">
        <div>
          <Link to="/profesor/clases-particulares" className="text-sm text-amber-600 hover:underline mb-xs inline-block">
            ← Volver a Clases Particulares
          </Link>
          <h1 className="font-display text-3xl font-bold mb-sm">
            Negociación con {solicitud.estudiante}
          </h1>
          <div className="flex gap-md text-sm text-foreground/60">
            <span>Tema: <span className="text-foreground font-semibold">{solicitud.tema}</span></span>
            <span>•</span>
            <span>Presupuesto: <span className="text-foreground font-semibold">${solicitud.presupuesto}</span></span>
            <span>•</span>
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
              EN NEGOCIACIÓN
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-md">
        {/* Columna Chat */}
        <div className="col-span-2 border border-foreground/10 rounded-lg flex flex-col h-[600px]">
          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-md space-y-md">
            {mensajes.map((mensaje) => (
              <div
                key={mensaje.id}
                className={`flex ${mensaje.autor === 'profesor' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${mensaje.autor === 'profesor' ? 'bg-amber-100' : 'bg-muted'} rounded-lg p-sm`}>
                  <div className="text-xs text-foreground/60 mb-xs">
                    {mensaje.autor === 'profesor' ? 'Tú' : solicitud.estudiante} • {new Date(mensaje.fecha).toLocaleString()}
                  </div>
                  <p className="text-sm">{mensaje.contenido}</p>
                  
                  {/* Propuesta formal */}
                  {mensaje.propuesta && (
                    <div className="mt-sm border-t border-foreground/10 pt-sm">
                      <div className="font-semibold text-sm mb-xs">📋 Propuesta:</div>
                      <div className="text-sm space-y-xs">
                        <div>💰 Precio: <span className="font-semibold">${mensaje.propuesta.precio}</span></div>
                        <div>⏱️ Duración: <span className="font-semibold">{mensaje.propuesta.duracion} hora(s)</span></div>
                        <div>📅 Fechas disponibles:</div>
                        <ul className="list-disc list-inside pl-sm text-xs">
                          {mensaje.propuesta.fechas.map((fecha, i) => (
                            <li key={i}>{new Date(fecha).toLocaleString()}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input de mensaje */}
          <div className="border-t border-foreground/10 p-sm">
            <div className="flex gap-sm">
              <input
                type="text"
                value={nuevoMensaje}
                onChange={(e) => setNuevoMensaje(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && enviarMensaje()}
                placeholder="Escribe un mensaje..."
                className="flex-1 px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                onClick={enviarMensaje}
                className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
              >
                Enviar
              </button>
            </div>
            <button
              onClick={() => setMostrarFormPropuesta(!mostrarFormPropuesta)}
              className="mt-sm text-sm text-amber-600 hover:underline"
            >
              {mostrarFormPropuesta ? '✕ Cancelar propuesta' : '📋 Enviar Propuesta Formal'}
            </button>
          </div>
        </div>

        {/* Columna Lateral - Info y Acciones */}
        <div className="space-y-md">
          {/* Info del Estudiante */}
          <div className="border border-foreground/10 rounded-lg p-md">
            <h3 className="font-semibold mb-sm">👤 Estudiante</h3>
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div>
                <div className="font-semibold">{solicitud.estudiante}</div>
                <div className="text-xs text-foreground/60">Estudiante Verificado</div>
              </div>
            </div>
            <button className="w-full px-3 py-2 text-sm border border-foreground/20 rounded-md hover:bg-muted/30">
              Ver Perfil Completo
            </button>
          </div>

          {/* Solicitud Original */}
          <div className="border border-foreground/10 rounded-lg p-md">
            <h3 className="font-semibold mb-sm">📝 Solicitud Original</h3>
            <div className="text-sm space-y-sm">
              <div>
                <div className="text-xs text-foreground/60 mb-xs">Tema:</div>
                <div className="font-semibold">{solicitud.tema}</div>
              </div>
              <div>
                <div className="text-xs text-foreground/60 mb-xs">Mensaje:</div>
                <p className="text-sm">{solicitud.mensajeInicial}</p>
              </div>
              <div>
                <div className="text-xs text-foreground/60 mb-xs">Presupuesto:</div>
                <div className="font-semibold">${solicitud.presupuesto}</div>
              </div>
              <div>
                <div className="text-xs text-foreground/60 mb-xs">Fecha solicitud:</div>
                <div>{new Date(solicitud.fecha).toLocaleDateString()}</div>
              </div>
            </div>
          </div>

          {/* Acciones */}
          <div className="border border-foreground/10 rounded-lg p-md">
            <h3 className="font-semibold mb-sm">⚡ Acciones Rápidas</h3>
            <div className="space-y-sm">
              <button
                onClick={aceptarSolicitud}
                className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600"
              >
                ✓ Confirmar Clase
              </button>
              <button
                onClick={rechazarSolicitud}
                className="w-full px-4 py-2 border border-red-500 text-red-600 rounded-lg font-semibold hover:bg-red-50"
              >
                ✕ Rechazar Solicitud
              </button>
              <button className="w-full px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30">
                📎 Enviar Material
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Form de Propuesta Formal (Modal/Overlay) */}
      {mostrarFormPropuesta && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-lg max-w-2xl w-full mx-md shadow-xl">
            <h2 className="font-semibold text-xl mb-md">Crear Propuesta Formal</h2>
            
            <div className="space-y-md">
              <div className="grid grid-cols-2 gap-md">
                <div>
                  <label className="block text-sm font-medium mb-xs">Precio Total (USD)</label>
                  <input
                    type="number"
                    value={propuesta.precio}
                    onChange={(e) => setPropuesta({ ...propuesta, precio: Number(e.target.value) })}
                    className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-xs">Duración (horas)</label>
                  <select
                    value={propuesta.duracion}
                    onChange={(e) => setPropuesta({ ...propuesta, duracion: Number(e.target.value) })}
                    className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                  >
                    <option value={0.5}>30 minutos</option>
                    <option value={1}>1 hora</option>
                    <option value={1.5}>1.5 horas</option>
                    <option value={2}>2 horas</option>
                    <option value={3}>3 horas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">Fechas/Horarios Disponibles (elige 2-3 opciones)</label>
                {propuesta.fechas.map((fecha, index) => (
                  <input
                    key={index}
                    type="datetime-local"
                    value={fecha}
                    onChange={(e) => {
                      const nuevasFechas = [...propuesta.fechas];
                      nuevasFechas[index] = e.target.value;
                      setPropuesta({ ...propuesta, fechas: nuevasFechas });
                    }}
                    className="w-full px-sm py-sm border border-foreground/20 rounded-lg mb-sm"
                  />
                ))}
              </div>

              <div className="flex gap-sm justify-end">
                <button
                  onClick={() => setMostrarFormPropuesta(false)}
                  className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30"
                >
                  Cancelar
                </button>
                <button
                  onClick={enviarPropuesta}
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
                >
                  Enviar Propuesta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
