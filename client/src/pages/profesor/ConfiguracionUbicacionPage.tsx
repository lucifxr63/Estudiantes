import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Configuración de Ubicación del Profesor
 * Para clases presenciales
 */

export function ConfiguracionUbicacionPage() {
  const navigate = useNavigate();

  const [ubicacion, setUbicacion] = useState({
    ciudad: '',
    provincia: '',
    pais: 'Argentina',
    zona: '',
    codigoPostal: '',
    radioDesplazamiento: 10,
    precioPorKm: 0,
    direccionPublica: '',
    notas: '',
  });

  const [espaciosDisponibles, setEspaciosDisponibles] = useState<string[]>(['mi-estudio']);
  const [nuevaCoordenada, setNuevaCoordenada] = useState({ lat: '', lng: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ubicación guardada:', ubicacion);
    alert('¡Ubicación configurada exitosamente!');
    navigate('/profesor/perfil');
  };

  const agregarEspacio = (espacio: string) => {
    if (!espaciosDisponibles.includes(espacio)) {
      setEspaciosDisponibles([...espaciosDisponibles, espacio]);
    }
  };

  const removerEspacio = (espacio: string) => {
    setEspaciosDisponibles(espaciosDisponibles.filter(e => e !== espacio));
  };

  return (
    <Container className="py-lg max-w-4xl">
      <div className="mb-lg">
        <h1 className="font-display text-3xl font-bold mb-sm">Ubicación y Desplazamiento</h1>
        <p className="text-foreground/60">
          Configura tu ubicación para ofrecer clases presenciales
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-lg">
        {/* Ubicación Base */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">📍 Ubicación Base</h2>
          
          <div className="space-y-md">
            <div className="grid grid-cols-2 gap-md">
              <div>
                <label className="block text-sm font-medium mb-xs">
                  Ciudad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ubicacion.ciudad}
                  onChange={(e) => setUbicacion({ ...ubicacion, ciudad: e.target.value })}
                  required
                  placeholder="Ej: Buenos Aires"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">
                  Provincia/Estado <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ubicacion.provincia}
                  onChange={(e) => setUbicacion({ ...ubicacion, provincia: e.target.value })}
                  required
                  placeholder="Ej: CABA"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-md">
              <div>
                <label className="block text-sm font-medium mb-xs">País</label>
                <select
                  value={ubicacion.pais}
                  onChange={(e) => setUbicacion({ ...ubicacion, pais: e.target.value })}
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                >
                  <option value="Argentina">Argentina</option>
                  <option value="México">México</option>
                  <option value="España">España</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Chile">Chile</option>
                  <option value="Perú">Perú</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">Código Postal</label>
                <input
                  type="text"
                  value={ubicacion.codigoPostal}
                  onChange={(e) => setUbicacion({ ...ubicacion, codigoPostal: e.target.value })}
                  placeholder="Opcional"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-xs">Zona/Barrio</label>
              <input
                type="text"
                value={ubicacion.zona}
                onChange={(e) => setUbicacion({ ...ubicacion, zona: e.target.value })}
                placeholder="Ej: Palermo, Centro, Zona Norte"
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
              />
              <p className="text-xs text-foreground/60 mt-xs">
                Ayuda a los estudiantes a ubicarte mejor
              </p>
            </div>
          </div>
        </div>

        {/* Radio de Desplazamiento */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">🚗 Desplazamiento</h2>
          
          <div className="space-y-md">
            <div>
              <label className="block text-sm font-medium mb-xs">
                Radio de desplazamiento (km)
              </label>
              <div className="flex items-center gap-md">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={ubicacion.radioDesplazamiento}
                  onChange={(e) => setUbicacion({ ...ubicacion, radioDesplazamiento: Number(e.target.value) })}
                  className="flex-1"
                />
                <span className="font-semibold text-lg w-20 text-right">
                  {ubicacion.radioDesplazamiento} km
                </span>
              </div>
              <p className="text-xs text-foreground/60 mt-xs">
                Distancia máxima que estás dispuesto a viajar para clases en casa del estudiante
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-xs">
                Precio adicional por kilómetro (USD)
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={ubicacion.precioPorKm}
                onChange={(e) => setUbicacion({ ...ubicacion, precioPorKm: Number(e.target.value) })}
                placeholder="0"
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
              />
              <p className="text-xs text-foreground/60 mt-xs">
                {ubicacion.precioPorKm > 0 
                  ? `Los estudiantes pagarán $${ubicacion.precioPorKm} extra por cada km de distancia`
                  : 'Puedes cobrar un cargo adicional por desplazamiento o dejarlo en $0'
                }
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-sm">
              <div className="text-sm">
                <strong>💡 Ejemplo:</strong> Si cobras $50/hora y tu precio por km es $2, 
                una clase a 5km de distancia costaría: $50 + ($2 × 5) = <strong>$60 total</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Espacios Disponibles */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">🏠 Espacios Disponibles</h2>
          <p className="text-sm text-foreground/60 mb-md">
            Indica dónde puedes dar clases presenciales
          </p>

          <div className="grid grid-cols-2 gap-sm mb-md">
            {[
              { id: 'mi-estudio', label: 'Mi estudio/casa', icon: '🏠' },
              { id: 'casa-estudiante', label: 'Casa del estudiante', icon: '🚪' },
              { id: 'parque', label: 'Parque público', icon: '🌳' },
              { id: 'gym', label: 'Gimnasio', icon: '🏋️' },
              { id: 'cafe', label: 'Café/Espacio público', icon: '☕' },
              { id: 'otro', label: 'Otro espacio', icon: '📍' },
            ].map((espacio) => (
              <label
                key={espacio.id}
                className={`flex items-center gap-sm p-sm border rounded-lg cursor-pointer ${
                  espaciosDisponibles.includes(espacio.id)
                    ? 'bg-amber-50 border-amber-500'
                    : 'border-foreground/10 hover:bg-muted/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={espaciosDisponibles.includes(espacio.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      agregarEspacio(espacio.id);
                    } else {
                      removerEspacio(espacio.id);
                    }
                  }}
                  className="w-4 h-4"
                />
                <span>{espacio.icon} {espacio.label}</span>
              </label>
            ))}
          </div>

          {espaciosDisponibles.includes('mi-estudio') && (
            <div className="bg-muted/30 rounded-lg p-sm">
              <label className="block text-sm font-medium mb-xs">
                Dirección de tu estudio (opcional)
              </label>
              <input
                type="text"
                value={ubicacion.direccionPublica}
                onChange={(e) => setUbicacion({ ...ubicacion, direccionPublica: e.target.value })}
                placeholder="No se mostrará públicamente hasta confirmar la clase"
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Coordenadas GPS (Opcional) */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">🗺️ Coordenadas GPS (Opcional)</h2>
          <p className="text-sm text-foreground/60 mb-md">
            Ayuda a los estudiantes a encontrarte con mayor precisión
          </p>

          <div className="grid grid-cols-2 gap-md">
            <div>
              <label className="block text-sm font-medium mb-xs">Latitud</label>
              <input
                type="text"
                value={nuevaCoordenada.lat}
                onChange={(e) => setNuevaCoordenada({ ...nuevaCoordenada, lat: e.target.value })}
                placeholder="-34.6037"
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-xs">Longitud</label>
              <input
                type="text"
                value={nuevaCoordenada.lng}
                onChange={(e) => setNuevaCoordenada({ ...nuevaCoordenada, lng: e.target.value })}
                placeholder="-58.3816"
                className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-sm text-sm text-primary hover:underline"
          >
            📍 Obtener mi ubicación actual
          </button>
        </div>

        {/* Notas Adicionales */}
        <div className="border border-foreground/10 rounded-lg p-md">
          <h2 className="font-semibold text-lg mb-md">📝 Notas Adicionales</h2>
          
          <textarea
            value={ubicacion.notas}
            onChange={(e) => setUbicacion({ ...ubicacion, notas: e.target.value })}
            rows={4}
            placeholder="Ej: Mi estudio está cerca del metro Línea D. Hay estacionamiento disponible. Prefiero clases en parques los fines de semana..."
            className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
          />
        </div>

        {/* Botones */}
        <div className="flex gap-sm justify-end">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/30"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
          >
            Guardar Ubicación
          </button>
        </div>
      </form>
    </Container>
  );
}
