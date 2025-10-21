import { useState, useEffect, useRef } from 'react';

/**
 * Timer HIIT (High-Intensity Interval Training)
 * Para clases de fitness, calistenia, crossfit
 */

type Intervalo = {
  nombre: string;
  duracion: number; // segundos
  tipo: 'trabajo' | 'descanso' | 'preparacion';
};

type TimerHIITProps = {
  intervalos?: Intervalo[];
  rondas?: number;
};

export function TimerHIIT({ 
  intervalos = [],
  rondas = 3 
}: TimerHIITProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [rondaActual, setRondaActual] = useState(1);
  const [intervaloActual, setIntervaloActual] = useState(0);
  const [segundosRestantes, setSegundosRestantes] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Intervalos por defecto (Tabata clásico)
  const intervalosDefault: Intervalo[] = [
    { nombre: 'Preparación', duracion: 10, tipo: 'preparacion' },
    { nombre: 'Trabajo', duracion: 20, tipo: 'trabajo' },
    { nombre: 'Descanso', duracion: 10, tipo: 'descanso' },
  ];

  const intervalosActivos = intervalos.length > 0 ? intervalos : intervalosDefault;
  const intervaloActivo = intervalosActivos[intervaloActual];

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSegundosRestantes((prev) => {
        if (prev <= 1) {
          // Cambiar al siguiente intervalo
          const siguienteIntervalo = (intervaloActual + 1) % intervalosActivos.length;
          
          if (siguienteIntervalo === 0) {
            // Nueva ronda
            if (rondaActual < rondas) {
              setRondaActual(rondaActual + 1);
              setIntervaloActual(0);
              return intervalosActivos[0].duracion;
            } else {
              // Finalizar
              setIsRunning(false);
              playSound('finish');
              return 0;
            }
          } else {
            setIntervaloActual(siguienteIntervalo);
            playSound(intervalosActivos[siguienteIntervalo].tipo);
            return intervalosActivos[siguienteIntervalo].duracion;
          }
        }
        
        // Beep en los últimos 3 segundos
        if (prev <= 3) {
          playSound('beep');
        }
        
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, intervaloActual, rondaActual, intervalosActivos, rondas]);

  const playSound = (tipo: string) => {
    // Aquí iría la lógica de reproducir sonidos
    console.log(`🔊 Sonido: ${tipo}`);
  };

  const iniciar = () => {
    setIsRunning(true);
    if (segundosRestantes === 0) {
      setSegundosRestantes(intervalosActivos[0].duracion);
    }
  };

  const pausar = () => {
    setIsRunning(false);
  };

  const reiniciar = () => {
    setIsRunning(false);
    setRondaActual(1);
    setIntervaloActual(0);
    setSegundosRestantes(intervalosActivos[0].duracion);
  };

  const saltarIntervalo = () => {
    const siguienteIntervalo = (intervaloActual + 1) % intervalosActivos.length;
    if (siguienteIntervalo === 0 && rondaActual < rondas) {
      setRondaActual(rondaActual + 1);
    }
    setIntervaloActual(siguienteIntervalo);
    setSegundosRestantes(intervalosActivos[siguienteIntervalo].duracion);
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'trabajo': return 'bg-red-500 text-white';
      case 'descanso': return 'bg-green-500 text-white';
      case 'preparacion': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const formatearTiempo = (segundos: number) => {
    const mins = Math.floor(segundos / 60);
    const secs = segundos % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const porcentajeCompletado = intervaloActivo 
    ? ((intervaloActivo.duracion - segundosRestantes) / intervaloActivo.duracion) * 100
    : 0;

  return (
    <div className="border border-foreground/10 rounded-lg overflow-hidden">
      {/* Display Principal */}
      <div className={`${getTipoColor(intervaloActivo?.tipo || 'preparacion')} p-lg text-center`}>
        <div className="text-sm font-semibold mb-xs opacity-90">
          Ronda {rondaActual} de {rondas}
        </div>
        <div className="text-6xl font-bold mb-sm font-mono">
          {formatearTiempo(segundosRestantes)}
        </div>
        <div className="text-xl font-semibold">
          {intervaloActivo?.nombre || 'Listo'}
        </div>
        
        {/* Barra de Progreso */}
        <div className="mt-md w-full bg-white/30 rounded-full h-2">
          <div
            className="bg-white h-2 rounded-full transition-all duration-1000"
            style={{ width: `${porcentajeCompletado}%` }}
          />
        </div>
      </div>

      {/* Controles */}
      <div className="bg-muted/30 p-md">
        <div className="flex gap-sm mb-md">
          {!isRunning ? (
            <button
              onClick={iniciar}
              className="flex-1 px-4 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600"
            >
              {segundosRestantes === 0 ? '▶️ Comenzar' : '▶️ Continuar'}
            </button>
          ) : (
            <button
              onClick={pausar}
              className="flex-1 px-4 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
            >
              ⏸️ Pausar
            </button>
          )}
          <button
            onClick={reiniciar}
            className="px-4 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/50"
          >
            🔄
          </button>
          <button
            onClick={saltarIntervalo}
            className="px-4 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-muted/50"
            disabled={!isRunning}
          >
            ⏭️
          </button>
        </div>

        {/* Siguiente Intervalo */}
        {isRunning && (
          <div className="text-sm text-foreground/60 text-center">
            Siguiente: {intervalosActivos[(intervaloActual + 1) % intervalosActivos.length]?.nombre}
          </div>
        )}
      </div>

      {/* Configuración Rápida */}
      <div className="bg-background p-md border-t border-foreground/10">
        <div className="text-sm font-semibold mb-sm">⚡ Rutinas Predefinidas:</div>
        <div className="grid grid-cols-3 gap-sm">
          <button className="px-3 py-2 border border-foreground/20 rounded text-xs hover:bg-muted/30">
            Tabata (20/10)
          </button>
          <button className="px-3 py-2 border border-foreground/20 rounded text-xs hover:bg-muted/30">
            HIIT (45/15)
          </button>
          <button className="px-3 py-2 border border-foreground/20 rounded text-xs hover:bg-muted/30">
            EMOM (60s)
          </button>
        </div>
      </div>
    </div>
  );
}
