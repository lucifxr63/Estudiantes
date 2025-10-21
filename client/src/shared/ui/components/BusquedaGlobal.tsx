import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Componente de Búsqueda Global
 * Modal de búsqueda con resultados en tiempo real
 */

type Resultado = {
  tipo: 'curso' | 'profesor' | 'clase' | 'articulo';
  id: number;
  titulo: string;
  descripcion: string;
  url: string;
  icono: string;
};

export function BusquedaGlobal() {
  const [abierto, setAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState<Resultado[]>([]);
  const [seleccionado, setSeleccionado] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Mock data de resultados
  const todosLosResultados: Resultado[] = [
    {
      tipo: 'curso',
      id: 1,
      titulo: 'React Avanzado',
      descripcion: 'Curso completo de React con hooks y optimización',
      url: '/cursos/1',
      icono: '📚',
    },
    {
      tipo: 'curso',
      id: 2,
      titulo: 'TypeScript desde Cero',
      descripcion: 'Aprende TypeScript paso a paso',
      url: '/cursos/2',
      icono: '📚',
    },
    {
      tipo: 'profesor',
      id: 1,
      titulo: 'Juan Pérez',
      descripcion: 'Especialista en React y TypeScript',
      url: '/profesores/1',
      icono: '👨‍🏫',
    },
    {
      tipo: 'clase',
      id: 1,
      titulo: 'Introducción a Node.js',
      descripcion: 'Clase particular disponible',
      url: '/clases/1',
      icono: '💬',
    },
  ];

  // Atajo de teclado (Ctrl+K o Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setAbierto(true);
      }
      if (e.key === 'Escape') {
        setAbierto(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus en input cuando se abre
  useEffect(() => {
    if (abierto && inputRef.current) {
      inputRef.current.focus();
    }
  }, [abierto]);

  // Búsqueda en tiempo real
  useEffect(() => {
    if (busqueda.trim()) {
      const filtered = todosLosResultados.filter(
        (r) =>
          r.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
          r.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
      setResultados(filtered);
      setSeleccionado(0);
    } else {
      setResultados([]);
    }
  }, [busqueda]);

  // Navegación con teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSeleccionado((prev) => (prev < resultados.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSeleccionado((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && resultados[seleccionado]) {
      e.preventDefault();
      navigate(resultados[seleccionado].url);
      setAbierto(false);
      setBusqueda('');
    }
  };

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'curso': return 'Curso';
      case 'profesor': return 'Profesor';
      case 'clase': return 'Clase';
      case 'articulo': return 'Artículo';
      default: return tipo;
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'curso': return 'bg-blue-100 text-blue-700';
      case 'profesor': return 'bg-amber-100 text-amber-700';
      case 'clase': return 'bg-emerald-100 text-emerald-700';
      case 'articulo': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (!abierto) {
    return (
      <button
        onClick={() => setAbierto(true)}
        className="flex items-center gap-sm px-sm py-xs border border-foreground/20 rounded-lg hover:bg-muted/30 text-sm"
      >
        <span>🔍</span>
        <span className="hidden md:inline">Buscar</span>
        <span className="hidden md:inline text-xs text-foreground/60 ml-sm">
          Ctrl+K
        </span>
      </button>
    );
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setAbierto(false)}
      />

      {/* Modal de Búsqueda */}
      <div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50">
        <div className="bg-background border border-foreground/10 rounded-lg shadow-2xl overflow-hidden">
          {/* Input */}
          <div className="flex items-center gap-sm p-md border-b border-foreground/10">
            <span className="text-2xl">🔍</span>
            <input
              ref={inputRef}
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Buscar cursos, profesores, clases..."
              className="flex-1 bg-transparent outline-none text-lg"
            />
            <button
              onClick={() => setAbierto(false)}
              className="text-sm text-foreground/60 hover:text-foreground"
            >
              ESC
            </button>
          </div>

          {/* Resultados */}
          <div className="max-h-96 overflow-y-auto">
            {busqueda.trim() === '' ? (
              <div className="p-lg text-center text-foreground/60">
                <div className="text-4xl mb-sm">💡</div>
                <p className="text-sm">Comienza a escribir para buscar...</p>
                <div className="mt-md text-xs">
                  <p>Puedes buscar:</p>
                  <p>• Cursos • Profesores • Clases • Artículos</p>
                </div>
              </div>
            ) : resultados.length === 0 ? (
              <div className="p-lg text-center text-foreground/60">
                <div className="text-4xl mb-sm">🔍</div>
                <p>No se encontraron resultados para "{busqueda}"</p>
              </div>
            ) : (
              <div>
                {resultados.map((resultado, index) => (
                  <Link
                    key={`${resultado.tipo}-${resultado.id}`}
                    to={resultado.url}
                    onClick={() => {
                      setAbierto(false);
                      setBusqueda('');
                    }}
                    className={`flex items-start gap-md p-md border-b border-foreground/10 hover:bg-muted/30 ${
                      index === seleccionado ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="text-3xl flex-shrink-0">{resultado.icono}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-sm mb-xs">
                        <span className="font-semibold truncate">{resultado.titulo}</span>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded ${getTipoColor(resultado.tipo)}`}>
                          {getTipoLabel(resultado.tipo)}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/60 truncate">{resultado.descripcion}</p>
                    </div>
                    {index === seleccionado && (
                      <span className="text-xs text-foreground/60">Enter ↵</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-foreground/10 p-sm bg-muted/10">
            <div className="flex items-center justify-between text-xs text-foreground/60">
              <div className="flex gap-md">
                <span>↑↓ Navegar</span>
                <span>Enter Seleccionar</span>
                <span>ESC Cerrar</span>
              </div>
              <span>{resultados.length} resultados</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
