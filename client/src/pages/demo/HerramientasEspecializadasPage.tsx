import { useState } from 'react';
import { Container } from '@shared/ui/primitives/Container';
import { VideoPlayerMultiAngulo, ejemploCalistenia } from '@shared/ui/components/VideoPlayerMultiAngulo';
import { TimerHIIT } from '@shared/ui/components/TimerHIIT';
import { MetronomoIntegrado } from '@shared/ui/components/MetronomoIntegrado';
import { AfinadorVirtual } from '@shared/ui/components/AfinadorVirtual';

/**
 * Página de Demostración de Herramientas Especializadas
 * Muestra todas las herramientas integradas en acción
 */

export function HerramientasEspecializadasPage() {
  const [herramientaActiva, setHerramientaActiva] = useState<string>('video-multiangulo');

  const herramientas = [
    {
      id: 'video-multiangulo',
      nombre: 'Video Multi-Ángulo',
      icono: '📹',
      categoria: 'Deportes/Danza',
      descripcion: 'Ver movimientos desde diferentes ángulos',
    },
    {
      id: 'timer-hiit',
      nombre: 'Timer HIIT',
      icono: '⏱️',
      categoria: 'Fitness',
      descripcion: 'Intervalos de alta intensidad',
    },
    {
      id: 'metronomo',
      nombre: 'Metrónomo',
      icono: '🎵',
      categoria: 'Música',
      descripcion: 'Mantén el tempo perfecto',
    },
    {
      id: 'afinador',
      nombre: 'Afinador Virtual',
      icono: '🎸',
      categoria: 'Música',
      descripcion: 'Afina tu instrumento',
    },
  ];

  return (
    <Container className="py-lg">
      <div className="mb-lg text-center">
        <h1 className="font-display text-4xl font-bold mb-sm">
          Herramientas Especializadas
        </h1>
        <p className="text-lg text-foreground/70">
          Herramientas integradas para mejorar la experiencia de aprendizaje
        </p>
      </div>

      {/* Selector de Herramientas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-lg">
        {herramientas.map((herramienta) => (
          <button
            key={herramienta.id}
            onClick={() => setHerramientaActiva(herramienta.id)}
            className={`p-md border rounded-lg text-center transition-all ${
              herramientaActiva === herramienta.id
                ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                : 'border-foreground/10 hover:bg-muted/30'
            }`}
          >
            <div className="text-4xl mb-sm">{herramienta.icono}</div>
            <div className="font-semibold mb-xs">{herramienta.nombre}</div>
            <div className="text-xs opacity-75">{herramienta.categoria}</div>
          </button>
        ))}
      </div>

      {/* Herramienta Activa */}
      <div className="max-w-4xl mx-auto">
        {herramientaActiva === 'video-multiangulo' && (
          <div>
            <div className="mb-md">
              <h2 className="text-2xl font-bold mb-xs">📹 Video Multi-Ángulo</h2>
              <p className="text-foreground/70">
                Perfecto para clases de calistenia, yoga, danza, artes marciales. 
                Cambia entre ángulos para ver el movimiento completo.
              </p>
            </div>
            <VideoPlayerMultiAngulo angulos={ejemploCalistenia} />
            <div className="mt-md bg-blue-50 border border-blue-200 rounded-lg p-md">
              <h3 className="font-semibold mb-sm">✨ Características:</h3>
              <ul className="text-sm space-y-xs text-foreground/70">
                <li>• 4 ángulos diferentes (frontal, lateral, superior, detalle)</li>
                <li>• Control de velocidad (0.25x a 2x)</li>
                <li>• Modo repetir sección para practicar</li>
                <li>• Captura de frames para referencia</li>
              </ul>
            </div>
          </div>
        )}

        {herramientaActiva === 'timer-hiit' && (
          <div>
            <div className="mb-md">
              <h2 className="text-2xl font-bold mb-xs">⏱️ Timer HIIT</h2>
              <p className="text-foreground/70">
                Entrenamiento por intervalos. Ideal para calistenia, crossfit, tabata.
              </p>
            </div>
            <TimerHIIT />
            <div className="mt-md bg-blue-50 border border-blue-200 rounded-lg p-md">
              <h3 className="font-semibold mb-sm">✨ Características:</h3>
              <ul className="text-sm space-y-xs text-foreground/70">
                <li>• Intervalos configurables (trabajo/descanso)</li>
                <li>• Múltiples rondas</li>
                <li>• Señales visuales y sonoras</li>
                <li>• Rutinas predefinidas (Tabata, HIIT, EMOM)</li>
              </ul>
            </div>
          </div>
        )}

        {herramientaActiva === 'metronomo' && (
          <div>
            <div className="mb-md">
              <h2 className="text-2xl font-bold mb-xs">🎵 Metrónomo</h2>
              <p className="text-foreground/70">
                Mantén el tempo mientras practicas. Esencial para clases de música.
              </p>
            </div>
            <MetronomoIntegrado />
            <div className="mt-md bg-blue-50 border border-blue-200 rounded-lg p-md">
              <h3 className="font-semibold mb-sm">✨ Características:</h3>
              <ul className="text-sm space-y-xs text-foreground/70">
                <li>• Rango: 30-300 BPM</li>
                <li>• Diferentes compases (2/4, 3/4, 4/4, 6/8)</li>
                <li>• Presets de tempos comunes (Andante, Allegro, Presto)</li>
                <li>• Tap tempo para establecer BPM</li>
                <li>• Acento visual en el primer beat</li>
              </ul>
            </div>
          </div>
        )}

        {herramientaActiva === 'afinador' && (
          <div>
            <div className="mb-md">
              <h2 className="text-2xl font-bold mb-xs">🎸 Afinador Virtual</h2>
              <p className="text-foreground/70">
                Afina tu guitarra, bajo, ukelele o violín. Usa el micrófono del dispositivo.
              </p>
            </div>
            <AfinadorVirtual />
            <div className="mt-md bg-blue-50 border border-blue-200 rounded-lg p-md">
              <h3 className="font-semibold mb-sm">✨ Características:</h3>
              <ul className="text-sm space-y-xs text-foreground/70">
                <li>• Soporta: Guitarra, Bajo, Ukelele, Violín</li>
                <li>• Detección automática por micrófono</li>
                <li>• Precisión de ±1 cent</li>
                <li>• Reproducción de notas de referencia</li>
                <li>• Indicador visual de afinación</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Beneficios Globales */}
      <div className="mt-xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-md text-center">
          🚀 Por qué estas herramientas son revolucionarias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="border border-foreground/10 rounded-lg p-md">
            <div className="text-3xl mb-sm">🎯</div>
            <h3 className="font-semibold mb-xs">Todo en un lugar</h3>
            <p className="text-sm text-foreground/70">
              No necesitas apps externas. Todo integrado en la plataforma.
            </p>
          </div>
          <div className="border border-foreground/10 rounded-lg p-md">
            <div className="text-3xl mb-sm">💡</div>
            <h3 className="font-semibold mb-xs">Contextuales</h3>
            <p className="text-sm text-foreground/70">
              Aparecen automáticamente según el tipo de clase que estés tomando.
            </p>
          </div>
          <div className="border border-foreground/10 rounded-lg p-md">
            <div className="text-3xl mb-sm">📱</div>
            <h3 className="font-semibold mb-xs">Multiplataforma</h3>
            <p className="text-sm text-foreground/70">
              Funcionan en web, mobile y escritorio con la misma experiencia.
            </p>
          </div>
        </div>
      </div>

      {/* Próximas Herramientas */}
      <div className="mt-xl max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-lg">
        <h2 className="text-2xl font-bold mb-md text-center">
          🔮 Próximamente
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          <div className="text-center">
            <div className="text-3xl mb-xs">🎹</div>
            <div className="text-sm font-semibold">Piano Virtual</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-xs">🎼</div>
            <div className="text-sm font-semibold">Partitura Interactiva</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-xs">📊</div>
            <div className="text-sm font-semibold">Análisis de Forma</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-xs">🎤</div>
            <div className="text-sm font-semibold">Grabadora de Voz</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
