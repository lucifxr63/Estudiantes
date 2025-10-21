/**
 * Tipos para modalidades de clases (Online/Presencial)
 */

export type Modalidad = 'online' | 'presencial' | 'hibrido';

export type ConfigModalidades = {
  online: boolean;
  presencial: boolean;
  hibrido: boolean;
};

export type UbicacionProfesor = {
  ciudad: string;
  provincia?: string;
  pais: string;
  zona?: string; // "Zona norte", "Centro", etc.
  direccion?: string; // Dirección exacta (opcional, por privacidad)
  latitud?: number;
  longitud?: number;
  radioDesplazamiento?: number; // En kilómetros
  precioPorKm?: number; // Cargo adicional por desplazamiento
};

export type ModalidadClase = {
  tipo: Modalidad;
  descripcion?: string;
  
  // Solo para presencial
  ubicacion?: {
    tipo: 'casa-profesor' | 'casa-alumno' | 'espacio-publico' | 'gym' | 'estudio';
    direccion?: string;
    referencias?: string;
    linkMapa?: string;
    costoAdicional?: number;
  };
  
  // Solo para online
  plataforma?: {
    nombre: 'zoom' | 'meet' | 'teams' | 'skype' | 'otro';
    url?: string;
    requiereInstalacion?: boolean;
  };
};

export type RequisitoEspacio = {
  descripcion: string;
  dimensionesMinimas?: string; // "2x2 metros", "3x3 metros"
  tipoEspacio?: 'interior' | 'exterior' | 'ambos';
  condiciones?: string[]; // ["Piso antideslizante", "Ventilación", "Luz natural"]
};

export type EquipoRequerido = {
  nombre: string;
  obligatorio: boolean;
  descripcion?: string;
  alternativas?: string[];
  precioAproximado?: number;
  dondeConseguir?: string;
};

export type NivelFisico = 'ninguno' | 'bajo' | 'medio' | 'alto' | 'extremo';

export type Restricciones = {
  edad?: { min?: number; max?: number };
  condicionesFisicas?: string[]; // ["No apto para embarazo", "Requiere movilidad completa"]
  contraindicaciones?: string[]; // ["Lesiones de rodilla", "Problemas cardíacos"]
};
