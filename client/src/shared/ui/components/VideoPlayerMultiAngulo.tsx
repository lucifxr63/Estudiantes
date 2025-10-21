import { useState } from 'react';

/**
 * Player de Video Multi-Ángulo
 * Para clases de deportes, danza, yoga donde necesitas ver desde diferentes ángulos
 */

type AnguloVideo = {
  id: string;
  nombre: string;
  url: string;
  icono: string;
};

type VideoPlayerMultiAnguloProps = {
  angulos: AnguloVideo[];
  defaultAngulo?: string;
  velocidad?: number;
};

export function VideoPlayerMultiAngulo({ 
  angulos, 
  defaultAngulo,
  velocidad = 1 
}: VideoPlayerMultiAnguloProps) {
  const [anguloActivo, setAnguloActivo] = useState(defaultAngulo || angulos[0]?.id);
  const [velocidadActual, setVelocidadActual] = useState(velocidad);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repetirSeccion, setRepetirSeccion] = useState(false);

  const anguloSeleccionado = angulos.find(a => a.id === anguloActivo);

  const velocidades = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];

  return (
    <div className="border border-foreground/10 rounded-lg overflow-hidden bg-black">
      {/* Video Principal */}
      <div className="relative bg-black aspect-video">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-6xl mb-md">{anguloSeleccionado?.icono || '📹'}</div>
            <div className="text-xl font-semibold mb-sm">
              {anguloSeleccionado?.nombre || 'Selecciona un ángulo'}
            </div>
            <div className="text-sm text-white/70">
              Video Player: {anguloSeleccionado?.url}
            </div>
            <div className="mt-md">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
              >
                {isPlaying ? '⏸️ Pausar' : '▶️ Reproducir'}
              </button>
            </div>
          </div>
        </div>

        {/* Indicador de Velocidad */}
        {velocidadActual !== 1 && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 text-white rounded-lg text-sm font-semibold">
            {velocidadActual}x
          </div>
        )}

        {/* Indicador de Repetición */}
        {repetirSeccion && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white rounded-lg text-sm font-semibold">
            🔁 Repetir activo
          </div>
        )}
      </div>

      {/* Controles */}
      <div className="bg-muted/30 p-md space-y-md">
        {/* Selector de Ángulos */}
        <div>
          <div className="text-sm font-semibold mb-sm text-foreground">
            📹 Selecciona el ángulo:
          </div>
          <div className="grid grid-cols-4 gap-sm">
            {angulos.map((angulo) => (
              <button
                key={angulo.id}
                onClick={() => setAnguloActivo(angulo.id)}
                className={`p-sm border rounded-lg text-center transition-colors ${
                  anguloActivo === angulo.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-foreground/20 hover:bg-muted/50'
                }`}
              >
                <div className="text-2xl mb-xs">{angulo.icono}</div>
                <div className="text-xs">{angulo.nombre}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Control de Velocidad */}
        <div>
          <div className="text-sm font-semibold mb-sm text-foreground">
            ⚡ Velocidad de reproducción:
          </div>
          <div className="flex gap-sm">
            {velocidades.map((vel) => (
              <button
                key={vel}
                onClick={() => setVelocidadActual(vel)}
                className={`px-3 py-1 border rounded text-sm ${
                  velocidadActual === vel
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-foreground/20 hover:bg-muted/50'
                }`}
              >
                {vel}x
              </button>
            ))}
          </div>
          <p className="text-xs text-foreground/60 mt-xs">
            Usa velocidad lenta (0.25x-0.5x) para aprender movimientos nuevos
          </p>
        </div>

        {/* Controles Adicionales */}
        <div className="flex gap-sm">
          <button
            onClick={() => setRepetirSeccion(!repetirSeccion)}
            className={`flex-1 px-3 py-2 border rounded-lg text-sm font-medium ${
              repetirSeccion
                ? 'bg-amber-500 text-white border-amber-500'
                : 'border-foreground/20 hover:bg-muted/50'
            }`}
          >
            🔁 Repetir Sección
          </button>
          <button className="flex-1 px-3 py-2 border border-foreground/20 rounded-lg text-sm font-medium hover:bg-muted/50">
            📸 Capturar Frame
          </button>
          <button className="flex-1 px-3 py-2 border border-foreground/20 rounded-lg text-sm font-medium hover:bg-muted/50">
            📐 Mostrar Ángulos
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border-t border-blue-200 p-sm">
        <div className="text-xs text-blue-800">
          💡 <strong>Tip:</strong> Cambia entre ángulos para ver el movimiento completo. 
          Usa velocidad lenta para estudiar la técnica en detalle.
        </div>
      </div>
    </div>
  );
}

// Ejemplo de uso para clase de Calistenia
export const ejemploCalistenia: AnguloVideo[] = [
  { id: 'frontal', nombre: 'Vista Frontal', url: 'video-frontal.mp4', icono: '👤' },
  { id: 'lateral', nombre: 'Vista Lateral', url: 'video-lateral.mp4', icono: '🔄' },
  { id: 'superior', nombre: 'Vista Superior', url: 'video-superior.mp4', icono: '⬆️' },
  { id: 'detalle', nombre: 'Detalle Manos', url: 'video-manos.mp4', icono: '🤲' },
];
