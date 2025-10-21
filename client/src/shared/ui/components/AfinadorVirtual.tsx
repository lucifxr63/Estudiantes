import { useState } from 'react';

/**
 * Afinador Virtual
 * Para clases de guitarra, bajo, ukelele, etc.
 */

type Nota = {
  nombre: string;
  frecuencia: number;
};

type AfinadorVirtualProps = {
  instrumento?: 'guitarra' | 'bajo' | 'ukelele' | 'violin';
};

export function AfinadorVirtual({ instrumento = 'guitarra' }: AfinadorVirtualProps) {
  const [notaActual, setNotaActual] = useState<string | null>(null);
  const [desviacion, setDesviacion] = useState(0); // cents de desviación
  const [isEscuchando, setIsEscuchando] = useState(false);

  // Afinaciones estándar
  const afinaciones = {
    guitarra: [
      { nombre: 'E2', frecuencia: 82.41, cuerda: 6 },
      { nombre: 'A2', frecuencia: 110.00, cuerda: 5 },
      { nombre: 'D3', frecuencia: 146.83, cuerda: 4 },
      { nombre: 'G3', frecuencia: 196.00, cuerda: 3 },
      { nombre: 'B3', frecuencia: 246.94, cuerda: 2 },
      { nombre: 'E4', frecuencia: 329.63, cuerda: 1 },
    ],
    bajo: [
      { nombre: 'E1', frecuencia: 41.20, cuerda: 4 },
      { nombre: 'A1', frecuencia: 55.00, cuerda: 3 },
      { nombre: 'D2', frecuencia: 73.42, cuerda: 2 },
      { nombre: 'G2', frecuencia: 98.00, cuerda: 1 },
    ],
    ukelele: [
      { nombre: 'G4', frecuencia: 392.00, cuerda: 4 },
      { nombre: 'C4', frecuencia: 261.63, cuerda: 3 },
      { nombre: 'E4', frecuencia: 329.63, cuerda: 2 },
      { nombre: 'A4', frecuencia: 440.00, cuerda: 1 },
    ],
    violin: [
      { nombre: 'G3', frecuencia: 196.00, cuerda: 4 },
      { nombre: 'D4', frecuencia: 293.66, cuerda: 3 },
      { nombre: 'A4', frecuencia: 440.00, cuerda: 2 },
      { nombre: 'E5', frecuencia: 659.25, cuerda: 1 },
    ],
  };

  const notasInstrumento = afinaciones[instrumento];

  const toggleEscuchar = () => {
    setIsEscuchando(!isEscuchando);
    if (!isEscuchando) {
      // Simular escucha (en producción usarías Web Audio API)
      setNotaActual('E4');
      setDesviacion(Math.random() * 20 - 10); // -10 a +10 cents
    } else {
      setNotaActual(null);
      setDesviacion(0);
    }
  };

  const reproducirNota = (nota: Nota) => {
    console.log(`🔊 Reproduciendo ${nota.nombre} - ${nota.frecuencia}Hz`);
    // Aquí iría Web Audio API para generar el tono
  };

  const getEstadoAfinacion = (desv: number) => {
    if (Math.abs(desv) < 5) return { texto: '✓ Afinado', color: 'text-emerald-600' };
    if (Math.abs(desv) < 15) return { texto: 'Casi...', color: 'text-yellow-600' };
    if (desv > 0) return { texto: '↑ Muy agudo', color: 'text-red-600' };
    return { texto: '↓ Muy grave', color: 'text-blue-600' };
  };

  const estado = getEstadoAfinacion(desviacion);

  return (
    <div className="border border-foreground/10 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-md text-center">
        <div className="text-sm font-semibold mb-xs opacity-90">Afinador Virtual</div>
        <div className="text-xl font-bold capitalize">{instrumento}</div>
      </div>

      {/* Display de Afinación */}
      {isEscuchando && notaActual ? (
        <div className="bg-muted/30 p-lg text-center">
          <div className="text-6xl font-bold mb-md text-primary">{notaActual}</div>
          
          {/* Indicador Visual */}
          <div className="mb-md">
            <div className="relative h-16 bg-gradient-to-r from-blue-500 via-emerald-500 to-red-500 rounded-lg">
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all"
                style={{
                  left: `${50 + desviacion}%`,
                  transform: 'translateX(-50%)',
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-foreground/60 mt-xs">
              <span>Grave</span>
              <span>Perfecto</span>
              <span>Agudo</span>
            </div>
          </div>

          {/* Estado */}
          <div className={`text-2xl font-bold ${estado.color}`}>
            {estado.texto}
          </div>
          <div className="text-sm text-foreground/60 mt-xs">
            {desviacion > 0 ? '+' : ''}{desviacion.toFixed(1)} cents
          </div>
        </div>
      ) : (
        <div className="bg-muted/30 p-xl text-center">
          <div className="text-6xl mb-md">🎸</div>
          <div className="text-lg font-semibold mb-sm">Listo para afinar</div>
          <p className="text-sm text-foreground/60">
            Toca una cuerda para comenzar
          </p>
        </div>
      )}

      {/* Botón Principal */}
      <div className="p-md bg-background">
        <button
          onClick={toggleEscuchar}
          className={`w-full px-6 py-3 rounded-lg font-semibold text-lg ${
            isEscuchando
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-emerald-500 text-white hover:bg-emerald-600'
          }`}
        >
          {isEscuchando ? '🎤 Escuchando...' : '🎤 Activar Afinador'}
        </button>
      </div>

      {/* Referencia de Notas */}
      <div className="bg-background p-md border-t border-foreground/10">
        <div className="text-sm font-semibold mb-sm">🎼 Afinación Estándar:</div>
        <div className="space-y-xs">
          {notasInstrumento.map((nota) => (
            <button
              key={nota.nombre}
              onClick={() => reproducirNota(nota)}
              className="w-full flex items-center justify-between p-sm border border-foreground/10 rounded hover:bg-muted/30"
            >
              <div className="flex items-center gap-sm">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                  {nota.cuerda}
                </span>
                <span className="font-semibold">{nota.nombre}</span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="text-xs text-foreground/60">{nota.frecuencia.toFixed(2)}Hz</span>
                <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
                  🔊 Reproducir
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selector de Instrumento */}
      <div className="bg-background p-md border-t border-foreground/10">
        <div className="text-sm font-semibold mb-sm">🎹 Cambiar Instrumento:</div>
        <div className="grid grid-cols-4 gap-sm">
          {(['guitarra', 'bajo', 'ukelele', 'violin'] as const).map((inst) => (
            <button
              key={inst}
              className={`px-3 py-2 border rounded text-xs capitalize ${
                instrumento === inst
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'border-foreground/20 hover:bg-muted/30'
              }`}
            >
              {inst}
            </button>
          ))}
        </div>
      </div>

      {/* Nota */}
      <div className="bg-blue-50 border-t border-blue-200 p-sm">
        <div className="text-xs text-blue-800">
          💡 <strong>Tip:</strong> Afina una cuerda a la vez. Si el afinador no detecta, toca más fuerte o acerca el micrófono.
        </div>
      </div>
    </div>
  );
}
