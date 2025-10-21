import { useState, useEffect, useRef } from 'react';

/**
 * Metrónomo Integrado
 * Para clases de música - mantener el tempo mientras practicas
 */

export function MetronomoIntegrado() {
  const [isRunning, setIsRunning] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [beat, setBeat] = useState(0);
  const [compas, setCompas] = useState(4); // 4/4, 3/4, 6/8, etc.
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // BPM presets comunes
  const presets = [
    { nombre: 'Grave', bpm: 40 },
    { nombre: 'Adagio', bpm: 60 },
    { nombre: 'Andante', bpm: 80 },
    { nombre: 'Moderato', bpm: 100 },
    { nombre: 'Allegro', bpm: 132 },
    { nombre: 'Presto', bpm: 168 },
  ];

  useEffect(() => {
    if (isRunning) {
      const intervalo = (60 / bpm) * 1000; // ms por beat
      
      intervalRef.current = setInterval(() => {
        setBeat((prevBeat) => {
          const nextBeat = (prevBeat + 1) % compas;
          playClick(nextBeat === 0); // Acento en el primer beat
          return nextBeat;
        });
      }, intervalo);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, bpm, compas]);

  const playClick = (esAcento: boolean) => {
    // Crear audio context si no existe
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Frecuencia diferente para acento
    oscillator.frequency.value = esAcento ? 1000 : 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  };

  const ajustarBPM = (delta: number) => {
    setBpm((prev) => Math.max(30, Math.min(300, prev + delta)));
  };

  const toggle = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setBeat(0);
    }
  };

  return (
    <div className="border border-foreground/10 rounded-lg overflow-hidden">
      {/* Display Principal */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-lg text-center">
        <div className="text-sm font-semibold mb-sm opacity-90">Tempo</div>
        <div className="text-7xl font-bold mb-sm font-mono">{bpm}</div>
        <div className="text-lg font-semibold">BPM</div>
        
        {/* Indicador Visual de Beat */}
        <div className="flex justify-center gap-sm mt-md">
          {Array.from({ length: compas }).map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-all ${
                isRunning && i === beat
                  ? i === 0
                    ? 'bg-yellow-400 scale-150'
                    : 'bg-white scale-150'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        <div className="text-sm mt-sm opacity-75">{compas}/4</div>
      </div>

      {/* Controles de BPM */}
      <div className="bg-muted/30 p-md">
        <div className="flex items-center gap-sm mb-md">
          <button
            onClick={() => ajustarBPM(-10)}
            className="px-4 py-2 border border-foreground/20 rounded-lg font-bold hover:bg-muted/50"
          >
            −10
          </button>
          <button
            onClick={() => ajustarBPM(-1)}
            className="px-4 py-2 border border-foreground/20 rounded-lg font-bold hover:bg-muted/50"
          >
            −
          </button>
          
          {/* Slider */}
          <div className="flex-1">
            <input
              type="range"
              min="30"
              max="300"
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-foreground/60 mt-xs">
              <span>30</span>
              <span>150</span>
              <span>300</span>
            </div>
          </div>

          <button
            onClick={() => ajustarBPM(1)}
            className="px-4 py-2 border border-foreground/20 rounded-lg font-bold hover:bg-muted/50"
          >
            +
          </button>
          <button
            onClick={() => ajustarBPM(10)}
            className="px-4 py-2 border border-foreground/20 rounded-lg font-bold hover:bg-muted/50"
          >
            +10
          </button>
        </div>

        {/* Botón Play/Stop */}
        <button
          onClick={toggle}
          className={`w-full px-6 py-3 rounded-lg font-semibold text-lg ${
            isRunning
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-emerald-500 text-white hover:bg-emerald-600'
          }`}
        >
          {isRunning ? '⏹️ Detener' : '▶️ Iniciar'}
        </button>
      </div>

      {/* Compás */}
      <div className="bg-background p-md border-t border-foreground/10">
        <div className="text-sm font-semibold mb-sm">📏 Compás:</div>
        <div className="grid grid-cols-4 gap-sm">
          {[2, 3, 4, 6].map((num) => (
            <button
              key={num}
              onClick={() => setCompas(num)}
              className={`px-3 py-2 border rounded text-sm ${
                compas === num
                  ? 'bg-purple-500 text-white border-purple-500'
                  : 'border-foreground/20 hover:bg-muted/30'
              }`}
            >
              {num}/4
            </button>
          ))}
        </div>
      </div>

      {/* Presets */}
      <div className="bg-background p-md border-t border-foreground/10">
        <div className="text-sm font-semibold mb-sm">🎼 Tempos Comunes:</div>
        <div className="grid grid-cols-3 gap-sm">
          {presets.map((preset) => (
            <button
              key={preset.nombre}
              onClick={() => setBpm(preset.bpm)}
              className="px-3 py-2 border border-foreground/20 rounded text-xs hover:bg-muted/30"
            >
              <div className="font-semibold">{preset.nombre}</div>
              <div className="text-foreground/60">{preset.bpm}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Tap Tempo */}
      <div className="bg-background p-md border-t border-foreground/10">
        <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90">
          👆 Tap Tempo
        </button>
        <p className="text-xs text-foreground/60 text-center mt-xs">
          Toca el ritmo para establecer el BPM
        </p>
      </div>
    </div>
  );
}
