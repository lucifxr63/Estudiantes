import { useState } from 'react';
import { Container } from '@shared/ui/primitives/Container';

/**
 * Página de Biblioteca de Materiales del Profesor
 * Gestión de archivos PDFs, PPTs, Excels, etc.
 */

export function BibliotecaPage() {
  const [vista, setVista] = useState<'grid' | 'list'>('grid');
  const [carpetaActual, setCarpetaActual] = useState<number | null>(null);

  // Mock data
  const carpetas = [
    { id: 1, nombre: 'React', archivos: 12, tamano: '45 MB' },
    { id: 2, nombre: 'TypeScript', archivos: 8, tamano: '23 MB' },
    { id: 3, nombre: 'Node.js', archivos: 15, tamano: '67 MB' },
  ];

  const archivos = [
    {
      id: 1,
      nombre: 'Guía de Hooks.pdf',
      tipo: 'pdf',
      tamano: '2.4 MB',
      fecha: '2024-01-15',
      vinculado: 'Curso: React Avanzado',
      publico: false,
    },
    {
      id: 2,
      nombre: 'Ejercicios TypeScript.xlsx',
      tipo: 'excel',
      tamano: '1.1 MB',
      fecha: '2024-01-14',
      vinculado: 'No vinculado',
      publico: false,
    },
    {
      id: 3,
      nombre: 'Presentación Componentes.pptx',
      tipo: 'ppt',
      tamano: '5.6 MB',
      fecha: '2024-01-13',
      vinculado: 'Público',
      publico: true,
    },
  ];

  const almacenamiento = {
    usado: 1.2, // GB
    total: 2.0, // GB
  };

  const porcentajeUsado = (almacenamiento.usado / almacenamiento.total) * 100;

  const getIcono = (tipo: string) => {
    switch (tipo) {
      case 'pdf': return '📄';
      case 'excel': return '📊';
      case 'ppt': return '📽️';
      case 'word': return '📝';
      case 'image': return '🖼️';
      default: return '📁';
    }
  };

  return (
    <Container className="py-lg">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-display text-3xl font-bold mb-sm">Biblioteca de Materiales</h1>
          <p className="text-foreground/60">
            Gestiona tus PDFs, presentaciones y archivos de apoyo
          </p>
        </div>
        <button className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600">
          ⬆️ Subir Archivos
        </button>
      </div>

      {/* Almacenamiento */}
      <div className="border border-foreground/10 rounded-lg p-md mb-lg">
        <div className="flex items-center justify-between mb-sm">
          <div>
            <div className="text-sm text-foreground/60">Almacenamiento Usado</div>
            <div className="font-semibold">{almacenamiento.usado} GB de {almacenamiento.total} GB</div>
          </div>
          <a href="#" className="text-sm text-amber-600 hover:underline">
            Ampliar almacenamiento
          </a>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${porcentajeUsado > 90 ? 'bg-red-500' : 'bg-amber-500'}`}
            style={{ width: `${porcentajeUsado}%` }}
          />
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between mb-md">
        <div className="flex gap-sm">
          <button
            onClick={() => setCarpetaActual(null)}
            className={`px-3 py-2 text-sm rounded-md ${
              carpetaActual === null
                ? 'bg-amber-100 text-amber-700 font-semibold'
                : 'border border-foreground/20 hover:bg-muted/30'
            }`}
          >
            📁 Todos los archivos
          </button>
          <select className="px-sm py-sm text-sm border border-foreground/20 rounded-md">
            <option value="">Todas las carpetas</option>
            {carpetas.map(c => (
              <option key={c.id} value={c.id}>{c.nombre}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-sm">
          <button
            onClick={() => setVista('grid')}
            className={`px-3 py-2 text-sm rounded-md ${
              vista === 'grid' ? 'bg-muted' : 'hover:bg-muted/50'
            }`}
          >
            ▦
          </button>
          <button
            onClick={() => setVista('list')}
            className={`px-3 py-2 text-sm rounded-md ${
              vista === 'list' ? 'bg-muted' : 'hover:bg-muted/50'
            }`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Carpetas */}
      {carpetaActual === null && (
        <div className="mb-lg">
          <h2 className="font-semibold mb-md">Carpetas</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
            {carpetas.map((carpeta) => (
              <button
                key={carpeta.id}
                onClick={() => setCarpetaActual(carpeta.id)}
                className="border border-foreground/10 rounded-lg p-md text-left hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-sm">📁</div>
                <div className="font-semibold mb-xs">{carpeta.nombre}</div>
                <div className="text-xs text-foreground/60">
                  {carpeta.archivos} archivos • {carpeta.tamano}
                </div>
              </button>
            ))}
            <button className="border-2 border-dashed border-foreground/20 rounded-lg p-md text-center hover:bg-muted/30">
              <div className="text-4xl mb-sm">➕</div>
              <div className="text-sm font-semibold">Nueva Carpeta</div>
            </button>
          </div>
        </div>
      )}

      {/* Archivos */}
      <div>
        <div className="flex items-center justify-between mb-md">
          <h2 className="font-semibold">
            {carpetaActual ? `Carpeta: ${carpetas.find(c => c.id === carpetaActual)?.nombre}` : 'Todos los Archivos'}
          </h2>
          {carpetaActual && (
            <button
              onClick={() => setCarpetaActual(null)}
              className="text-sm text-amber-600 hover:underline"
            >
              ← Volver
            </button>
          )}
        </div>

        {vista === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
            {archivos.map((archivo) => (
              <div
                key={archivo.id}
                className="border border-foreground/10 rounded-lg p-md hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-sm text-center">{getIcono(archivo.tipo)}</div>
                <div className="font-semibold text-sm mb-xs truncate">{archivo.nombre}</div>
                <div className="text-xs text-foreground/60 mb-sm">
                  {archivo.tamano} • {archivo.fecha}
                </div>
                <div className="flex gap-xs mb-sm">
                  {archivo.publico && (
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded">
                      Público
                    </span>
                  )}
                  {archivo.vinculado !== 'No vinculado' && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded truncate">
                      {archivo.vinculado}
                    </span>
                  )}
                </div>
                <div className="flex gap-xs">
                  <button className="flex-1 px-2 py-1 text-xs border border-foreground/20 rounded hover:bg-muted/30">
                    Ver
                  </button>
                  <button className="flex-1 px-2 py-1 text-xs border border-foreground/20 rounded hover:bg-muted/30">
                    ⋮
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-sm">
            {archivos.map((archivo) => (
              <div
                key={archivo.id}
                className="flex items-center gap-md p-md border border-foreground/10 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-3xl">{getIcono(archivo.tipo)}</div>
                <div className="flex-1">
                  <div className="font-semibold mb-xs">{archivo.nombre}</div>
                  <div className="text-xs text-foreground/60">
                    {archivo.tamano} • {archivo.fecha} • {archivo.vinculado}
                  </div>
                </div>
                {archivo.publico && (
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                    Público
                  </span>
                )}
                <div className="flex gap-sm">
                  <button className="px-3 py-1 text-sm border border-foreground/20 rounded hover:bg-muted/30">
                    👁️ Ver
                  </button>
                  <button className="px-3 py-1 text-sm border border-foreground/20 rounded hover:bg-muted/30">
                    ⬇️ Descargar
                  </button>
                  <button className="px-3 py-1 text-sm border border-foreground/20 rounded hover:bg-muted/30">
                    ⋮
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Área de drop para subir */}
      <div className="mt-lg border-2 border-dashed border-foreground/20 rounded-lg p-xl text-center hover:bg-muted/10 cursor-pointer">
        <div className="text-5xl mb-md">📤</div>
        <div className="font-semibold mb-sm">Arrastra archivos aquí para subir</div>
        <div className="text-sm text-foreground/60 mb-md">
          O haz clic para seleccionar archivos
        </div>
        <div className="text-xs text-foreground/60">
          Soportado: PDF, PPT, PPTX, XLS, XLSX, DOC, DOCX, PNG, JPG (Máx. 50MB por archivo)
        </div>
      </div>
    </Container>
  );
}
