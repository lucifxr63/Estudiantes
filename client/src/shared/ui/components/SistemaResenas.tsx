import { useState } from 'react';

/**
 * Sistema de Reseñas y Calificaciones
 * Componente reutilizable para mostrar y crear reseñas
 */

type Resena = {
  id: number;
  usuario: string;
  foto: string;
  calificacion: number;
  fecha: string;
  comentario: string;
  util: number;
};

type SistemaResenasProps = {
  tipo: 'curso' | 'profesor';
  id: number;
  calificacionPromedio: number;
  totalResenas: number;
};

export function SistemaResenas({ tipo, id, calificacionPromedio, totalResenas }: SistemaResenasProps) {
  const [mostrandoFormulario, setMostrandoFormulario] = useState(false);
  const [nuevaResena, setNuevaResena] = useState({
    calificacion: 5,
    comentario: '',
  });

  // Mock data
  const resenas: Resena[] = [
    {
      id: 1,
      usuario: 'Ana García',
      foto: '👩',
      calificacion: 5,
      fecha: '2024-01-15',
      comentario: 'Excelente curso! Muy bien explicado y con ejemplos prácticos. Lo recomiendo 100%.',
      util: 12,
    },
    {
      id: 2,
      usuario: 'Carlos López',
      foto: '👨',
      calificacion: 4,
      fecha: '2024-01-10',
      comentario: 'Buen contenido, aunque me gustaría que hubiera más ejercicios prácticos.',
      util: 8,
    },
    {
      id: 3,
      usuario: 'María Fernández',
      foto: '👩‍💼',
      calificacion: 5,
      fecha: '2024-01-08',
      comentario: 'El mejor curso que he tomado. El profesor explica muy claro.',
      util: 15,
    },
  ];

  const distribuciones = [
    { estrellas: 5, cantidad: 45, porcentaje: 67 },
    { estrellas: 4, cantidad: 15, porcentaje: 22 },
    { estrellas: 3, cantidad: 5, porcentaje: 7 },
    { estrellas: 2, cantidad: 2, porcentaje: 3 },
    { estrellas: 1, cantidad: 1, porcentaje: 1 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nueva reseña:', nuevaResena);
    alert('¡Gracias por tu reseña!');
    setMostrandoFormulario(false);
    setNuevaResena({ calificacion: 5, comentario: '' });
  };

  const renderEstrellas = (calificacion: number, tamano: 'sm' | 'md' | 'lg' = 'md') => {
    const tamaños = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-2xl',
    };

    return (
      <div className={`flex gap-xs ${tamaños[tamano]}`}>
        {[1, 2, 3, 4, 5].map((estrella) => (
          <span key={estrella} className={estrella <= calificacion ? 'text-yellow-500' : 'text-gray-300'}>
            ⭐
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-lg">
      {/* Resumen de Calificaciones */}
      <div className="border border-foreground/10 rounded-lg p-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Promedio */}
          <div className="text-center">
            <div className="text-5xl font-bold mb-sm">{calificacionPromedio.toFixed(1)}</div>
            {renderEstrellas(calificacionPromedio, 'lg')}
            <div className="text-sm text-foreground/60 mt-sm">{totalResenas} reseñas</div>
          </div>

          {/* Distribución */}
          <div className="space-y-xs">
            {distribuciones.map((dist) => (
              <div key={dist.estrellas} className="flex items-center gap-sm">
                <span className="text-sm w-12">{dist.estrellas} ⭐</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-yellow-500"
                    style={{ width: `${dist.porcentaje}%` }}
                  />
                </div>
                <span className="text-sm text-foreground/60 w-12 text-right">
                  {dist.cantidad}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botón para agregar reseña */}
      {!mostrandoFormulario && (
        <button
          onClick={() => setMostrandoFormulario(true)}
          className="w-full px-4 py-3 border-2 border-dashed border-foreground/20 rounded-lg hover:bg-muted/30 font-semibold"
        >
          ⭐ Dejar una Reseña
        </button>
      )}

      {/* Formulario de Nueva Reseña */}
      {mostrandoFormulario && (
        <form onSubmit={handleSubmit} className="border border-foreground/10 rounded-lg p-md space-y-md">
          <h3 className="font-semibold">Escribe tu Reseña</h3>
          
          <div>
            <label className="block text-sm font-medium mb-xs">Calificación</label>
            <div className="flex gap-sm">
              {[1, 2, 3, 4, 5].map((estrella) => (
                <button
                  key={estrella}
                  type="button"
                  onClick={() => setNuevaResena({ ...nuevaResena, calificacion: estrella })}
                  className="text-3xl hover:scale-110 transition-transform"
                >
                  {estrella <= nuevaResena.calificacion ? '⭐' : '☆'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-xs">Tu Opinión</label>
            <textarea
              value={nuevaResena.comentario}
              onChange={(e) => setNuevaResena({ ...nuevaResena, comentario: e.target.value })}
              required
              rows={4}
              placeholder="Comparte tu experiencia..."
              className="w-full px-sm py-sm border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex gap-sm">
            <button
              type="button"
              onClick={() => setMostrandoFormulario(false)}
              className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
            >
              Publicar Reseña
            </button>
          </div>
        </form>
      )}

      {/* Lista de Reseñas */}
      <div className="space-y-md">
        <h3 className="font-semibold text-lg">Reseñas de Estudiantes</h3>
        
        {resenas.map((resena) => (
          <div key={resena.id} className="border border-foreground/10 rounded-lg p-md">
            <div className="flex items-start gap-md mb-sm">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                {resena.foto}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-xs">
                  <div>
                    <div className="font-semibold">{resena.usuario}</div>
                    <div className="text-xs text-foreground/60">
                      {new Date(resena.fecha).toLocaleDateString()}
                    </div>
                  </div>
                  {renderEstrellas(resena.calificacion, 'sm')}
                </div>
                <p className="text-sm text-foreground/70 mb-sm">{resena.comentario}</p>
                <div className="flex gap-md text-xs text-foreground/60">
                  <button className="hover:text-foreground">
                    👍 Útil ({resena.util})
                  </button>
                  <button className="hover:text-foreground">
                    Reportar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="w-full px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30">
          Ver Más Reseñas
        </button>
      </div>
    </div>
  );
}
