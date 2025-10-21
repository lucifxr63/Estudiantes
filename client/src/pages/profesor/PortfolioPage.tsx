import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Portfolio Multimedia del Profesor
 * Videos, audios, imágenes de trabajos anteriores
 */

type ItemPortfolio = {
  id: number;
  tipo: 'video' | 'audio' | 'imagen' | 'documento';
  titulo: string;
  descripcion: string;
  url: string;
  thumbnail?: string;
  fecha: string;
  destacado: boolean;
};

export function PortfolioPage() {
  const navigate = useNavigate();

  const [items, setItems] = useState<ItemPortfolio[]>([
    {
      id: 1,
      tipo: 'video',
      titulo: 'Clase demo: Acordes básicos de guitarra',
      descripcion: 'Demostración de cómo enseño los acordes básicos',
      url: 'https://youtube.com/watch?v=...',
      thumbnail: '🎸',
      fecha: '2024-01-15',
      destacado: true,
    },
    {
      id: 2,
      tipo: 'audio',
      titulo: 'Ejercicio de técnica vocal',
      descripcion: 'Ejemplo de ejercicios que hacemos en clase',
      url: 'audio.mp3',
      thumbnail: '🎤',
      fecha: '2024-01-10',
      destacado: false,
    },
    {
      id: 3,
      tipo: 'imagen',
      titulo: 'Estudiantes en clase grupal',
      descripcion: 'Clase de calistenia en el parque',
      url: 'imagen.jpg',
      thumbnail: '💪',
      fecha: '2024-01-08',
      destacado: true,
    },
  ]);

  const [mostrandoFormulario, setMostrandoFormulario] = useState(false);
  const [nuevoItem, setNuevoItem] = useState<Partial<ItemPortfolio>>({
    tipo: 'video',
    titulo: '',
    descripcion: '',
    url: '',
    destacado: false,
  });

  const agregarItem = () => {
    if (nuevoItem.titulo && nuevoItem.url) {
      const item: ItemPortfolio = {
        id: Date.now(),
        tipo: nuevoItem.tipo as 'video' | 'audio' | 'imagen' | 'documento',
        titulo: nuevoItem.titulo,
        descripcion: nuevoItem.descripcion || '',
        url: nuevoItem.url,
        fecha: new Date().toISOString().split('T')[0],
        destacado: nuevoItem.destacado || false,
      };
      setItems([...items, item]);
      setNuevoItem({ tipo: 'video', titulo: '', descripcion: '', url: '', destacado: false });
      setMostrandoFormulario(false);
    }
  };

  const eliminarItem = (id: number) => {
    if (confirm('¿Eliminar este item del portfolio?')) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  const toggleDestacado = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, destacado: !i.destacado } : i));
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'video': return '🎥';
      case 'audio': return '🎵';
      case 'imagen': return '🖼️';
      case 'documento': return '📄';
      default: return '📎';
    }
  };

  const itemsDestacados = items.filter(i => i.destacado);
  const itemsNormales = items.filter(i => !i.destacado);

  return (
    <Container className="py-lg max-w-6xl">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Mi Portfolio</h1>
          <p className="text-foreground/60">
            Muestra tu trabajo y experiencia a estudiantes potenciales
          </p>
        </div>
        <button
          onClick={() => setMostrandoFormulario(true)}
          className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
        >
          + Agregar Item
        </button>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-4 gap-md mb-lg">
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Total Items</div>
          <div className="text-2xl font-bold">{items.length}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Videos</div>
          <div className="text-2xl font-bold">{items.filter(i => i.tipo === 'video').length}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Imágenes</div>
          <div className="text-2xl font-bold">{items.filter(i => i.tipo === 'imagen').length}</div>
        </div>
        <div className="border border-foreground/10 rounded-lg p-md">
          <div className="text-sm text-foreground/60 mb-xs">Destacados</div>
          <div className="text-2xl font-bold text-amber-600">{itemsDestacados.length}</div>
        </div>
      </div>

      {/* Items Destacados */}
      {itemsDestacados.length > 0 && (
        <div className="mb-lg">
          <h2 className="font-semibold text-xl mb-md">⭐ Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {itemsDestacados.map((item) => (
              <div key={item.id} className="border border-amber-300 bg-amber-50 rounded-lg overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-6xl">
                  {item.thumbnail || getTipoIcon(item.tipo)}
                </div>
                <div className="p-md">
                  <div className="flex items-center gap-xs mb-xs">
                    <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded">
                      {item.tipo.toUpperCase()}
                    </span>
                    <span className="text-xs text-foreground/60">{new Date(item.fecha).toLocaleDateString()}</span>
                  </div>
                  <h3 className="font-semibold mb-xs line-clamp-2">{item.titulo}</h3>
                  <p className="text-sm text-foreground/60 line-clamp-2 mb-sm">{item.descripcion}</p>
                  <div className="flex gap-xs">
                    <button
                      onClick={() => toggleDestacado(item.id)}
                      className="flex-1 px-3 py-1.5 text-sm border border-foreground/20 rounded hover:bg-white"
                    >
                      ⭐
                    </button>
                    <button className="flex-1 px-3 py-1.5 text-sm border border-foreground/20 rounded hover:bg-white">
                      ✏️
                    </button>
                    <button
                      onClick={() => eliminarItem(item.id)}
                      className="flex-1 px-3 py-1.5 text-sm border border-red-500 text-red-600 rounded hover:bg-white"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Todos los Items */}
      <div>
        <h2 className="font-semibold text-xl mb-md">📁 Todos los Items</h2>
        
        {itemsNormales.length === 0 && itemsDestacados.length === 0 ? (
          <div className="text-center py-xl border-2 border-dashed border-foreground/20 rounded-lg">
            <div className="text-6xl mb-md">🎨</div>
            <h3 className="font-semibold text-xl mb-sm">Portfolio vacío</h3>
            <p className="text-foreground/60 mb-md">
              Agrega videos, imágenes o audios para mostrar tu experiencia
            </p>
            <button
              onClick={() => setMostrandoFormulario(true)}
              className="px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
            >
              Agregar Primer Item
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
            {itemsNormales.map((item) => (
              <div key={item.id} className="border border-foreground/10 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center text-4xl">
                  {item.thumbnail || getTipoIcon(item.tipo)}
                </div>
                <div className="p-sm">
                  <div className="flex items-center gap-xs mb-xs">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded">
                      {item.tipo}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-xs line-clamp-2">{item.titulo}</h3>
                  <p className="text-xs text-foreground/60 line-clamp-2 mb-sm">{item.descripcion}</p>
                  <div className="flex gap-xs">
                    <button
                      onClick={() => toggleDestacado(item.id)}
                      className="flex-1 px-2 py-1 text-xs border border-foreground/20 rounded hover:bg-muted/30"
                      title="Destacar"
                    >
                      ☆
                    </button>
                    <button
                      onClick={() => eliminarItem(item.id)}
                      className="flex-1 px-2 py-1 text-xs border border-red-500 text-red-600 rounded hover:bg-red-50"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Agregar Item */}
      {mostrandoFormulario && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-lg max-w-2xl w-full mx-md shadow-xl">
            <h2 className="font-semibold text-xl mb-md">Agregar Item al Portfolio</h2>
            
            <div className="space-y-md">
              <div>
                <label className="block text-sm font-medium mb-xs">Tipo</label>
                <select
                  value={nuevoItem.tipo}
                  onChange={(e) => setNuevoItem({ ...nuevoItem, tipo: e.target.value as any })}
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                >
                  <option value="video">🎥 Video</option>
                  <option value="audio">🎵 Audio</option>
                  <option value="imagen">🖼️ Imagen</option>
                  <option value="documento">📄 Documento</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">Título</label>
                <input
                  type="text"
                  value={nuevoItem.titulo}
                  onChange={(e) => setNuevoItem({ ...nuevoItem, titulo: e.target.value })}
                  placeholder="Ej: Clase demo de guitarra acústica"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">Descripción</label>
                <textarea
                  value={nuevoItem.descripcion}
                  onChange={(e) => setNuevoItem({ ...nuevoItem, descripcion: e.target.value })}
                  rows={3}
                  placeholder="Describe este trabajo..."
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-xs">URL</label>
                <input
                  type="text"
                  value={nuevoItem.url}
                  onChange={(e) => setNuevoItem({ ...nuevoItem, url: e.target.value })}
                  placeholder="https://youtube.com/... o sube un archivo"
                  className="w-full px-sm py-sm border border-foreground/20 rounded-lg"
                />
                <button className="mt-sm text-sm text-primary hover:underline">
                  📤 Subir archivo desde mi computadora
                </button>
              </div>

              <label className="flex items-center gap-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={nuevoItem.destacado}
                  onChange={(e) => setNuevoItem({ ...nuevoItem, destacado: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm">⭐ Marcar como destacado (se mostrará primero en tu perfil)</span>
              </label>

              <div className="flex gap-sm justify-end">
                <button
                  onClick={() => setMostrandoFormulario(false)}
                  className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-muted/30"
                >
                  Cancelar
                </button>
                <button
                  onClick={agregarItem}
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ayuda */}
      <div className="mt-lg border border-blue-200 bg-blue-50 rounded-lg p-md">
        <h3 className="font-semibold mb-sm">💡 Tips para un buen portfolio:</h3>
        <ul className="text-sm space-y-xs text-foreground/70">
          <li>• Sube videos cortos (2-5 min) mostrando tu metodología de enseñanza</li>
          <li>• Incluye ejemplos de trabajos de estudiantes (con su permiso)</li>
          <li>• Marca como "destacados" tus mejores 3-5 items</li>
          <li>• Actualiza tu portfolio regularmente con nuevo contenido</li>
        </ul>
      </div>
    </Container>
  );
}
