import { useState } from 'react';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Certificaciones del Profesor
 * Sistema de verificación de credenciales
 */

type Certificacion = {
  id: number;
  nombre: string;
  institucion: string;
  año: number;
  mes?: number;
  numeroCredencial?: string;
  urlVerificacion?: string;
  archivoURL?: string;
  estado: 'pendiente' | 'verificado' | 'rechazado';
  notasRechazo?: string;
  categoria: string;
};

export function CertificacionesPage() {
  const [certificaciones, setCertificaciones] = useState<Certificacion[]>([
    {
      id: 1,
      nombre: 'Profesor de Guitarra Certificado',
      institucion: 'Berklee College of Music',
      año: 2020,
      mes: 6,
      numeroCredencial: 'BERK-2020-12345',
      urlVerificacion: 'https://berklee.edu/verify/12345',
      estado: 'verificado',
      categoria: 'Música',
    },
    {
      id: 2,
      nombre: 'Entrenador Personal Certificado',
      institucion: 'ISSA (International Sports Sciences Association)',
      año: 2021,
      numeroCredencial: 'ISSA-CPT-45678',
      estado: 'pendiente',
      categoria: 'Fitness',
    },
    {
      id: 3,
      nombre: 'Instructor de Yoga (200 horas)',
      institucion: 'Yoga Alliance',
      año: 2019,
      numeroCredencial: 'RYT200-987654',
      urlVerificacion: 'https://yogaalliance.org/verify',
      estado: 'verificado',
      categoria: 'Mente-Cuerpo',
    },
  ]);

  const [mostrandoFormulario, setMostrandoFormulario] = useState(false);
  const [nuevaCertificacion, setNuevaCertificacion] = useState<Partial<Certificacion>>({
    nombre: '',
    institucion: '',
    año: new Date().getFullYear(),
    numeroCredencial: '',
    urlVerificacion: '',
    categoria: '',
  });

  const agregarCertificacion = () => {
    if (nuevaCertificacion.nombre && nuevaCertificacion.institucion && nuevaCertificacion.año) {
      const cert: Certificacion = {
        id: Date.now(),
        nombre: nuevaCertificacion.nombre,
        institucion: nuevaCertificacion.institucion,
        año: nuevaCertificacion.año,
        mes: nuevaCertificacion.mes,
        numeroCredencial: nuevaCertificacion.numeroCredencial,
        urlVerificacion: nuevaCertificacion.urlVerificacion,
        estado: 'pendiente',
        categoria: nuevaCertificacion.categoria || 'General',
      };
      setCertificaciones([...certificaciones, cert]);
      setNuevaCertificacion({
        nombre: '',
        institucion: '',
        año: new Date().getFullYear(),
        numeroCredencial: '',
        urlVerificacion: '',
        categoria: '',
      });
      setMostrandoFormulario(false);
      alert('¡Certificación agregada! Está pendiente de verificación por nuestro equipo.');
    }
  };

  const eliminarCertificacion = (id: number) => {
    if (confirm('¿Eliminar esta certificación?')) {
      setCertificaciones(certificaciones.filter(c => c.id !== id));
    }
  };

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case 'verificado':
        return <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">✓ Verificado</span>;
      case 'pendiente':
        return <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">⏳ Pendiente</span>;
      case 'rechazado':
        return <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">✗ Rechazado</span>;
      default:
        return null;
    }
  };

  const certificacionesVerificadas = certificaciones.filter(c => c.estado === 'verificado');
  const certificacionesPendientes = certificaciones.filter(c => c.estado === 'pendiente');

  return (
    <Container className="py-lg max-w-5xl">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Mis Certificaciones</h1>
          <p className="text-foreground/60">
            Agrega tus certificaciones para aumentar tu credibilidad
          </p>
        </div>
        <button
          onClick={() => setMostrandoFormulario(true)}
          className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
        >
          + Agregar Certificación
        </button>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-3 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Total</div>
          <div className="text-2xl font-bold">{certificaciones.length}</div>
        </div>
        <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-md">
          <div className="text-sm text-emerald-700 mb-xs">Verificadas</div>
          <div className="text-2xl font-bold text-emerald-600">{certificacionesVerificadas.length}</div>
        </div>
        <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-md">
          <div className="text-sm text-yellow-700 mb-xs">Pendientes</div>
          <div className="text-2xl font-bold text-yellow-600">{certificacionesPendientes.length}</div>
        </div>
      </div>

      {/* Beneficios de Verificación */}
      <div className="border border-blue-200 bg-blue-50 rounded-lg p-md mb-lg">
        <h3 className="font-semibold mb-sm">🏆 Beneficios de certificaciones verificadas:</h3>
        <div className="grid grid-cols-2 gap-sm text-sm text-foreground/70">
          <div>✓ Badge verificado en tu perfil</div>
          <div>✓ Mayor confianza de estudiantes</div>
          <div>✓ Prioridad en búsquedas</div>
          <div>✓ Cobra precios premium</div>
        </div>
      </div>

      {/* Lista de Certificaciones */}
      <div className="space-y-md">
        {certificaciones.length === 0 ? (
          <div className="text-center py-xl border-2 border-dashed border-foreground/20 rounded-lg">
            <div className="text-6xl mb-md">🎓</div>
            <h3 className="font-semibold text-xl mb-sm">Sin certificaciones aún</h3>
            <p className="text-foreground/60 mb-md">
              Agrega tus certificaciones para demostrar tu experiencia
            </p>
            <button
              onClick={() => setMostrandoFormulario(true)}
              className="px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
            >
              Agregar Primera Certificación
            </button>
          </div>
        ) : (
          certificaciones.map((cert) => (
            <div
              key={cert.id}
              className={`border rounded-lg p-md ${
                cert.estado === 'verificado' 
                  ? 'border-emerald-300 bg-emerald-50/50' 
                  : cert.estado === 'rechazado'
                  ? 'border-red-300 bg-red-50/50'
                  : 'border-foreground/10'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-md flex-1">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-3xl ${
                    cert.estado === 'verificado' ? 'bg-emerald-100' : 'bg-muted'
                  }`}>
                    {cert.estado === 'verificado' ? '✓' : '🎓'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-sm mb-xs">
                      <h3 className="font-semibold text-lg">{cert.nombre}</h3>
                      {getEstadoBadge(cert.estado)}
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded">
                        {cert.categoria}
                      </span>
                    </div>
                    <div className="text-sm text-foreground/70 mb-sm">
                      <div className="font-medium">{cert.institucion}</div>
                      <div className="text-foreground/60">
                        {cert.mes ? `${cert.mes}/` : ''}{cert.año}
                        {cert.numeroCredencial && ` • Credencial: ${cert.numeroCredencial}`}
                      </div>
                    </div>
                    
                    {cert.urlVerificacion && (
                      <a
                        href={cert.urlVerificacion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline inline-flex items-center gap-xs"
                      >
                        🔗 Verificar en sitio oficial
                      </a>
                    )}

                    {cert.estado === 'pendiente' && (
                      <div className="mt-sm p-sm bg-yellow-50 border border-yellow-200 rounded text-sm">
                        ⏳ Nuestro equipo está verificando esta certificación. Recibirás una notificación cuando esté lista.
                      </div>
                    )}

                    {cert.estado === 'rechazado' && cert.notasRechazo && (
                      <div className="mt-sm p-sm bg-red-50 border border-red-200 rounded text-sm">
                        <div className="font-semibold text-red-700 mb-xs">Motivo del rechazo:</div>
                        <div className="text-red-600">{cert.notasRechazo}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-xs">
                  <button
                    onClick={() => eliminarCertificacion(cert.id)}
                    className="px-3 py-1.5 text-sm border border-red-500 text-red-600 rounded hover:bg-red-50"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal Agregar Certificación */}
      {mostrandoFormulario && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-lg max-w-2xl w-full mx-md shadow-xl max-h-[90vh] overflow-y-auto">
            <h2 className="font-semibold text-xl mb-md">Agregar Nueva Certificación</h2>
            
            <div className="space-y-md">
              <div>
                <label className="block text-sm font-medium mb-xs">
                  Nombre de la Certificación <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={nuevaCertificacion.nombre}
                  onChange={(e) => setNuevaCertificacion({ ...nuevaCertificacion, nombre: e.target.value })}
                  placeholder="Ej: Profesor de Guitarra Certificado"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">
                  Institución Emisora <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={nuevaCertificacion.institucion}
                  onChange={(e) => setNuevaCertificacion({ ...nuevaCertificacion, institucion: e.target.value })}
                  placeholder="Ej: Berklee College of Music"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">Categoría</label>
                <select
                  value={nuevaCertificacion.categoria}
                  onChange={(e) => setNuevaCertificacion({ ...nuevaCertificacion, categoria: e.target.value })}
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                >
                  <option value="">Selecciona...</option>
                  <option value="Música">Música</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Mente-Cuerpo">Mente-Cuerpo</option>
                  <option value="Cocina">Cocina</option>
                  <option value="Idiomas">Idiomas</option>
                  <option value="Programación">Programación</option>
                  <option value="Diseño">Diseño</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-md">
                <div>
                  <label className="block text-sm font-medium mb-xs">
                    Año <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={nuevaCertificacion.año}
                    onChange={(e) => setNuevaCertificacion({ ...nuevaCertificacion, año: Number(e.target.value) })}
                    min="1980"
                    max={new Date().getFullYear()}
                    className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-xs">Mes (opcional)</label>
                  <select
                    value={nuevaCertificacion.mes || ''}
                    onChange={(e) => setNuevaCertificacion({ ...nuevaCertificacion, mes: Number(e.target.value) || undefined })}
                    className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                  >
                    <option value="">-</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">Número de Credencial</label>
                <input
                  type="text"
                  value={nuevaCertificacion.numeroCredencial}
                  onChange={(e) => setNuevaCertificacion({ ...nuevaCertificacion, numeroCredencial: e.target.value })}
                  placeholder="Ej: BERK-2020-12345"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
                <p className="text-xs text-foreground/60 mt-xs">
                  Facilita la verificación si incluyes el número
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">URL de Verificación</label>
                <input
                  type="url"
                  value={nuevaCertificacion.urlVerificacion}
                  onChange={(e) => setNuevaCertificacion({ ...nuevaCertificacion, urlVerificacion: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
                <p className="text-xs text-foreground/60 mt-xs">
                  Link donde se puede verificar tu certificación
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">Subir Certificado (PDF)</label>
                <div className="border-2 border-dashed border-foreground/20 rounded-lg p-md text-center hover:bg-muted/10 cursor-pointer">
                  <input type="file" accept=".pdf" className="hidden" id="cert-file" />
                  <label htmlFor="cert-file" className="cursor-pointer">
                    <div className="text-3xl mb-sm">📄</div>
                    <div className="text-sm font-medium">Haz clic para subir</div>
                    <div className="text-xs text-foreground/60">PDF máx. 5MB</div>
                  </label>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-sm text-sm">
                <strong>⏳ Proceso de verificación:</strong> Nuestro equipo revisará tu certificación en 1-3 días hábiles. 
                Recibirás una notificación del resultado.
              </div>

              <div className="flex gap-sm justify-end">
                <button
                  onClick={() => setMostrandoFormulario(false)}
                  className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30"
                >
                  Cancelar
                </button>
                <button
                  onClick={agregarCertificacion}
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
                >
                  Agregar Certificación
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificaciones Comunes */}
      <div className="mt-lg border border-foreground/10 rounded-lg p-md">
        <h3 className="font-semibold mb-sm">📋 Certificaciones comunes por categoría:</h3>
        <div className="grid grid-cols-2 gap-md text-sm">
          <div>
            <div className="font-semibold text-foreground/80 mb-xs">🎸 Música:</div>
            <ul className="text-foreground/60 space-y-xs text-xs">
              <li>• Berklee College of Music</li>
              <li>• ABRSM (Associated Board)</li>
              <li>• Yamaha Music School</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-foreground/80 mb-xs">💪 Fitness:</div>
            <ul className="text-foreground/60 space-y-xs text-xs">
              <li>• ISSA, NASM, ACE</li>
              <li>• CrossFit Level 1</li>
              <li>• Yoga Alliance (RYT 200/500)</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-foreground/80 mb-xs">👨‍🍳 Cocina:</div>
            <ul className="text-foreground/60 space-y-xs text-xs">
              <li>• Le Cordon Bleu</li>
              <li>• ServSafe Food Handler</li>
              <li>• CIA (Culinary Institute)</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-foreground/80 mb-xs">🌍 Idiomas:</div>
            <ul className="text-foreground/60 space-y-xs text-xs">
              <li>• TEFL/TESOL/CELTA</li>
              <li>• DELE, DALF, Goethe</li>
              <li>• Cambridge ESOL</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
