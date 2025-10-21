/**
 * Sistema completo de categorías de AlenjandrIA
 * Organizado por grupos principales con subcategorías
 */

export type CategoriaId = 
  // Tecnología
  | 'programacion' | 'diseno' | 'marketing-digital' | 'data-science'
  // Artes
  | 'musica' | 'artes-visuales' | 'artes-escenicas' | 'escritura'
  | 'produccion-audiovisual'
  // Deportes y Fitness
  | 'fitness' | 'mente-cuerpo' | 'deportes' | 'artes-marciales'
  // Habilidades Prácticas
  | 'cocina' | 'manualidades' | 'jardineria' | 'oficios'
  // Desarrollo Personal
  | 'soft-skills' | 'productividad' | 'finanzas-personales' | 'coaching'
  // Académico
  | 'matematicas' | 'ciencias' | 'idiomas' | 'historia'
  // Hobbies
  | 'juegos' | 'fotografia' | 'mascotas';

export type Categoria = {
  id: CategoriaId;
  nombre: string;
  grupo: string;
  icono: string;
  descripcion: string;
  keywords: string[];
};

export const GRUPOS_CATEGORIAS = {
  tecnologia: {
    nombre: 'Tecnología',
    icono: '💻',
    color: 'blue',
  },
  artes: {
    nombre: 'Artes y Creatividad',
    icono: '🎨',
    color: 'purple',
  },
  deportes: {
    nombre: 'Deportes y Fitness',
    icono: '💪',
    color: 'green',
  },
  practicas: {
    nombre: 'Habilidades Prácticas',
    icono: '🔧',
    color: 'orange',
  },
  desarrollo: {
    nombre: 'Desarrollo Personal',
    icono: '🧠',
    color: 'pink',
  },
  academico: {
    nombre: 'Académico',
    icono: '📚',
    color: 'indigo',
  },
  hobbies: {
    nombre: 'Hobbies',
    icono: '🎮',
    color: 'teal',
  },
} as const;

export const CATEGORIAS: Categoria[] = [
  // ============================================
  // TECNOLOGÍA
  // ============================================
  {
    id: 'programacion',
    nombre: 'Programación',
    grupo: 'tecnologia',
    icono: '💻',
    descripcion: 'Desarrollo web, apps, backend, frontend',
    keywords: ['javascript', 'python', 'react', 'node', 'java', 'código'],
  },
  {
    id: 'diseno',
    nombre: 'Diseño',
    grupo: 'tecnologia',
    icono: '🎨',
    descripcion: 'UX/UI, diseño gráfico, web design',
    keywords: ['figma', 'photoshop', 'illustrator', 'ui', 'ux'],
  },
  {
    id: 'marketing-digital',
    nombre: 'Marketing Digital',
    grupo: 'tecnologia',
    icono: '📊',
    descripcion: 'SEO, redes sociales, email marketing, ads',
    keywords: ['seo', 'google ads', 'facebook', 'instagram', 'contenido'],
  },
  {
    id: 'data-science',
    nombre: 'Data Science',
    grupo: 'tecnologia',
    icono: '📈',
    descripcion: 'Análisis de datos, ML, IA, Python',
    keywords: ['python', 'machine learning', 'ai', 'estadística', 'pandas'],
  },

  // ============================================
  // ARTES Y CREATIVIDAD
  // ============================================
  {
    id: 'musica',
    nombre: 'Música',
    grupo: 'artes',
    icono: '🎵',
    descripcion: 'Instrumentos, canto, producción musical',
    keywords: ['guitarra', 'piano', 'canto', 'batería', 'producción', 'teoría'],
  },
  {
    id: 'artes-visuales',
    nombre: 'Artes Visuales',
    grupo: 'artes',
    icono: '🎨',
    descripcion: 'Pintura, dibujo, escultura, ilustración',
    keywords: ['pintura', 'dibujo', 'acuarela', 'óleo', 'ilustración'],
  },
  {
    id: 'artes-escenicas',
    nombre: 'Artes Escénicas',
    grupo: 'artes',
    icono: '🎭',
    descripcion: 'Teatro, actuación, danza, performance',
    keywords: ['teatro', 'actuación', 'danza', 'ballet', 'comedia'],
  },
  {
    id: 'escritura',
    nombre: 'Escritura Creativa',
    grupo: 'artes',
    icono: '✍️',
    descripcion: 'Narrativa, poesía, guiones, copywriting',
    keywords: ['novela', 'poesía', 'guión', 'escritura', 'storytelling'],
  },
  {
    id: 'produccion-audiovisual',
    nombre: 'Producción Audiovisual',
    grupo: 'artes',
    icono: '🎬',
    descripcion: 'Video, edición, animación, motion graphics',
    keywords: ['video', 'premiere', 'after effects', 'animación', 'cine'],
  },

  // ============================================
  // DEPORTES Y FITNESS
  // ============================================
  {
    id: 'fitness',
    nombre: 'Fitness',
    grupo: 'deportes',
    icono: '🏋️',
    descripcion: 'Calistenia, gym, funcional, crossfit',
    keywords: ['calistenia', 'gym', 'peso', 'músculo', 'fuerza'],
  },
  {
    id: 'mente-cuerpo',
    nombre: 'Mente-Cuerpo',
    grupo: 'deportes',
    icono: '🧘',
    descripcion: 'Yoga, pilates, meditación, tai chi',
    keywords: ['yoga', 'pilates', 'meditación', 'mindfulness', 'relajación'],
  },
  {
    id: 'deportes',
    nombre: 'Deportes',
    grupo: 'deportes',
    icono: '⚽',
    descripcion: 'Fútbol, basketball, natación, running',
    keywords: ['fútbol', 'basketball', 'natación', 'running', 'tenis'],
  },
  {
    id: 'artes-marciales',
    nombre: 'Artes Marciales',
    grupo: 'deportes',
    icono: '🥋',
    descripcion: 'Karate, taekwondo, jiu-jitsu, boxeo',
    keywords: ['karate', 'taekwondo', 'jiu-jitsu', 'boxeo', 'defensa'],
  },

  // ============================================
  // HABILIDADES PRÁCTICAS
  // ============================================
  {
    id: 'cocina',
    nombre: 'Cocina y Gastronomía',
    grupo: 'practicas',
    icono: '👨‍🍳',
    descripcion: 'Cocina, repostería, panadería, barismo',
    keywords: ['cocina', 'recetas', 'repostería', 'panadería', 'chef'],
  },
  {
    id: 'manualidades',
    nombre: 'Manualidades',
    grupo: 'practicas',
    icono: '🧵',
    descripcion: 'Costura, tejido, carpintería, joyería',
    keywords: ['costura', 'tejido', 'carpintería', 'joyería', 'manualidades'],
  },
  {
    id: 'jardineria',
    nombre: 'Jardinería',
    grupo: 'practicas',
    icono: '🌱',
    descripcion: 'Huertos, plantas, jardinería, permacultura',
    keywords: ['plantas', 'huerto', 'jardinería', 'agricultura', 'verde'],
  },
  {
    id: 'oficios',
    nombre: 'Oficios',
    grupo: 'practicas',
    icono: '🔧',
    descripcion: 'Electricidad, plomería, mecánica, reparaciones',
    keywords: ['electricidad', 'plomería', 'mecánica', 'reparación', 'hogar'],
  },

  // ============================================
  // DESARROLLO PERSONAL
  // ============================================
  {
    id: 'soft-skills',
    nombre: 'Soft Skills',
    grupo: 'desarrollo',
    icono: '💼',
    descripcion: 'Liderazgo, comunicación, trabajo en equipo',
    keywords: ['liderazgo', 'comunicación', 'presentación', 'negociación'],
  },
  {
    id: 'productividad',
    nombre: 'Productividad',
    grupo: 'desarrollo',
    icono: '📋',
    descripcion: 'Gestión del tiempo, organización, hábitos',
    keywords: ['productividad', 'tiempo', 'organización', 'hábitos', 'eficiencia'],
  },
  {
    id: 'finanzas-personales',
    nombre: 'Finanzas Personales',
    grupo: 'desarrollo',
    icono: '💰',
    descripcion: 'Inversiones, ahorro, bolsa, criptomonedas',
    keywords: ['inversiones', 'bolsa', 'crypto', 'ahorro', 'finanzas'],
  },
  {
    id: 'coaching',
    nombre: 'Coaching',
    grupo: 'desarrollo',
    icono: '🎯',
    descripcion: 'Life coaching, career coaching, mentoring',
    keywords: ['coaching', 'mentoring', 'desarrollo', 'carrera', 'vida'],
  },

  // ============================================
  // ACADÉMICO
  // ============================================
  {
    id: 'matematicas',
    nombre: 'Matemáticas',
    grupo: 'academico',
    icono: '🔢',
    descripcion: 'Álgebra, cálculo, geometría, estadística',
    keywords: ['matemáticas', 'álgebra', 'cálculo', 'geometría', 'números'],
  },
  {
    id: 'ciencias',
    nombre: 'Ciencias',
    grupo: 'academico',
    icono: '🔬',
    descripcion: 'Física, química, biología',
    keywords: ['física', 'química', 'biología', 'ciencia', 'laboratorio'],
  },
  {
    id: 'idiomas',
    nombre: 'Idiomas',
    grupo: 'academico',
    icono: '🌍',
    descripcion: 'Inglés, español, francés, alemán, chino',
    keywords: ['inglés', 'español', 'francés', 'alemán', 'idioma', 'lenguaje'],
  },
  {
    id: 'historia',
    nombre: 'Historia y Humanidades',
    grupo: 'academico',
    icono: '📜',
    descripcion: 'Historia, filosofía, literatura, geografía',
    keywords: ['historia', 'filosofía', 'literatura', 'geografía', 'humanidades'],
  },

  // ============================================
  // HOBBIES
  // ============================================
  {
    id: 'juegos',
    nombre: 'Juegos',
    grupo: 'hobbies',
    icono: '🎮',
    descripcion: 'Ajedrez, poker, e-sports, juegos de mesa',
    keywords: ['ajedrez', 'poker', 'gaming', 'e-sports', 'juegos'],
  },
  {
    id: 'fotografia',
    nombre: 'Fotografía',
    grupo: 'hobbies',
    icono: '📸',
    descripcion: 'Fotografía digital, edición, composición',
    keywords: ['fotografía', 'cámara', 'foto', 'lightroom', 'edición'],
  },
  {
    id: 'mascotas',
    nombre: 'Cuidado de Mascotas',
    grupo: 'hobbies',
    icono: '🐕',
    descripcion: 'Adiestramiento, grooming, cuidado animal',
    keywords: ['perros', 'gatos', 'mascotas', 'adiestramiento', 'animales'],
  },
];

// Helpers para usar en componentes
export const getCategoriaById = (id: CategoriaId): Categoria | undefined => {
  return CATEGORIAS.find(cat => cat.id === id);
};

export const getCategoriasbyGrupo = (grupo: string): Categoria[] => {
  return CATEGORIAS.filter(cat => cat.grupo === grupo);
};

export const buscarCategorias = (query: string): Categoria[] => {
  const q = query.toLowerCase();
  return CATEGORIAS.filter(cat =>
    cat.nombre.toLowerCase().includes(q) ||
    cat.descripcion.toLowerCase().includes(q) ||
    cat.keywords.some(kw => kw.includes(q))
  );
};
