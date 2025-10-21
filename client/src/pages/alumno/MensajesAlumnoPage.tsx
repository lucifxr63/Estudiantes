import { useState } from 'react';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Mensajes del Alumno
 * Sistema de mensajería con profesores
 */

export function MensajesAlumnoPage() {
  const [selectedChat, setSelectedChat] = useState(1);

  return (
    <div className="h-[calc(100vh-57px)] flex">
      {/* Lista de conversaciones */}
      <div className="w-80 border-r border-foreground/10 overflow-y-auto">
        <div className="p-md border-b border-foreground/10">
          <input
            type="search"
            placeholder="Buscar conversaciones..."
            className="w-full px-sm py-sm border border-foreground/20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              onClick={() => setSelectedChat(i)}
              className={`w-full p-md text-left border-b border-foreground/10 hover:bg-muted/30 transition-colors ${
                selectedChat === i ? 'bg-emerald-50' : ''
              }`}
            >
              <div className="flex items-start gap-sm">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
                  P{i}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-xs">
                    <div className="font-semibold text-sm truncate">Prof. Juan Pérez</div>
                    <div className="text-xs text-foreground/60">10:30</div>
                  </div>
                  <div className="text-sm text-foreground/60 truncate">
                    Gracias por tu pregunta, te respondo...
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Área de chat */}
      <div className="flex-1 flex flex-col">
        {/* Header del chat */}
        <div className="p-md border-b border-foreground/10 flex items-center justify-between">
          <div className="flex items-center gap-sm">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
              P1
            </div>
            <div>
              <div className="font-semibold">Prof. Juan Pérez</div>
              <div className="text-xs text-foreground/60">En línea</div>
            </div>
          </div>
          <button className="text-2xl">⋮</button>
        </div>

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto p-md space-y-md">
          {/* Mensaje recibido */}
          <div className="flex gap-sm">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              P
            </div>
            <div className="flex-1">
              <div className="bg-muted/30 rounded-lg p-sm max-w-md">
                <p className="text-sm">
                  Hola! Gracias por tu pregunta sobre React. Te recomiendo empezar por...
                </p>
              </div>
              <div className="text-xs text-foreground/60 mt-xs">10:25</div>
            </div>
          </div>

          {/* Mensaje enviado */}
          <div className="flex gap-sm justify-end">
            <div className="flex-1 flex flex-col items-end">
              <div className="bg-emerald-500 text-white rounded-lg p-sm max-w-md">
                <p className="text-sm">
                  Perfecto, muchas gracias por la información!
                </p>
              </div>
              <div className="text-xs text-foreground/60 mt-xs">10:30</div>
            </div>
          </div>
        </div>

        {/* Input de mensaje */}
        <div className="p-md border-t border-foreground/10">
          <form className="flex gap-sm">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="flex-1 px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="px-6 py-sm bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
